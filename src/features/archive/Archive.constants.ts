/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
    ChapterAcquisitionState,
    ChapterArchiveState,
    ChapterPublicationState,
    ChapterRetentionState,
    type MangaAcquisitionPolicy,
} from '@/lib/graphql/generated/graphql-base.types.ts';

export enum ArchiveTab {
    OVERVIEW = 0,
    APPROVAL = 1,
    REVIEW = 2,
    QUEUE = 3,
    SWEEPS = 4,
    INTEGRITY = 5,
    WORKS = 6,
}

/**
 * The page sizes, poll intervals and bounds the archive dashboard uses.
 *
 * A plain constant object rather than an enum: several of these are legitimately the same number, and
 * an enum would claim they are distinct values.
 */
export const ArchiveConstants = {
    APPROVAL_PAGE_SIZE: 25,
    QUEUE_PAGE_SIZE: 50,
    /** Upper bound of the "archive all pending" loop, so a server that never drains cannot hang the UI. */
    APPROVAL_MAX_BATCHES: 100,
    OVERVIEW_POLL_INTERVAL_MILLISECONDS: 5000,
    BOOTSTRAP_UNRESOLVED_SAMPLE_SIZE: 3,
    RESTORE_AUDIT_LIMIT: 5,
    REVIEW_PAGE_SIZE: 25,
    /** One page of an alignment; a chapter can have thousands of pages, so they are paged, never all loaded. */
    COMPARISON_PAGE_SIZE: 50,
    /**
     * The box one preview is drawn in.
     *
     * A fixed height is what lets two sides of a row be laid over each other and scaled identically
     * instead of each being sized by its own aspect ratio.
     */
    COMPARISON_PREVIEW_HEIGHT: 320,
    SWEEP_ITEM_PAGE_SIZE: 50,
    SWEEP_HISTORY_PAGE_SIZE: 10,
    SWEEP_POLL_INTERVAL_MILLISECONDS: 5000,
    INTEGRITY_ITEM_PAGE_SIZE: 50,
    INTEGRITY_HISTORY_PAGE_SIZE: 10,
    INTEGRITY_POLL_INTERVAL_MILLISECONDS: 5000,
    /** One page of the work list. A title search narrows the set, so paging is only needed while browsing. */
    CANONICAL_WORK_PAGE_SIZE: 25,
    /** How many works a title search offers to pick from; a narrower search is how an operator reaches the rest. */
    CANONICAL_WORK_SEARCH_SIZE: 25,
    REVISION_HISTORY_PAGE_SIZE: 25,
    REVISION_ROLLBACK_PAGE_SIZE: 10,
} as const;

/**
 * Sweep session states whose worker still progresses on its own.
 *
 * Only these are polled: a paused or finished run changes when an operator acts on it, and every
 * action refreshes the state itself, so polling them would request an unchanging answer forever.
 */
export const RUNNING_SWEEP_SESSION_STATES = ['RUNNING'] as const;

/** Sweep session states an operator may still pause, resume or cancel. */
export const ACTIONABLE_SWEEP_SESSION_STATES = ['RUNNING', 'PAUSED'] as const;

/**
 * Integrity audit session states whose worker still progresses on its own.
 *
 * Only these are polled: a paused or finished run changes when an operator acts on it, and every action
 * refreshes the state itself, so polling them would request an unchanging answer forever.
 */
export const RUNNING_INTEGRITY_SESSION_STATES = ['RUNNING'] as const;

/** Integrity audit session states an operator may still pause, resume or cancel. */
export const ACTIONABLE_INTEGRITY_SESSION_STATES = ['RUNNING', 'PAUSED'] as const;

/**
 * The item states that are findings about the archive rather than about the check.
 *
 * `MISSING` and `CORRUPT` say something about the payload; `FAILED` and `RETRY_WAIT` only say that the
 * check itself could not conclude anything, so counting them as damage would misreport the archive.
 */
export const INTEGRITY_FINDING_ITEM_STATES = ['MISSING', 'CORRUPT'] as const;

/**
 * The retention states in which a revision's archived CBZ payload is already on its way out.
 *
 * The server refuses to make such a revision visible again because the file the action would need is
 * exactly the one being removed, so the history stops offering a rollback there.
 */
export const REVISION_PAYLOAD_GONE_RETENTION_STATES = ['DELETING', 'REMOTE_DELETE_PENDING', 'PRUNED'] as const;

/**
 * The integrity states in which the last completed audit found the archived payload unusable.
 *
 * Independent of the retention states: a revision that was never audited, or audited and verified, is
 * usable; one reported missing or corrupt is not.
 */
export const REVISION_INTEGRITY_FINDING_STATES = ['MISSING', 'CORRUPT'] as const;

/**
 * The dispositions of a revision a rollback may target.
 *
 * A revision that was accepted once - so either the one currently serving the chapter or one it was
 * already superseded by - is what a rollback can return to. A candidate that was never accepted has no
 * published content to restore.
 */
export const REVISION_ROLLBACK_TARGET_DISPOSITIONS = ['ACCEPTED', 'SUPERSEDED'] as const;

/** Restore states that still make progress on their own. */
export const ACTIVE_RESTORE_STATES = ['QUEUED', 'RUNNING'] as const;

/**
 * Bootstrap states an operator may still act on, which is what the pause/cancel buttons gate on.
 *
 * PAUSED belongs here because a paused run is still cancellable, but it is deliberately absent from
 * [PROGRESSING_BOOTSTRAP_STATES]: a paused run is idle until it is resumed.
 */
export const ACTIVE_BOOTSTRAP_STATES = ['RUNNING', 'PAUSED'] as const;

/** Komga scan states whose worker is still doing work. */
export const ACTIVE_KOMGA_STATES = ['PENDING', 'RUNNING'] as const;

/**
 * Bootstrap states the overview polls on, i.e. the ones a server worker still progresses.
 *
 * A PAUSED bootstrap only changes when an operator resumes it, and the resume mutation refreshes the
 * overview itself, so polling it would request an unchanging state forever.
 */
export const PROGRESSING_BOOTSTRAP_STATES = ['RUNNING'] as const;

/**
 * The four independent revision dimensions the queue inspector can filter by.
 *
 * They are kept apart because the server stores them as independent columns: a revision can be
 * pending publication while its acquisition already completed, so one combined state would be wrong.
 */
export enum ArchiveQueueDimension {
    ACQUISITION = 'ACQUISITION',
    ARCHIVE = 'ARCHIVE',
    PUBLICATION = 'PUBLICATION',
    RETENTION = 'RETENTION',
}

/** The wire values a dimension can be filtered by, so the inspector does not need a hand-kept list. */
export const ARCHIVE_QUEUE_DIMENSION_STATES = {
    [ArchiveQueueDimension.ACQUISITION]: Object.values(ChapterAcquisitionState),
    [ArchiveQueueDimension.ARCHIVE]: Object.values(ChapterArchiveState),
    [ArchiveQueueDimension.PUBLICATION]: Object.values(ChapterPublicationState),
    [ArchiveQueueDimension.RETENTION]: Object.values(ChapterRetentionState),
} as const satisfies Record<ArchiveQueueDimension, readonly string[]>;

/**
 * The states the matching server retry mutation actually requeues.
 *
 * Every other state is either in flight or already settled, so the server would silently ignore the
 * request; the inspector disables the action instead of offering a retry that does nothing.
 */
export const ARCHIVE_QUEUE_DIMENSION_RETRYABLE_STATES = {
    [ArchiveQueueDimension.ACQUISITION]: [
        ChapterAcquisitionState.DownloadFailed,
        ChapterAcquisitionState.ValidationFailed,
    ],
    [ArchiveQueueDimension.ARCHIVE]: [ChapterArchiveState.CommitFailed, ChapterArchiveState.ArchiveUnconfirmed],
    [ArchiveQueueDimension.PUBLICATION]: [ChapterPublicationState.PublicationFailed],
    [ArchiveQueueDimension.RETENTION]: [ChapterRetentionState.PruneFailed],
} as const satisfies Record<ArchiveQueueDimension, readonly string[]>;

/** Per-series retention override modes. `INHERIT` keeps following the global setting. */
export enum ArchiveRetentionMode {
    INHERIT = 'INHERIT',
    LIMITED = 'LIMITED',
    UNLIMITED = 'UNLIMITED',
}

/** The server sentinel for "keep every accepted revision" in the nullable per-series override. */
export const ARCHIVE_RETENTION_UNLIMITED = -1;

/**
 * The per-series policy select value that keeps following the global archival default.
 *
 * The other select values are the server's own `MangaAcquisitionPolicy` values, so the inherit case is
 * the only one that needs a value of its own.
 */
export const ARCHIVE_ACQUISITION_POLICY_INHERIT = 'INHERIT';

/** The per-series acquisition-policy select: an explicit policy, or the global default. */
export type ArchiveAcquisitionPolicySelection = MangaAcquisitionPolicy | typeof ARCHIVE_ACQUISITION_POLICY_INHERIT;
