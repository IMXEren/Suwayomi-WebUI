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
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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
import type {
    GetCanonicalIdentityStatusQuery,
    GetCanonicalWorkBindingsQuery,
    GetCanonicalWorksQuery,
} from '@/lib/graphql/generated/graphql.ts';
import {
    CanonicalBindingRole,
    CanonicalDuplicateStrategy,
    CanonicalWriteOutcome,
} from '@/lib/graphql/generated/graphql-base.types.ts';
import { ArchiveConstants } from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';

type CanonicalWork = GetCanonicalWorksQuery['canonicalWorks']['nodes'][number];
type CanonicalBinding = GetCanonicalWorkBindingsQuery['canonicalBindingsForWork']['nodes'][number];
type CanonicalStatus = GetCanonicalIdentityStatusQuery['canonicalIdentityStatus'];
type ImportResult = {
    worksCreated: number;
    worksUpdated: number;
    bindingsBound: number;
    bindingsRebound: number;
    bindingsUnresolved: number;
};

/** The duplicate strategies a work can record, in the order they are offered. */
const DUPLICATE_STRATEGIES: CanonicalDuplicateStrategy[] = [
    CanonicalDuplicateStrategy.KeepAll,
    CanonicalDuplicateStrategy.PreferPrimarySource,
    CanonicalDuplicateStrategy.PreferScanlator,
];

const isConflict = (outcome: CanonicalWriteOutcome): boolean => outcome === CanonicalWriteOutcome.Conflict;

/**
 * The canonical works tab.
 *
 * A canonical work is a grouping an operator states, never one the server infers: several source copies
 * of the same series can be bound to one work so that one of them is the copy the archive acquires from,
 * and the others are fallbacks. Nothing here merges chapters or decides that two series are the same -
 * attaching a series is an explicit act with an explicit manga id.
 *
 * The duplicate strategy is presented as what it is: advisory. Nothing in the server merges, deletes or
 * hides a duplicate chapter because of it, which is exactly what `duplicatePolicyApplied` reports.
 */
export const ArchiveCanonicalWorksPanel: React.FC = () => {
    const { t } = useLingui();

    const [search, setSearch] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    const [appendedWorks, setAppendedWorks] = useState<CanonicalWork[]>([]);
    const [worksCursor, setWorksCursor] = useState<string | null>(null);
    const [appendedWorksHaveNext, setAppendedWorksHaveNext] = useState(false);
    const [selectedWorkKey, setSelectedWorkKey] = useState<string | null>(null);
    const [isWorking, setIsWorking] = useState(false);

    const [newTitle, setNewTitle] = useState('');
    const [newDuplicateStrategy, setNewDuplicateStrategy] = useState<CanonicalDuplicateStrategy>(
        CanonicalDuplicateStrategy.KeepAll,
    );
    const [newPreferredScanlator, setNewPreferredScanlator] = useState('');

    const [editTitle, setEditTitle] = useState('');
    const [editDuplicateStrategy, setEditDuplicateStrategy] = useState<CanonicalDuplicateStrategy>(
        CanonicalDuplicateStrategy.KeepAll,
    );
    const [editPreferredScanlator, setEditPreferredScanlator] = useState('');
    const [editClearPreferredScanlator, setEditClearPreferredScanlator] = useState(false);

    const [attachMangaId, setAttachMangaId] = useState('');
    const [attachRole, setAttachRole] = useState<CanonicalBindingRole>(CanonicalBindingRole.Active);
    const [attachPriority, setAttachPriority] = useState('');
    const [attachIsPrimary, setAttachIsPrimary] = useState(false);

    const [bindingRoleDrafts, setBindingRoleDrafts] = useState<Record<number, CanonicalBindingRole>>({});
    const [bindingPriorityDrafts, setBindingPriorityDrafts] = useState<Record<number, string>>({});

    const [exportPayload, setExportPayload] = useState('');
    const [exportSummary, setExportSummary] = useState<{
        schemaVersion: number;
        workCount: number;
        bindingCount: number;
    } | null>(null);
    const [importText, setImportText] = useState('');
    const [importResult, setImportResult] = useState<ImportResult | null>(null);

    const importFileRef = useRef<HTMLInputElement | null>(null);

    const statusRequest = requestManager.useGetCanonicalIdentityStatus({ fetchPolicy: 'cache-and-network' });

    const worksRequest = requestManager.useGetCanonicalWorks(
        { first: ArchiveConstants.CANONICAL_WORK_PAGE_SIZE, titleContains: appliedSearch || null },
        { fetchPolicy: 'cache-and-network' },
    );

    const selectedWork = useMemo(() => {
        const firstPageWorks = worksRequest.data?.canonicalWorks.nodes ?? [];
        return [...firstPageWorks, ...appendedWorks].find((work) => work.workKey === selectedWorkKey) ?? null;
    }, [worksRequest.data?.canonicalWorks.nodes, appendedWorks, selectedWorkKey]);

    const bindingsRequest = requestManager.useGetCanonicalWorkBindings(
        { workId: selectedWork?.id ?? 0 },
        { skip: selectedWork == null, fetchPolicy: 'cache-and-network' },
    );

    const firstPageWorks = worksRequest.data?.canonicalWorks.nodes ?? [];
    const worksPageInfo = worksRequest.data?.canonicalWorks.pageInfo;
    const works = useMemo(() => {
        const seen = new Set<string>();
        return [...firstPageWorks, ...appendedWorks].filter((work) => {
            if (seen.has(work.workKey)) {
                return false;
            }
            seen.add(work.workKey);
            return true;
        });
    }, [firstPageWorks, appendedWorks]);
    const worksHaveAppendedPages = worksCursor !== null;
    /** Whether the server said there is another page after the works on screen. */
    const worksHasNextPage = worksHaveAppendedPages ? appendedWorksHaveNext : !!worksPageInfo?.hasNextPage;

    const bindings = bindingsRequest.data?.canonicalBindingsForWork.nodes ?? [];

    /** Forgets every appended page, so the next read of the work list starts at its first server page. */
    const resetAppendedWorks = useCallback(() => {
        setAppendedWorks([]);
        setWorksCursor(null);
        setAppendedWorksHaveNext(false);
    }, []);

    /** Fills the rename form from the selected work, so a work that changed on the server is re-read. */
    useEffect(() => {
        if (!selectedWork) {
            return;
        }

        setEditTitle(selectedWork.title);
        setEditDuplicateStrategy(selectedWork.duplicateStrategy);
        setEditPreferredScanlator(selectedWork.preferredScanlator ?? '');
        setEditClearPreferredScanlator(false);
    }, [selectedWork]);

    const refreshAll = useCallback(async () => {
        setIsWorking(true);
        resetAppendedWorks();
        try {
            const requests: Promise<unknown>[] = [
                statusRequest.refetch(),
                worksRequest.refetch(),
                bindingsRequest.refetch().catch(() => undefined),
            ];
            await Promise.all(requests.map((request) => request.catch(() => undefined)));
        } finally {
            setIsWorking(false);
        }
    }, [resetAppendedWorks, statusRequest.refetch, worksRequest.refetch, bindingsRequest.refetch]);

    const loadMoreWorks = useCallback(async () => {
        setIsWorking(true);
        try {
            const after = worksHaveAppendedPages ? worksCursor : worksPageInfo?.endCursor;
            const response = await requestManager.getCanonicalWorksPage({
                first: ArchiveConstants.CANONICAL_WORK_PAGE_SIZE,
                titleContains: appliedSearch || null,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more works`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.canonicalWorks;
            const endCursor = page?.pageInfo.endCursor;
            // an empty page, a missing cursor, or a cursor that did not move is the end of the list: the
            // works already on screen are kept and the action stops being offered
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedWorksHaveNext(false);
                return;
            }

            setAppendedWorks((current) => [...current, ...page.nodes]);
            setWorksCursor(endCursor);
            setAppendedWorksHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more works`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [worksHaveAppendedPages, worksCursor, worksPageInfo?.endCursor, appliedSearch, t]);

    const applySearch = () => {
        setAppliedSearch(search.trim());
        setSelectedWorkKey(null);
        resetAppendedWorks();
        setBindingRoleDrafts({});
        setBindingPriorityDrafts({});
    };

    const createWork = useCallback(async () => {
        const title = newTitle.trim();
        if (!title) {
            makeToast(t`A work needs a title`, 'error');
            return;
        }

        setIsWorking(true);
        try {
            const response = await requestManager.createCanonicalWork({
                title,
                duplicateStrategy: newDuplicateStrategy,
                preferredScanlator: newPreferredScanlator.trim() || null,
            }).response;

            if (response.error) {
                makeToast(t`Could not create the work`, 'error', getErrorMessage(response.error));
                return;
            }

            const payload = response.data?.createCanonicalWork;
            if (isConflict(payload?.outcome ?? CanonicalWriteOutcome.NotFound)) {
                makeToast(t`A work with that key already exists`, 'error');
                return;
            }
            if (!payload?.work) {
                makeToast(t`The work could not be created`, 'error');
                return;
            }

            makeToast(t`Work created`, 'success');
            setNewTitle('');
            setNewPreferredScanlator('');
            await statusRequest.refetch().catch(() => undefined);
            await worksRequest.refetch().catch(() => undefined);
            setSelectedWorkKey(payload.work.workKey);
        } catch (e) {
            makeToast(t`Could not create the work`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [newTitle, newDuplicateStrategy, newPreferredScanlator, statusRequest.refetch, worksRequest.refetch, t]);

    const updateWork = useCallback(async () => {
        if (!selectedWork) {
            return;
        }

        const title = editTitle.trim();
        if (!title) {
            makeToast(t`A work needs a title`, 'error');
            return;
        }

        setIsWorking(true);
        try {
            const response = await requestManager.updateCanonicalWork({
                workKey: selectedWork.workKey,
                title,
                duplicateStrategy: editDuplicateStrategy,
                preferredScanlator: editClearPreferredScanlator ? null : editPreferredScanlator.trim() || null,
                clearPreferredScanlator: editClearPreferredScanlator,
            }).response;

            if (response.error) {
                makeToast(t`Could not save the work`, 'error', getErrorMessage(response.error));
                return;
            }

            if (isConflict(response.data?.updateCanonicalWork.outcome ?? CanonicalWriteOutcome.NotFound)) {
                makeToast(t`The work could not be saved because it conflicts with its current state`, 'error');
                return;
            }

            makeToast(t`Work saved`, 'success');
            // the server is the only source of truth here: a clamped scanlator or a refused change shows
            // up in the re-read, not in the form that was typed
            await worksRequest.refetch().catch(() => undefined);
        } catch (e) {
            makeToast(t`Could not save the work`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [
        selectedWork,
        editTitle,
        editDuplicateStrategy,
        editPreferredScanlator,
        editClearPreferredScanlator,
        worksRequest.refetch,
        t,
    ]);

    const deleteWork = useCallback(async () => {
        if (!selectedWork) {
            return;
        }

        try {
            await Confirmation.show(
                {
                    title: t`Delete this work?`,
                    message: t`The work and its bindings are removed. The series themselves, their chapters and everything archived stay exactly where they are.`,
                    actions: { confirm: { title: t`Delete work` } },
                },
                { id: 'archive-canonical-delete-work' },
            );
        } catch {
            return;
        }

        setIsWorking(true);
        try {
            const response = await requestManager.deleteCanonicalWork(selectedWork.workKey).response;

            if (response.error) {
                makeToast(t`Could not delete the work`, 'error', getErrorMessage(response.error));
                return;
            }

            makeToast(t`Work deleted`, 'success');
            setSelectedWorkKey(null);
            setBindingRoleDrafts({});
            setBindingPriorityDrafts({});
            await statusRequest.refetch().catch(() => undefined);
            await worksRequest.refetch().catch(() => undefined);
        } catch (e) {
            makeToast(t`Could not delete the work`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [selectedWork, statusRequest.refetch, worksRequest.refetch, t]);

    const attachManga = useCallback(async () => {
        if (!selectedWork) {
            return;
        }

        const mangaId = Number(attachMangaId);
        if (!Number.isInteger(mangaId) || mangaId <= 0) {
            makeToast(t`Enter the numeric id of the series to attach`, 'error');
            return;
        }

        const priority = attachPriority.trim() === '' ? null : Number(attachPriority);
        if (priority != null && (!Number.isInteger(priority) || priority < 0)) {
            makeToast(t`The priority has to be a whole number that is not negative`, 'error');
            return;
        }

        setIsWorking(true);
        try {
            const response = await requestManager.attachMangaToCanonicalWork({
                workKey: selectedWork.workKey,
                mangaId,
                role: attachRole,
                priority,
                isPrimary: attachIsPrimary,
            }).response;

            if (response.error) {
                makeToast(t`Could not attach the series`, 'error', getErrorMessage(response.error));
                return;
            }

            const outcome = response.data?.attachMangaToCanonicalWork.outcome ?? CanonicalWriteOutcome.NotFound;
            if (outcome === CanonicalWriteOutcome.NotFound) {
                makeToast(t`That series does not exist`, 'error');
                return;
            }
            if (isConflict(outcome)) {
                makeToast(
                    t`That series is already bound to a work, or the priority or the preferred copy is already taken`,
                    'error',
                );
                return;
            }

            makeToast(t`Series attached`, 'success');
            setAttachMangaId('');
            setAttachPriority('');
            setAttachIsPrimary(false);
            await statusRequest.refetch().catch(() => undefined);
            await worksRequest.refetch().catch(() => undefined);
            await bindingsRequest.refetch().catch(() => undefined);
        } catch (e) {
            makeToast(t`Could not attach the series`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [
        selectedWork,
        attachMangaId,
        attachRole,
        attachPriority,
        attachIsPrimary,
        statusRequest.refetch,
        worksRequest.refetch,
        bindingsRequest.refetch,
        t,
    ]);

    /**
     * Saves the role and the priority of one binding.
     *
     * The drafts are cleared afterwards either way: the server decides whether the change was applied,
     * and a conflict must show the stored binding again rather than the value that was typed.
     */
    const changeBinding = useCallback(
        async (binding: CanonicalBinding) => {
            const role = bindingRoleDrafts[binding.id] ?? binding.role;
            const priorityDraft = bindingPriorityDrafts[binding.id];
            const priority = priorityDraft == null || priorityDraft.trim() === '' ? null : Number(priorityDraft);

            if (priority != null && (!Number.isInteger(priority) || priority < 0)) {
                makeToast(t`The priority has to be a whole number that is not negative`, 'error');
                return;
            }

            setIsWorking(true);
            try {
                const response = await requestManager.changeCanonicalBinding({
                    bindingId: binding.id,
                    role,
                    priority,
                }).response;

                if (response.error) {
                    makeToast(t`Could not change the binding`, 'error', getErrorMessage(response.error));
                    return;
                }

                if (isConflict(response.data?.changeCanonicalBinding.outcome ?? CanonicalWriteOutcome.NotFound)) {
                    makeToast(t`That priority is already taken in this work`, 'error');
                    return;
                }

                makeToast(t`Binding updated`, 'success');
                setBindingRoleDrafts((current) => {
                    const next = { ...current };
                    delete next[binding.id];
                    return next;
                });
                setBindingPriorityDrafts((current) => {
                    const next = { ...current };
                    delete next[binding.id];
                    return next;
                });
                await bindingsRequest.refetch().catch(() => undefined);
                await worksRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not change the binding`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [bindingRoleDrafts, bindingPriorityDrafts, bindingsRequest.refetch, worksRequest.refetch, t],
    );

    const detachBinding = useCallback(
        async (binding: CanonicalBinding) => {
            try {
                await Confirmation.show(
                    {
                        title: t`Detach this source copy?`,
                        message: t`Only the binding is removed. The series, its chapters, its revisions and everything archived stay exactly where they are.`,
                        actions: { confirm: { title: t`Detach` } },
                    },
                    { id: 'archive-canonical-detach-binding' },
                );
            } catch {
                return;
            }

            setIsWorking(true);
            try {
                const response = await requestManager.detachCanonicalBinding(binding.id).response;

                if (response.error) {
                    makeToast(t`Could not detach the source copy`, 'error', getErrorMessage(response.error));
                    return;
                }

                makeToast(t`Source copy detached`, 'success');
                await statusRequest.refetch().catch(() => undefined);
                await worksRequest.refetch().catch(() => undefined);
                await bindingsRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not detach the source copy`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [statusRequest.refetch, worksRequest.refetch, bindingsRequest.refetch, t],
    );

    const promoteBinding = useCallback(
        async (binding: CanonicalBinding) => {
            setIsWorking(true);
            try {
                const response = await requestManager.promoteCanonicalBinding(binding.id).response;

                if (response.error) {
                    makeToast(t`Could not make it the preferred copy`, 'error', getErrorMessage(response.error));
                    return;
                }

                if (isConflict(response.data?.promoteCanonicalBinding.outcome ?? CanonicalWriteOutcome.NotFound)) {
                    makeToast(t`This source copy cannot be the preferred one`, 'error');
                    return;
                }

                makeToast(t`Preferred copy changed`, 'success');
                await bindingsRequest.refetch().catch(() => undefined);
                await worksRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not make it the preferred copy`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [bindingsRequest.refetch, worksRequest.refetch, t],
    );

    const failoverBinding = useCallback(
        async (binding: CanonicalBinding) => {
            try {
                await Confirmation.show(
                    {
                        title: t`Fail over to this source copy?`,
                        message: t`This source copy becomes the preferred one for the work, so new revisions are acquired from it. The copy that is preferred now keeps its place in the work.`,
                        actions: { confirm: { title: t`Fail over` } },
                    },
                    { id: 'archive-canonical-failover' },
                );
            } catch {
                return;
            }

            setIsWorking(true);
            try {
                const response = await requestManager.failoverCanonicalWork({
                    workKey: binding.workKey,
                    bindingId: binding.id,
                }).response;

                if (response.error) {
                    makeToast(t`Could not fail over`, 'error', getErrorMessage(response.error));
                    return;
                }

                if (isConflict(response.data?.failoverCanonicalWork.outcome ?? CanonicalWriteOutcome.NotFound)) {
                    makeToast(t`This source copy cannot take over the work`, 'error');
                    return;
                }

                makeToast(t`Failed over`, 'success');
                await statusRequest.refetch().catch(() => undefined);
                await bindingsRequest.refetch().catch(() => undefined);
                await worksRequest.refetch().catch(() => undefined);
            } catch (e) {
                makeToast(t`Could not fail over`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [statusRequest.refetch, bindingsRequest.refetch, worksRequest.refetch, t],
    );

    const runExport = useCallback(async () => {
        setIsWorking(true);
        try {
            const response = await requestManager.exportCanonicalIdentity().response;

            if (response.error) {
                makeToast(t`Could not export the canonical identity`, 'error', getErrorMessage(response.error));
                return;
            }

            const exported = response.data?.exportCanonicalIdentity.export;
            if (!exported) {
                makeToast(t`The export produced nothing`, 'error');
                return;
            }

            setExportPayload(exported.payload);
            setExportSummary({
                schemaVersion: exported.schemaVersion,
                workCount: exported.workCount,
                bindingCount: exported.bindingCount,
            });
            makeToast(t`Exported ${exported.workCount} works and ${exported.bindingCount} bindings`, 'success');
        } catch (e) {
            makeToast(t`Could not export the canonical identity`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [t]);

    /** Saves the exported payload as a file, without a request: the bytes are already in the browser. */
    const downloadExport = () => {
        if (!exportPayload || !exportSummary) {
            return;
        }

        const blob = new Blob([exportPayload], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `canonical-identity-v${exportSummary.schemaVersion}.json`;
        anchor.click();
        URL.revokeObjectURL(url);
    };

    const readImportFile = async (file: File) => {
        try {
            setImportText(await file.text());
        } catch (e) {
            makeToast(t`Could not read the selected file`, 'error', getErrorMessage(e));
        }
    };

    const runImport = useCallback(async () => {
        const payload = importText.trim();
        if (!payload) {
            makeToast(t`Paste an exported payload or choose a file first`, 'error');
            return;
        }

        try {
            await Confirmation.show(
                {
                    title: t`Import this canonical identity?`,
                    message: t`Works are created or updated and bindings are attached or moved to the work the payload names. A series that is already bound to another work is rebound to the one the payload says.`,
                    actions: { confirm: { title: t`Import` } },
                },
                { id: 'archive-canonical-import' },
            );
        } catch {
            return;
        }

        setIsWorking(true);
        try {
            const response = await requestManager.importCanonicalIdentity(payload).response;

            if (response.error) {
                makeToast(t`Could not import the canonical identity`, 'error', getErrorMessage(response.error));
                return;
            }

            const imported = response.data?.importCanonicalIdentity.import;
            if (!imported) {
                makeToast(t`The import produced nothing`, 'error');
                return;
            }

            setImportResult(imported);
            makeToast(t`Import finished`, 'success');
            await statusRequest.refetch().catch(() => undefined);
            await worksRequest.refetch().catch(() => undefined);
            await bindingsRequest.refetch().catch(() => undefined);
        } catch (e) {
            makeToast(t`Could not import the canonical identity`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [importText, statusRequest.refetch, worksRequest.refetch, bindingsRequest.refetch, t]);

    if (worksRequest.error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the canonical works`}
                messageExtra={getErrorMessage(worksRequest.error)}
                retry={() => void refreshAll()}
            />
        );
    }

    if (worksRequest.loading && !worksRequest.data) {
        return <LoadingPlaceholder usePadding />;
    }

    const status: CanonicalStatus | null = statusRequest.data?.canonicalIdentityStatus ?? null;

    return (
        <Stack sx={{ gap: 2 }}>
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mr: 'auto' }}>
                    {t`The work list, the bindings of the selected work and the counters are re-read together.`}
                </Typography>
                <Button variant="outlined" disabled={isWorking} onClick={() => void refreshAll()}>
                    {t`Refresh`}
                </Button>
            </Stack>

            {statusRequest.error && (
                <Alert severity="warning">
                    {t`The canonical counters could not be read: ${getErrorMessage(statusRequest.error)}`}
                </Alert>
            )}

            {status && (
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <Stack sx={{ gap: 1 }}>
                        <Typography variant="subtitle1">{t`Canonical identity`}</Typography>
                        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                            <Chip size="small" variant="outlined" label={t`${status.workCount} works`} />
                            <Chip size="small" variant="outlined" label={t`${status.bindingCount} bindings`} />
                            <Chip size="small" color="success" label={t`${status.activeBindingCount} active`} />
                            <Chip size="small" variant="outlined" label={t`${status.fallbackBindingCount} fallbacks`} />
                            <Chip size="small" variant="outlined" label={t`${status.disabledBindingCount} disabled`} />
                            <Chip
                                size="small"
                                variant="outlined"
                                label={t`${status.primaryBindingCount} preferred copies`}
                            />
                        </Stack>
                        <Alert severity={status.duplicatePolicyApplied ? 'success' : 'info'}>
                            {status.duplicatePolicyApplied
                                ? t`A reconciliation layer is applying the duplicate strategy recorded on a work.`
                                : t`The duplicate strategy recorded on a work is advisory: nothing merges, deletes or hides a duplicate chapter because of it, and no chapter is ever merged automatically.`}
                        </Alert>
                    </Stack>
                </Paper>
            )}

            <Stack sx={{ gap: 2, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
                <Stack sx={{ gap: 2, width: { xs: '100%', md: '40%' }, minWidth: { md: 340 } }}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Stack sx={{ gap: 2 }}>
                            <Typography variant="subtitle1">{t`Find a work`}</Typography>
                            <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label={t`Title contains`}
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            applySearch();
                                        }
                                    }}
                                />
                                <Button variant="outlined" disabled={isWorking} onClick={applySearch}>
                                    {t`Search`}
                                </Button>
                            </Stack>
                            <Typography variant="caption" color="text.secondary">
                                {t`Searching replaces the list and returns to its first page.`}
                            </Typography>
                        </Stack>
                    </Paper>

                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Stack sx={{ gap: 2 }}>
                            <Typography variant="subtitle1">{t`Create a work`}</Typography>
                            <TextField
                                size="small"
                                fullWidth
                                label={t`Title`}
                                value={newTitle}
                                onChange={(event) => setNewTitle(event.target.value)}
                            />
                            <FormControl size="small" fullWidth>
                                <InputLabel id="archive-canonical-new-strategy-label">{t`Duplicate strategy`}</InputLabel>
                                <Select
                                    labelId="archive-canonical-new-strategy-label"
                                    label={t`Duplicate strategy`}
                                    value={newDuplicateStrategy}
                                    onChange={(event) =>
                                        setNewDuplicateStrategy(event.target.value as CanonicalDuplicateStrategy)
                                    }
                                >
                                    {DUPLICATE_STRATEGIES.map((strategy) => (
                                        <MenuItem key={strategy} value={strategy}>
                                            {ArchiveStateUtil.prettify(strategy)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                size="small"
                                fullWidth
                                label={t`Preferred scanlator`}
                                value={newPreferredScanlator}
                                onChange={(event) => setNewPreferredScanlator(event.target.value)}
                            />
                            <Typography variant="caption" color="text.secondary">
                                {t`The duplicate strategy is recorded advice. It never merges or removes a chapter.`}
                            </Typography>
                            <Button variant="contained" disabled={isWorking} onClick={() => void createWork()}>
                                {t`Create`}
                            </Button>
                        </Stack>
                    </Paper>

                    <Paper variant="outlined">
                        <Stack sx={{ gap: 1, p: 1 }}>
                            <Typography variant="body2" sx={{ px: 1, pt: 1 }}>
                                {t`${worksRequest.data?.canonicalWorks.totalCount ?? 0} works`}
                            </Typography>
                            {!works.length ? (
                                <Typography variant="body2" color="text.secondary" sx={{ px: 1, pb: 1 }}>
                                    {appliedSearch ? t`No work matches that title.` : t`No canonical work exists yet.`}
                                </Typography>
                            ) : (
                                <List disablePadding>
                                    {works.map((work) => (
                                        <ListItemButton
                                            key={work.workKey}
                                            selected={work.workKey === selectedWorkKey}
                                            onClick={() => setSelectedWorkKey(work.workKey)}
                                            divider
                                            sx={{ alignItems: 'flex-start' }}
                                        >
                                            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                                <Typography variant="body2" noWrap>
                                                    {work.title}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                    component="div"
                                                    noWrap
                                                >
                                                    {work.workKey}
                                                </Typography>
                                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                                    <Chip
                                                        size="small"
                                                        variant="outlined"
                                                        label={t`${work.bindingCount} bindings`}
                                                    />
                                                    {work.primaryBinding && (
                                                        <Chip
                                                            size="small"
                                                            color="success"
                                                            label={
                                                                work.primaryBinding.mangaTitle ??
                                                                work.primaryBinding.sourceName ??
                                                                t`Preferred copy`
                                                            }
                                                        />
                                                    )}
                                                    {!work.duplicatePolicyApplied && (
                                                        <Chip size="small" variant="outlined" label={t`Advice only`} />
                                                    )}
                                                </Stack>
                                            </Box>
                                        </ListItemButton>
                                    ))}
                                </List>
                            )}

                            {worksHasNextPage && (
                                <Stack sx={{ flexDirection: 'row', justifyContent: 'center', pb: 1 }}>
                                    <Button
                                        variant="outlined"
                                        disabled={isWorking}
                                        onClick={() => void loadMoreWorks()}
                                    >{t`Load more works`}</Button>
                                </Stack>
                            )}
                        </Stack>
                    </Paper>
                </Stack>

                <Stack sx={{ gap: 2, width: { xs: '100%', md: '60%' } }}>
                    {!selectedWork ? (
                        <EmptyViewAbsoluteCentered message={t`Select a work to inspect its bindings`} />
                    ) : (
                        <>
                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Stack sx={{ gap: 2 }}>
                                    <Stack
                                        sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}
                                    >
                                        <Typography variant="subtitle1">{selectedWork.title}</Typography>
                                        <Chip size="small" variant="outlined" label={selectedWork.workKey} />
                                    </Stack>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        label={t`Title`}
                                        value={editTitle}
                                        onChange={(event) => setEditTitle(event.target.value)}
                                    />
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="archive-canonical-edit-strategy-label">
                                            {t`Duplicate strategy`}
                                        </InputLabel>
                                        <Select
                                            labelId="archive-canonical-edit-strategy-label"
                                            label={t`Duplicate strategy`}
                                            value={editDuplicateStrategy}
                                            onChange={(event) =>
                                                setEditDuplicateStrategy(
                                                    event.target.value as CanonicalDuplicateStrategy,
                                                )
                                            }
                                        >
                                            {DUPLICATE_STRATEGIES.map((strategy) => (
                                                <MenuItem key={strategy} value={strategy}>
                                                    {ArchiveStateUtil.prettify(strategy)}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        label={t`Preferred scanlator`}
                                        value={editPreferredScanlator}
                                        disabled={editClearPreferredScanlator}
                                        onChange={(event) => setEditPreferredScanlator(event.target.value)}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={editClearPreferredScanlator}
                                                onChange={(event) =>
                                                    setEditClearPreferredScanlator(event.target.checked)
                                                }
                                            />
                                        }
                                        label={t`Remove the preferred scanlator`}
                                    />
                                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                        <Button
                                            variant="contained"
                                            disabled={isWorking}
                                            onClick={() => void updateWork()}
                                        >{t`Save`}</Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            disabled={isWorking}
                                            onClick={() => void deleteWork()}
                                        >{t`Delete work`}</Button>
                                    </Stack>
                                    <Typography variant="caption" color="text.secondary">
                                        {t`The title and the duplicate strategy are advice, never identity. Deleting a work removes the grouping and its bindings, nothing else.`}
                                    </Typography>
                                </Stack>
                            </Paper>

                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Stack sx={{ gap: 2 }}>
                                    <Typography variant="subtitle1">{t`Bound source copies`}</Typography>

                                    {bindingsRequest.error && (
                                        <Alert severity="warning">
                                            {t`The bindings could not be read: ${getErrorMessage(bindingsRequest.error)}`}
                                        </Alert>
                                    )}

                                    {!bindings.length ? (
                                        <Typography variant="body2" color="text.secondary">
                                            {t`No series is bound to this work yet.`}
                                        </Typography>
                                    ) : (
                                        <List disablePadding>
                                            {bindings.map((binding) => {
                                                const role = bindingRoleDrafts[binding.id] ?? binding.role;
                                                const priority =
                                                    bindingPriorityDrafts[binding.id] ?? String(binding.priority);

                                                return (
                                                    <ListItem
                                                        key={binding.id}
                                                        divider
                                                        sx={{ alignItems: 'flex-start', gap: 1, flexWrap: 'wrap' }}
                                                    >
                                                        <Box sx={{ flexGrow: 1, minWidth: 220 }}>
                                                            <Typography variant="body2" noWrap>
                                                                {binding.mangaTitle ?? t`Unknown series`}
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                color="text.secondary"
                                                                component="div"
                                                                noWrap
                                                            >
                                                                {[
                                                                    binding.sourceName,
                                                                    binding.sourceId,
                                                                    binding.mangaId != null
                                                                        ? `${t`Series`} ${binding.mangaId}`
                                                                        : null,
                                                                ]
                                                                    .filter(Boolean)
                                                                    .join(' · ')}
                                                            </Typography>
                                                            <Stack
                                                                sx={{
                                                                    flexDirection: 'row',
                                                                    flexWrap: 'wrap',
                                                                    gap: 1,
                                                                    mt: 1,
                                                                }}
                                                            >
                                                                <Chip
                                                                    size="small"
                                                                    label={ArchiveStateUtil.prettify(binding.role)}
                                                                />
                                                                <Chip
                                                                    size="small"
                                                                    variant="outlined"
                                                                    label={t`Priority ${binding.priority}`}
                                                                />
                                                                {binding.isPrimary && (
                                                                    <Chip
                                                                        size="small"
                                                                        color="success"
                                                                        label={t`Preferred`}
                                                                    />
                                                                )}
                                                                <Chip
                                                                    size="small"
                                                                    variant="outlined"
                                                                    label={
                                                                        binding.acquisitionEligible
                                                                            ? t`Used for acquisition`
                                                                            : t`Not used for acquisition`
                                                                    }
                                                                />
                                                                {!binding.mangaAvailable && (
                                                                    <Chip
                                                                        size="small"
                                                                        color="warning"
                                                                        label={t`Series missing`}
                                                                    />
                                                                )}
                                                            </Stack>
                                                            <Typography variant="caption" color="text.secondary">
                                                                {t`Bound ${ArchiveStateUtil.formatTimestamp(binding.boundAt)}`}
                                                            </Typography>
                                                        </Box>

                                                        <Stack sx={{ gap: 1, minWidth: 200 }}>
                                                            <FormControl size="small" fullWidth>
                                                                <InputLabel
                                                                    id={`archive-canonical-binding-role-${binding.id}`}
                                                                >
                                                                    {t`Role`}
                                                                </InputLabel>
                                                                <Select
                                                                    labelId={`archive-canonical-binding-role-${binding.id}`}
                                                                    label={t`Role`}
                                                                    value={role}
                                                                    onChange={(event) =>
                                                                        setBindingRoleDrafts((current) => ({
                                                                            ...current,
                                                                            [binding.id]: event.target
                                                                                .value as CanonicalBindingRole,
                                                                        }))
                                                                    }
                                                                >
                                                                    {Object.values(CanonicalBindingRole).map(
                                                                        (value) => (
                                                                            <MenuItem key={value} value={value}>
                                                                                {ArchiveStateUtil.prettify(value)}
                                                                            </MenuItem>
                                                                        ),
                                                                    )}
                                                                </Select>
                                                            </FormControl>
                                                            <TextField
                                                                size="small"
                                                                fullWidth
                                                                type="number"
                                                                label={t`Priority`}
                                                                value={priority}
                                                                slotProps={{ htmlInput: { min: 0, step: 1 } }}
                                                                onChange={(event) =>
                                                                    setBindingPriorityDrafts((current) => ({
                                                                        ...current,
                                                                        [binding.id]: event.target.value,
                                                                    }))
                                                                }
                                                            />
                                                            <Stack
                                                                sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}
                                                            >
                                                                <Button
                                                                    size="small"
                                                                    variant="outlined"
                                                                    disabled={isWorking}
                                                                    onClick={() => void changeBinding(binding)}
                                                                >{t`Save`}</Button>
                                                                <Button
                                                                    size="small"
                                                                    variant="outlined"
                                                                    disabled={isWorking || binding.isPrimary}
                                                                    onClick={() => void promoteBinding(binding)}
                                                                >{t`Make preferred`}</Button>
                                                                <Button
                                                                    size="small"
                                                                    variant="outlined"
                                                                    color="warning"
                                                                    disabled={isWorking || binding.isPrimary}
                                                                    onClick={() => void failoverBinding(binding)}
                                                                >{t`Fail over`}</Button>
                                                                <Button
                                                                    size="small"
                                                                    variant="outlined"
                                                                    color="error"
                                                                    disabled={isWorking}
                                                                    onClick={() => void detachBinding(binding)}
                                                                >{t`Detach`}</Button>
                                                            </Stack>
                                                        </Stack>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    )}
                                </Stack>
                            </Paper>

                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Stack sx={{ gap: 2 }}>
                                    <Typography variant="subtitle1">{t`Attach a series`}</Typography>
                                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                                        <TextField
                                            size="small"
                                            type="number"
                                            label={t`Series id`}
                                            value={attachMangaId}
                                            slotProps={{ htmlInput: { min: 1, step: 1 } }}
                                            onChange={(event) => setAttachMangaId(event.target.value)}
                                        />
                                        <FormControl size="small" sx={{ minWidth: 160 }}>
                                            <InputLabel id="archive-canonical-attach-role-label">{t`Role`}</InputLabel>
                                            <Select
                                                labelId="archive-canonical-attach-role-label"
                                                label={t`Role`}
                                                value={attachRole}
                                                onChange={(event) =>
                                                    setAttachRole(event.target.value as CanonicalBindingRole)
                                                }
                                            >
                                                {Object.values(CanonicalBindingRole).map((value) => (
                                                    <MenuItem key={value} value={value}>
                                                        {ArchiveStateUtil.prettify(value)}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            size="small"
                                            type="number"
                                            label={t`Priority (optional)`}
                                            value={attachPriority}
                                            slotProps={{ htmlInput: { min: 0, step: 1 } }}
                                            onChange={(event) => setAttachPriority(event.target.value)}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={attachIsPrimary}
                                                    onChange={(event) => setAttachIsPrimary(event.target.checked)}
                                                />
                                            }
                                            label={t`Make it the preferred copy`}
                                        />
                                    </Stack>
                                    <Button variant="contained" disabled={isWorking} onClick={() => void attachManga()}>
                                        {t`Attach`}
                                    </Button>
                                    <Typography variant="caption" color="text.secondary">
                                        {t`A series is attached by its numeric id. Two series are never treated as the same work unless an operator attaches them.`}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </>
                    )}

                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Stack sx={{ gap: 2 }}>
                            <Typography variant="subtitle1">{t`Export and import`}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {t`An export is a versioned JSON document of every work and binding. An import creates or updates the works it names and attaches or moves the bindings it names.`}
                            </Typography>
                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                <Button variant="outlined" disabled={isWorking} onClick={() => void runExport()}>
                                    {t`Export`}
                                </Button>
                                <Button
                                    variant="outlined"
                                    disabled={isWorking || !exportPayload}
                                    onClick={downloadExport}
                                >{t`Download JSON`}</Button>
                            </Stack>
                            {exportSummary && (
                                <Typography variant="body2">
                                    {t`Schema version ${exportSummary.schemaVersion}: ${exportSummary.workCount} works and ${exportSummary.bindingCount} bindings.`}
                                </Typography>
                            )}
                            {exportPayload && (
                                <TextField
                                    multiline
                                    minRows={4}
                                    maxRows={10}
                                    fullWidth
                                    value={exportPayload}
                                    slotProps={{ input: { readOnly: true } }}
                                    label={t`Exported payload`}
                                />
                            )}

                            <Divider />

                            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                                <Button
                                    variant="outlined"
                                    disabled={isWorking}
                                    onClick={() => importFileRef.current?.click()}
                                >{t`Choose a file`}</Button>
                                <Button variant="outlined" disabled={isWorking} onClick={() => setImportText('')}>
                                    {t`Clear`}
                                </Button>
                                <Button variant="contained" disabled={isWorking} onClick={() => void runImport()}>
                                    {t`Import`}
                                </Button>
                            </Stack>
                            <input
                                ref={importFileRef}
                                type="file"
                                accept=".json,application/json"
                                style={{ display: 'none' }}
                                onChange={(event) => {
                                    const { target } = event;
                                    const file = target.files?.[0];
                                    // the input is cleared so choosing the same file twice still fires a change
                                    target.value = '';
                                    if (file) {
                                        void readImportFile(file);
                                    }
                                }}
                            />
                            <TextField
                                multiline
                                minRows={4}
                                maxRows={10}
                                fullWidth
                                value={importText}
                                onChange={(event) => setImportText(event.target.value)}
                                label={t`Payload to import`}
                            />
                            {importResult && (
                                <Alert severity="info">
                                    {t`${importResult.worksCreated} works created, ${importResult.worksUpdated} updated, ${importResult.bindingsBound} bindings attached, ${importResult.bindingsRebound} rebound, ${importResult.bindingsUnresolved} unresolved.`}
                                </Alert>
                            )}
                        </Stack>
                    </Paper>
                </Stack>
            </Stack>
        </Stack>
    );
};
