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
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Confirmation } from '@/base/AppAwaitableComponent.ts';
import { EmptyViewAbsoluteCentered } from '@/base/components/feedback/EmptyViewAbsoluteCentered.tsx';
import { LoadingPlaceholder } from '@/base/components/feedback/LoadingPlaceholder.tsx';
import { makeToast } from '@/base/utils/Toast.ts';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import type {
    GetArchiveReviewCandidatesQuery,
    GetArchiveRevisionComparisonPagesQuery,
    GetArchiveRevisionComparisonQuery,
} from '@/lib/graphql/generated/graphql.ts';
import {
    ChapterPublicationState,
    ChapterRevisionPageAlignmentState,
    ChapterVisualAnalysisState,
} from '@/lib/graphql/generated/graphql-base.types.ts';
import { ArchiveConstants } from '@/features/archive/Archive.constants.ts';
import { ArchiveStateUtil } from '@/features/archive/Archive.utils.ts';
import { ArchiveRevisionPreview } from '@/features/archive/components/ArchiveRevisionPreview.tsx';
import { ArchiveRevisionHistorySection } from '@/features/archive/components/ArchiveRevisionHistorySection.tsx';

type ReviewRow = GetArchiveReviewCandidatesQuery['chapterRevisions']['nodes'][number];
type Comparison = NonNullable<GetArchiveRevisionComparisonQuery['chapterRevisionComparison']>;
type ComparisonPage = GetArchiveRevisionComparisonPagesQuery['chapterRevisionComparisonPages']['nodes'][number];

/** How two pages of an aligned row are shown next to each other. */
enum ComparisonViewMode {
    SIDE_BY_SIDE = 'SIDE_BY_SIDE',
    SLIDER = 'SLIDER',
    OVERLAY = 'OVERLAY',
}

/** The states that mean the candidate really carries something the baseline does not. */
const DIFFERENCE_STATES: ChapterRevisionPageAlignmentState[] = [
    ChapterRevisionPageAlignmentState.Modified,
    ChapterRevisionPageAlignmentState.Added,
    ChapterRevisionPageAlignmentState.Removed,
];

const isDifference = (page: ComparisonPage): boolean => DIFFERENCE_STATES.includes(page.state);

/**
 * The addresses one aligned row is shown through, for one detail level.
 *
 * Thumbnails and full pages are different addresses and either of them can be missing for a side, so
 * the detail level is part of what makes a comparison possible: a row that can be shown as thumbnails
 * cannot be assumed to be showable as full pages.
 */
const previewUrls = (
    page: ComparisonPage,
    fullPages: boolean,
): { baseline: string | null; candidate: string | null } =>
    fullPages
        ? { baseline: page.baselinePageUrl, candidate: page.candidatePageUrl }
        : { baseline: page.baselineThumbnailUrl, candidate: page.candidateThumbnailUrl };

/** Both sides of a row are only comparable when both have an address in the current detail level. */
const bothSidesAddressable = (page: ComparisonPage, fullPages: boolean): boolean => {
    const urls = previewUrls(page, fullPages);
    return !!urls.baseline && !!urls.candidate;
};

/** Page numbers and aligned rows are shown 1-based; the ordinals and indexes of the API stay 0-based. */
const displayPosition = (position: number): number => position + 1;
const displayIndex = (index: number | null | undefined): string => (index == null ? '-' : String(index + 1));

/**
 * The four review decisions and the server mutation behind each one.
 *
 * Every one of them is confirmed, because each leaves the candidate queue: accepting publishes the
 * archived content as the copy the chapter serves, keeping both demotes the current one to history, and
 * rejecting or keeping the current revision stops the candidate from being reviewable.
 */
enum ReviewDecision {
    ACCEPT_CANDIDATE = 'ACCEPT_CANDIDATE',
    KEEP_CURRENT = 'KEEP_CURRENT',
    KEEP_BOTH = 'KEEP_BOTH',
    REJECT_CANDIDATE = 'REJECT_CANDIDATE',
}

const RowSummary = ({ row }: { row: ReviewRow }) => {
    const { t } = useLingui();

    return (
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography variant="body1" noWrap>
                {row.manga?.title ?? t`Unknown series`}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
                {`${t`Chapter`} ${row.chapterNumber} — ${row.name}`}
                {row.scanlator ? ` (${row.scanlator})` : ''}
            </Typography>
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                <Chip size="small" variant="outlined" label={ArchiveStateUtil.prettify(row.signalConfidence)} />
                <Chip size="small" variant="outlined" label={ArchiveStateUtil.prettify(row.discoveryReason)} />
                <Chip
                    size="small"
                    variant="outlined"
                    label={t`Visual analysis: ${ArchiveStateUtil.prettify(row.visualAnalysisState)}`}
                />
                {row.pageCount != null && <Chip size="small" variant="outlined" label={t`${row.pageCount} pages`} />}
            </Stack>
            <Typography variant="caption" color="text.secondary" component="div">
                {[
                    `${t`Archived`} ${ArchiveStateUtil.formatTimestamp(row.archivedAt)}`,
                    `${t`Discovered`} ${ArchiveStateUtil.formatTimestamp(row.discoveredAt)}`,
                ].join(' · ')}
            </Typography>
            {row.visualAnalysisLastError && (
                <Typography variant="caption" color="error" component="div">
                    {row.visualAnalysisLastError}
                </Typography>
            )}
        </Box>
    );
};

const ComparisonSummaryCard = ({ comparison, row }: { comparison: Comparison; row: ReviewRow }) => {
    const { t } = useLingui();

    return (
        <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack sx={{ gap: 1 }}>
                <Typography variant="subtitle1">{t`Comparison of ${comparison.alignedCount} aligned pages`}</Typography>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    <Chip size="small" label={t`${comparison.modifiedCount} modified`} color="warning" />
                    <Chip size="small" label={t`${comparison.addedCount} added`} color="success" />
                    <Chip size="small" label={t`${comparison.removedCount} removed`} color="error" />
                    <Chip size="small" variant="outlined" label={t`${comparison.visuallyEquivalentCount} equivalent`} />
                    <Chip size="small" variant="outlined" label={t`${comparison.exactCount} identical`} />
                </Stack>
                <Typography variant="body2" color="text.secondary">
                    {t`Baseline ${comparison.baselinePageCount} pages, candidate ${comparison.candidatePageCount} pages, fingerprint threshold ${comparison.hammingThreshold}.`}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {t`Recorded ${ArchiveStateUtil.formatTimestamp(comparison.createdAt)} with ${comparison.algorithmVersion}.`}
                </Typography>
                {comparison.hasLimitations && (
                    <Alert severity="info">{t`This comparison is degraded: ${comparison.limitations ?? ''}`}</Alert>
                )}
                {comparison.allPagesVisuallyEquivalent && !comparison.hasLimitations && (
                    <Alert severity="success">
                        {t`Every page of the candidate matches the baseline visually, so no page is marked as different.`}
                    </Alert>
                )}
                {row.publicationState !== ChapterPublicationState.Published && (
                    <Alert severity="info">
                        {t`The archived content is confirmed on the remote, but it is not the copy the chapter serves yet.`}
                    </Alert>
                )}
            </Stack>
        </Paper>
    );
};

const SliderComparison = ({
    baselineUrl,
    candidateUrl,
    label,
    shouldLoad,
}: {
    baselineUrl: string | null;
    candidateUrl: string | null;
    label: string;
    shouldLoad: boolean;
}) => {
    const { t } = useLingui();
    const [position, setPosition] = useState(50);

    return (
        <Stack sx={{ gap: 1 }}>
            <Box
                sx={{
                    position: 'relative',
                    height: ArchiveConstants.COMPARISON_PREVIEW_HEIGHT,
                    overflow: 'hidden',
                    bgcolor: (theme) => theme.palette.background.default,
                }}
            >
                {/* both sides fill the same box, so the reveal line cuts through one picture twice
                    instead of comparing two differently scaled ones */}
                <Box sx={{ position: 'absolute', inset: 0 }}>
                    <ArchiveRevisionPreview
                        url={baselineUrl}
                        label={`${label} ${t`current`}`}
                        shouldLoad={shouldLoad}
                        fill
                    />
                </Box>
                <Box sx={{ position: 'absolute', inset: 0, clipPath: `inset(0 0 0 ${position}%)` }}>
                    <ArchiveRevisionPreview
                        url={candidateUrl}
                        label={`${label} ${t`candidate`}`}
                        shouldLoad={shouldLoad}
                        fill
                    />
                </Box>
            </Box>
            <Slider
                value={position}
                onChange={(_event, value) => setPosition(value as number)}
                size="small"
                aria-label={t`Reveal the candidate`}
            />
        </Stack>
    );
};

/**
 * The post-archive review queue.
 *
 * A candidate lands here once its payload is durably archived, which is the point where it *can*
 * replace what the chapter serves but must not do so on its own. The tab is only about that decision:
 * the approval queue decides what may be acquired, this one decides what becomes the served revision.
 *
 * Previews are rendered from the API addresses the server hands out for an aligned row, are requested
 * one page of previews at a time, and are only requested for rows that are actually shown. When the
 * visual comparison did not run or failed, the decision is still offered - a missing comparison is a
 * reason to look at the chapter list, not a reason to leave a candidate undecided forever.
 */
export const ArchiveReviewQueue: React.FC = () => {
    const { t } = useLingui();

    const [selected, setSelected] = useState<ReviewRow | null>(null);
    // Rows and aligned pages read beyond the first server page, plus the cursor they were read up to.
    // The server's own `hasNextPage` of the last appended page is kept next to it: a cursor only says
    // where reading stopped, never that another page exists.
    const [appendedRows, setAppendedRows] = useState<ReviewRow[]>([]);
    const [rowsCursor, setRowsCursor] = useState<string | null>(null);
    const [appendedRowsHaveNext, setAppendedRowsHaveNext] = useState(false);
    const [appendedPages, setAppendedPages] = useState<ComparisonPage[]>([]);
    const [pagesCursor, setPagesCursor] = useState<string | null>(null);
    const [appendedPagesHaveNext, setAppendedPagesHaveNext] = useState(false);
    const [viewMode, setViewMode] = useState<ComparisonViewMode>(ComparisonViewMode.SIDE_BY_SIDE);
    const [showFullPages, setShowFullPages] = useState(false);
    const [onlyDifferences, setOnlyDifferences] = useState(false);
    const [diffOverlay, setDiffOverlay] = useState(false);
    const [sliderOrdinal, setSliderOrdinal] = useState<number | null>(null);
    const [isWorking, setIsWorking] = useState(false);

    const reviewRequest = requestManager.useGetArchiveReviewCandidates(
        { first: ArchiveConstants.REVIEW_PAGE_SIZE },
        { fetchPolicy: 'cache-and-network' },
    );

    const revisionId = selected?.id ?? null;

    const comparisonRequest = requestManager.useGetArchiveRevisionComparison(
        { revisionId: revisionId ?? 0 },
        { skip: revisionId == null, fetchPolicy: 'cache-and-network' },
    );

    const pagesRequest = requestManager.useGetArchiveRevisionComparisonPages(
        { revisionId: revisionId ?? 0, first: ArchiveConstants.COMPARISON_PAGE_SIZE },
        { skip: revisionId == null, fetchPolicy: 'cache-and-network' },
    );

    const firstPageRows = reviewRequest.data?.chapterRevisions.nodes ?? [];
    const rowsPageInfo = reviewRequest.data?.chapterRevisions.pageInfo;
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
    const totalCount = reviewRequest.data?.chapterRevisions.totalCount ?? 0;
    const rowsHaveAppendedPages = rowsCursor !== null;
    /** Whether the server said there is another page after the rows on screen. */
    const rowsHasNextPage = rowsHaveAppendedPages ? appendedRowsHaveNext : !!rowsPageInfo?.hasNextPage;

    const comparison = comparisonRequest.data?.chapterRevisionComparison ?? null;
    const firstPages = pagesRequest.data?.chapterRevisionComparisonPages.nodes ?? [];
    const pagesPageInfo = pagesRequest.data?.chapterRevisionComparisonPages.pageInfo;
    const comparisonPages = useMemo(() => {
        const seen = new Set<number>();
        return [...firstPages, ...appendedPages].filter((page) => {
            if (seen.has(page.ordinal)) {
                return false;
            }
            seen.add(page.ordinal);
            return true;
        });
    }, [firstPages, appendedPages]);
    const shownPages =
        onlyDifferences && comparison ? comparisonPages.filter((page) => isDifference(page)) : comparisonPages;
    const pagesHaveAppendedPages = pagesCursor !== null;
    /** Whether the server said there is another page after the aligned pages on screen. */
    const pagesHasNextPage = pagesHaveAppendedPages ? appendedPagesHaveNext : !!pagesPageInfo?.hasNextPage;

    /** The row the slider is showing; null while no row is picked or after the selection was reset. */
    const sliderRow =
        sliderOrdinal == null ? null : (comparisonPages.find((page) => page.ordinal === sliderOrdinal) ?? null);
    const sliderUrls = sliderRow ? previewUrls(sliderRow, showFullPages) : null;
    /** The slider needs both sides of the row in the detail level that is currently shown. */
    const sliderComparable = !!sliderUrls?.baseline && !!sliderUrls?.candidate;

    /** Forgets every appended page, so the next read of a connection starts at its first server page. */
    const resetAppendedPages = useCallback(() => {
        setAppendedRows([]);
        setRowsCursor(null);
        setAppendedRowsHaveNext(false);
        setAppendedPages([]);
        setPagesCursor(null);
        setAppendedPagesHaveNext(false);
    }, []);

    const reloadReviewQueue = useCallback(async () => {
        resetAppendedPages();
        await reviewRequest
            .refetch()
            .catch((e) => makeToast(t`Could not load the review queue`, 'error', getErrorMessage(e)));
    }, [resetAppendedPages, reviewRequest.refetch, t]);

    const selectRow = (row: ReviewRow) => {
        setSelected(row);
        resetAppendedPages();
        setSliderOrdinal(null);
    };

    const loadMoreRows = useCallback(async () => {
        setIsWorking(true);
        try {
            const after = rowsHaveAppendedPages ? rowsCursor : rowsPageInfo?.endCursor;
            const response = await requestManager.getArchiveReviewCandidatesPage({
                first: ArchiveConstants.REVIEW_PAGE_SIZE,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more candidates`, 'error', getErrorMessage(response.error));
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
            makeToast(t`Could not load more candidates`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [rowsHaveAppendedPages, rowsCursor, rowsPageInfo?.endCursor, t]);

    const loadMorePages = useCallback(async () => {
        if (revisionId == null) {
            return;
        }

        setIsWorking(true);
        try {
            const after = pagesHaveAppendedPages ? pagesCursor : pagesPageInfo?.endCursor;
            const response = await requestManager.getArchiveRevisionComparisonPagesPage({
                revisionId,
                first: ArchiveConstants.COMPARISON_PAGE_SIZE,
                after,
            }).response;

            if (response.error) {
                makeToast(t`Could not load more pages`, 'error', getErrorMessage(response.error));
                return;
            }

            const page = response.data?.chapterRevisionComparisonPages;
            const endCursor = page?.pageInfo.endCursor;
            // same rule as the candidate list: no rows, no cursor or an unchanged cursor is the end of
            // the alignment, and the pages already on screen stay exactly as they are
            if (!page || !page.nodes.length || !endCursor || endCursor === after) {
                setAppendedPagesHaveNext(false);
                return;
            }

            setAppendedPages((current) => [...current, ...page.nodes]);
            setPagesCursor(endCursor);
            setAppendedPagesHaveNext(page.pageInfo.hasNextPage);
        } catch (e) {
            makeToast(t`Could not load more pages`, 'error', getErrorMessage(e));
        } finally {
            setIsWorking(false);
        }
    }, [revisionId, pagesHaveAppendedPages, pagesCursor, pagesPageInfo?.endCursor, t]);

    const decide = useCallback(
        async (decision: ReviewDecision) => {
            if (revisionId == null) {
                return;
            }

            const confirmationIds: Record<ReviewDecision, string> = {
                [ReviewDecision.ACCEPT_CANDIDATE]: 'archive-review-accept-candidate',
                [ReviewDecision.KEEP_CURRENT]: 'archive-review-keep-current',
                [ReviewDecision.KEEP_BOTH]: 'archive-review-keep-both',
                [ReviewDecision.REJECT_CANDIDATE]: 'archive-review-reject-candidate',
            };
            const confirmations: Record<ReviewDecision, { title: string; message: string }> = {
                [ReviewDecision.ACCEPT_CANDIDATE]: {
                    title: t`Make the archived content the served revision?`,
                    message: t`The revision that currently serves this chapter becomes historical and is kept according to the retention settings.`,
                },
                [ReviewDecision.KEEP_CURRENT]: {
                    title: t`Keep the current revision and discard this candidate?`,
                    message: t`The candidate stops being reviewable. Its archived content is not published.`,
                },
                [ReviewDecision.KEEP_BOTH]: {
                    title: t`Keep both revisions?`,
                    message: t`The candidate is kept as a historical revision instead of being published. Historical revisions are pruned according to the retention settings.`,
                },
                [ReviewDecision.REJECT_CANDIDATE]: {
                    title: t`Reject this candidate?`,
                    message: t`The candidate stops being reviewable and is not published.`,
                },
            };

            try {
                await Confirmation.show(
                    {
                        title: confirmations[decision].title,
                        message: confirmations[decision].message,
                        actions: { confirm: { title: t`Confirm` } },
                    },
                    { id: confirmationIds[decision] },
                );
            } catch {
                return;
            }

            setIsWorking(true);
            try {
                const callers: Record<ReviewDecision, (ids: number[]) => { response: Promise<{ error?: unknown }> }> = {
                    [ReviewDecision.ACCEPT_CANDIDATE]: (ids) => requestManager.acceptChapterRevisionCandidates(ids),
                    [ReviewDecision.KEEP_CURRENT]: (ids) => requestManager.keepCurrentChapterRevisions(ids),
                    [ReviewDecision.KEEP_BOTH]: (ids) => requestManager.keepBothChapterRevisions(ids),
                    [ReviewDecision.REJECT_CANDIDATE]: (ids) => requestManager.rejectChapterRevisionCandidates(ids),
                };

                const response = await callers[decision]([revisionId]).response;
                if (response.error) {
                    makeToast(t`Could not apply the decision`, 'error', getErrorMessage(response.error));
                    return;
                }

                makeToast(t`Decision applied`, 'success');
                // the server is the only source of truth here: the row may have left the queue and the
                // served revision changed, so everything displayed is re-read instead of patched
                setSelected(null);
                await reloadReviewQueue();
            } catch (e) {
                makeToast(t`Could not apply the decision`, 'error', getErrorMessage(e));
            } finally {
                setIsWorking(false);
            }
        },
        [revisionId, reloadReviewQueue, t],
    );

    if (reviewRequest.error) {
        return (
            <EmptyViewAbsoluteCentered
                message={t`Unable to load the review queue`}
                messageExtra={getErrorMessage(reviewRequest.error)}
                retry={() => void reloadReviewQueue()}
            />
        );
    }

    if (reviewRequest.loading && !reviewRequest.data) {
        return <LoadingPlaceholder usePadding />;
    }

    return (
        <Stack sx={{ gap: 2, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
            <Stack sx={{ gap: 2, width: { xs: '100%', md: '38%' }, minWidth: { md: 320 } }}>
                <Paper variant="outlined" sx={{ p: 1 }}>
                    <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" sx={{ mr: 'auto' }}>
                            {t`${totalCount} candidates awaiting a decision`}
                        </Typography>
                        <Button variant="outlined" disabled={isWorking} onClick={() => void reloadReviewQueue()}>
                            {t`Refresh`}
                        </Button>
                    </Stack>
                </Paper>

                {!rows.length ? (
                    <EmptyViewAbsoluteCentered message={t`No archived candidate is waiting for a decision`} />
                ) : (
                    <Paper variant="outlined">
                        <List disablePadding>
                            {rows.map((row) => (
                                <ListItemButton
                                    key={row.id}
                                    selected={row.id === revisionId}
                                    onClick={() => selectRow(row)}
                                    divider
                                    sx={{ alignItems: 'flex-start' }}
                                >
                                    <RowSummary row={row} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Paper>
                )}

                {rowsHasNextPage && (
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button variant="outlined" disabled={isWorking} onClick={() => void loadMoreRows()}>
                            {t`Load more`}
                        </Button>
                    </Stack>
                )}
            </Stack>

            <Stack sx={{ gap: 2, width: { xs: '100%', md: '62%' } }}>
                {!selected ? (
                    <EmptyViewAbsoluteCentered message={t`Select a candidate to see what changed`} />
                ) : (
                    <>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack sx={{ gap: 2 }}>
                                <RowSummary row={selected} />
                                <Divider />
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        disabled={isWorking}
                                        onClick={() => void decide(ReviewDecision.ACCEPT_CANDIDATE)}
                                    >{t`Accept candidate`}</Button>
                                    <Button
                                        variant="outlined"
                                        disabled={isWorking}
                                        onClick={() => void decide(ReviewDecision.KEEP_CURRENT)}
                                    >{t`Keep current`}</Button>
                                    <Button
                                        variant="outlined"
                                        disabled={isWorking}
                                        onClick={() => void decide(ReviewDecision.KEEP_BOTH)}
                                    >{t`Keep both`}</Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        disabled={isWorking}
                                        onClick={() => void decide(ReviewDecision.REJECT_CANDIDATE)}
                                    >{t`Reject candidate`}</Button>
                                </Stack>
                                <Typography variant="caption" color="text.secondary">
                                    {t`Accepting publishes the archived content, keeping both keeps it as history, keeping current and rejecting leave the served revision untouched.`}
                                </Typography>
                            </Stack>
                        </Paper>

                        {comparisonRequest.error && (
                            <Alert severity="warning">
                                {t`The comparison could not be read: ${getErrorMessage(comparisonRequest.error)}`}
                            </Alert>
                        )}

                        {selected.visualAnalysisState === ChapterVisualAnalysisState.Failed && (
                            <Alert severity="warning">
                                {t`The visual comparison of this candidate failed, so its previews may be missing or incomplete. The decision is still available.`}
                            </Alert>
                        )}
                        {selected.visualAnalysisState === ChapterVisualAnalysisState.NotRequired && (
                            <Alert severity="info">
                                {t`No comparison was needed for this candidate, so there is nothing to preview.`}
                            </Alert>
                        )}
                        {selected.visualAnalysisState === ChapterVisualAnalysisState.Queued ||
                        selected.visualAnalysisState === ChapterVisualAnalysisState.Analyzing ? (
                            <Alert severity="info">
                                {t`The visual comparison is still running. It is written before the candidate becomes reviewable, so this state should clear on its own.`}
                            </Alert>
                        ) : null}

                        {comparison && <ComparisonSummaryCard comparison={comparison} row={selected} />}

                        {!comparison && !comparisonRequest.loading && (
                            <Alert severity="info">
                                {t`No stored comparison exists for this candidate, so only the decision and the chapter metadata are available.`}
                            </Alert>
                        )}

                        {!!comparisonPages.length && (
                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Stack sx={{ gap: 2 }}>
                                    <Stack
                                        sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}
                                    >
                                        <FormControl size="small" sx={{ minWidth: 170 }}>
                                            <InputLabel id="archive-review-view-label">{t`View`}</InputLabel>
                                            <Select
                                                labelId="archive-review-view-label"
                                                label={t`View`}
                                                value={viewMode}
                                                onChange={(event) =>
                                                    setViewMode(event.target.value as ComparisonViewMode)
                                                }
                                            >
                                                <MenuItem
                                                    value={ComparisonViewMode.SIDE_BY_SIDE}
                                                >{t`Side by side`}</MenuItem>
                                                <MenuItem value={ComparisonViewMode.SLIDER}>{t`Slider`}</MenuItem>
                                                <MenuItem
                                                    value={ComparisonViewMode.OVERLAY}
                                                >{t`Difference overlay`}</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                                            <Switch
                                                checked={showFullPages}
                                                onChange={(event) => setShowFullPages(event.target.checked)}
                                                slotProps={{ input: { 'aria-label': t`Show full pages` } }}
                                            />
                                            <Typography variant="body2">{t`Full pages`}</Typography>
                                        </Stack>
                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                                            <Switch
                                                checked={onlyDifferences}
                                                onChange={(event) => setOnlyDifferences(event.target.checked)}
                                                slotProps={{ input: { 'aria-label': t`Only pages that differ` } }}
                                            />
                                            <Typography variant="body2">{t`Only pages that differ`}</Typography>
                                        </Stack>
                                        {viewMode === ComparisonViewMode.OVERLAY && (
                                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                                                <Switch
                                                    checked={diffOverlay}
                                                    onChange={(event) => setDiffOverlay(event.target.checked)}
                                                    slotProps={{ input: { 'aria-label': t`Blend both sides` } }}
                                                />
                                                <Typography variant="body2">{t`Blend both sides`}</Typography>
                                            </Stack>
                                        )}
                                    </Stack>

                                    {viewMode === ComparisonViewMode.SLIDER && sliderOrdinal == null && (
                                        <Typography variant="body2" color="text.secondary">
                                            {t`Select a page below to compare it with the slider.`}
                                        </Typography>
                                    )}

                                    {viewMode === ComparisonViewMode.SLIDER &&
                                        sliderRow != null &&
                                        sliderComparable && (
                                            <SliderComparison
                                                baselineUrl={sliderUrls?.baseline ?? null}
                                                candidateUrl={sliderUrls?.candidate ?? null}
                                                label={t`Page ${displayPosition(sliderRow.ordinal)}`}
                                                shouldLoad
                                            />
                                        )}

                                    {viewMode === ComparisonViewMode.SLIDER &&
                                        sliderRow != null &&
                                        !sliderComparable && (
                                            <Alert severity="info">
                                                {t`This row has no preview on both sides in the selected detail level, so it cannot be compared with the slider.`}
                                            </Alert>
                                        )}
                                </Stack>
                            </Paper>
                        )}

                        {!!comparisonPages.length && (
                            <Paper variant="outlined">
                                <List disablePadding>
                                    {shownPages.map((page) => {
                                        const rowLabel = t`Aligned row ${displayPosition(page.ordinal)}`;
                                        const rowUrls = previewUrls(page, showFullPages);
                                        return (
                                            <Box
                                                key={page.ordinal}
                                                sx={{
                                                    p: 2,
                                                    borderBottom: 1,
                                                    borderColor: 'divider',
                                                    '&:last-of-type': { borderBottom: 0 },
                                                }}
                                            >
                                                <Stack sx={{ gap: 1 }}>
                                                    <Stack
                                                        sx={{
                                                            flexDirection: 'row',
                                                            flexWrap: 'wrap',
                                                            gap: 1,
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Chip
                                                            size="small"
                                                            color={isDifference(page) ? 'warning' : 'default'}
                                                            label={ArchiveStateUtil.prettify(page.state)}
                                                        />
                                                        <Typography variant="body2">
                                                            {t`Row ${displayPosition(page.ordinal)}`}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {[
                                                                `${t`Page`} ${displayIndex(page.baselinePageIndex)} → ${displayIndex(page.candidatePageIndex)}`,
                                                                page.hammingDistance != null
                                                                    ? `${t`Distance`} ${page.hammingDistance}`
                                                                    : null,
                                                                page.baselineWidth != null &&
                                                                page.baselineHeight != null
                                                                    ? `${t`Current`} ${page.baselineWidth}×${page.baselineHeight}`
                                                                    : null,
                                                                page.candidateWidth != null &&
                                                                page.candidateHeight != null
                                                                    ? `${t`Candidate`} ${page.candidateWidth}×${page.candidateHeight}`
                                                                    : null,
                                                            ]
                                                                .filter(Boolean)
                                                                .join(' · ')}
                                                        </Typography>
                                                    </Stack>

                                                    {viewMode === ComparisonViewMode.SLIDER && (
                                                        <Button
                                                            size="small"
                                                            variant={
                                                                sliderOrdinal === page.ordinal
                                                                    ? 'contained'
                                                                    : 'outlined'
                                                            }
                                                            disabled={!bothSidesAddressable(page, showFullPages)}
                                                            onClick={() => setSliderOrdinal(page.ordinal)}
                                                        >{t`Compare with slider`}</Button>
                                                    )}
                                                    {viewMode === ComparisonViewMode.OVERLAY && (
                                                        /* both sides are drawn in the same box and scaled to it, so an
                                                           overlay really overlays instead of standing side by side */
                                                        <Box
                                                            sx={{
                                                                position: 'relative',
                                                                height: ArchiveConstants.COMPARISON_PREVIEW_HEIGHT,
                                                                bgcolor: (theme) => theme.palette.background.default,
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            <Box sx={{ position: 'absolute', inset: 0 }}>
                                                                <ArchiveRevisionPreview
                                                                    url={rowUrls.baseline}
                                                                    label={`${rowLabel} ${t`current`}`}
                                                                    shouldLoad
                                                                    fill
                                                                    emptyMessage={
                                                                        rowUrls.baseline == null
                                                                            ? t`This page does not exist in the current revision`
                                                                            : undefined
                                                                    }
                                                                />
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    inset: 0,
                                                                    // the blend is the difference view; without it the candidate
                                                                    // is simply drawn over the current revision
                                                                    mixBlendMode: diffOverlay ? 'difference' : 'normal',
                                                                }}
                                                            >
                                                                <ArchiveRevisionPreview
                                                                    url={rowUrls.candidate}
                                                                    label={`${rowLabel} ${t`candidate`}`}
                                                                    shouldLoad
                                                                    fill
                                                                    emptyMessage={
                                                                        rowUrls.candidate == null
                                                                            ? t`This page does not exist in the candidate`
                                                                            : undefined
                                                                    }
                                                                />
                                                            </Box>
                                                        </Box>
                                                    )}
                                                    {viewMode === ComparisonViewMode.SIDE_BY_SIDE && (
                                                        <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                                <Typography variant="caption" color="text.secondary">
                                                                    {t`Current`}
                                                                </Typography>
                                                                <ArchiveRevisionPreview
                                                                    url={rowUrls.baseline}
                                                                    label={`${rowLabel} ${t`current`}`}
                                                                    shouldLoad
                                                                    maxHeight={
                                                                        ArchiveConstants.COMPARISON_PREVIEW_HEIGHT
                                                                    }
                                                                    emptyMessage={
                                                                        rowUrls.baseline == null
                                                                            ? t`This page does not exist in the current revision`
                                                                            : undefined
                                                                    }
                                                                />
                                                            </Box>
                                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                                <Typography variant="caption" color="text.secondary">
                                                                    {t`Candidate`}
                                                                </Typography>
                                                                <ArchiveRevisionPreview
                                                                    url={rowUrls.candidate}
                                                                    label={`${rowLabel} ${t`candidate`}`}
                                                                    shouldLoad
                                                                    maxHeight={
                                                                        ArchiveConstants.COMPARISON_PREVIEW_HEIGHT
                                                                    }
                                                                    emptyMessage={
                                                                        rowUrls.candidate == null
                                                                            ? t`This page does not exist in the candidate`
                                                                            : undefined
                                                                    }
                                                                />
                                                            </Box>
                                                        </Stack>
                                                    )}
                                                </Stack>
                                            </Box>
                                        );
                                    })}
                                </List>
                            </Paper>
                        )}

                        {pagesRequest.error && (
                            <Alert severity="warning">
                                {t`The alignment could not be read: ${getErrorMessage(pagesRequest.error)}`}
                            </Alert>
                        )}

                        {pagesHasNextPage && (
                            <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Button variant="outlined" disabled={isWorking} onClick={() => void loadMorePages()}>
                                    {t`Load more pages`}
                                </Button>
                            </Stack>
                        )}

                        {/* the history is shown per chapter identity, so it is the same list whichever
                            candidate of the chapter is selected */}
                        <ArchiveRevisionHistorySection
                            chapterKey={selected.chapterKey}
                            onRolledBack={reloadReviewQueue}
                        />
                    </>
                )}
            </Stack>
        </Stack>
    );
};
