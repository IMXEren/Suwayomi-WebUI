/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import type { GetArchiveApprovalBacklogQuery } from '@/lib/graphql/generated/graphql.ts';
import { LoadingPlaceholder } from '@/base/components/feedback/LoadingPlaceholder.tsx';
import { EmptyViewAbsoluteCentered } from '@/base/components/feedback/EmptyViewAbsoluteCentered.tsx';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { makeToast } from '@/base/utils/Toast.ts';
import { ArchiveConstants } from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';

type ApprovalRow = GetArchiveApprovalBacklogQuery['approvalBacklog']['nodes'][number];

/** True when every id of the first list is already part of the second one. */
const isContainedIn = (ids: number[], otherIds: number[]): boolean => ids.every((id) => otherIds.includes(id));

/** Runs the shared confirmation dialog and reports whether the action was confirmed instead of dismissed. */
const askForConfirmation = async (options: {
    title: string;
    message: string;
    confirmTitle: string;
    id: string;
}): Promise<boolean> => {
    try {
        await Confirmation.show(
            {
                title: options.title,
                message: options.message,
                actions: { confirm: { title: options.confirmTitle } },
            },
            { id: options.id },
        );
        return true;
    } catch {
        return false;
    }
};

/**
 * The pre-acquisition approval queue.
 *
 * Approving grants permission to acquire and archive a candidate; it does not accept content, so the
 * post-archive review actions are deliberately not offered here.
 */
export const ArchiveApprovalQueue: React.FC = () => {
    const { t } = useLingui();

    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    // Rows read beyond the first server page, plus the cursor they were read up to. The server's own
    // `hasNextPage` of the last appended page is kept next to it: a cursor only says where reading
    // stopped, never that another page exists.
    const [appendedRows, setAppendedRows] = useState<ApprovalRow[]>([]);
    const [rowsCursor, setRowsCursor] = useState<string | null>(null);
    const [appendedRowsHaveNext, setAppendedRowsHaveNext] = useState(false);
    const [isWorking, setIsWorking] = useState(false);

    const { data, loading, error, refetch } = requestManager.useGetArchiveApprovalBacklog(
        { first: ArchiveConstants.APPROVAL_PAGE_SIZE },
        { fetchPolicy: 'cache-and-network' },
    );

    const firstPageRows = data?.approvalBacklog.nodes ?? [];
    const rowsPageInfo = data?.approvalBacklog.pageInfo;
    const rows = useMemo(() => {
        const seen = new Set<number>();
        return [...firstPageRows, ...appendedRows].filter((row) => {
            if (seen.has(row.id)) {
                return false;
            }
            seen.add(row.id);
            return true;
        });
    }, [firstPageRows, appendedRows]);
    const totalCount = data?.approvalBacklog.totalCount ?? 0;
    const rowsHaveAppendedPages = rowsCursor !== null;
    /** Whether the server said there is another page after the rows on screen. */
    const rowsHasNextPage = rowsHaveAppendedPages ? appendedRowsHaveNext : !!rowsPageInfo?.hasNextPage;

    /** Forgets every appended page, so the next read of the queue starts at its first server page. */
    const resetAppendedPages = useCallback(() => {
        setAppendedRows([]);
        setRowsCursor(null);
        setAppendedRowsHaveNext(false);
    }, []);

    /** Drops the locally appended pages so the first page is the only source of truth again. */
    const reload = useCallback(async () => {
        resetAppendedPages();
        setSelectedIds([]);
        await refetch().catch((e) => makeToast(t`Could not load the approval queue`, 'error', getErrorMessage(e)));
    }, [resetAppendedPages, refetch, t]);

    const loadMore = useCallback(async () => {
        setIsWorking(true);
        try {
            const after = rowsHaveAppendedPages ? rowsCursor : rowsPageInfo?.endCursor;
            const response = await requestManager.getArchiveApprovalBacklogPage({
                first: ArchiveConstants.APPROVAL_PAGE_SIZE,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more candidates`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.approvalBacklog;
            const endCursor = page?.pageInfo.endCursor;
            // an empty page, a missing cursor, or a cursor that did not move means there is nothing
            // further to read: the rows already on screen are kept and the action stops being offered
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedRowsHaveNext(false);
                return;
            }

            setAppendedRows((current) => [...current, ...page.nodes]);
            setRowsCursor(endCursor);
            setAppendedRowsHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more candidates`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [rowsHaveAppendedPages, rowsCursor, rowsPageInfo?.endCursor, t]);

    const runRevisionAction = useCallback(
        async (action: () => Promise<{ error?: unknown }>, successMessage: string) => {
            setIsWorking(true);
            try {
                const response = await action();
                if (response.error) {
                    makeToast(t`Could not update the candidates`, 'error', getErrorMessage(response.error));
                    return;
                }

                makeToast(successMessage, 'success');
                await reload();
            } catch (e) {
                makeToast(t`Could not update the candidates`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [reload, t],
    );

    const approve = (ids: number[]) =>
        runRevisionAction(
            () => requestManager.approveChapterRevisions(ids).response,
            t`Approved ${ids.length} candidates`,
        );

    const reject = (ids: number[]) =>
        runRevisionAction(
            () => requestManager.rejectChapterRevisions(ids).response,
            t`Rejected ${ids.length} candidates`,
        );

    const approveSelected = (ids: number[]) => {
        void approve(ids);
    };

    const rejectSelected = async (ids: number[]) => {
        const confirmed = await askForConfirmation({
            title: t`Reject the selected candidates?`,
            message: t`${ids.length} candidates will be rejected and will not be archived.`,
            confirmTitle: t`Reject`,
            id: 'archive-approval-reject-selected',
        });
        if (!confirmed) {
            return;
        }

        await reject(ids);
    };

    const rejectRow = async (row: ApprovalRow) => {
        const confirmed = await askForConfirmation({
            title: t`Reject this candidate?`,
            message: `${row.manga?.title ?? t`Unknown series`} — ${row.name}`,
            confirmTitle: t`Reject`,
            id: `archive-approval-reject-${row.id}`,
        });
        if (!confirmed) {
            return;
        }

        await reject([row.id]);
    };

    /**
     * Drains the approval queue by repeatedly approving the first bounded page.
     *
     * Each round re-reads the first page, because approved candidates leave the queue: the loop stops
     * as soon as the page is empty, the server stopped changing the queue, or the number of rounds
     * reached its guard. Reaching that guard is reported as an incomplete run, never as success,
     * because the queue may still hold candidates this run never approved.
     */
    const approveAllPending = useCallback(async () => {
        const confirmed = await askForConfirmation({
            title: t`Approve every pending candidate?`,
            message: t`Every candidate waiting for approval will be acquired and archived.`,
            confirmTitle: t`Approve all`,
            id: 'archive-approval-approve-all',
        });
        if (!confirmed) {
            return;
        }

        setIsWorking(true);
        let approvedTotal = 0;
        let rounds = 0;
        let stalled = false;
        let failed = false;
        let reachedBatchLimit = false;

        try {
            let previousIds: number[] = [];
            for (;;) {
                // the queue has to be re-read after every batch it approved, so the rounds are sequential by design
                // eslint-disable-next-line no-await-in-loop
                const page = await refetch();
                const batch = page.data?.approvalBacklog.nodes ?? [];
                const batchIds = batch.map((row) => row.id);

                if (!batchIds.length) {
                    break;
                }

                if (isContainedIn(batchIds, previousIds)) {
                    stalled = true;
                    break;
                }

                previousIds = batchIds;
                // sequential for the same reason as the re-read above
                // eslint-disable-next-line no-await-in-loop
                const response = await requestManager.approveChapterRevisions(batchIds).response;
                if (response.error) {
                    makeToast(t`Could not approve the pending candidates`, 'error', getErrorMessage(response.error));
                    failed = true;
                    break;
                }

                const approved = response.data?.approveChapterRevisions.revisions.length ?? 0;
                approvedTotal += approved;
                rounds += 1;

                if (approved === 0) {
                    stalled = true;
                    break;
                }

                if (rounds >= ArchiveConstants.APPROVAL_MAX_BATCHES) {
                    // The cap only stops the loop; it says nothing about the candidates that are still
                    // pending, so this outcome is reported as incomplete instead of as a success.
                    reachedBatchLimit = true;
                    break;
                }
            }

            if (reachedBatchLimit) {
                makeToast(
                    t`Approved ${approvedTotal} candidates, then stopped at the batch limit; candidates may still be pending`,
                    'warning',
                );
            } else if (approvedTotal > 0) {
                makeToast(t`Approved ${approvedTotal} pending candidates`, stalled || failed ? 'warning' : 'success');
            } else if (!failed) {
                makeToast(t`There was nothing left to approve`, 'info');
            }
        } catch (e) {
            makeToast(t`Could not approve the pending candidates`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
            await reload();
        }
    }, [refetch, reload, t]);

    if (error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the approval queue`}
                messageExtra={getErrorMessage(error)}
                retry={() => reload()}
            />
        );
    }

    if (loading && !data) {
        return <LoadingPlaceholder usePadding />;
    }

    const areAllLoadedSelected = rows.length > 0 && rows.every((row) => selectedIds.includes(row.id));

    return (
        <Stack sx={{ gap: 2 }}>
            <Paper variant="outlined" sx={{ p: 1 }}>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ mr: 'auto' }}>
                        {t`${totalCount} candidates awaiting approval`}
                    </Typography>
                    <Button
                        variant="outlined"
                        disabled={isWorking}
                        onClick={() => setSelectedIds(areAllLoadedSelected ? [] : rows.map((row) => row.id))}
                    >
                        {areAllLoadedSelected ? t`Clear selection` : t`Select loaded`}
                    </Button>
                    <Button
                        variant="contained"
                        disabled={isWorking || !selectedIds.length}
                        onClick={() => approveSelected(selectedIds)}
                    >{t`Approve selected`}</Button>
                    <Button
                        variant="outlined"
                        disabled={isWorking || !selectedIds.length}
                        onClick={() => void rejectSelected(selectedIds)}
                    >{t`Reject selected`}</Button>
                    <Button
                        variant="contained"
                        disabled={isWorking}
                        onClick={() => void approveAllPending()}
                    >{t`Approve all pending`}</Button>
                </Stack>
            </Paper>

            {!rows.length ? (
                <EmptyViewAbsoluteCentered message={t`There are no candidates awaiting approval`} />
            ) : (
                <Paper variant="outlined">
                    <List disablePadding>
                        {rows.map((row) => (
                            <ListItem key={row.id} divider sx={{ alignItems: 'flex-start', gap: 1 }}>
                                <Checkbox
                                    checked={selectedIds.includes(row.id)}
                                    onChange={(event) =>
                                        setSelectedIds((current) =>
                                            event.target.checked
                                                ? [...current, row.id]
                                                : current.filter((id) => id !== row.id),
                                        )
                                    }
                                    slotProps={{ input: { 'aria-label': t`Select candidate ${row.id}` } }}
                                />
                                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                    <Typography variant="body1" noWrap>
                                        {row.manga?.title ?? t`Unknown series`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {`${t`Chapter`} ${row.chapterNumber} — ${row.name}`}
                                        {row.scanlator ? ` (${row.scanlator})` : ''}
                                    </Typography>
                                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                        <Chip size="small" label={ArchiveStateUtil.prettify(row.discoveryReason)} />
                                        <Chip
                                            size="small"
                                            label={ArchiveStateUtil.prettify(row.signalConfidence)}
                                            variant="outlined"
                                        />
                                        <Chip
                                            size="small"
                                            label={ArchiveStateUtil.prettify(row.acquisitionState)}
                                            variant="outlined"
                                        />
                                        <Chip
                                            size="small"
                                            label={ArchiveStateUtil.prettify(row.archiveState)}
                                            variant="outlined"
                                        />
                                    </Stack>
                                    <Typography variant="caption" color="text.secondary">
                                        {t`Discovered ${ArchiveStateUtil.formatTimestamp(row.discoveredAt)}`}
                                        {row.changedMetadataFields.length
                                            ? ` — ${t`Changed: ${row.changedMetadataFields.map((field) => ArchiveStateUtil.prettify(field)).join(', ')}`}`
                                            : ''}
                                    </Typography>
                                    {row.lastError && (
                                        <Typography variant="caption" color="error" component="div">
                                            {row.lastError}
                                        </Typography>
                                    )}
                                </Box>
                                <Stack sx={{ flexDirection: 'column', gap: 1, flexShrink: 0 }}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        disabled={isWorking}
                                        onClick={() => approveSelected([row.id])}
                                    >{t`Approve`}</Button>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="error"
                                        disabled={isWorking}
                                        onClick={() => void rejectRow(row)}
                                    >{t`Reject`}</Button>
                                </Stack>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}

            <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 1 }}>
                {rowsHasNextPage && (
                    <Button variant="outlined" disabled={isWorking} onClick={() => void loadMore()}>
                        {t`Load more`}
                    </Button>
                )}
                <Button variant="text" disabled={isWorking} onClick={() => void reload()}>{t`Refresh`}</Button>
            </Stack>
        </Stack>
    );
};
