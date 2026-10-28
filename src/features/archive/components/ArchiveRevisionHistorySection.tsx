/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useMemo, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { makeToast } from '@/base/utils/Toast.ts';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import type {
    GetArchiveRevisionHistoryQuery,
    GetArchiveRevisionRollbacksQuery,
} from '@/lib/graphql/generated/graphql.ts';
import { ChapterArchiveState } from '@/lib/graphql/generated/graphql-base.types.ts';
import {
    ArchiveConstants,
    REVISION_INTEGRITY_FINDING_STATES,
    REVISION_PAYLOAD_GONE_RETENTION_STATES,
    REVISION_ROLLBACK_TARGET_DISPOSITIONS,
} from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';

type RevisionRow = GetArchiveRevisionHistoryQuery['chapterRevisionHistory']['nodes'][number];
type RollbackRow = GetArchiveRevisionRollbacksQuery['chapterRevisionRollbacks']['nodes'][number];

interface IProps {
    /** The identity whose revisions are shown; a chapter's revisions are read by it, not by a revision id. */
    chapterKey: string;
    /** Called after a rollback committed, so the queue around this section re-reads the server. */
    onRolledBack: () => Promise<unknown>;
}

/**
 * Whether the server would accept a rollback to this revision.
 *
 * This mirrors the server's own guard so the action is only offered where it can succeed: an accepted
 * or superseded revision, still durably archived, whose payload was neither pruned nor found missing or
 * corrupt by an audit. The server stays authoritative - a refused rollback is reported from its answer.
 */
const isRollbackTarget = (revision: RevisionRow): boolean =>
    !revision.isActiveRevision &&
    REVISION_ROLLBACK_TARGET_DISPOSITIONS.includes(
        revision.disposition as (typeof REVISION_ROLLBACK_TARGET_DISPOSITIONS)[number],
    ) &&
    revision.archiveState === ChapterArchiveState.RemoteConfirmed &&
    revision.prunedAt == null &&
    !ArchiveStateUtil.isActive(revision.retentionState, REVISION_PAYLOAD_GONE_RETENTION_STATES) &&
    !ArchiveStateUtil.isActive(revision.integrityState, REVISION_INTEGRITY_FINDING_STATES);

const RevisionRowSummary = ({ revision }: { revision: RevisionRow }) => {
    const { t } = useLingui();

    return (
        <Stack sx={{ gap: 1, flexGrow: 1, minWidth: 0 }}>
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                <Typography variant="body2">{`${t`Chapter`} ${revision.chapterNumber} — ${revision.name}`}</Typography>
                {revision.isActiveRevision && <Chip size="small" color="success" label={t`Served now`} />}
                <Chip size="small" variant="outlined" label={ArchiveStateUtil.prettify(revision.disposition)} />
                {revision.pageCount != null && (
                    <Chip size="small" variant="outlined" label={t`${revision.pageCount} pages`} />
                )}
            </Stack>
            {revision.scanlator && (
                <Typography variant="caption" color="text.secondary">
                    {revision.scanlator}
                </Typography>
            )}
            <Typography variant="caption" color="text.secondary">
                {[
                    `${t`Archive`} ${ArchiveStateUtil.prettify(revision.archiveState)}`,
                    `${t`Publication`} ${ArchiveStateUtil.prettify(revision.publicationState)}`,
                    `${t`Retention`} ${ArchiveStateUtil.prettify(revision.retentionState)}`,
                ].join(' · ')}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {[
                    `${t`Integrity`} ${ArchiveStateUtil.prettify(revision.integrityState)}`,
                    `${t`last checked`} ${ArchiveStateUtil.formatTimestamp(revision.integrityLastAuditedAt)}`,
                ].join(' · ')}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {[
                    `${t`Discovered`} ${ArchiveStateUtil.formatTimestamp(revision.discoveredAt)}`,
                    revision.activatedAt != null
                        ? `${t`Activated`} ${ArchiveStateUtil.formatTimestamp(revision.activatedAt)}`
                        : null,
                    revision.publishedAt != null
                        ? `${t`Published`} ${ArchiveStateUtil.formatTimestamp(revision.publishedAt)}`
                        : null,
                    revision.prunedAt != null
                        ? `${t`Pruned`} ${ArchiveStateUtil.formatTimestamp(revision.prunedAt)}`
                        : null,
                ]
                    .filter(Boolean)
                    .join(' · ')}
            </Typography>
        </Stack>
    );
};

/**
 * One chapter's revision history, and the actions that are recorded per revision.
 *
 * The list is the authority on what a chapter has been served: the active revision, the ones it replaced
 * and the candidates that were rejected. Rolling back is only offered where the archive still holds the
 * bytes the action needs, and it is never assumed - the mutation's own answer and a re-read of the list
 * are what the section shows afterwards.
 *
 * A download is an ordinary same-origin navigation to the address the server handed out, which is why it
 * is an anchor and not a fetch: the bytes are behind the same authentication as the rest of the API, and
 * a signed remote address is never fetched, shown or stored by the UI. A revision without an address
 * either has no durable payload left or is not deliverable, and the section says so instead of guessing.
 */
export const ArchiveRevisionHistorySection = ({ chapterKey, onRolledBack }: IProps) => {
    const { t } = useLingui();

    const [appendedRevisions, setAppendedRevisions] = useState<RevisionRow[]>([]);
    const [revisionsCursor, setRevisionsCursor] = useState<string | null>(null);
    const [appendedRevisionsHaveNext, setAppendedRevisionsHaveNext] = useState(false);
    const [isWorking, setIsWorking] = useState(false);

    const historyRequest = requestManager.useGetArchiveRevisionHistory(
        { chapterKey, first: ArchiveConstants.REVISION_HISTORY_PAGE_SIZE },
        { fetchPolicy: 'cache-and-network' },
    );

    const rollbacksRequest = requestManager.useGetArchiveRevisionRollbacks(
        { chapterKey, first: ArchiveConstants.REVISION_ROLLBACK_PAGE_SIZE },
        { fetchPolicy: 'cache-and-network' },
    );

    const firstRevisions = historyRequest.data?.chapterRevisionHistory.nodes ?? [];
    const revisionsPageInfo = historyRequest.data?.chapterRevisionHistory.pageInfo;
    const revisions = useMemo(() => {
        const seen = new Set<number>();
        return [...firstRevisions, ...appendedRevisions].filter((revision) => {
            if (seen.has(revision.id)) {
                return false;
            }
            seen.add(revision.id);
            return true;
        });
    }, [firstRevisions, appendedRevisions]);

    const revisionsHaveAppendedPages = revisionsCursor !== null;
    /** Whether the server said there is another page after the revisions on screen. */
    const revisionsHasNextPage = revisionsHaveAppendedPages
        ? appendedRevisionsHaveNext
        : !!revisionsPageInfo?.hasNextPage;

    const rollbacks = rollbacksRequest.data?.chapterRevisionRollbacks.nodes ?? [];

    /** Forgets the appended page, so the next read of the history starts at its first server page. */
    const resetAppendedRevisions = useCallback(() => {
        setAppendedRevisions([]);
        setRevisionsCursor(null);
        setAppendedRevisionsHaveNext(false);
    }, []);

    const reloadHistory = useCallback(async () => {
        resetAppendedRevisions();
        await Promise.all([
            historyRequest.refetch().catch(() => undefined),
            rollbacksRequest.refetch().catch(() => undefined),
        ]);
    }, [resetAppendedRevisions, historyRequest.refetch, rollbacksRequest.refetch]);

    const loadMoreRevisions = useCallback(async () => {
        setIsWorking(true);
        try {
            const after = revisionsHaveAppendedPages ? revisionsCursor : revisionsPageInfo?.endCursor;
            const response = await requestManager.getArchiveRevisionHistoryPage({
                chapterKey,
                first: ArchiveConstants.REVISION_HISTORY_PAGE_SIZE,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more revisions`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.chapterRevisionHistory;
            const endCursor = page?.pageInfo.endCursor;
            // an empty page, a missing cursor, or a cursor that did not move is the end of the history:
            // the revisions already on screen are kept and the action stops being offered
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedRevisionsHaveNext(false);
                return;
            }

            setAppendedRevisions((current) => [...current, ...page.nodes]);
            setRevisionsCursor(endCursor);
            setAppendedRevisionsHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more revisions`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [chapterKey, revisionsHaveAppendedPages, revisionsCursor, revisionsPageInfo?.endCursor, t]);

    const rollback = useCallback(
        async (revision: RevisionRow) => {
            try {
                await Confirmation.show(
                    {
                        title: t`Make this revision the served one again?`,
                        message: t`The revision serving this chapter now becomes historical and is kept according to the retention settings. The archived content of this revision is published again.`,
                        actions: { confirm: { title: t`Roll back` } },
                    },
                    { id: 'archive-revision-rollback' },
                );
            } catch {
                return;
            }

            setIsWorking(true);
            try {
                const response = await requestManager.rollbackChapterRevision(revision.id).response;

                if (response.error) {
                    makeToast(t`Could not roll back`, 'error', getErrorMessage(response.error));
                    return;
                }

                const payload = response.data?.rollbackChapterRevision;
                if (payload?.error) {
                    makeToast(t`Could not roll back: ${payload.error}`, 'error');
                    return;
                }

                makeToast(t`Rolled back to this revision`, 'success');
                // the rollback changes what the whole queue shows, so both this history and the queue
                // around it are re-read instead of patched from the mutation's own answer
                await reloadHistory();
                await onRolledBack();
            } catch (e) {
                makeToast(t`Could not roll back`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [reloadHistory, onRolledBack, t],
    );

    return (
        <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack sx={{ gap: 2 }}>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ mr: 'auto' }}>{t`Revision history`}</Typography>
                    <Button variant="outlined" disabled={isWorking} onClick={() => void reloadHistory()}>
                        {t`Refresh history`}
                    </Button>
                </Stack>

                {historyRequest.error && (
                    <Alert severity="warning">
                        {t`The revision history could not be read: ${getErrorMessage(historyRequest.error)}`}
                    </Alert>
                )}

                {!revisions.length ? (
                    <Typography variant="body2" color="text.secondary">
                        {t`This chapter has no recorded revisions.`}
                    </Typography>
                ) : (
                    <List disablePadding>
                        {revisions.map((revision) => (
                            <ListItem
                                key={revision.id}
                                divider
                                sx={{ alignItems: 'flex-start', px: 0, gap: 2, flexWrap: 'wrap' }}
                            >
                                <RevisionRowSummary revision={revision} />
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                                    {revision.downloadUrl != null ? (
                                        /* an ordinary same-origin navigation: the address is a route on this
                                           server, the request carries the session like any other API call, and
                                           the redirect it may answer with is followed by the browser */
                                        <Button
                                            component="a"
                                            href={requestManager.getValidImgUrlFor(revision.downloadUrl)}
                                            target="_blank"
                                            rel="noreferrer"
                                            variant="outlined"
                                            size="small"
                                        >{t`Download CBZ`}</Button>
                                    ) : (
                                        <Typography variant="caption" color="text.secondary">
                                            {t`No archive file is available for this revision.`}
                                        </Typography>
                                    )}
                                    {isRollbackTarget(revision) && (
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            disabled={isWorking}
                                            onClick={() => void rollback(revision)}
                                        >{t`Roll back to this`}</Button>
                                    )}
                                </Stack>
                            </ListItem>
                        ))}
                    </List>
                )}

                <Typography variant="caption" color="text.secondary">
                    {t`A revision is downloadable while the archive still holds its CBZ. A revision that was pruned, that an integrity check reported as missing or corrupt, or that was never durably archived has no file to serve.`}
                </Typography>

                {revisionsHasNextPage && (
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button variant="outlined" disabled={isWorking} onClick={() => void loadMoreRevisions()}>
                            {t`Load more revisions`}
                        </Button>
                    </Stack>
                )}

                <Box>
                    <Typography variant="subtitle2">{t`Recorded rollbacks`}</Typography>
                    {rollbacksRequest.error && (
                        <Alert severity="warning">
                            {t`The rollbacks could not be read: ${getErrorMessage(rollbacksRequest.error)}`}
                        </Alert>
                    )}
                    {!rollbacks.length ? (
                        <Typography variant="body2" color="text.secondary">
                            {t`This chapter has never been rolled back.`}
                        </Typography>
                    ) : (
                        <List disablePadding>
                            {rollbacks.map((rollbackRow: RollbackRow) => (
                                <ListItem key={rollbackRow.id} divider sx={{ px: 0 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        {t`${ArchiveStateUtil.formatTimestamp(rollbackRow.rolledBackAt)}: revision ${rollbackRow.toRevisionId ?? '-'} replaced ${rollbackRow.fromRevisionId ?? '-'}`}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            </Stack>
        </Paper>
    );
};
