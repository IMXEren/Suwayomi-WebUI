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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import type { GetArchiveQueueQuery, GetArchiveQueueQueryVariables } from '@/lib/graphql/generated/graphql.ts';
import { LoadingPlaceholder } from '@/base/components/feedback/LoadingPlaceholder.tsx';
import { EmptyViewAbsoluteCentered } from '@/base/components/feedback/EmptyViewAbsoluteCentered.tsx';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { makeToast } from '@/base/utils/Toast.ts';
import {
    ARCHIVE_QUEUE_DIMENSION_STATES,
    ArchiveConstants,
    ArchiveQueueDimension,
} from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';

type QueueRow = GetArchiveQueueQuery['chapterRevisions']['nodes'][number];

type StateVariables = Pick<
    GetArchiveQueueQueryVariables,
    'acquisitionState' | 'archiveState' | 'publicationState' | 'retentionState'
>;

const NO_STATE_FILTER: StateVariables = {
    acquisitionState: null,
    archiveState: null,
    publicationState: null,
    retentionState: null,
};

/** The four dimension variables are always sent in full so the query key stays stable across selections. */
const DIMENSION_STATE_FILTERS: Record<ArchiveQueueDimension, (state: string) => StateVariables> = {
    [ArchiveQueueDimension.ACQUISITION]: (state) => ({
        ...NO_STATE_FILTER,
        acquisitionState: state as StateVariables['acquisitionState'],
    }),
    [ArchiveQueueDimension.ARCHIVE]: (state) => ({
        ...NO_STATE_FILTER,
        archiveState: state as StateVariables['archiveState'],
    }),
    [ArchiveQueueDimension.PUBLICATION]: (state) => ({
        ...NO_STATE_FILTER,
        publicationState: state as StateVariables['publicationState'],
    }),
    [ArchiveQueueDimension.RETENTION]: (state) => ({
        ...NO_STATE_FILTER,
        retentionState: state as StateVariables['retentionState'],
    }),
};

const buildStateVariables = (dimension: ArchiveQueueDimension, state: string | null): StateVariables =>
    state ? DIMENSION_STATE_FILTERS[dimension](state) : NO_STATE_FILTER;

type DimensionAudit = { attempts: number; lastAttemptAt: string | null; lastError: string | null };

/** The state and audit of the selected dimension, which is the one an operator acts on. */
const DIMENSION_ACCESSORS: Record<
    ArchiveQueueDimension,
    { state: (row: QueueRow) => string; audit: (row: QueueRow) => DimensionAudit }
> = {
    [ArchiveQueueDimension.ACQUISITION]: {
        state: (row) => String(row.acquisitionState),
        audit: (row) => ({ attempts: row.attempts, lastAttemptAt: row.lastAttemptAt, lastError: row.lastError }),
    },
    // The archive, publication and retention dimensions are not asked for their recorded error: those
    // run against the stored artifacts, so their failures can name a staged path, a remote object or a
    // payload digest. The state and the attempt count are what the inspector acts on.
    [ArchiveQueueDimension.ARCHIVE]: {
        state: (row) => String(row.archiveState),
        audit: (row) => ({
            attempts: row.archiveAttempts,
            lastAttemptAt: row.archiveLastAttemptAt,
            lastError: null,
        }),
    },
    [ArchiveQueueDimension.PUBLICATION]: {
        state: (row) => String(row.publicationState),
        audit: (row) => ({
            attempts: row.publicationAttempts,
            lastAttemptAt: row.publicationLastAttemptAt,
            lastError: null,
        }),
    },
    [ArchiveQueueDimension.RETENTION]: {
        state: (row) => String(row.retentionState),
        audit: (row) => ({
            attempts: row.retentionAttempts,
            lastAttemptAt: row.retentionLastAttemptAt,
            lastError: null,
        }),
    },
};

const dimensionStateOf = (row: QueueRow, dimension: ArchiveQueueDimension): string =>
    DIMENSION_ACCESSORS[dimension].state(row);

const dimensionAuditOf = (row: QueueRow, dimension: ArchiveQueueDimension): DimensionAudit =>
    DIMENSION_ACCESSORS[dimension].audit(row);

/** Retrying is a per-dimension operation, so each dimension maps to its own server mutation. */
type RetryResponse = { response: Promise<{ error?: unknown }> };

const RETRY_CALLERS: Record<ArchiveQueueDimension, (ids: number[]) => RetryResponse> = {
    [ArchiveQueueDimension.ACQUISITION]: (ids) => requestManager.retryChapterRevisions(ids),
    [ArchiveQueueDimension.ARCHIVE]: (ids) => requestManager.retryChapterRevisionArchives(ids),
    [ArchiveQueueDimension.PUBLICATION]: (ids) => requestManager.retryChapterRevisionPublications(ids),
    [ArchiveQueueDimension.RETENTION]: (ids) => requestManager.retryChapterRevisionPrunings(ids),
};

const QueueRowItem = ({
    row,
    dimension,
    selected,
    disabled,
    onToggle,
}: {
    row: QueueRow;
    dimension: ArchiveQueueDimension;
    selected: boolean;
    disabled: boolean;
    onToggle: (checked: boolean) => void;
}) => {
    const { t } = useLingui();
    const audit = dimensionAuditOf(row, dimension);
    const activeState = dimensionStateOf(row, dimension);

    return (
        <ListItem divider sx={{ alignItems: 'flex-start', gap: 1 }}>
            <Checkbox
                checked={selected}
                disabled={disabled}
                onChange={(event) => onToggle(event.target.checked)}
                slotProps={{ input: { 'aria-label': t`Select revision ${row.id}` } }}
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
                    <Chip
                        size="small"
                        color="primary"
                        label={`${ArchiveStateUtil.prettify(dimension)}: ${ArchiveStateUtil.prettify(activeState)}`}
                    />
                    <Chip size="small" variant="outlined" label={t`Attempts: ${audit.attempts}`} />
                    <Chip size="small" variant="outlined" label={ArchiveStateUtil.prettify(row.disposition)} />
                </Stack>
                <Typography variant="caption" color="text.secondary" component="div">
                    {t`Last attempt ${ArchiveStateUtil.formatTimestamp(audit.lastAttemptAt)}`}
                </Typography>
                <Typography variant="caption" color="text.secondary" component="div">
                    {[
                        `${t`Discovered`} ${ArchiveStateUtil.formatTimestamp(row.discoveredAt)}`,
                        `${t`Approved`} ${ArchiveStateUtil.formatTimestamp(row.approvedAt)}`,
                        `${t`Archived`} ${ArchiveStateUtil.formatTimestamp(row.archivedAt)}`,
                        `${t`Published`} ${ArchiveStateUtil.formatTimestamp(row.publishedAt)}`,
                        `${t`Pruned`} ${ArchiveStateUtil.formatTimestamp(row.prunedAt)}`,
                        `${t`Updated`} ${ArchiveStateUtil.formatTimestamp(row.updatedAt)}`,
                    ].join(' · ')}
                </Typography>
                {audit.lastError && (
                    <Typography variant="caption" color="error" component="div">
                        {audit.lastError}
                    </Typography>
                )}
            </Box>
        </ListItem>
    );
};

/**
 * The queue inspector for the four independent revision dimensions.
 *
 * One dimension and one of its states is selected at a time because the server stores them as separate
 * columns; retrying is only offered for rows whose state the matching server retry mutation requeues.
 */
export const ArchiveQueueInspector: React.FC = () => {
    const { t } = useLingui();

    const [dimension, setDimension] = useState<ArchiveQueueDimension>(ArchiveQueueDimension.ACQUISITION);
    const [state, setState] = useState<string>('');
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    // Rows read beyond the first server page, plus the cursor they were read up to. The server's own
    // `hasNextPage` of the last appended page is kept next to it: a cursor only says where reading
    // stopped, never that another page exists.
    const [appendedRows, setAppendedRows] = useState<QueueRow[]>([]);
    const [rowsCursor, setRowsCursor] = useState<string | null>(null);
    const [appendedRowsHaveNext, setAppendedRowsHaveNext] = useState(false);
    const [isWorking, setIsWorking] = useState(false);

    const variables = useMemo(
        (): GetArchiveQueueQueryVariables => ({
            first: ArchiveConstants.QUEUE_PAGE_SIZE,
            ...buildStateVariables(dimension, state || null),
        }),
        [dimension, state],
    );

    const { data, loading, error, refetch } = requestManager.useGetArchiveQueue(variables, {
        fetchPolicy: 'cache-and-network',
    });

    const firstPageRows = data?.chapterRevisions.nodes ?? [];
    const rowsPageInfo = data?.chapterRevisions.pageInfo;
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
    const totalCount = data?.chapterRevisions.totalCount ?? 0;
    const rowsHaveAppendedPages = rowsCursor !== null;
    /** Whether the server said there is another page after the rows on screen. */
    const rowsHasNextPage = rowsHaveAppendedPages ? appendedRowsHaveNext : !!rowsPageInfo?.hasNextPage;

    /** Forgets every appended page, so the next read of the connection starts at its first server page. */
    const resetAppendedPages = useCallback(() => {
        setAppendedRows([]);
        setRowsCursor(null);
        setAppendedRowsHaveNext(false);
    }, []);

    /** The locally appended pages belong to the previously selected filter, so they are dropped on reload. */
    const reload = useCallback(async () => {
        resetAppendedPages();
        setSelectedIds([]);
        await refetch().catch((e) => makeToast(t`Could not load the queue`, 'error', getErrorMessage(e)));
    }, [resetAppendedPages, refetch, t]);

    const selectDimension = (next: ArchiveQueueDimension) => {
        setDimension(next);
        setState('');
        setSelectedIds([]);
        resetAppendedPages();
    };

    const selectState = (next: string) => {
        setState(next);
        setSelectedIds([]);
        resetAppendedPages();
    };

    const loadMore = useCallback(async () => {
        setIsWorking(true);
        try {
            const after = rowsHaveAppendedPages ? rowsCursor : rowsPageInfo?.endCursor;
            const response = await requestManager.getArchiveQueuePage({
                ...variables,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more revisions`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.chapterRevisions;
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
            makeToast(t`Could not load more revisions`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [variables, rowsHaveAppendedPages, rowsCursor, rowsPageInfo?.endCursor, t]);

    const retrySelected = useCallback(async () => {
        if (!selectedIds.length) {
            return;
        }

        if (dimension === ArchiveQueueDimension.RETENTION) {
            try {
                await Confirmation.show(
                    {
                        title: t`Retry pruning of the selected revisions?`,
                        message: t`Deleting an archived payload cannot be undone.`,
                        actions: { confirm: { title: t`Retry pruning` } },
                    },
                    { id: 'archive-queue-retry-pruning' },
                );
            } catch {
                return;
            }
        }

        setIsWorking(true);
        try {
            const response = await RETRY_CALLERS[dimension](selectedIds).response;

            if (response.error) {
                makeToast(t`Could not retry the selected revisions`, 'error', getErrorMessage(response.error));
                return;
            }

            makeToast(t`Retried ${selectedIds.length} revisions`, 'success');
            await reload();
        } catch (e) {
            makeToast(t`Could not retry the selected revisions`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [dimension, selectedIds, reload, t]);

    const retryableSelectedIds = rows
        .filter((row) => selectedIds.includes(row.id))
        .filter((row) => ArchiveStateUtil.isRetryable(dimension, dimensionStateOf(row, dimension)))
        .map((row) => row.id);
    const canRetry = retryableSelectedIds.length > 0 && retryableSelectedIds.length === selectedIds.length;

    if (error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the queue`}
                messageExtra={getErrorMessage(error)}
                retry={() => void reload()}
            />
        );
    }

    if (loading && !data) {
        return <LoadingPlaceholder usePadding />;
    }

    return (
        <Stack sx={{ gap: 2 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                    <FormControl size="small" sx={{ minWidth: 180 }}>
                        <InputLabel id="archive-queue-dimension-label">{t`Dimension`}</InputLabel>
                        <Select
                            labelId="archive-queue-dimension-label"
                            label={t`Dimension`}
                            value={dimension}
                            onChange={(event) => selectDimension(event.target.value as ArchiveQueueDimension)}
                        >
                            <MenuItem value={ArchiveQueueDimension.ACQUISITION}>{t`Acquisition`}</MenuItem>
                            <MenuItem value={ArchiveQueueDimension.ARCHIVE}>{t`Archive`}</MenuItem>
                            <MenuItem value={ArchiveQueueDimension.PUBLICATION}>{t`Publication`}</MenuItem>
                            <MenuItem value={ArchiveQueueDimension.RETENTION}>{t`Retention`}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl size="small" sx={{ minWidth: 220 }}>
                        <InputLabel id="archive-queue-state-label">{t`State`}</InputLabel>
                        <Select
                            labelId="archive-queue-state-label"
                            label={t`State`}
                            value={state}
                            onChange={(event) => selectState(event.target.value)}
                        >
                            <MenuItem value="">{t`All states`}</MenuItem>
                            {ARCHIVE_QUEUE_DIMENSION_STATES[dimension].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {ArchiveStateUtil.prettify(option)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Paper>

            <Paper variant="outlined" sx={{ p: 1 }}>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ mr: 'auto' }}>
                        {t`${totalCount} revisions`}
                    </Typography>
                    <Button variant="outlined" disabled={isWorking} onClick={() => void reload()}>
                        {t`Refresh`}
                    </Button>
                    <Button
                        variant="outlined"
                        disabled={isWorking}
                        onClick={() =>
                            setSelectedIds(
                                rows.length > 0 && rows.every((row) => selectedIds.includes(row.id))
                                    ? []
                                    : rows.map((row) => row.id),
                            )
                        }
                    >
                        {rows.length > 0 && rows.every((row) => selectedIds.includes(row.id))
                            ? t`Clear selection`
                            : t`Select loaded`}
                    </Button>
                    <Button
                        variant="contained"
                        disabled={isWorking || !canRetry}
                        onClick={() => void retrySelected()}
                    >{t`Retry selected`}</Button>
                </Stack>
            </Paper>

            {!rows.length ? (
                <EmptyViewAbsoluteCentered message={t`No revisions match the selected filter`} />
            ) : (
                <Paper variant="outlined">
                    <List disablePadding>
                        {rows.map((row) => (
                            <QueueRowItem
                                key={row.id}
                                row={row}
                                dimension={dimension}
                                selected={selectedIds.includes(row.id)}
                                disabled={isWorking}
                                onToggle={(checked) =>
                                    setSelectedIds((current) =>
                                        checked ? [...current, row.id] : current.filter((id) => id !== row.id),
                                    )
                                }
                            />
                        ))}
                    </List>
                </Paper>
            )}

            <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                {rowsHasNextPage && (
                    <Button variant="outlined" disabled={isWorking} onClick={() => void loadMore()}>
                        {t`Load more`}
                    </Button>
                )}
            </Stack>
        </Stack>
    );
};
