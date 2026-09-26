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
import type { GetArchiveSweepItemsQuery, GetArchiveSweepStateQuery } from '@/lib/graphql/generated/graphql.ts';
import {
    ChapterRevisionSweepItemState,
    ChapterRevisionSweepKind,
    ChapterRevisionSweepSessionState,
} from '@/lib/graphql/generated/graphql-base.types.ts';
import {
    ACTIONABLE_SWEEP_SESSION_STATES,
    ArchiveConstants,
    RUNNING_SWEEP_SESSION_STATES,
} from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';

type SweepSession = NonNullable<GetArchiveSweepStateQuery['chapterRevisionSweepActiveSession']>;
type SweepItem = GetArchiveSweepItemsQuery['chapterRevisionSweepItems']['nodes'][number];

/**
 * The revision sweep panel.
 *
 * A sweep re-downloads chapter content to find out whether an extension served something different,
 * which is the only source-independent way to notice a replaced page. It is therefore the most
 * expensive thing this system does, and the panel is explicit about how much is swept: a recent sweep
 * only visits the newest chapters of every series, a full-history sweep visits everything and is
 * confirmed first.
 *
 * Only a running run is polled. A paused or finished one changes when an operator acts on it, and
 * every action refreshes the panel itself.
 */
export const ArchiveSweepPanel: React.FC = () => {
    const { t } = useLingui();

    const [appendedItems, setAppendedItems] = useState<SweepItem[]>([]);
    const [itemsCursor, setItemsCursor] = useState<string | null>(null);
    const [appendedItemsHaveNext, setAppendedItemsHaveNext] = useState(false);
    const [itemState, setItemState] = useState<ChapterRevisionSweepItemState | ''>('');
    const [isWorking, setIsWorking] = useState(false);
    const [intervalDays, setIntervalDays] = useState(30);
    const [newestChapters, setNewestChapters] = useState(10);
    const [enabled, setEnabled] = useState(false);
    const [settingsError, setSettingsError] = useState<string | null>(null);

    /** The server settings the form was last filled from, so a changed server value can re-fill it. */
    const appliedSettings = useRef<{
        enabled: boolean;
        intervalDays: number;
        newestChapters: number;
    } | null>(null);

    const stateRequest = requestManager.useGetArchiveSweepState({
        fetchPolicy: 'cache-and-network',
    });

    const settingsRequest = requestManager.useGetArchiveSweepSettings({ fetchPolicy: 'cache-and-network' });

    const activeSession = stateRequest.data?.chapterRevisionSweepActiveSession ?? null;
    const latestSession = stateRequest.data?.chapterRevisionSweepLatestSession ?? null;
    const schedule = stateRequest.data?.chapterRevisionSweepSchedule ?? null;

    const displayedSession = activeSession ?? latestSession;
    const sessionId = displayedSession?.id ?? 0;
    const isRunning =
        activeSession != null && ArchiveStateUtil.isActive(activeSession.state, RUNNING_SWEEP_SESSION_STATES);

    const progressRequest = requestManager.useGetArchiveSweepProgress(
        { sessionId },
        {
            skip: displayedSession == null,
            pollInterval: isRunning ? ArchiveConstants.SWEEP_POLL_INTERVAL_MILLISECONDS : 0,
            fetchPolicy: 'cache-and-network',
        },
    );

    const itemsRequest = requestManager.useGetArchiveSweepItems(
        {
            sessionId,
            first: ArchiveConstants.SWEEP_ITEM_PAGE_SIZE,
            state: itemState || null,
        },
        {
            skip: displayedSession == null,
            pollInterval: isRunning ? ArchiveConstants.SWEEP_POLL_INTERVAL_MILLISECONDS : 0,
            fetchPolicy: 'cache-and-network',
        },
    );

    const historyRequest = requestManager.useGetArchiveSweepHistory({
        first: ArchiveConstants.SWEEP_HISTORY_PAGE_SIZE,
    });

    useEffect(() => {
        const settings = settingsRequest.data?.settings;
        if (!settings) {
            return;
        }

        const next = {
            enabled: settings.chapterRevisionSweepEnabled,
            intervalDays: settings.chapterRevisionSweepIntervalDays,
            newestChapters: settings.chapterRevisionSweepNewestChapters,
        };
        const applied = appliedSettings.current;
        // the form is re-filled whenever the server value is not the one already shown - a saved value
        // that came back clamped, or one changed elsewhere - and left alone otherwise, so a re-read can
        // never overwrite an edit that is still in progress
        if (
            applied &&
            applied.enabled === next.enabled &&
            applied.intervalDays === next.intervalDays &&
            applied.newestChapters === next.newestChapters
        ) {
            return;
        }

        appliedSettings.current = next;
        setEnabled(next.enabled);
        setIntervalDays(next.intervalDays);
        setNewestChapters(next.newestChapters);
        setSettingsError(null);
    }, [settingsRequest.data?.settings]);

    const firstItems = itemsRequest.data?.chapterRevisionSweepItems.nodes ?? [];
    const itemsPageInfo = itemsRequest.data?.chapterRevisionSweepItems.pageInfo;
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
    /** Whether the server said there is another page after the chapters on screen. */
    const itemsHasNextPage = itemsHaveAppendedPages ? appendedItemsHaveNext : !!itemsPageInfo?.hasNextPage;

    const progress = progressRequest.data?.chapterRevisionSweepProgress ?? null;
    const history = historyRequest.data?.chapterRevisionSweepSessions.nodes ?? [];
    /** Whether the server settings are known, so the form cannot save over settings it never read. */
    const settingsLoaded = settingsRequest.data?.settings != null;

    /**
     * The state query is the only thing that says whether a run is still working, but it does not poll
     * itself - only progress and items do. Re-reading it while a run is running is what lets the panel
     * notice the end of that run, and stop polling, instead of polling a cached RUNNING state forever.
     */
    useEffect(() => {
        if (!isRunning) {
            return undefined;
        }

        const timer = setInterval(() => {
            void stateRequest.refetch().catch(() => undefined);
        }, ArchiveConstants.SWEEP_POLL_INTERVAL_MILLISECONDS);

        return () => clearInterval(timer);
    }, [isRunning, stateRequest.refetch]);

    /** Forgets every appended page, so the next read of the chapter list starts at its first page. */
    const resetItems = useCallback(() => {
        setAppendedItems([]);
        setItemsCursor(null);
        setAppendedItemsHaveNext(false);
    }, []);

    /**
     * Re-reads everything the panel shows, because the schedule, the run and the history all move on
     * their own.
     *
     * The progress and chapter-list queries are skipped while no run is displayed - they are keyed by a
     * session id - so they are only re-read when there really is a session to re-read them for.
     */
    const refreshAll = useCallback(async () => {
        setIsWorking(true);
        resetItems();
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
        resetItems,
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
            .catch((e) => makeToast(t`Could not refresh the sweep state`, 'error', getErrorMessage(e)));
    }, [stateRequest.refetch, t]);

    const selectItemState = (next: ChapterRevisionSweepItemState | '') => {
        setItemState(next);
        resetItems();
    };

    const loadMoreItems = useCallback(async () => {
        if (displayedSession == null) {
            return;
        }

        setIsWorking(true);
        try {
            const after = itemsHaveAppendedPages ? itemsCursor : itemsPageInfo?.endCursor;
            const response = await requestManager.getArchiveSweepItemsPage({
                sessionId: displayedSession.id,
                first: ArchiveConstants.SWEEP_ITEM_PAGE_SIZE,
                state: itemState || null,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more chapters`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.chapterRevisionSweepItems;
            const endCursor = page?.pageInfo.endCursor;
            // an empty page, a missing cursor, or a cursor that did not move is the end of the list: the
            // chapters already on screen are kept and the action stops being offered
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedItemsHaveNext(false);
                return;
            }

            setAppendedItems((current) => [...current, ...page.nodes]);
            setItemsCursor(endCursor);
            setAppendedItemsHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more chapters`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [displayedSession, itemState, itemsHaveAppendedPages, itemsCursor, itemsPageInfo?.endCursor, t]);

    /** Every sweep mutation reports a payload error instead of throwing, so it is read and shown. */
    const runSessionAction = useCallback(
        async (action: 'pause' | 'resume' | 'cancel' | 'retryFailed', session: SweepSession) => {
            if (action === 'cancel') {
                try {
                    await Confirmation.show(
                        {
                            title: t`Cancel this sweep?`,
                            message: t`Chapters that were already swept keep their result. The remaining chapters are not visited.`,
                            actions: { confirm: { title: t`Cancel sweep` } },
                        },
                        { id: 'archive-sweep-cancel' },
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
                    const response = await requestManager.pauseChapterRevisionSweep(session.id).response;
                    transportError = response.error;
                    payloadError = response.data?.pauseChapterRevisionSweep.error;
                } else if (action === 'resume') {
                    const response = await requestManager.resumeChapterRevisionSweep(session.id).response;
                    transportError = response.error;
                    payloadError = response.data?.resumeChapterRevisionSweep.error;
                } else if (action === 'cancel') {
                    const response = await requestManager.cancelChapterRevisionSweep(session.id).response;
                    transportError = response.error;
                    payloadError = response.data?.cancelChapterRevisionSweep.error;
                } else {
                    const response = await requestManager.retryChapterRevisionSweepItems({
                        sessionId: session.id,
                    }).response;
                    transportError = response.error;
                    payloadError = response.data?.retryChapterRevisionSweepItems.error;
                }

                if (transportError) {
                    makeToast(t`Could not change the sweep`, 'error', getErrorMessage(transportError));
                    return;
                }

                if (payloadError) {
                    makeToast(t`Could not change the sweep: ${payloadError}`, 'error');
                    return;
                }

                makeToast(t`Sweep updated`, 'success');
                resetItems();
                await refreshState();
                await itemsRequest.refetch().catch(() => undefined);
                await progressRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not change the sweep`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [refreshState, resetItems, itemsRequest.refetch, progressRequest.refetch, t],
    );

    const startSweep = useCallback(
        async (kind: ChapterRevisionSweepKind) => {
            if (kind === ChapterRevisionSweepKind.ManualFull) {
                try {
                    await Confirmation.show(
                        {
                            title: t`Start a full history sweep?`,
                            message: t`Every chapter of every tracked series is re-downloaded to compare its content. This is the most expensive operation of the archive and can take a long time.`,
                            actions: { confirm: { title: t`Start full sweep` } },
                        },
                        { id: 'archive-sweep-start-full' },
                    );
                } catch {
                    return;
                }
            }

            setIsWorking(true);
            try {
                const response = await requestManager.startChapterRevisionSweep({ kind, mangaIds: null }).response;

                if (response.error) {
                    makeToast(t`Could not start the sweep`, 'error', getErrorMessage(response.error));
                    return;
                }

                const payload = response.data?.startChapterRevisionSweep;
                if (payload?.error) {
                    makeToast(t`Could not start the sweep: ${payload.error}`, 'error');
                    return;
                }

                makeToast(t`Sweep started for ${payload?.itemCount ?? 0} chapters`, 'success');
                setItemState('');
                resetItems();
                await refreshState();
                await historyRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not start the sweep`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [refreshState, resetItems, historyRequest.refetch, t],
    );

    const saveSettings = useCallback(async () => {
        if (intervalDays < 1 || newestChapters < 1) {
            setSettingsError(t`The interval and the number of chapters have to be at least 1.`);
            return;
        }

        setSettingsError(null);
        setIsWorking(true);
        try {
            const response = await requestManager.updateArchiveSweepSettings({
                chapterRevisionSweepEnabled: enabled,
                chapterRevisionSweepIntervalDays: intervalDays,
                chapterRevisionSweepNewestChapters: newestChapters,
            }).response;

            if (response.error) {
                makeToast(t`Could not save the sweep settings`, 'error', getErrorMessage(response.error));
                return;
            }

            makeToast(t`Sweep settings saved`, 'success');
            // the response is where a clamped or otherwise adjusted value shows up, so the form is filled
            // from it again instead of keeping what was typed
            await settingsRequest.refetch();
            await refreshState();
        } catch (e) {
            makeToast(t`Could not save the sweep settings`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [enabled, intervalDays, newestChapters, settingsRequest.refetch, refreshState, t]);

    if (stateRequest.error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the sweep state`}
                messageExtra={getErrorMessage(stateRequest.error)}
                retry={() => void refreshState()}
            />
        );
    }

    if (stateRequest.loading && !stateRequest.data) {
        return <LoadingPlaceholder usePadding />;
    }

    const canActOnSession =
        activeSession != null && ArchiveStateUtil.isActive(activeSession.state, ACTIONABLE_SWEEP_SESSION_STATES);

    return (
        <Stack sx={{ gap: 2 }}>
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mr: 'auto' }}>
                    {t`The schedule, the current run and the history are re-read together.`}
                </Typography>
                <Button variant="outlined" disabled={isWorking} onClick={() => void refreshAll()}>
                    {t`Refresh`}
                </Button>
            </Stack>

            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ gap: 2 }}>
                    <Typography variant="subtitle1">{t`Automatic sweep`}</Typography>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Switch
                            checked={enabled}
                            onChange={(event) => setEnabled(event.target.checked)}
                            slotProps={{ input: { 'aria-label': t`Sweep automatically` } }}
                        />
                        <Typography variant="body2">{t`Re-download the newest chapters periodically`}</Typography>
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                        <TextField
                            type="number"
                            size="small"
                            label={t`Days between sweeps`}
                            value={intervalDays}
                            slotProps={{ htmlInput: { min: 1, step: 1 } }}
                            onChange={(event) => setIntervalDays(Math.trunc(Number(event.target.value) || 0))}
                        />
                        <TextField
                            type="number"
                            size="small"
                            label={t`Newest chapters per series`}
                            value={newestChapters}
                            slotProps={{ htmlInput: { min: 1, step: 1 } }}
                            onChange={(event) => setNewestChapters(Math.trunc(Number(event.target.value) || 0))}
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
                            {t`The sweep settings could not be read, so they are not shown and cannot be saved: ${getErrorMessage(settingsRequest.error)}`}
                        </Alert>
                    )}
                    {settingsError && <Alert severity="error">{settingsError}</Alert>}
                    <Typography variant="body2" color="text.secondary">
                        {schedule
                            ? t`Next automatic sweep ${ArchiveStateUtil.formatTimestamp(schedule.nextDueAt)}, last run ${ArchiveStateUtil.formatTimestamp(schedule.lastRunAt)}.`
                            : t`No sweep is scheduled yet.`}
                    </Typography>
                </Stack>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ gap: 2 }}>
                    <Typography variant="subtitle1">{t`Manual sweep`}</Typography>
                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                        <Button
                            variant="outlined"
                            disabled={isWorking || activeSession != null}
                            onClick={() => void startSweep(ChapterRevisionSweepKind.ManualRecent)}
                        >{t`Sweep the newest chapters`}</Button>
                        <Button
                            variant="outlined"
                            color="warning"
                            disabled={isWorking || activeSession != null}
                            onClick={() => void startSweep(ChapterRevisionSweepKind.ManualFull)}
                        >{t`Sweep the full history`}</Button>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                        {t`A sweep visits every tracked series unless it is started from a series itself.`}
                    </Typography>
                </Stack>
            </Paper>

            {activeSession == null && <Alert severity="info">{t`No sweep is running right now.`}</Alert>}

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
                            {displayedSession.newestPerSeries != null && (
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    label={t`Newest ${displayedSession.newestPerSeries} per series`}
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
                                <Chip size="small" variant="outlined" label={t`${progress.total} chapters`} />
                                <Chip size="small" variant="outlined" label={t`${progress.remaining} remaining`} />
                                <Chip size="small" variant="outlined" label={t`${progress.pending} pending`} />
                                <Chip size="small" variant="outlined" label={t`${progress.processing} processing`} />
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    label={t`${progress.retryWait} waiting to retry`}
                                />
                                <Chip size="small" color="success" label={t`${progress.complete} complete`} />
                                <Chip size="small" color="error" label={t`${progress.failed} failed`} />
                                <Chip size="small" variant="outlined" label={t`${progress.skipped} skipped`} />
                                <Chip size="small" variant="outlined" label={t`${progress.cancelled} cancelled`} />
                            </Stack>
                        )}

                        {canActOnSession && (
                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                {activeSession?.state === ChapterRevisionSweepSessionState.Paused ? (
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
                                >{t`Retry failed chapters`}</Button>
                            </Stack>
                        )}

                        {activeSession == null && progressRequest.data && progress && progress.failed > 0 && (
                            <Alert severity="warning">
                                {t`${progress.failed} chapters of this run failed. The next run visits them again.`}
                            </Alert>
                        )}

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <FormControl size="small" sx={{ minWidth: 220, alignSelf: 'flex-start' }}>
                                <InputLabel id="archive-sweep-item-state-label">{t`Chapter state`}</InputLabel>
                                <Select
                                    labelId="archive-sweep-item-state-label"
                                    label={t`Chapter state`}
                                    value={itemState}
                                    onChange={(event) =>
                                        selectItemState(event.target.value as ChapterRevisionSweepItemState | '')
                                    }
                                >
                                    <MenuItem value="">{t`All states`}</MenuItem>
                                    {Object.values(ChapterRevisionSweepItemState).map((state) => (
                                        <MenuItem key={state} value={state}>
                                            {ArchiveStateUtil.prettify(state)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {itemsRequest.error && (
                                <Alert severity="warning">
                                    {t`The chapters of this run could not be read: ${getErrorMessage(itemsRequest.error)}`}
                                </Alert>
                            )}

                            {!items.length ? (
                                <Typography variant="body2" color="text.secondary">
                                    {t`No chapter of this run matches the selected state.`}
                                </Typography>
                            ) : (
                                <Paper variant="outlined">
                                    <List disablePadding>
                                        {items.map((item) => (
                                            <ListItem key={item.id} divider sx={{ alignItems: 'flex-start', gap: 1 }}>
                                                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                                    <Typography variant="body2" noWrap>
                                                        {item.seriesTitle}
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
                                                            color={item.state === 'FAILED' ? 'error' : 'default'}
                                                        />
                                                        <Chip
                                                            size="small"
                                                            variant="outlined"
                                                            label={t`Attempts: ${item.attempts}`}
                                                        />
                                                        {item.candidateCount != null && (
                                                            <Chip
                                                                size="small"
                                                                variant="outlined"
                                                                label={t`${item.candidateCount} candidates`}
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
                                                    {item.lastError && (
                                                        <Typography variant="caption" color="error" component="div">
                                                            {item.lastError}
                                                        </Typography>
                                                    )}
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
                                    >{t`Load more chapters`}</Button>
                                </Stack>
                            )}
                        </Box>
                    </Stack>
                </Paper>
            )}

            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ gap: 2 }}>
                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle1">{t`Previous runs`}</Typography>
                    </Stack>

                    {historyRequest.error && (
                        <Alert severity="warning">
                            {t`The sweep history could not be read: ${getErrorMessage(historyRequest.error)}`}
                        </Alert>
                    )}

                    {!history.length ? (
                        <Typography variant="body2" color="text.secondary">{t`No sweep has run yet.`}</Typography>
                    ) : (
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
                    )}
                </Stack>
            </Paper>
        </Stack>
    );
};
