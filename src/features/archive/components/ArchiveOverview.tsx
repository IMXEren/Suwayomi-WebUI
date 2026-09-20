/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useLingui } from '@lingui/react/macro';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import { LoadingPlaceholder } from '@/base/components/feedback/LoadingPlaceholder.tsx';
import { EmptyViewAbsoluteCentered } from '@/base/components/feedback/EmptyViewAbsoluteCentered.tsx';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { makeToast } from '@/base/utils/Toast.ts';
import {
    ACTIVE_BOOTSTRAP_STATES,
    ACTIVE_KOMGA_STATES,
    ACTIVE_RESTORE_STATES,
    ArchiveConstants,
    PROGRESSING_BOOTSTRAP_STATES,
} from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';
import { ArchiveDeliveryStatusCard } from '@/features/archive/components/ArchiveDeliveryStatusCard.tsx';

const StatRow = ({ label, value }: { label: string; value: string }) => (
    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
            {label}
        </Typography>
        <Typography variant="body2">{value}</Typography>
    </Stack>
);

const StatusChip = ({ state }: { state: unknown }) => <Chip size="small" label={ArchiveStateUtil.prettify(state)} />;

export const ArchiveOverview = ({ onOpenApprovalQueue }: { onOpenApprovalQueue: () => void }) => {
    const { t } = useLingui();
    const [shouldPoll, setShouldPoll] = useState(false);
    const [isWorking, setIsWorking] = useState(false);

    const { data, loading, error, refetch } = requestManager.useGetArchiveOverview({
        fetchPolicy: 'cache-and-network',
        pollInterval: shouldPoll ? ArchiveConstants.OVERVIEW_POLL_INTERVAL_MILLISECONDS : 0,
    });

    const approvalCount = data?.approvalBacklog.totalCount;
    const queuedCount = data?.queuedBacklog.totalCount;
    const downloadingCount = data?.downloadingRevisions.totalCount;
    const failedDownloadCount = data?.failedDownloads.totalCount;
    const failedValidationCount = data?.failedValidations.totalCount;
    const publicationFailureCount = data?.publicationBacklog.totalCount;
    const pruningFailureCount = data?.pruningBacklog.totalCount;

    // The archive state is its own dimension: "acquired" and "durably archived" are not the same
    // thing, so the overview reports the three durability states instead of one cumulative count.
    const remotePendingCount = data?.archiveRemotePending.totalCount;
    const unconfirmedCount = data?.archiveUnconfirmed.totalCount;
    const remoteConfirmedCount = data?.archiveRemoteConfirmed.totalCount;

    const komga = data?.komgaRescanStatus;
    const latestRestore = data?.backupRestoreJobs?.[0];
    const restoreId = latestRestore?.restoreId;
    const session = data?.archiveBootstrapActiveSession ?? data?.archiveBootstrapLatestSession ?? null;

    const restoreDetail = requestManager.useGetBackupRestoreDetail(restoreId ?? '', {
        skip: !restoreId,
        fetchPolicy: 'cache-and-network',
    });
    const bootstrapProgress = requestManager.useGetArchiveBootstrapProgress(
        { sessionId: session?.id ?? 0, sampleSize: ArchiveConstants.BOOTSTRAP_UNRESOLVED_SAMPLE_SIZE },
        {
            skip: !session,
            fetchPolicy: 'cache-and-network',
            pollInterval: shouldPoll ? ArchiveConstants.OVERVIEW_POLL_INTERVAL_MILLISECONDS : 0,
        },
    );

    // kept as stable references so the refresh callback does not have to depend on the whole result objects
    const refetchRestoreDetail = restoreDetail.refetch;
    const refetchBootstrapProgress = bootstrapProgress.refetch;
    const bootstrapSessionId = session?.id;

    // Polling only the states that still progress on their own: a paused bootstrap is idle, a restore
    // that settled has nothing left to report, and a hard FAILED Komga scan never completes by itself,
    // so none of them may keep the overview requesting forever.
    const isInFlight = useMemo(
        () =>
            ArchiveStateUtil.isActive(latestRestore?.state, ACTIVE_RESTORE_STATES) ||
            ArchiveStateUtil.isActive(session?.state, PROGRESSING_BOOTSTRAP_STATES) ||
            ArchiveStateUtil.isActive(komga?.state, ACTIVE_KOMGA_STATES),
        [latestRestore?.state, session?.state, komga],
    );

    useEffect(() => setShouldPoll(isInFlight), [isInFlight]);

    /**
     * Refreshes every query the overview renders.
     *
     * The overview is one screen over three independent backlogs, so refreshing only one of them
     * would leave the restore detail or the bootstrap progress showing the state an action just changed.
     */
    const refresh = useCallback(async () => {
        try {
            await Promise.all([
                refetch(),
                ...(restoreId ? [refetchRestoreDetail()] : []),
                ...(bootstrapSessionId ? [refetchBootstrapProgress()] : []),
            ]);
        } catch (e) {
            makeToast(t`Could not refresh the archive overview`, 'error', getErrorMessage(e));
        }
    }, [refetch, refetchRestoreDetail, refetchBootstrapProgress, restoreId, bootstrapSessionId, t]);

    const runAction = useCallback(
        async (
            action: () => Promise<{ error?: unknown }>,
            successMessage: string,
            confirmation?: { title: string; message: string; confirmTitle: string; id: string },
        ) => {
            if (confirmation) {
                try {
                    await Confirmation.show(
                        {
                            title: confirmation.title,
                            message: confirmation.message,
                            actions: { confirm: { title: confirmation.confirmTitle } },
                        },
                        { id: confirmation.id },
                    );
                } catch {
                    // dismissing the dialog is a decision not to run the action
                    return;
                }
            }

            setIsWorking(true);
            try {
                const response = await action();
                if (response.error) {
                    makeToast(t`Could not run the action`, 'error', getErrorMessage(response.error));
                    return;
                }

                makeToast(successMessage, 'success');
                await refresh();
            } catch (e) {
                makeToast(t`Could not run the action`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [refresh, t],
    );

    const runBootstrapAction = (
        action: (sessionId: number) => Promise<{ error?: unknown }>,
        successMessage: string,
        confirmation?: { title: string; message: string; confirmTitle: string; id: string },
    ) => {
        const sessionId = session?.id;
        if (sessionId == null) {
            return;
        }

        void runAction(() => action(sessionId), successMessage, confirmation);
    };

    const runRestoreAction = (
        action: (id: string) => Promise<{ error?: unknown }>,
        successMessage: string,
        confirmation?: { title: string; message: string; confirmTitle: string; id: string },
    ) => {
        if (!restoreId) {
            return;
        }

        void runAction(() => action(restoreId), successMessage, confirmation);
    };

    const requestKomgaRescan = () =>
        runAction(() => requestManager.requestKomgaRescan().response, t`Komga rescan requested`);
    const retryKomgaRescan = () => runAction(() => requestManager.retryKomgaRescan().response, t`Komga rescan retried`);
    const pauseBootstrap = () =>
        runBootstrapAction(
            (sessionId) => requestManager.pauseArchiveBootstrap({ sessionId }).response,
            t`Bootstrap paused`,
        );
    const resumeBootstrap = () =>
        runBootstrapAction(
            (sessionId) => requestManager.resumeArchiveBootstrap({ sessionId }).response,
            t`Bootstrap resumed`,
        );
    const cancelBootstrap = () =>
        runBootstrapAction(
            (sessionId) => requestManager.cancelArchiveBootstrap({ sessionId }).response,
            t`Bootstrap cancelled`,
            {
                title: t`Cancel the archive bootstrap?`,
                message: t`Series that were already processed keep their candidates; the remaining ones are not processed.`,
                confirmTitle: t`Cancel bootstrap`,
                id: `archive-bootstrap-cancel-${session?.id}`,
            },
        );
    const retryBootstrapItems = () =>
        runBootstrapAction(
            (sessionId) => requestManager.retryArchiveBootstrapItems({ sessionId }).response,
            t`Failed bootstrap items requeued`,
        );
    const retryRestore = () =>
        runRestoreAction((id) => requestManager.retryBackupRestore({ restoreId: id }).response, t`Restore requeued`);
    const retryRestoreHandoff = () =>
        runRestoreAction(
            (id) => requestManager.retryBackupRestoreHandoff({ restoreId: id }).response,
            t`Restore handoff retried`,
        );
    const cancelRestore = () =>
        runRestoreAction((id) => requestManager.cancelBackupRestore({ restoreId: id }).response, t`Restore cancelled`, {
            title: t`Cancel this restore?`,
            message: t`The import stops where it is. Series that were already imported stay imported.`,
            confirmTitle: t`Cancel restore`,
            id: `archive-restore-cancel-${restoreId}`,
        });
    const cleanupRestore = () =>
        runRestoreAction(
            (id) => requestManager.cleanupBackupRestore({ restoreId: id }).response,
            t`Staged backup removed`,
            {
                title: t`Remove the staged backup?`,
                message: t`The uploaded backup copy kept on the server is deleted. This cannot be undone.`,
                confirmTitle: t`Remove`,
                id: `archive-restore-cleanup-${restoreId}`,
            },
        );

    if (error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the archive overview`}
                messageExtra={getErrorMessage(error)}
                retry={() => refresh()}
            />
        );
    }

    if (loading && !data) {
        return <LoadingPlaceholder usePadding />;
    }

    const progress = bootstrapProgress.data?.archiveBootstrapProgress;
    const unresolvedSources = bootstrapProgress.data?.archiveBootstrapUnresolvedSources ?? [];
    const restoreErrors = restoreDetail.data?.backupRestoreErrorCounts;
    const restoreAudits = restoreDetail.data?.backupRestoreAudits ?? [];

    return (
        <Stack sx={{ gap: 2 }}>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
                {shouldPoll && <Typography variant="caption">{t`Live updates active`}</Typography>}
                <Tooltip title={t`Refresh`}>
                    <IconButton onClick={() => refresh()} aria-label={t`Refresh the archive overview`}>
                        <RefreshIcon />
                    </IconButton>
                </Tooltip>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                    gap: 2,
                }}
            >
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {t`Archival queues`}
                        </Typography>
                        <Stack sx={{ gap: 1 }}>
                            <StatRow label={t`Awaiting approval`} value={ArchiveStateUtil.formatCount(approvalCount)} />
                            <StatRow
                                label={t`Queued for acquisition`}
                                value={ArchiveStateUtil.formatCount(queuedCount)}
                            />
                            <StatRow label={t`Downloading`} value={ArchiveStateUtil.formatCount(downloadingCount)} />
                            <StatRow
                                label={t`Awaiting remote confirmation`}
                                value={ArchiveStateUtil.formatCount(remotePendingCount)}
                            />
                            <StatRow
                                label={t`Remote durability unconfirmed`}
                                value={ArchiveStateUtil.formatCount(unconfirmedCount)}
                            />
                            <StatRow
                                label={t`Confirmed in remote storage`}
                                value={ArchiveStateUtil.formatCount(remoteConfirmedCount)}
                            />
                            <StatRow
                                label={t`Download failures`}
                                value={ArchiveStateUtil.formatCount(failedDownloadCount)}
                            />
                            <StatRow
                                label={t`Validation failures`}
                                value={ArchiveStateUtil.formatCount(failedValidationCount)}
                            />
                            <StatRow
                                label={t`Publication failures`}
                                value={ArchiveStateUtil.formatCount(publicationFailureCount)}
                            />
                            <StatRow
                                label={t`Pruning failures`}
                                value={ArchiveStateUtil.formatCount(pruningFailureCount)}
                            />
                        </Stack>
                        <Button
                            sx={{ mt: 2 }}
                            variant="outlined"
                            onClick={onOpenApprovalQueue}
                            disabled={isWorking}
                        >{t`Open approval queue`}</Button>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {t`Komga rescan`}
                        </Typography>
                        <Stack sx={{ gap: 1 }}>
                            <StatRow label={t`Configured`} value={komga?.configured ? t`Yes` : t`No`} />
                            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    {t`State`}
                                </Typography>
                                <StatusChip state={komga?.state} />
                            </Stack>
                            <StatRow
                                label={t`Last requested`}
                                value={ArchiveStateUtil.formatTimestamp(komga?.requestedAt)}
                            />
                            <StatRow
                                label={t`Last completed`}
                                value={ArchiveStateUtil.formatTimestamp(komga?.lastCompletedAt)}
                            />
                            {komga?.configurationError && (
                                <Typography variant="body2" color="error">
                                    {komga.configurationError}
                                </Typography>
                            )}
                            {komga?.lastError && (
                                <Typography variant="body2" color="error">
                                    {komga.lastError}
                                </Typography>
                            )}
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                            <Button
                                variant="outlined"
                                onClick={() => requestKomgaRescan()}
                                disabled={isWorking || !komga?.configured}
                            >{t`Request rescan`}</Button>
                            <Button
                                variant="outlined"
                                onClick={() => retryKomgaRescan()}
                                disabled={isWorking || !komga?.configured}
                            >{t`Retry rescan`}</Button>
                        </Stack>
                    </CardContent>
                </Card>

                <ArchiveDeliveryStatusCard />

                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {t`Backup restore`}
                        </Typography>
                        {!latestRestore ? (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >{t`No restore was ever started`}</Typography>
                        ) : (
                            <>
                                <Stack sx={{ gap: 1 }}>
                                    <Stack
                                        sx={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {t`State`}
                                        </Typography>
                                        <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                            <StatusChip state={latestRestore.state} />
                                            <StatusChip state={latestRestore.phase} />
                                        </Stack>
                                    </Stack>
                                    <StatRow
                                        label={t`Progress`}
                                        value={ArchiveStateUtil.formatProgress(
                                            latestRestore.progress,
                                            latestRestore.total,
                                        )}
                                    />
                                    <StatRow
                                        label={t`Errors`}
                                        value={ArchiveStateUtil.formatCount(latestRestore.errorCount)}
                                    />
                                    <StatRow
                                        label={t`Handoff`}
                                        value={ArchiveStateUtil.prettify(latestRestore.handoffState)}
                                    />
                                    <StatRow
                                        label={t`Missing sources`}
                                        value={ArchiveStateUtil.formatCount(restoreErrors?.missingSources)}
                                    />
                                    <StatRow
                                        label={t`Manga errors`}
                                        value={ArchiveStateUtil.formatCount(restoreErrors?.mangaErrors)}
                                    />
                                    <StatRow
                                        label={t`Staged payload retained`}
                                        value={latestRestore.stagedPayloadRetained ? t`Yes` : t`No`}
                                    />
                                    {latestRestore.handoffError && (
                                        <Typography variant="body2" color="error">
                                            {latestRestore.handoffError}
                                        </Typography>
                                    )}
                                    {latestRestore.lastError && (
                                        <Typography variant="body2" color="error">
                                            {latestRestore.lastError}
                                        </Typography>
                                    )}
                                </Stack>
                                {!!restoreAudits.length && (
                                    <Stack sx={{ gap: 1, mt: 2 }}>
                                        <Typography variant="subtitle2">{t`Latest problems`}</Typography>
                                        {restoreAudits.map((audit) => (
                                            <Typography key={audit.id} variant="body2" color="text.secondary">
                                                {ArchiveStateUtil.prettify(audit.level)}: {audit.message}
                                            </Typography>
                                        ))}
                                    </Stack>
                                )}
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                    <Button
                                        variant="outlined"
                                        onClick={() => retryRestore()}
                                        disabled={
                                            isWorking ||
                                            !ArchiveStateUtil.isActive(latestRestore.state, ['FAILURE', 'CANCELLED'])
                                        }
                                    >{t`Retry`}</Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => retryRestoreHandoff()}
                                        disabled={
                                            isWorking ||
                                            !ArchiveStateUtil.isActive(latestRestore.handoffState, [
                                                'BLOCKED',
                                                'FAILED',
                                            ])
                                        }
                                    >{t`Retry handoff`}</Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => cancelRestore()}
                                        disabled={
                                            isWorking ||
                                            !ArchiveStateUtil.isActive(latestRestore.state, ACTIVE_RESTORE_STATES)
                                        }
                                    >{t`Cancel`}</Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => cleanupRestore()}
                                        disabled={
                                            isWorking ||
                                            !latestRestore.stagedPayloadRetained ||
                                            !latestRestore.finishedAt
                                        }
                                    >{t`Remove staged backup`}</Button>
                                </Stack>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {t`Archive bootstrap`}
                        </Typography>
                        {!session ? (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >{t`No bootstrap was ever started`}</Typography>
                        ) : (
                            <>
                                <Stack sx={{ gap: 1 }}>
                                    <Stack
                                        sx={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {t`State`}
                                        </Typography>
                                        <StatusChip state={session.state} />
                                    </Stack>
                                    <StatRow
                                        label={t`Items`}
                                        value={ArchiveStateUtil.formatProgress(
                                            progress?.complete ?? 0,
                                            progress?.total ?? 0,
                                        )}
                                    />
                                    <StatRow
                                        label={t`Remaining`}
                                        value={ArchiveStateUtil.formatCount(progress?.remaining)}
                                    />
                                    <StatRow
                                        label={t`Pending`}
                                        value={ArchiveStateUtil.formatCount(progress?.pending)}
                                    />
                                    <StatRow
                                        label={t`Processing`}
                                        value={ArchiveStateUtil.formatCount(progress?.processing)}
                                    />
                                    <StatRow
                                        label={t`Waiting to retry`}
                                        value={ArchiveStateUtil.formatCount(progress?.retryWait)}
                                    />
                                    <StatRow label={t`Failed`} value={ArchiveStateUtil.formatCount(progress?.failed)} />
                                    <StatRow
                                        label={t`Unresolved sources`}
                                        value={ArchiveStateUtil.formatCount(progress?.unresolvedSource)}
                                    />
                                    <StatRow
                                        label={t`Next item`}
                                        value={ArchiveStateUtil.formatTimestamp(session.nextItemAt)}
                                    />
                                </Stack>
                                {!!unresolvedSources.length && (
                                    <Stack sx={{ gap: 1, mt: 2 }}>
                                        <Typography variant="subtitle2">{t`Sources without an installed extension`}</Typography>
                                        {unresolvedSources.map((source) => (
                                            <Typography key={source.sourceId} variant="body2" color="text.secondary">
                                                {t`Source ${source.sourceId}: ${source.mangaCount} series`}
                                                {source.sampleTitles.length
                                                    ? ` (${source.sampleTitles.join(', ')})`
                                                    : ''}
                                            </Typography>
                                        ))}
                                    </Stack>
                                )}
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                    <Button
                                        variant="outlined"
                                        onClick={() => pauseBootstrap()}
                                        disabled={isWorking || String(session.state) !== 'RUNNING'}
                                    >{t`Pause`}</Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => resumeBootstrap()}
                                        disabled={isWorking || String(session.state) !== 'PAUSED'}
                                    >{t`Resume`}</Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => cancelBootstrap()}
                                        disabled={
                                            isWorking ||
                                            !ArchiveStateUtil.isActive(session.state, ACTIVE_BOOTSTRAP_STATES)
                                        }
                                    >{t`Cancel`}</Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => retryBootstrapItems()}
                                        disabled={isWorking}
                                    >{t`Retry failed items`}</Button>
                                </Stack>
                            </>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    );
};
