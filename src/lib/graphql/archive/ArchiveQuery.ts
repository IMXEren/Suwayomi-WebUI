/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import gql from 'graphql-tag';
import { PAGE_INFO } from '@/lib/graphql/common/Fragments.ts';
import {
    ARCHIVE_BOOTSTRAP_SESSION,
    ARCHIVE_COMPARISON_PAGE,
    ARCHIVE_COMPARISON_SUMMARY,
    ARCHIVE_INSPECTOR_ROW,
    ARCHIVE_INTEGRITY_ITEM,
    ARCHIVE_INTEGRITY_SCHEDULE,
    ARCHIVE_INTEGRITY_SESSION,
    ARCHIVE_REVIEW_ROW,
    ARCHIVE_REVISION_HISTORY_ROW,
    ARCHIVE_REVISION_ROW,
    ARCHIVE_ROLLBACK_ROW,
    ARCHIVE_SWEEP_ITEM,
    ARCHIVE_SWEEP_SCHEDULE,
    ARCHIVE_SWEEP_SESSION,
    BACKUP_RESTORE_JOB,
    CANONICAL_BINDING_ROW,
    CANONICAL_IDENTITY_STATUS,
    CANONICAL_WORK_ROW,
    KOMGA_RESCAN_STATUS,
} from '@/lib/graphql/archive/ArchiveFragments.ts';

/**
 * One request for the archive overview.
 *
 * Every backlog is asked for a single node because only its `totalCount` is displayed, and the
 * per-state counts are separate aliases of the same revision query: the archive states are
 * independent dimensions, so they cannot be combined into one filtered count.
 */
export const GET_ARCHIVE_OVERVIEW = gql`
    query GET_ARCHIVE_OVERVIEW {
        approvalBacklog(first: 1) {
            totalCount
        }
        queuedBacklog(first: 1) {
            totalCount
        }
        archiveRemotePending: chapterRevisions(archiveState: REMOTE_PENDING, first: 1) {
            totalCount
        }
        archiveUnconfirmed: chapterRevisions(archiveState: ARCHIVE_UNCONFIRMED, first: 1) {
            totalCount
        }
        archiveRemoteConfirmed: chapterRevisions(archiveState: REMOTE_CONFIRMED, first: 1) {
            totalCount
        }
        downloadingRevisions: chapterRevisions(acquisitionState: DOWNLOADING, first: 1) {
            totalCount
        }
        failedDownloads: chapterRevisions(acquisitionState: DOWNLOAD_FAILED, first: 1) {
            totalCount
        }
        failedValidations: chapterRevisions(acquisitionState: VALIDATION_FAILED, first: 1) {
            totalCount
        }
        publicationBacklog(first: 1) {
            totalCount
        }
        pruningBacklog(first: 1) {
            totalCount
        }
        komgaRescanStatus {
            ...KOMGA_RESCAN_STATUS
        }
        backupRestoreJobs(limit: 1) {
            ...BACKUP_RESTORE_JOB
        }
        archiveBootstrapActiveSession {
            ...ARCHIVE_BOOTSTRAP_SESSION
        }
        archiveBootstrapLatestSession {
            ...ARCHIVE_BOOTSTRAP_SESSION
        }
    }
    ${KOMGA_RESCAN_STATUS}
    ${BACKUP_RESTORE_JOB}
    ${ARCHIVE_BOOTSTRAP_SESSION}
`;

/** The approval queue. The server orders it by discovery time, so a cursor on the first page is stable. */
export const GET_ARCHIVE_APPROVAL_BACKLOG = gql`
    query GET_ARCHIVE_APPROVAL_BACKLOG($first: Int, $after: Cursor) {
        approvalBacklog(first: $first, after: $after) {
            nodes {
                ...ARCHIVE_REVISION_ROW
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_REVISION_ROW}
    ${PAGE_INFO}
`;

/**
 * The queue inspector.
 *
 * Exactly one dimension filter is sent non-null at a time, because the four states live in separate
 * server columns and the inspector selects one dimension/state pair at a time.
 */
export const GET_ARCHIVE_QUEUE = gql`
    query GET_ARCHIVE_QUEUE(
        $first: Int
        $after: Cursor
        $acquisitionState: ChapterAcquisitionState
        $archiveState: ChapterArchiveState
        $publicationState: ChapterPublicationState
        $retentionState: ChapterRetentionState
    ) {
        chapterRevisions(
            first: $first
            after: $after
            acquisitionState: $acquisitionState
            archiveState: $archiveState
            publicationState: $publicationState
            retentionState: $retentionState
        ) {
            nodes {
                ...ARCHIVE_INSPECTOR_ROW
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_INSPECTOR_ROW}
    ${PAGE_INFO}
`;

export const GET_ARCHIVE_BOOTSTRAP_PROGRESS = gql`
    query GET_ARCHIVE_BOOTSTRAP_PROGRESS($sessionId: Int!, $sampleSize: Int!) {
        archiveBootstrapProgress(sessionId: $sessionId) {
            total
            pending
            processing
            retryWait
            complete
            failed
            skipped
            cancelled
            unresolvedSource
            remaining
        }
        archiveBootstrapUnresolvedSources(sessionId: $sessionId, sampleSize: $sampleSize) {
            sourceId
            mangaCount
            sampleTitles
        }
    }
`;

export const GET_BACKUP_RESTORE_DETAIL = gql`
    query GET_BACKUP_RESTORE_DETAIL($restoreId: String!) {
        backupRestoreJob(restoreId: $restoreId) {
            ...BACKUP_RESTORE_JOB
        }
        backupRestoreErrorCounts(restoreId: $restoreId) {
            mangaErrors
            missingSources
        }
        backupRestoreAudits(restoreId: $restoreId, limit: 5) {
            id
            level
            phase
            mangaIndex
            message
            sourceId
            sourceName
            createdAt
        }
    }
    ${BACKUP_RESTORE_JOB}
`;

export const GET_KOMGA_RESCAN_STATUS = gql`
    query GET_KOMGA_RESCAN_STATUS {
        komgaRescanStatus {
            ...KOMGA_RESCAN_STATUS
        }
    }
    ${KOMGA_RESCAN_STATUS}
`;

/**
 * The post-archive review queue.
 *
 * A reviewer decides on candidates whose payload is durably archived, which is the pair of filters
 * below: the disposition says the candidate is still undecided and the archive state says its bytes
 * are confirmed on the remote. The server orders the connection by id, so a cursor on the first page
 * stays stable while decisions move rows out of the queue.
 */
export const GET_ARCHIVE_REVIEW_CANDIDATES = gql`
    query GET_ARCHIVE_REVIEW_CANDIDATES($first: Int, $after: Cursor) {
        chapterRevisions(disposition: CANDIDATE, archiveState: REMOTE_CONFIRMED, first: $first, after: $after) {
            nodes {
                ...ARCHIVE_REVIEW_ROW
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_REVIEW_ROW}
    ${PAGE_INFO}
`;

/** The stored comparison of one revision, or null when none was produced. */
export const GET_ARCHIVE_REVISION_COMPARISON = gql`
    query GET_ARCHIVE_REVISION_COMPARISON($revisionId: Int!) {
        chapterRevisionComparison(revisionId: $revisionId) {
            ...ARCHIVE_COMPARISON_SUMMARY
        }
    }
    ${ARCHIVE_COMPARISON_SUMMARY}
`;

/**
 * One page of the alignment behind a comparison.
 *
 * `ordinal` is unique inside a comparison and is the page order, so the cursor is the last ordinal
 * that was returned and appending pages can never duplicate or reorder a row.
 */
export const GET_ARCHIVE_REVISION_COMPARISON_PAGES = gql`
    query GET_ARCHIVE_REVISION_COMPARISON_PAGES($revisionId: Int!, $first: Int, $after: Cursor) {
        chapterRevisionComparisonPages(revisionId: $revisionId, first: $first, after: $after) {
            nodes {
                ...ARCHIVE_COMPARISON_PAGE
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_COMPARISON_PAGE}
    ${PAGE_INFO}
`;

/** The sweep schedule plus whichever run is current, which is what the panel polls. */
export const GET_ARCHIVE_SWEEP_STATE = gql`
    query GET_ARCHIVE_SWEEP_STATE {
        chapterRevisionSweepSchedule {
            ...ARCHIVE_SWEEP_SCHEDULE
        }
        chapterRevisionSweepActiveSession {
            ...ARCHIVE_SWEEP_SESSION
        }
        chapterRevisionSweepLatestSession {
            ...ARCHIVE_SWEEP_SESSION
        }
    }
    ${ARCHIVE_SWEEP_SCHEDULE}
    ${ARCHIVE_SWEEP_SESSION}
`;

/** The per-state counts of one run. The server requires a session, so this is only asked for a live one. */
export const GET_ARCHIVE_SWEEP_PROGRESS = gql`
    query GET_ARCHIVE_SWEEP_PROGRESS($sessionId: Int!) {
        chapterRevisionSweepProgress(sessionId: $sessionId) {
            total
            pending
            processing
            retryWait
            complete
            failed
            skipped
            cancelled
            remaining
        }
    }
`;

/** The chapters of one run, in the order the server's worker claims them. */
export const GET_ARCHIVE_SWEEP_ITEMS = gql`
    query GET_ARCHIVE_SWEEP_ITEMS(
        $sessionId: Int!
        $first: Int
        $after: Cursor
        $state: ChapterRevisionSweepItemState
    ) {
        chapterRevisionSweepItems(sessionId: $sessionId, first: $first, after: $after, state: $state) {
            nodes {
                ...ARCHIVE_SWEEP_ITEM
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_SWEEP_ITEM}
    ${PAGE_INFO}
`;

/** Previous runs, newest first, so an operator can see what the schedule did while nobody watched. */
export const GET_ARCHIVE_SWEEP_HISTORY = gql`
    query GET_ARCHIVE_SWEEP_HISTORY($first: Int, $after: Cursor) {
        chapterRevisionSweepSessions(first: $first, after: $after) {
            nodes {
                ...ARCHIVE_SWEEP_SESSION
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_SWEEP_SESSION}
    ${PAGE_INFO}
`;

/**
 * The scheduling settings of the automatic sweep.
 *
 * Only the three fields this panel edits are selected: the deployment pacing settings of the sweep
 * worker are operational tuning and stay in the server settings screen.
 */
export const GET_ARCHIVE_SWEEP_SETTINGS = gql`
    query GET_ARCHIVE_SWEEP_SETTINGS {
        settings {
            chapterRevisionSweepEnabled
            chapterRevisionSweepIntervalDays
            chapterRevisionSweepNewestChapters
        }
    }
`;

/**
 * The audit schedule plus whichever run is current, which is what the integrity tab polls.
 *
 * The counters live on the same query as the run because only a run that is still working moves them,
 * and the panel must be able to stop polling when the run it is watching ends.
 */
export const GET_ARCHIVE_INTEGRITY_STATE = gql`
    query GET_ARCHIVE_INTEGRITY_STATE {
        chapterIntegrityAuditSchedule {
            ...ARCHIVE_INTEGRITY_SCHEDULE
        }
        chapterIntegrityAuditActiveSession {
            ...ARCHIVE_INTEGRITY_SESSION
        }
        chapterIntegrityAuditLatestSession {
            ...ARCHIVE_INTEGRITY_SESSION
        }
    }
    ${ARCHIVE_INTEGRITY_SCHEDULE}
    ${ARCHIVE_INTEGRITY_SESSION}
`;

/** The outcome counts of one run. The server requires a session, so this is only asked for a live one. */
export const GET_ARCHIVE_INTEGRITY_PROGRESS = gql`
    query GET_ARCHIVE_INTEGRITY_PROGRESS($sessionId: Int!) {
        chapterIntegrityAuditProgress(sessionId: $sessionId) {
            total
            verified
            missing
            corrupt
            failed
            skipped
            findings
            pending
            checking
            retryWait
            remaining
        }
    }
`;

/**
 * The revisions of one integrity run.
 *
 * `order` is left to the server, whose default is the id the cursor itself pages on, so an appended page
 * can never repeat or skip a row while the run is still writing new ones.
 */
export const GET_ARCHIVE_INTEGRITY_ITEMS = gql`
    query GET_ARCHIVE_INTEGRITY_ITEMS(
        $sessionId: Int!
        $first: Int
        $after: Cursor
        $state: ChapterIntegrityAuditItemState
    ) {
        chapterIntegrityAuditItems(sessionId: $sessionId, first: $first, after: $after, state: $state) {
            nodes {
                ...ARCHIVE_INTEGRITY_ITEM
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_INTEGRITY_ITEM}
    ${PAGE_INFO}
`;

/** Previous audit runs, so an operator can see what the schedule did while nobody watched. */
export const GET_ARCHIVE_INTEGRITY_HISTORY = gql`
    query GET_ARCHIVE_INTEGRITY_HISTORY($first: Int, $after: Cursor) {
        chapterIntegrityAuditSessions(first: $first, after: $after) {
            nodes {
                ...ARCHIVE_INTEGRITY_SESSION
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_INTEGRITY_SESSION}
    ${PAGE_INFO}
`;

/**
 * The scheduling settings of the automatic audit.
 *
 * Only the three fields this panel edits are selected: the pacing settings of the audit worker are
 * operational tuning and stay in the server settings screen.
 */
export const GET_ARCHIVE_INTEGRITY_SETTINGS = gql`
    query GET_ARCHIVE_INTEGRITY_SETTINGS {
        settings {
            chapterIntegrityAuditEnabled
            chapterIntegrityAuditIntervalDays
            chapterIntegrityAuditRecentRevisions
        }
    }
`;

/**
 * The non-secret shape of direct CBZ delivery, so the dashboard can state how a download is served.
 *
 * The remote spec and the rclone executable are deliberately absent: they are deployment secrets and
 * are not exposed as settings at all.
 */
export const GET_ARCHIVE_DELIVERY_SETTINGS = gql`
    query GET_ARCHIVE_DELIVERY_SETTINGS {
        settings {
            archiveDirectDeliveryEnabled
            archiveDirectDeliveryFallbackToLocal
            archiveDirectDeliveryRequireExpiryEvidence
            archiveDirectDeliveryExpirySeconds
        }
    }
`;

/**
 * Every canonical work, cursor-paged.
 *
 * `titleContains` is a filter rather than an order, so changing it changes the result set and therefore
 * resets the cursor. The server's default order is the id the cursor pages on.
 */
export const GET_CANONICAL_WORKS = gql`
    query GET_CANONICAL_WORKS($first: Int, $after: Cursor, $titleContains: String) {
        canonicalWorks(first: $first, after: $after, titleContains: $titleContains) {
            nodes {
                ...CANONICAL_WORK_ROW
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${CANONICAL_WORK_ROW}
    ${PAGE_INFO}
`;

/**
 * The bindings of one work.
 *
 * A plain list rather than a page: the server orders a work's bindings by priority and the same ordering
 * is what the binding mutations reason about, and a work holds one binding per source copy.
 */
export const GET_CANONICAL_WORK_BINDINGS = gql`
    query GET_CANONICAL_WORK_BINDINGS($workId: Int!) {
        canonicalBindingsForWork(workId: $workId) {
            nodes {
                ...CANONICAL_BINDING_ROW
            }
            totalCount
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

/** How much of the library participates in canonical identity, and how the bindings are distributed. */
export const GET_CANONICAL_IDENTITY_STATUS = gql`
    query GET_CANONICAL_IDENTITY_STATUS {
        canonicalIdentityStatus {
            ...CANONICAL_IDENTITY_STATUS
        }
    }
    ${CANONICAL_IDENTITY_STATUS}
`;

/**
 * The canonical side of one series, as the series itself sees it.
 *
 * A series is looked up by its own id rather than by a work key, so the dialog can describe the series'
 * current state before an operator has chosen anything.
 */
export const GET_MANGA_CANONICAL_BINDING = gql`
    query GET_MANGA_CANONICAL_BINDING($mangaId: Int!) {
        canonicalBindingForManga(mangaId: $mangaId) {
            ...CANONICAL_BINDING_ROW
        }
        canonicalWorkForManga(mangaId: $mangaId) {
            ...CANONICAL_WORK_ROW
        }
    }
    ${CANONICAL_BINDING_ROW}
    ${CANONICAL_WORK_ROW}
`;

/** One page of a chapter's revision history, newest discovery first. */
export const GET_ARCHIVE_REVISION_HISTORY = gql`
    query GET_ARCHIVE_REVISION_HISTORY($chapterKey: String!, $first: Int, $after: Cursor) {
        chapterRevisionHistory(chapterKey: $chapterKey, first: $first, after: $after) {
            nodes {
                ...ARCHIVE_REVISION_HISTORY_ROW
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_REVISION_HISTORY_ROW}
    ${PAGE_INFO}
`;

/** The recorded rollbacks of one chapter, so a rollback that already happened stays visible. */
export const GET_ARCHIVE_REVISION_ROLLBACKS = gql`
    query GET_ARCHIVE_REVISION_ROLLBACKS($chapterKey: String!, $first: Int) {
        chapterRevisionRollbacks(chapterKey: $chapterKey, first: $first) {
            nodes {
                ...ARCHIVE_ROLLBACK_ROW
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
    ${ARCHIVE_ROLLBACK_ROW}
    ${PAGE_INFO}
`;
