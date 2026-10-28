/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import gql from 'graphql-tag';

/**
 * The pre-acquisition view of a revision candidate.
 *
 * It deliberately omits the internal identity keys, the active marker and every hash/path field:
 * those describe server internals and are not part of what a reviewer decides on.
 */
export const ARCHIVE_REVISION_ROW = gql`
    fragment ARCHIVE_REVISION_ROW on ChapterRevisionType {
        id
        name
        chapterNumber
        scanlator
        sourceChapterUrl
        sourceId
        discoveredAt
        updatedAt
        discoveryReason
        signalConfidence
        disposition
        acquisitionState
        archiveState
        publicationState
        retentionState
        changedMetadataFields
        pageCount
        attempts
        lastError
        mangaId
        chapterId
        manga {
            id
            title
        }
    }
`;

/**
 * The queue inspector needs the per-dimension attempt and timestamp audit of one revision.
 *
 * Only the acquisition error is selected. The archive, publication and retention dimensions run against
 * the stored artifacts, so their recorded failures can quote a staged path, a remote object name or a
 * digest of the payload - the server stores an operating-system or rclone message verbatim there - and a
 * dashboard must not put those on screen. The typed state and the attempt count say just as much about
 * what to do next.
 */
export const ARCHIVE_INSPECTOR_ROW = gql`
    fragment ARCHIVE_INSPECTOR_ROW on ChapterRevisionType {
        id
        name
        chapterNumber
        scanlator
        sourceId
        disposition
        discoveryReason
        signalConfidence
        acquisitionState
        archiveState
        publicationState
        retentionState
        changedMetadataFields
        pageCount
        attempts
        lastAttemptAt
        lastError
        archiveAttempts
        archiveLastAttemptAt
        publicationAttempts
        publicationLastAttemptAt
        retentionAttempts
        retentionLastAttemptAt
        discoveredAt
        approvedAt
        archivedAt
        publishedAt
        prunedAt
        updatedAt
        mangaId
        chapterId
        manga {
            id
            title
        }
    }
`;

/**
 * The post-archive review view of a revision candidate.
 *
 * A candidate only reaches this queue once its payload is durably archived, so what is left to decide
 * is whether the archived content should replace what the chapter currently serves. Like the
 * pre-acquisition fragment it omits the hashes, stored paths and the active marker: those are server
 * state, not something to review.
 *
 * `chapterKey` is selected because it is the identity a chapter's revision history is read by, and the
 * history query is keyed by it rather than by the revision or the chapter row.
 */
export const ARCHIVE_REVIEW_ROW = gql`
    fragment ARCHIVE_REVIEW_ROW on ChapterRevisionType {
        id
        chapterKey
        name
        chapterNumber
        scanlator
        sourceChapterUrl
        sourceId
        discoveredAt
        updatedAt
        archivedAt
        disposition
        acquisitionState
        archiveState
        publicationState
        retentionState
        discoveryReason
        signalConfidence
        visualAnalysisState
        visualAnalysisAttempts
        visualAnalysisCompletedAt
        visualAnalysisLastError
        pageCount
        mangaId
        chapterId
        manga {
            id
            title
        }
        chapter {
            id
            name
            chapterNumber
            sourceOrder
        }
    }
`;

/**
 * The stored visual comparison of one revision.
 *
 * The counts describe the whole alignment, so a reviewer can see what the sweep found before paging
 * through the rows. The threshold and the algorithm version are part of it because a summary recorded
 * with different rules must not be read as if it had been produced with the current ones.
 */
export const ARCHIVE_COMPARISON_SUMMARY = gql`
    fragment ARCHIVE_COMPARISON_SUMMARY on ChapterRevisionComparisonType {
        revisionId
        baselineRevisionId
        baselinePageCount
        candidatePageCount
        exactCount
        visuallyEquivalentCount
        modifiedCount
        addedCount
        removedCount
        alignedCount
        hammingThreshold
        algorithmVersion
        allPagesVisuallyEquivalent
        hasLimitations
        limitations
        createdAt
        updatedAt
    }
`;

/**
 * One aligned page row, with the API addresses of its review previews.
 *
 * The addresses are opaque server routes; which file they resolve to, and whether they are served from
 * the staged candidate or the archived baseline, is decided by the server alone.
 */
export const ARCHIVE_COMPARISON_PAGE = gql`
    fragment ARCHIVE_COMPARISON_PAGE on ChapterRevisionComparisonPageType {
        ordinal
        state
        baselinePageIndex
        candidatePageIndex
        hammingDistance
        baselineWidth
        baselineHeight
        baselineSize
        candidateWidth
        candidateHeight
        candidateSize
        baselinePreviewAvailable
        candidatePreviewAvailable
        baselineThumbnailUrl
        candidateThumbnailUrl
        baselinePageUrl
        candidatePageUrl
    }
`;

/** When the next automatic sweep is due, and which run the last one produced. */
export const ARCHIVE_SWEEP_SCHEDULE = gql`
    fragment ARCHIVE_SWEEP_SCHEDULE on ChapterRevisionSweepScheduleType {
        nextDueAt
        lastRunAt
        lastSessionId
        updatedAt
    }
`;

/** One sweep run: what it is sweeping, how far it got and how it ended. */
export const ARCHIVE_SWEEP_SESSION = gql`
    fragment ARCHIVE_SWEEP_SESSION on ChapterRevisionSweepSessionType {
        id
        kind
        state
        newestPerSeries
        maxAttempts
        itemDelaySeconds
        retrySeconds
        startedAt
        finishedAt
        pausedAt
        cancelledAt
        nextItemAt
        lastItemAt
        updatedAt
    }
`;

/** One chapter of a sweep run, in the order the server's worker visits them. */
export const ARCHIVE_SWEEP_ITEM = gql`
    fragment ARCHIVE_SWEEP_ITEM on ChapterRevisionSweepItemType {
        id
        sessionId
        state
        attempts
        policy
        mangaId
        chapterId
        sourceId
        seriesTitle
        chapterName
        dueAt
        startedAt
        finishedAt
        candidateCount
        lastError
    }
`;

export const KOMGA_RESCAN_STATUS = gql`
    fragment KOMGA_RESCAN_STATUS on KomgaRescanStatusType {
        configured
        configurationError
        state
        generation
        attempts
        requestedAt
        notBeforeAt
        lastAttemptAt
        lastCompletedAt
        lastError
    }
`;

export const ARCHIVE_BOOTSTRAP_SESSION = gql`
    fragment ARCHIVE_BOOTSTRAP_SESSION on ArchiveBootstrapSessionType {
        id
        state
        startedAt
        finishedAt
        pausedAt
        cancelledAt
        updatedAt
        nextItemAt
        lastItemAt
        interItemDelaySeconds
        retrySeconds
        maxAttempts
        defaultPolicy
    }
`;

export const BACKUP_RESTORE_JOB = gql`
    fragment BACKUP_RESTORE_JOB on BackupRestoreJobType {
        id
        restoreId
        state
        phase
        progress
        total
        errorCount
        handoffState
        handoffSessionId
        handoffError
        stagedPayloadRetained
        lastError
        createdAt
        startedAt
        finishedAt
        cancelledAt
        updatedAt
    }
`;

/**
 * One direct-remote integrity audit run.
 *
 * The run says what was checked and how it ended, so it deliberately carries no per-item error text:
 * an integrity reason is allowed to quote the digests and object names of the check, which is exactly
 * what a dashboard must not put on screen. The typed `state` of an item is what the panel classifies by.
 */
export const ARCHIVE_INTEGRITY_SESSION = gql`
    fragment ARCHIVE_INTEGRITY_SESSION on ChapterIntegrityAuditSessionType {
        id
        kind
        state
        newestPerManga
        maxAttempts
        itemDelaySeconds
        retrySeconds
        startedAt
        finishedAt
        pausedAt
        cancelledAt
        nextItemAt
        lastItemAt
        updatedAt
    }
`;

/** When the next automatic audit is due, and which run the last one produced. */
export const ARCHIVE_INTEGRITY_SCHEDULE = gql`
    fragment ARCHIVE_INTEGRITY_SCHEDULE on ChapterIntegrityAuditScheduleType {
        nextDueAt
        lastRunAt
        lastSessionId
        updatedAt
    }
`;

/**
 * One audited revision of a run.
 *
 * The identity keys are left out on purpose: a candidate key is derived from the payload's own content
 * hash, so selecting it would put a digest-derived string in front of an operator.
 */
export const ARCHIVE_INTEGRITY_ITEM = gql`
    fragment ARCHIVE_INTEGRITY_ITEM on ChapterIntegrityAuditItemType {
        id
        sessionId
        state
        attempts
        revisionId
        mangaId
        chapterId
        seriesTitle
        chapterName
        dueAt
        startedAt
        finishedAt
        updatedAt
    }
`;

/**
 * The canonical binding of one source copy of a work.
 *
 * `acquisitionEligible` is selected because it is the server's own statement about whether this binding
 * may be used for discovery, fallback and publication - the panel must not derive that rule itself.
 */
export const CANONICAL_BINDING_ROW = gql`
    fragment CANONICAL_BINDING_ROW on CanonicalSourceBindingType {
        id
        workId
        workKey
        mangaId
        mangaTitle
        mangaUrl
        sourceId
        sourceName
        role
        priority
        isPrimary
        acquisitionEligible
        mangaAvailable
        boundAt
        updatedAt
    }
`;

/** One canonical work with its preferred and all of its bound source copies. */
export const CANONICAL_WORK_ROW = gql`
    fragment CANONICAL_WORK_ROW on CanonicalWorkType {
        id
        workKey
        title
        preferredScanlator
        duplicateStrategy
        duplicatePolicyApplied
        bindingCount
        createdAt
        updatedAt
        primaryBinding {
            ...CANONICAL_BINDING_ROW
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

/** How much of the library is bound to a canonical work, and how those bindings are distributed. */
export const CANONICAL_IDENTITY_STATUS = gql`
    fragment CANONICAL_IDENTITY_STATUS on CanonicalIdentityStatusType {
        workCount
        bindingCount
        activeBindingCount
        fallbackBindingCount
        disabledBindingCount
        detachedBindingCount
        primaryBindingCount
        duplicatePolicyApplied
    }
`;

/** A versioned dump of every work and binding. */
export const CANONICAL_IDENTITY_EXPORT = gql`
    fragment CANONICAL_IDENTITY_EXPORT on CanonicalIdentityExportType {
        schemaVersion
        workCount
        bindingCount
        payload
    }
`;

/**
 * What one import did to the library.
 *
 * `bindingsRebound` is selected next to `bindingsBound` because the two are different answers: a rebound
 * binding belonged to a different work before the import replaced it.
 */
export const CANONICAL_IDENTITY_IMPORT = gql`
    fragment CANONICAL_IDENTITY_IMPORT on CanonicalIdentityImportType {
        worksCreated
        worksUpdated
        bindingsBound
        bindingsRebound
        bindingsUnresolved
    }
`;

/** One entry of a chapter's revision history, including the marker of the revision it currently serves. */
export const ARCHIVE_REVISION_HISTORY_ROW = gql`
    fragment ARCHIVE_REVISION_HISTORY_ROW on ChapterRevisionType {
        id
        chapterKey
        name
        chapterNumber
        scanlator
        sourceChapterUrl
        sourceId
        discoveredAt
        updatedAt
        archivedAt
        acceptedAt
        supersededAt
        activatedAt
        publishedAt
        prunedAt
        disposition
        acquisitionState
        archiveState
        publicationState
        retentionState
        integrityState
        integrityLastAuditedAt
        integrityLastAuditSessionId
        isActiveRevision
        downloadUrl
        pageCount
        signalConfidence
        discoveryReason
        mangaId
        chapterId
    }
`;

/** One recorded rollback of a chapter. */
export const ARCHIVE_ROLLBACK_ROW = gql`
    fragment ARCHIVE_ROLLBACK_ROW on ChapterRevisionRollbackType {
        id
        chapterKey
        fromRevisionId
        toRevisionId
        rolledBackAt
    }
`;
