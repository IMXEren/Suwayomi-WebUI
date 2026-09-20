/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { AwaitableComponentProps } from 'awaitable-component';
import { useLingui } from '@lingui/react/macro';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { makeToast } from '@/base/utils/Toast.ts';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import {
    CanonicalBindingRole,
    CanonicalWriteOutcome,
    ChapterRevisionSweepKind,
    MangaAcquisitionPolicy,
    type UpdateMangaPatchInput,
} from '@/lib/graphql/generated/graphql-base.types.ts';
import { ARCHIVE_RETENTION_UNLIMITED, ArchiveRetentionMode } from '@/features/archive/Archive.constants.ts';

const formatRetention = (retention: number, unlimitedLabel: string): string =>
    retention === ARCHIVE_RETENTION_UNLIMITED ? unlimitedLabel : String(retention);

/**
 * The per-series archival intent.
 *
 * The policy decides whether a newly discovered revision is queued, waits for approval or is left inert,
 * and the retention override decides how many superseded accepted revisions are kept besides the active one.
 */
export const MangaArchiveSettingsDialog = ({
    mangaId,
    onDismiss,
    onSubmit,
    isVisible,
    onExitComplete,
}: AwaitableComponentProps<boolean> & { mangaId: number }) => {
    const { t } = useLingui();

    const { data, loading, error } = requestManager.useGetMangaArchiveSettings(
        { id: mangaId },
        { fetchPolicy: 'cache-and-network' },
    );

    const [policy, setPolicy] = useState<MangaAcquisitionPolicy>(MangaAcquisitionPolicy.Manual);
    const [retentionMode, setRetentionMode] = useState<ArchiveRetentionMode>(ArchiveRetentionMode.INHERIT);
    const [retentionCount, setRetentionCount] = useState(0);
    const [isSaving, setIsSaving] = useState(false);
    const [isSweeping, setIsSweeping] = useState(false);

    const [attachWorkKey, setAttachWorkKey] = useState('');
    const [attachRole, setAttachRole] = useState<CanonicalBindingRole>(CanonicalBindingRole.Active);
    const [attachAsPrimary, setAttachAsPrimary] = useState(false);
    const [bindingRole, setBindingRole] = useState<CanonicalBindingRole>(CanonicalBindingRole.Active);
    const [bindingPriority, setBindingPriority] = useState('');
    const [isBindingWorking, setIsBindingWorking] = useState(false);

    const initializedRef = useRef(false);
    const bindingInitializedRef = useRef(false);

    /** The canonical side of this series: which work it is bound to, if any, and how that binding acts. */
    const canonicalRequest = requestManager.useGetMangaCanonicalBinding(
        { mangaId },
        { fetchPolicy: 'cache-and-network' },
    );

    const canonicalBinding = canonicalRequest.data?.canonicalBindingForManga ?? null;
    const canonicalWork = canonicalRequest.data?.canonicalWorkForManga ?? null;

    useEffect(() => {
        const manga = data?.manga;
        if (!manga || initializedRef.current) {
            return;
        }

        initializedRef.current = true;
        setPolicy(manga.acquisitionPolicy);

        const retention = manga.acceptedRevisionRetention;
        if (retention == null) {
            setRetentionMode(ArchiveRetentionMode.INHERIT);
            return;
        }

        setRetentionMode(
            retention === ARCHIVE_RETENTION_UNLIMITED ? ArchiveRetentionMode.UNLIMITED : ArchiveRetentionMode.LIMITED,
        );
        setRetentionCount(Math.max(retention, 0));
    }, [data?.manga]);

    useEffect(() => {
        if (!canonicalBinding || bindingInitializedRef.current) {
            return;
        }

        bindingInitializedRef.current = true;
        setBindingRole(canonicalBinding.role);
        setBindingPriority(String(canonicalBinding.priority));
    }, [canonicalBinding]);

    const manga = data?.manga;

    /**
     * Starts a revision sweep for this series only.
     *
     * A full history sweep of one series re-downloads every chapter of it, so it is confirmed, while a
     * recent-only sweep is the same bounded work the automatic sweep does and is not.
     */
    const startSweep = async (kind: ChapterRevisionSweepKind) => {
        if (kind === ChapterRevisionSweepKind.ManualFull) {
            try {
                await Confirmation.show(
                    {
                        title: t`Sweep the full history of this series?`,
                        message: t`Every chapter is re-downloaded to compare its content, which can take a long time.`,
                        actions: { confirm: { title: t`Start full sweep` } },
                    },
                    { id: 'manga-archive-sweep-full' },
                );
            } catch {
                return;
            }
        }

        setIsSweeping(true);
        try {
            const response = await requestManager.startChapterRevisionSweep({ kind, mangaIds: [mangaId] }).response;

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
            onSubmit(true);
        } catch (e) {
            makeToast(t`Could not start the sweep`, 'error', getErrorMessage(e));
        } finally {
            setIsSweeping(false);
        }
    };

    /**
     * Runs one canonical mutation and re-reads the series' binding afterwards.
     *
     * The server answers a conflict or a missing work as a typed outcome rather than an error, so both
     * are read here; on success the dialog shows the server's own state instead of the input it sent.
     */
    const runBindingAction = async (
        action: () => Promise<{ error?: unknown; outcome: string | null | undefined }>,
        successMessage: string,
        failureMessage: string,
    ) => {
        setIsBindingWorking(true);
        try {
            const response = await action();
            if (response.error) {
                makeToast(failureMessage, 'error', getErrorMessage(response.error));
                return;
            }

            const { outcome } = response;
            if (outcome && outcome !== CanonicalWriteOutcome.Applied) {
                makeToast(t`${failureMessage}: ${outcome}`, 'error');
                return;
            }

            makeToast(successMessage, 'success');
            await canonicalRequest.refetch().catch(() => undefined);
        } catch (e) {
            makeToast(failureMessage, 'error', getErrorMessage(e));
        } finally {
            setIsBindingWorking(false);
        }
    };

    const attachToWork = async () => {
        const workKey = attachWorkKey.trim();
        if (!workKey) {
            makeToast(t`Enter the key of an existing work`, 'error');
            return;
        }

        await runBindingAction(
            () =>
                requestManager
                    .attachMangaToCanonicalWork({
                        workKey,
                        mangaId,
                        role: attachRole,
                        isPrimary: attachAsPrimary,
                        priority: null,
                    })
                    .response.then((response) => ({
                        error: response.error,
                        outcome: response.data?.attachMangaToCanonicalWork.outcome,
                    })),
            t`Series attached to the work`,
            t`Could not attach the series`,
        );
        setAttachWorkKey('');
    };

    const saveBinding = async () => {
        if (!canonicalBinding) {
            return;
        }

        const priority = bindingPriority.trim() === '' ? null : Math.trunc(Number(bindingPriority));
        if (priority != null && !Number.isFinite(priority)) {
            makeToast(t`The priority has to be a number`, 'error');
            return;
        }

        await runBindingAction(
            () =>
                requestManager
                    .changeCanonicalBinding({ bindingId: canonicalBinding.id, role: bindingRole, priority })
                    .response.then((response) => ({
                        error: response.error,
                        outcome: response.data?.changeCanonicalBinding.outcome,
                    })),
            t`Binding updated`,
            t`Could not update the binding`,
        );
    };

    const promoteBinding = async () => {
        if (!canonicalBinding) {
            return;
        }

        try {
            await Confirmation.show(
                {
                    title: t`Make this series the primary source copy?`,
                    message: t`The copy that is currently primary becomes an ordinary binding of the same work.`,
                    actions: { confirm: { title: t`Make primary` } },
                },
                { id: 'manga-canonical-promote' },
            );
        } catch {
            return;
        }

        await runBindingAction(
            () =>
                requestManager.promoteCanonicalBinding(canonicalBinding.id).response.then((response) => ({
                    error: response.error,
                    outcome: response.data?.promoteCanonicalBinding.outcome,
                })),
            t`Source copy promoted`,
            t`Could not promote the source copy`,
        );
    };

    const detachBinding = async () => {
        if (!canonicalBinding) {
            return;
        }

        try {
            await Confirmation.show(
                {
                    title: t`Remove this series from its work?`,
                    message: t`The series keeps its chapters and archived revisions; it simply stops being part of the work.`,
                    actions: { confirm: { title: t`Detach` } },
                },
                { id: 'manga-canonical-detach' },
            );
        } catch {
            return;
        }

        await runBindingAction(
            () =>
                requestManager.detachCanonicalBinding(canonicalBinding.id).response.then((response) => ({
                    error: response.error,
                    outcome: response.data?.detachCanonicalBinding.outcome,
                })),
            t`Series detached`,
            t`Could not detach the series`,
        );
    };

    const save = async () => {
        // Only the retention fields differ per mode; the inherit flag is always sent because the mutation
        // requires it, and it is what makes the server clear an override the series no longer wants.
        const retention: Pick<UpdateMangaPatchInput, 'inheritAcceptedRevisionRetention' | 'acceptedRevisionRetention'> =
            retentionMode === ArchiveRetentionMode.INHERIT
                ? { inheritAcceptedRevisionRetention: true }
                : {
                      inheritAcceptedRevisionRetention: false,
                      acceptedRevisionRetention:
                          retentionMode === ArchiveRetentionMode.UNLIMITED
                              ? ARCHIVE_RETENTION_UNLIMITED
                              : retentionCount,
                  };

        setIsSaving(true);
        try {
            const response = await requestManager.updateManga(mangaId, {
                updateManga: { acquisitionPolicy: policy, ...retention },
            }).response;

            if (response.error) {
                makeToast(t`Could not save the archival settings`, 'error', getErrorMessage(response.error));
                return;
            }

            makeToast(t`Archival settings saved`, 'success');
            onSubmit(true);
        } catch (e) {
            makeToast(t`Could not save the archival settings`, 'error', getErrorMessage(e));
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Dialog open={isVisible} onTransitionExited={onExitComplete} onClose={onDismiss} maxWidth="sm" fullWidth>
            <DialogTitle>{t`Archival settings`}</DialogTitle>
            <DialogContent>
                {error && (
                    <Typography variant="body2" color="error">
                        {getErrorMessage(error)}
                    </Typography>
                )}
                {loading && !manga && <Typography variant="body2">{t`Loading…`}</Typography>}
                {manga && (
                    <Stack sx={{ gap: 2, pt: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            {manga.title}
                        </Typography>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="manga-archive-policy-label">{t`Acquisition policy`}</InputLabel>
                            <Select
                                labelId="manga-archive-policy-label"
                                label={t`Acquisition policy`}
                                value={policy}
                                onChange={(event) => setPolicy(event.target.value as MangaAcquisitionPolicy)}
                            >
                                <MenuItem value={MangaAcquisitionPolicy.Auto}>{t`Automatic`}</MenuItem>
                                <MenuItem value={MangaAcquisitionPolicy.Manual}>{t`Wait for approval`}</MenuItem>
                                <MenuItem value={MangaAcquisitionPolicy.Paused}>{t`Paused`}</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography variant="caption" color="text.secondary">
                            {t`Automatic queues new revisions right away, manual waits for approval, paused only records them.`}
                        </Typography>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="manga-archive-retention-label">{t`Kept revisions`}</InputLabel>
                            <Select
                                labelId="manga-archive-retention-label"
                                label={t`Kept revisions`}
                                value={retentionMode}
                                onChange={(event) => setRetentionMode(event.target.value as ArchiveRetentionMode)}
                            >
                                <MenuItem value={ArchiveRetentionMode.INHERIT}>{t`Use the server default`}</MenuItem>
                                <MenuItem value={ArchiveRetentionMode.LIMITED}>{t`A fixed number`}</MenuItem>
                                <MenuItem value={ArchiveRetentionMode.UNLIMITED}>{t`Unlimited`}</MenuItem>
                            </Select>
                        </FormControl>
                        {retentionMode === ArchiveRetentionMode.LIMITED && (
                            <TextField
                                type="number"
                                size="small"
                                fullWidth
                                label={t`Historical revisions to keep`}
                                value={retentionCount}
                                slotProps={{ htmlInput: { min: 0, step: 1 } }}
                                onChange={(event) =>
                                    setRetentionCount(Math.max(0, Math.trunc(Number(event.target.value) || 0)))
                                }
                            />
                        )}
                        <Typography variant="caption" color="text.secondary">
                            {t`Historical revisions are kept in addition to the active one.`}
                        </Typography>
                        <Typography variant="body2">
                            {t`Currently kept: ${formatRetention(manga.effectiveAcceptedRevisionRetention, t`Unlimited`)}`}
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2">{t`Check this series for changed content`}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {t`A sweep re-downloads chapters and compares them with the archived revision, because an extension does not announce that a page changed.`}
                        </Typography>
                        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                            <Button
                                variant="outlined"
                                disabled={isSweeping}
                                onClick={() => void startSweep(ChapterRevisionSweepKind.ManualRecent)}
                            >{t`Sweep the newest chapters`}</Button>
                            <Button
                                variant="outlined"
                                color="warning"
                                disabled={isSweeping}
                                onClick={() => void startSweep(ChapterRevisionSweepKind.ManualFull)}
                            >{t`Sweep the full history`}</Button>
                        </Stack>
                        <Divider />
                        <Typography variant="subtitle2">{t`Canonical work`}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {t`A work groups several source copies of one series. Nothing is merged automatically: binding a series to a work is a statement an operator makes.`}
                        </Typography>

                        {canonicalRequest.error && (
                            <Typography variant="body2" color="error">
                                {getErrorMessage(canonicalRequest.error)}
                            </Typography>
                        )}

                        {!canonicalBinding && !canonicalRequest.loading && (
                            <Typography variant="body2" color="text.secondary">
                                {t`This series is not bound to a work.`}
                            </Typography>
                        )}

                        {canonicalBinding && (
                            <Stack sx={{ gap: 1 }}>
                                <Typography variant="body2">{canonicalWork?.title ?? t`Unknown work`}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {[canonicalBinding.workKey, `${t`Priority`} ${canonicalBinding.priority}`]
                                        .filter(Boolean)
                                        .join(' · ')}
                                </Typography>
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        {`${t`Role`} ${canonicalBinding.role}`}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {canonicalBinding.isPrimary ? t`Primary source copy` : t`Not the primary copy`}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {canonicalBinding.acquisitionEligible
                                            ? t`Usable for acquisition`
                                            : t`Not usable for acquisition`}
                                    </Typography>
                                    {!canonicalBinding.mangaAvailable && (
                                        <Typography variant="caption" color="error">
                                            {t`The source copy is no longer available`}
                                        </Typography>
                                    )}
                                </Stack>
                                {canonicalWork && (
                                    <Typography variant="caption" color="text.secondary">
                                        {t`Duplicate policy: ${canonicalWork.duplicateStrategy} (advisory, applied: ${canonicalWork.duplicatePolicyApplied ? 'yes' : 'no'})`}
                                    </Typography>
                                )}
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="manga-canonical-role-label">{t`Binding role`}</InputLabel>
                                    <Select
                                        labelId="manga-canonical-role-label"
                                        label={t`Binding role`}
                                        value={bindingRole}
                                        onChange={(event) => setBindingRole(event.target.value as CanonicalBindingRole)}
                                    >
                                        <MenuItem value={CanonicalBindingRole.Active}>{t`Active`}</MenuItem>
                                        <MenuItem value={CanonicalBindingRole.Fallback}>{t`Fallback`}</MenuItem>
                                        <MenuItem value={CanonicalBindingRole.Disabled}>{t`Disabled`}</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    type="number"
                                    size="small"
                                    fullWidth
                                    label={t`Priority`}
                                    value={bindingPriority}
                                    onChange={(event) => setBindingPriority(event.target.value)}
                                />
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                    <Button
                                        variant="outlined"
                                        disabled={isBindingWorking}
                                        onClick={() => void saveBinding()}
                                    >{t`Save binding`}</Button>
                                    <Button
                                        variant="outlined"
                                        disabled={isBindingWorking || canonicalBinding.isPrimary}
                                        onClick={() => void promoteBinding()}
                                    >{t`Make primary copy`}</Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        disabled={isBindingWorking}
                                        onClick={() => void detachBinding()}
                                    >{t`Detach from work`}</Button>
                                </Stack>
                            </Stack>
                        )}

                        {!canonicalBinding && !canonicalRequest.loading && (
                            <Stack sx={{ gap: 1 }}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label={t`Key of an existing work`}
                                    value={attachWorkKey}
                                    onChange={(event) => setAttachWorkKey(event.target.value)}
                                    helperText={t`Works are created on the archive dashboard, where their key is listed.`}
                                />
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="manga-canonical-attach-role-label">{t`Binding role`}</InputLabel>
                                    <Select
                                        labelId="manga-canonical-attach-role-label"
                                        label={t`Binding role`}
                                        value={attachRole}
                                        onChange={(event) => setAttachRole(event.target.value as CanonicalBindingRole)}
                                    >
                                        <MenuItem value={CanonicalBindingRole.Active}>{t`Active`}</MenuItem>
                                        <MenuItem value={CanonicalBindingRole.Fallback}>{t`Fallback`}</MenuItem>
                                        <MenuItem value={CanonicalBindingRole.Disabled}>{t`Disabled`}</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={attachAsPrimary}
                                            onChange={(event) => setAttachAsPrimary(event.target.checked)}
                                        />
                                    }
                                    label={t`Make the primary source copy`}
                                />
                                <Stack sx={{ flexDirection: 'row' }}>
                                    <Button
                                        variant="outlined"
                                        disabled={isBindingWorking || attachWorkKey.trim() === ''}
                                        onClick={() => void attachToWork()}
                                    >{t`Attach to work`}</Button>
                                </Stack>
                            </Stack>
                        )}
                    </Stack>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onDismiss} disabled={isSaving}>{t`Cancel`}</Button>
                <Button onClick={() => void save()} disabled={isSaving || !manga} variant="contained">{t`Save`}</Button>
            </DialogActions>
        </Dialog>
    );
};
