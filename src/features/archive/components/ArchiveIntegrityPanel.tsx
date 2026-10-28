/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { EmptyViewAbsoluteCentered } from '@/base/components/feedback/EmptyViewAbsoluteCentered.tsx';
import { LoadingPlaceholder } from '@/base/components/feedback/LoadingPlaceholder.tsx';
import { makeToast } from '@/base/utils/Toast.ts';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import type { GetArchiveIntegrityItemsQuery, GetArchiveIntegrityStateQuery } from '@/lib/graphql/generated/graphql.ts';
import {
    ChapterIntegrityAuditItemState,
    ChapterIntegrityAuditKind,
    ChapterIntegrityAuditSessionState,
} from '@/lib/graphql/generated/graphql-base.types.ts';
import {
    ACTIONABLE_INTEGRITY_SESSION_STATES,
    ArchiveConstants,
    RUNNING_INTEGRITY_SESSION_STATES,
} from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';

type IntegritySession = NonNullable<GetArchiveIntegrityStateQuery['chapterIntegrityAuditActiveSession']>;
type IntegrityItem = GetArchiveIntegrityItemsQuery['chapterIntegrityAuditItems']['nodes'][number];

/**
 * How a checked revision is coloured: a corrupt payload is a defect, a missing one is a warning.
 *
 * Every other outcome - verified, failed, skipped, still pending - says nothing about the archive, so it
 * is drawn with the default colour instead of being reported as damage.
 */
const integrityFindingColor = (state: ChapterIntegrityAuditItemState): 'error' | 'warning' | 'default' => {
    if (state === ChapterIntegrityAuditItemState.Corrupt) {
        return 'error';
    }

    return state === ChapterIntegrityAuditItemState.Missing ? 'warning' : 'default';
};

/**
 * The archived-content integrity tab.
 *
 * An audit asks the configured remote directly whether each archived revision is still there and still
 * what the archive recorded. It is the only thing in the system that can turn "the write was confirmed"
 * into "the payload is still intact", which is why its findings are reported per revision instead of as
 * one library-wide verdict.
 *
 * Nothing here selects or shows a stored path, a digest, a remote spec or a credential: an integrity
 * reason is allowed to quote the digests and object names of the check, so the panel reports the typed
 * outcome of an item and never its raw reason text.
 *
 * Only a running audit is polled. A paused or finished one changes when an operator acts on it, and every
 * action refreshes the panel itself, so polling it would request an unchanging answer forever.
 */
export const ArchiveIntegrityPanel: React.FC = () => {
    const { t } = useLingui();

    const [appendedItems, setAppendedItems] = useState<IntegrityItem[]>([]);
    const [itemsCursor, setItemsCursor] = useState<string | null>(null);
    const [appendedItemsHaveNext, setAppendedItemsHaveNext] = useState(false);
    const [itemState, setItemState] = useState<ChapterIntegrityAuditItemState | ''>('');
    const [appendedHistory, setAppendedHistory] = useState<IntegritySession[]>([]);
    const [historyCursor, setHistoryCursor] = useState<string | null>(null);
    const [appendedHistoryHaveNext, setAppendedHistoryHaveNext] = useState(false);
    const [isWorking, setIsWorking] = useState(false);
    const [intervalDays, setIntervalDays] = useState(30);
    const [recentRevisions, setRecentRevisions] = useState(10);
    const [enabled, setEnabled] = useState(false);
    const [settingsError, setSettingsError] = useState<string | null>(null);

    /** The server settings the form was last filled from, so a changed server value can re-fill it. */
    const appliedSettings = useRef<{
        enabled: boolean;
        intervalDays: number;
        recentRevisions: number;
    } | null>(null);

    const stateRequest = requestManager.useGetArchiveIntegrityState({
        fetchPolicy: 'cache-and-network',
    });

    const settingsRequest = requestManager.useGetArchiveIntegritySettings({ fetchPolicy: 'cache-and-network' });

    const activeSession = stateRequest.data?.chapterIntegrityAuditActiveSession ?? null;
    const latestSession = stateRequest.data?.chapterIntegrityAuditLatestSession ?? null;
    const schedule = stateRequest.data?.chapterIntegrityAuditSchedule ?? null;

    const displayedSession = activeSession ?? latestSession;
    const sessionId = displayedSession?.id ?? 0;
    const isRunning =
        activeSession != null && ArchiveStateUtil.isActive(activeSession.state, RUNNING_INTEGRITY_SESSION_STATES);

    const progressRequest = requestManager.useGetArchiveIntegrityProgress(
        { sessionId },
        {
            skip: displayedSession == null,
            pollInterval: isRunning ? ArchiveConstants.INTEGRITY_POLL_INTERVAL_MILLISECONDS : 0,
            fetchPolicy: 'cache-and-network',
        },
    );

    const itemsRequest = requestManager.useGetArchiveIntegrityItems(
        {
            sessionId,
            first: ArchiveConstants.INTEGRITY_ITEM_PAGE_SIZE,
            state: itemState || null,
        },
        {
            skip: displayedSession == null,
            pollInterval: isRunning ? ArchiveConstants.INTEGRITY_POLL_INTERVAL_MILLISECONDS : 0,
            fetchPolicy: 'cache-and-network',
        },
    );

    const historyRequest = requestManager.useGetArchiveIntegrityHistory({
        first: ArchiveConstants.INTEGRITY_HISTORY_PAGE_SIZE,
    });

    useEffect(() => {
        const settings = settingsRequest.data?.settings;
        if (!settings) {
            return;
        }

        const next = {
            enabled: settings.chapterIntegrityAuditEnabled,
            intervalDays: settings.chapterIntegrityAuditIntervalDays,
            recentRevisions: settings.chapterIntegrityAuditRecentRevisions,
        };
        const applied = appliedSettings.current;
        // the form is re-filled whenever the server value is not the one already shown - a saved value
        // that came back clamped, or one changed elsewhere - and left alone otherwise, so a re-read can
        // never overwrite an edit that is still in progress
        if (
            applied &&
            applied.enabled === next.enabled &&
            applied.intervalDays === next.intervalDays &&
            applied.recentRevisions === next.recentRevisions
        ) {
            return;
        }

        appliedSettings.current = next;
        setEnabled(next.enabled);
        setIntervalDays(next.intervalDays);
        setRecentRevisions(next.recentRevisions);
        setSettingsError(null);
    }, [settingsRequest.data?.settings]);

    const firstItems = itemsRequest.data?.chapterIntegrityAuditItems.nodes ?? [];
    const itemsPageInfo = itemsRequest.data?.chapterIntegrityAuditItems.pageInfo;
    const items = useMemo(() => {
        const seen = new Set<number>();
        return [...firstItems, ...appendedItems].filter((item) => {
            if (seen.has(item.id)) {
                return false;
            }
            seen.add(item.id);
            return true;
        });
    }, [firstItems, appendedItems]);
    const itemsHaveAppendedPages = itemsCursor !== null;
    /** Whether the server said there is another page after the revisions on screen. */
    const itemsHasNextPage = itemsHaveAppendedPages ? appendedItemsHaveNext : !!itemsPageInfo?.hasNextPage;

    const firstHistory = historyRequest.data?.chapterIntegrityAuditSessions.nodes ?? [];
    const historyPageInfo = historyRequest.data?.chapterIntegrityAuditSessions.pageInfo;
    const history = useMemo(() => {
        const seen = new Set<number>();
        return [...firstHistory, ...appendedHistory].filter((session) => {
            if (seen.has(session.id)) {
                return false;
            }
            seen.add(session.id);
            return true;
        });
    }, [firstHistory, appendedHistory]);
    const historyHaveAppendedPages = historyCursor !== null;
    /** Whether the server said there is another page after the runs on screen. */
    const historyHasNextPage = historyHaveAppendedPages ? appendedHistoryHaveNext : !!historyPageInfo?.hasNextPage;

    const progress = progressRequest.data?.chapterIntegrityAuditProgress ?? null;
    /** Whether the server settings are known, so the form cannot save over settings it never read. */
    const settingsLoaded = settingsRequest.data?.settings != null;

    /**
     * The state query is the only thing that says whether a run is still working, but it does not poll
     * itself - only progress and revisions do. Re-reading it while a run is running is what lets the panel
     * notice the end of that run, and stop polling, instead of polling a cached RUNNING state forever.
     */
    useEffect(() => {
        if (!isRunning) {
            return undefined;
        }

        const timer = setInterval(() => {
            void stateRequest.refetch().catch(() => undefined);
        }, ArchiveConstants.INTEGRITY_POLL_INTERVAL_MILLISECONDS);

        return () => clearInterval(timer);
    }, [isRunning, stateRequest.refetch]);

    /** Forgets every appended page, so the next read of a connection starts at its first server page. */
    const resetAppendedPages = useCallback(() => {
        setAppendedItems([]);
        setItemsCursor(null);
        setAppendedItemsHaveNext(false);
        setAppendedHistory([]);
        setHistoryCursor(null);
        setAppendedHistoryHaveNext(false);
    }, []);

    /**
     * Re-reads everything the panel shows, because the schedule, the run and the history all move on
     * their own.
     *
     * The progress and revision-list queries are skipped while no run is displayed - they are keyed by a
     * session id - so they are only re-read when there really is a session to re-read them for.
     */
    const refreshAll = useCallback(async () => {
        setIsWorking(true);
        resetAppendedPages();
        try {
            const requests: Promise<unknown>[] = [
                stateRequest.refetch(),
                settingsRequest.refetch(),
                historyRequest.refetch(),
            ];
            if (displayedSession != null) {
                requests.push(progressRequest.refetch(), itemsRequest.refetch());
            }

            await Promise.all(requests.map((request) => request.catch(() => undefined)));
        } finally {
            setIsWorking(false);
        }
    }, [
        resetAppendedPages,
        displayedSession,
        stateRequest.refetch,
        settingsRequest.refetch,
        historyRequest.refetch,
        progressRequest.refetch,
        itemsRequest.refetch,
    ]);

    const refreshState = useCallback(async () => {
        await stateRequest
            .refetch()
            .catch((e) => makeToast(t`Could not refresh the audit state`, 'error', getErrorMessage(e)));
    }, [stateRequest.refetch, t]);

    const selectItemState = (next: ChapterIntegrityAuditItemState | '') => {
        setItemState(next);
        resetAppendedPages();
    };

    const loadMoreItems = useCallback(async () => {
        if (displayedSession == null) {
            return;
        }

        setIsWorking(true);
        try {
            const after = itemsHaveAppendedPages ? itemsCursor : itemsPageInfo?.endCursor;
            const response = await requestManager.getArchiveIntegrityItemsPage({
                sessionId: displayedSession.id,
                first: ArchiveConstants.INTEGRITY_ITEM_PAGE_SIZE,
                state: itemState || null,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more revisions`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.chapterIntegrityAuditItems;
            const endCursor = page?.pageInfo.endCursor;
            // an empty page, a missing cursor, or a cursor that did not move is the end of the list: the
            // revisions already on screen are kept and the action stops being offered
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedItemsHaveNext(false);
                return;
            }

            setAppendedItems((current) => [...current, ...page.nodes]);
            setItemsCursor(endCursor);
            setAppendedItemsHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more revisions`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [displayedSession, itemState, itemsHaveAppendedPages, itemsCursor, itemsPageInfo?.endCursor, t]);

    const loadMoreHistory = useCallback(async () => {
        setIsWorking(true);
        try {
            const after = historyHaveAppendedPages ? historyCursor : historyPageInfo?.endCursor;
            const response = await requestManager.getArchiveIntegrityHistoryPage({
                first: ArchiveConstants.INTEGRITY_HISTORY_PAGE_SIZE,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more audits`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.chapterIntegrityAuditSessions;
            const endCursor = page?.pageInfo.endCursor;
            // same rule as the revision list: no runs, no cursor or an unchanged cursor is the end of the
            // history, and the runs already on screen stay exactly as they are
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedHistoryHaveNext(false);
                return;
            }

            setAppendedHistory((current) => [...current, ...page.nodes]);
            setHistoryCursor(endCursor);
            setAppendedHistoryHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more audits`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [historyHaveAppendedPages, historyCursor, historyPageInfo?.endCursor, t]);

    /** Every audit mutation reports a payload error instead of throwing, so it is read and shown. */
    const runSessionAction = useCallback(
        async (action: 'pause' | 'resume' | 'cancel' | 'retryFailed', session: IntegritySession) => {
            if (action === 'cancel') {
                try {
                    await Confirmation.show(
                        {
                            title: t`Cancel this audit?`,
                            message: t`Revisions that were already checked keep their result. The remaining revisions are not checked.`,
                            actions: { confirm: { title: t`Cancel audit` } },
                        },
                        { id: 'archive-integrity-cancel' },
                    );
                } catch {
                    return;
                }
            }

            setIsWorking(true);
            try {
                let transportError: unknown;
                let payloadError: string | null | undefined;

                if (action === 'pause') {
                    const response = await requestManager.pauseChapterIntegrityAudit(session.id).response;
                    transportError = response.error;
                    payloadError = response.data?.pauseChapterIntegrityAudit.error;
                } else if (action === 'resume') {
                    const response = await requestManager.resumeChapterIntegrityAudit(session.id).response;
                    transportError = response.error;
                    payloadError = response.data?.resumeChapterIntegrityAudit.error;
                } else if (action === 'cancel') {
                    const response = await requestManager.cancelChapterIntegrityAudit(session.id).response;
                    transportError = response.error;
                    payloadError = response.data?.cancelChapterIntegrityAudit.error;
                } else {
                    const response = await requestManager.retryChapterIntegrityAuditItems({
                        sessionId: session.id,
                    }).response;
                    transportError = response.error;
                    payloadError = response.data?.retryChapterIntegrityAuditItems.error;
                }

                if (transportError) {
                    makeToast(t`Could not change the audit`, 'error', getErrorMessage(transportError));
                    return;
                }

                if (payloadError) {
                    makeToast(t`Could not change the audit: ${payloadError}`, 'error');
                    return;
                }

                makeToast(t`Audit updated`, 'success');
                resetAppendedPages();
                await refreshState();
                await itemsRequest.refetch().catch(() => undefined);
                await progressRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not change the audit`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [refreshState, resetAppendedPages, itemsRequest.refetch, progressRequest.refetch, t],
    );

    const startAudit = useCallback(
        async (kind: ChapterIntegrityAuditKind) => {
            if (kind === ChapterIntegrityAuditKind.ManualFull) {
                try {
                    await Confirmation.show(
                        {
                            title: t`Check every archived revision?`,
                            message: t`Every revision the archive confirmed is looked up on the remote storage. A large archive means a large number of remote requests and a long run.`,
                            actions: { confirm: { title: t`Check everything` } },
                        },
                        { id: 'archive-integrity-start-full' },
                    );
                } catch {
                    return;
                }
            }

            setIsWorking(true);
            try {
                const response = await requestManager.startChapterIntegrityAudit({ kind, mangaIds: null }).response;

                if (response.error) {
                    makeToast(t`Could not start the audit`, 'error', getErrorMessage(response.error));
                    return;
                }

                const payload = response.data?.startChapterIntegrityAudit;
                if (payload?.error) {
                    makeToast(t`Could not start the audit: ${payload.error}`, 'error');
                    return;
                }

                makeToast(t`Audit started for ${payload?.itemCount ?? 0} revisions`, 'success');
                setItemState('');
                resetAppendedPages();
                await refreshState();
                await historyRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not start the audit`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [refreshState, resetAppendedPages, historyRequest.refetch, t],
    );

    const saveSettings = useCallback(async () => {
        if (intervalDays < 1 || recentRevisions < 1) {
            setSettingsError(t`The interval and the number of revisions have to be at least 1.`);
            return;
        }

        setSettingsError(null);
        setIsWorking(true);
        try {
            const response = await requestManager.updateArchiveIntegritySettings({
                chapterIntegrityAuditEnabled: enabled,
                chapterIntegrityAuditIntervalDays: intervalDays,
                chapterIntegrityAuditRecentRevisions: recentRevisions,
            }).response;

            if (response.error) {
                makeToast(t`Could not save the audit settings`, 'error', getErrorMessage(response.error));
                return;
            }

            makeToast(t`Audit settings saved`, 'success');
            // the response is where a clamped or otherwise adjusted value shows up, so the form is filled
            // from it again instead of keeping what was typed
            await settingsRequest.refetch();
            await refreshState();
        } catch (e) {
            makeToast(t`Could not save the audit settings`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [enabled, intervalDays, recentRevisions, settingsRequest.refetch, refreshState, t]);

    if (stateRequest.error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the audit state`}
                messageExtra={getErrorMessage(stateRequest.error)}
                retry={() => void refreshState()}
            />
        );
    }

    if (stateRequest.loading && !stateRequest.data) {
        return <LoadingPlaceholder usePadding />;
    }

    const canActOnSession =
        activeSession != null && ArchiveStateUtil.isActive(activeSession.state, ACTIONABLE_INTEGRITY_SESSION_STATES);

    return (
        <Stack sx={{ gap: 2 }}>
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mr: 'auto' }}>
                    {t`The schedule, the current check and the history are re-read together.`}
                </Typography>
                <Button variant="outlined" disabled={isWorking} onClick={() => void refreshAll()}>
                    {t`Refresh`}
                </Button>
            </Stack>

            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ gap: 2 }}>
                    <Typography variant="subtitle1">{t`Automatic check`}</Typography>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Switch
                            checked={enabled}
                            onChange={(event) => setEnabled(event.target.checked)}
                            slotProps={{ input: { 'aria-label': t`Check automatically` } }}
                        />
                        <Typography variant="body2">{t`Look up archived revisions on the remote storage periodically`}</Typography>
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                        <TextField
                            type="number"
                            size="small"
                            label={t`Days between checks`}
                            value={intervalDays}
                            slotProps={{ htmlInput: { min: 1, step: 1 } }}
                            onChange={(event) => setIntervalDays(Math.trunc(Number(event.target.value) || 0))}
                        />
                        <TextField
                            type="number"
                            size="small"
                            label={t`Newest revisions per series`}
                            value={recentRevisions}
                            slotProps={{ htmlInput: { min: 1, step: 1 } }}
                            onChange={(event) => setRecentRevisions(Math.trunc(Number(event.target.value) || 0))}
                        />
                        <Button
                            variant="contained"
                            disabled={isWorking || !settingsLoaded}
                            onClick={() => void saveSettings()}
                        >
                            {t`Save`}
                        </Button>
                    </Stack>
                    {settingsRequest.error && (
                        <Alert severity="warning">
                            {t`The audit settings could not be read, so they are not shown and cannot be saved: ${getErrorMessage(settingsRequest.error)}`}
                        </Alert>
                    )}
                    {settingsError && <Alert severity="error">{settingsError}</Alert>}
                    <Typography variant="body2" color="text.secondary">
                        {schedule
                            ? t`Next automatic check ${ArchiveStateUtil.formatTimestamp(schedule.nextDueAt)}, last run ${ArchiveStateUtil.formatTimestamp(schedule.lastRunAt)}.`
                            : t`No check is scheduled yet.`}
                    </Typography>
                </Stack>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ gap: 2 }}>
                    <Typography variant="subtitle1">{t`Manual check`}</Typography>
                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                        <Button
                            variant="outlined"
                            disabled={isWorking || activeSession != null}
                            onClick={() => void startAudit(ChapterIntegrityAuditKind.ManualRecent)}
                        >{t`Check the newest revisions`}</Button>
                        <Button
                            variant="outlined"
                            color="warning"
                            disabled={isWorking || activeSession != null}
                            onClick={() => void startAudit(ChapterIntegrityAuditKind.ManualFull)}
                        >{t`Check every archived revision`}</Button>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                        {t`An audit asks the remote storage about each archived revision. It never downloads a payload and never changes what the archive holds.`}
                    </Typography>
                </Stack>
            </Paper>

            {activeSession == null && <Alert severity="info">{t`No check is running right now.`}</Alert>}

            {displayedSession && (
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <Stack sx={{ gap: 2 }}>
                        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                            <Typography variant="subtitle1">{t`Run ${displayedSession.id}`}</Typography>
                            <Chip size="small" label={ArchiveStateUtil.prettify(displayedSession.kind)} />
                            <Chip
                                size="small"
                                color={isRunning ? 'primary' : 'default'}
                                label={ArchiveStateUtil.prettify(displayedSession.state)}
                            />
                            {displayedSession.newestPerManga != null && (
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    label={t`Newest ${displayedSession.newestPerManga} per series`}
                                />
                            )}
                        </Stack>

                        <Typography variant="body2" color="text.secondary">
                            {[
                                `${t`Started`} ${ArchiveStateUtil.formatTimestamp(displayedSession.startedAt)}`,
                                `${t`Finished`} ${ArchiveStateUtil.formatTimestamp(displayedSession.finishedAt)}`,
                                `${t`Paused`} ${ArchiveStateUtil.formatTimestamp(displayedSession.pausedAt)}`,
                                `${t`Cancelled`} ${ArchiveStateUtil.formatTimestamp(displayedSession.cancelledAt)}`,
                            ].join(' · ')}
                        </Typography>

                        {progress && (
                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                <Chip size="small" variant="outlined" label={t`${progress.total} revisions`} />
                                <Chip size="small" variant="outlined" label={t`${progress.remaining} remaining`} />
                                <Chip size="small" variant="outlined" label={t`${progress.pending} pending`} />
                                <Chip size="small" variant="outlined" label={t`${progress.checking} checking`} />
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    label={t`${progress.retryWait} waiting to retry`}
                                />
                                <Chip size="small" color="success" label={t`${progress.verified} intact`} />
                                <Chip size="small" color="warning" label={t`${progress.missing} missing`} />
                                <Chip size="small" color="error" label={t`${progress.corrupt} damaged`} />
                                <Chip size="small" variant="outlined" label={t`${progress.failed} checks failed`} />
                                <Chip size="small" variant="outlined" label={t`${progress.skipped} skipped`} />
                                <Chip size="small" color="warning" label={t`${progress.findings} findings`} />
                            </Stack>
                        )}

                        {canActOnSession && (
                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                {activeSession?.state === ChapterIntegrityAuditSessionState.Paused ? (
                                    <Button
                                        variant="contained"
                                        disabled={isWorking}
                                        onClick={() => void runSessionAction('resume', activeSession)}
                                    >{t`Resume`}</Button>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        disabled={isWorking}
                                        onClick={() => void runSessionAction('pause', activeSession!)}
                                    >{t`Pause`}</Button>
                                )}
                                <Button
                                    variant="outlined"
                                    color="error"
                                    disabled={isWorking}
                                    onClick={() => void runSessionAction('cancel', activeSession!)}
                                >{t`Cancel`}</Button>
                                <Button
                                    variant="outlined"
                                    disabled={isWorking || !progress?.failed}
                                    onClick={() => void runSessionAction('retryFailed', activeSession!)}
                                >{t`Retry failed checks`}</Button>
                            </Stack>
                        )}

                        {progress && progress.findings > 0 && (
                            <Alert severity="warning">
                                {t`${progress.findings} archived revisions were reported as missing or damaged. A finding describes the remote copy, not the revision history: the archive keeps the record either way.`}
                            </Alert>
                        )}

                        {activeSession == null && progress && progress.failed > 0 && (
                            <Alert severity="info">
                                {t`${progress.failed} checks of this run could not conclude anything. The next run checks them again.`}
                            </Alert>
                        )}

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                                <FormControl size="small" sx={{ minWidth: 220 }}>
                                    <InputLabel id="archive-integrity-item-state-label">{t`Revision state`}</InputLabel>
                                    <Select
                                        labelId="archive-integrity-item-state-label"
                                        label={t`Revision state`}
                                        value={itemState}
                                        onChange={(event) =>
                                            selectItemState(event.target.value as ChapterIntegrityAuditItemState | '')
                                        }
                                    >
                                        <MenuItem value="">{t`All states`}</MenuItem>
                                        {Object.values(ChapterIntegrityAuditItemState).map((state) => (
                                            <MenuItem key={state} value={state}>
                                                {ArchiveStateUtil.prettify(state)}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {/* the server filters one state at a time, so the findings are reached by
                                    narrowing to each of them rather than by one combined filter */}
                                <Button
                                    variant="outlined"
                                    disabled={isWorking || !progress?.missing}
                                    onClick={() => selectItemState(ChapterIntegrityAuditItemState.Missing)}
                                >{t`Show missing`}</Button>
                                <Button
                                    variant="outlined"
                                    disabled={isWorking || !progress?.corrupt}
                                    onClick={() => selectItemState(ChapterIntegrityAuditItemState.Corrupt)}
                                >{t`Show damaged`}</Button>
                                {itemState !== '' && (
                                    <Button variant="text" disabled={isWorking} onClick={() => selectItemState('')}>
                                        {t`Clear filter`}
                                    </Button>
                                )}
                            </Stack>

                            {itemsRequest.error && (
                                <Alert severity="warning">
                                    {t`The revisions of this run could not be read: ${getErrorMessage(itemsRequest.error)}`}
                                </Alert>
                            )}

                            {!items.length ? (
                                <Typography variant="body2" color="text.secondary">
                                    {t`No revision of this run matches the selected state.`}
                                </Typography>
                            ) : (
                                <Paper variant="outlined">
                                    <List disablePadding>
                                        {items.map((item) => (
                                            <ListItem key={item.id} divider sx={{ alignItems: 'flex-start', gap: 1 }}>
                                                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                                    <Typography variant="body2" noWrap>
                                                        {item.seriesTitle ?? t`Unknown series`}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" noWrap>
                                                        {item.chapterName}
                                                    </Typography>
                                                    <Stack
                                                        sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 1 }}
                                                    >
                                                        <Chip
                                                            size="small"
                                                            label={ArchiveStateUtil.prettify(item.state)}
                                                            color={integrityFindingColor(item.state)}
                                                        />
                                                        <Chip
                                                            size="small"
                                                            variant="outlined"
                                                            label={t`Attempts: ${item.attempts}`}
                                                        />
                                                        {item.revisionId != null && (
                                                            <Chip
                                                                size="small"
                                                                variant="outlined"
                                                                label={t`Revision ${item.revisionId}`}
                                                            />
                                                        )}
                                                    </Stack>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        {[
                                                            `${t`Started`} ${ArchiveStateUtil.formatTimestamp(item.startedAt)}`,
                                                            `${t`Finished`} ${ArchiveStateUtil.formatTimestamp(item.finishedAt)}`,
                                                        ].join(' · ')}
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            )}

                            {itemsHasNextPage && (
                                <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        disabled={isWorking}
                                        onClick={() => void loadMoreItems()}
                                    >{t`Load more revisions`}</Button>
                                </Stack>
                            )}
                        </Box>
                    </Stack>
                </Paper>
            )}

            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ gap: 2 }}>
                    <Typography variant="subtitle1">{t`Previous checks`}</Typography>

                    {historyRequest.error && (
                        <Alert severity="warning">
                            {t`The audit history could not be read: ${getErrorMessage(historyRequest.error)}`}
                        </Alert>
                    )}

                    {!history.length ? (
                        <Typography variant="body2" color="text.secondary">{t`No check has run yet.`}</Typography>
                    ) : (
                        <>
                            <List disablePadding>
                                {history.map((session) => (
                                    <ListItem key={session.id} divider sx={{ alignItems: 'flex-start', gap: 1 }}>
                                        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                                <Typography variant="body2">{t`Run ${session.id}`}</Typography>
                                                <Chip size="small" label={ArchiveStateUtil.prettify(session.kind)} />
                                                <Chip
                                                    size="small"
                                                    variant="outlined"
                                                    label={ArchiveStateUtil.prettify(session.state)}
                                                />
                                            </Stack>
                                            <Typography variant="caption" color="text.secondary">
                                                {[
                                                    `${t`Started`} ${ArchiveStateUtil.formatTimestamp(session.startedAt)}`,
                                                    `${t`Finished`} ${ArchiveStateUtil.formatTimestamp(session.finishedAt)}`,
                                                ].join(' · ')}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>

                            {historyHasNextPage && (
                                <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        disabled={isWorking}
                                        onClick={() => void loadMoreHistory()}
                                    >{t`Load more checks`}</Button>
                                </Stack>
                            )}
                        </>
                    )}
                </Stack>
            </Paper>
        </Stack>
    );
};
