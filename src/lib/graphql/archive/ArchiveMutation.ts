/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import gql from 'graphql-tag';
import {
    ARCHIVE_BOOTSTRAP_SESSION,
    ARCHIVE_INTEGRITY_SESSION,
    ARCHIVE_REVIEW_ROW,
    ARCHIVE_REVISION_HISTORY_ROW,
    ARCHIVE_REVISION_ROW,
    ARCHIVE_SWEEP_SESSION,
    BACKUP_RESTORE_JOB,
    CANONICAL_BINDING_ROW,
    CANONICAL_IDENTITY_EXPORT,
    CANONICAL_IDENTITY_IMPORT,
    CANONICAL_WORK_ROW,
    KOMGA_RESCAN_STATUS,
} from '@/lib/graphql/archive/ArchiveFragments.ts';

/**
 * Approving a candidate is what grants permission to acquire and archive it.
 *
 * It is deliberately not the acceptance action: accepting compares an already archived revision
 * against the active one and is only offered once a candidate reached the archive.
 */
export const APPROVE_CHAPTER_REVISIONS = gql`
    mutation APPROVE_CHAPTER_REVISIONS($ids: [Int!]!) {
        approveChapterRevisions(input: { ids: $ids }) {
            revisions {
                ...ARCHIVE_REVISION_ROW
            }
        }
    }
    ${ARCHIVE_REVISION_ROW}
`;

export const REJECT_CHAPTER_REVISIONS = gql`
    mutation REJECT_CHAPTER_REVISIONS($ids: [Int!]!) {
        rejectChapterRevisions(input: { ids: $ids }) {
            revisions {
                ...ARCHIVE_REVISION_ROW
            }
        }
    }
    ${ARCHIVE_REVISION_ROW}
`;

/**
 * The four dimension retries only report which revisions the server actually requeued.
 *
 * The inspector re-reads the queue afterwards instead of patching the rows it sent, because a
 * rejected id (a state that is not retryable) must not appear as if it had been requeued.
 */
export const RETRY_CHAPTER_REVISIONS = gql`
    mutation RETRY_CHAPTER_REVISIONS($ids: [Int!]!) {
        retryChapterRevisions(input: { ids: $ids }) {
            revisions {
                id
            }
        }
    }
`;

export const RETRY_CHAPTER_REVISION_ARCHIVES = gql`
    mutation RETRY_CHAPTER_REVISION_ARCHIVES($ids: [Int!]!) {
        retryChapterRevisionArchives(input: { ids: $ids }) {
            revisions {
                id
            }
        }
    }
`;

export const RETRY_CHAPTER_REVISION_PUBLICATIONS = gql`
    mutation RETRY_CHAPTER_REVISION_PUBLICATIONS($ids: [Int!]!) {
        retryChapterRevisionPublications(input: { ids: $ids }) {
            revisions {
                id
            }
        }
    }
`;

export const RETRY_CHAPTER_REVISION_PRUNINGS = gql`
    mutation RETRY_CHAPTER_REVISION_PRUNINGS($ids: [Int!]!) {
        retryChapterRevisionPrunings(input: { ids: $ids }) {
            revisions {
                id
            }
        }
    }
`;

/**
 * The four review decisions, all of which are the post-archive counterpart of the approval queue.
 *
 * They are bulk mutations over ids because the server applies a decision per candidate and reports
 * back only the revisions it actually decided; a candidate whose state changed in the meantime is
 * therefore simply absent from the payload instead of being reported as decided.
 */
export const ACCEPT_CHAPTER_REVISION_CANDIDATES = gql`
    mutation ACCEPT_CHAPTER_REVISION_CANDIDATES($ids: [Int!]!) {
        acceptChapterRevisionCandidates(input: { ids: $ids }) {
            revisions {
                ...ARCHIVE_REVIEW_ROW
            }
        }
    }
    ${ARCHIVE_REVIEW_ROW}
`;

export const KEEP_CURRENT_CHAPTER_REVISIONS = gql`
    mutation KEEP_CURRENT_CHAPTER_REVISIONS($ids: [Int!]!) {
        keepCurrentChapterRevisions(input: { ids: $ids }) {
            revisions {
                ...ARCHIVE_REVIEW_ROW
            }
        }
    }
    ${ARCHIVE_REVIEW_ROW}
`;

export const KEEP_BOTH_CHAPTER_REVISIONS = gql`
    mutation KEEP_BOTH_CHAPTER_REVISIONS($ids: [Int!]!) {
        keepBothChapterRevisions(input: { ids: $ids }) {
            revisions {
                ...ARCHIVE_REVIEW_ROW
            }
        }
    }
    ${ARCHIVE_REVIEW_ROW}
`;

export const REJECT_CHAPTER_REVISION_CANDIDATES = gql`
    mutation REJECT_CHAPTER_REVISION_CANDIDATES($ids: [Int!]!) {
        rejectChapterRevisionCandidates(input: { ids: $ids }) {
            revisions {
                ...ARCHIVE_REVIEW_ROW
            }
        }
    }
    ${ARCHIVE_REVIEW_ROW}
`;

/**
 * Starting a manual sweep.
 *
 * `mangaIds` is optional: omitting it sweeps every tracked series, which is the default of both manual
 * kinds. The payload carries an error instead of throwing, because "another sweep is active" and "no
 * tracked series matches" are answers an operator has to read, not failures to report as crashes.
 */
export const START_CHAPTER_REVISION_SWEEP = gql`
    mutation START_CHAPTER_REVISION_SWEEP($kind: ChapterRevisionSweepKind!, $mangaIds: [Int!]) {
        startChapterRevisionSweep(input: { kind: $kind, mangaIds: $mangaIds }) {
            error
            itemCount
            session {
                ...ARCHIVE_SWEEP_SESSION
            }
        }
    }
    ${ARCHIVE_SWEEP_SESSION}
`;

export const PAUSE_CHAPTER_REVISION_SWEEP = gql`
    mutation PAUSE_CHAPTER_REVISION_SWEEP($sessionId: Int!) {
        pauseChapterRevisionSweep(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_SWEEP_SESSION
            }
        }
    }
    ${ARCHIVE_SWEEP_SESSION}
`;

export const RESUME_CHAPTER_REVISION_SWEEP = gql`
    mutation RESUME_CHAPTER_REVISION_SWEEP($sessionId: Int!) {
        resumeChapterRevisionSweep(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_SWEEP_SESSION
            }
        }
    }
    ${ARCHIVE_SWEEP_SESSION}
`;

export const CANCEL_CHAPTER_REVISION_SWEEP = gql`
    mutation CANCEL_CHAPTER_REVISION_SWEEP($sessionId: Int!) {
        cancelChapterRevisionSweep(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_SWEEP_SESSION
            }
        }
    }
    ${ARCHIVE_SWEEP_SESSION}
`;

export const RETRY_CHAPTER_REVISION_SWEEP_ITEMS = gql`
    mutation RETRY_CHAPTER_REVISION_SWEEP_ITEMS($sessionId: Int!, $itemIds: [Int!]) {
        retryChapterRevisionSweepItems(input: { sessionId: $sessionId, itemIds: $itemIds }) {
            error
            itemCount
            session {
                ...ARCHIVE_SWEEP_SESSION
            }
        }
    }
    ${ARCHIVE_SWEEP_SESSION}
`;

/**
 * Saves the automatic sweep settings through the regular server settings mutation.
 *
 * Only the three scheduling fields are written, so a save from this panel can never overwrite an
 * unrelated setting that another screen edited in the meantime.
 */
export const UPDATE_ARCHIVE_SWEEP_SETTINGS = gql`
    mutation UPDATE_ARCHIVE_SWEEP_SETTINGS($settings: PartialSettingsTypeInput!) {
        setSettings(input: { settings: $settings }) {
            settings {
                chapterRevisionSweepEnabled
                chapterRevisionSweepIntervalDays
                chapterRevisionSweepNewestChapters
            }
        }
    }
`;

export const REQUEST_KOMGA_RESCAN = gql`
    mutation REQUEST_KOMGA_RESCAN {
        requestKomgaRescan(input: {}) {
            rescan {
                ...KOMGA_RESCAN_STATUS
            }
        }
    }
    ${KOMGA_RESCAN_STATUS}
`;

export const RETRY_KOMGA_RESCAN = gql`
    mutation RETRY_KOMGA_RESCAN {
        retryKomgaRescan(input: {}) {
            retried
            rescan {
                ...KOMGA_RESCAN_STATUS
            }
        }
    }
    ${KOMGA_RESCAN_STATUS}
`;

export const PAUSE_ARCHIVE_BOOTSTRAP = gql`
    mutation PAUSE_ARCHIVE_BOOTSTRAP($sessionId: Int!) {
        pauseArchiveBootstrap(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_BOOTSTRAP_SESSION
            }
        }
    }
    ${ARCHIVE_BOOTSTRAP_SESSION}
`;

export const RESUME_ARCHIVE_BOOTSTRAP = gql`
    mutation RESUME_ARCHIVE_BOOTSTRAP($sessionId: Int!) {
        resumeArchiveBootstrap(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_BOOTSTRAP_SESSION
            }
        }
    }
    ${ARCHIVE_BOOTSTRAP_SESSION}
`;

export const CANCEL_ARCHIVE_BOOTSTRAP = gql`
    mutation CANCEL_ARCHIVE_BOOTSTRAP($sessionId: Int!) {
        cancelArchiveBootstrap(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_BOOTSTRAP_SESSION
            }
        }
    }
    ${ARCHIVE_BOOTSTRAP_SESSION}
`;

export const RETRY_ARCHIVE_BOOTSTRAP_ITEMS = gql`
    mutation RETRY_ARCHIVE_BOOTSTRAP_ITEMS($sessionId: Int!) {
        retryArchiveBootstrapItems(input: { sessionId: $sessionId }) {
            error
            itemCount
            session {
                ...ARCHIVE_BOOTSTRAP_SESSION
            }
        }
    }
    ${ARCHIVE_BOOTSTRAP_SESSION}
`;

export const RETRY_BACKUP_RESTORE = gql`
    mutation RETRY_BACKUP_RESTORE($restoreId: String!) {
        retryBackupRestore(input: { restoreId: $restoreId }) {
            error
            job {
                ...BACKUP_RESTORE_JOB
            }
        }
    }
    ${BACKUP_RESTORE_JOB}
`;

export const RETRY_BACKUP_RESTORE_HANDOFF = gql`
    mutation RETRY_BACKUP_RESTORE_HANDOFF($restoreId: String!) {
        retryBackupRestoreHandoff(input: { restoreId: $restoreId }) {
            error
            job {
                ...BACKUP_RESTORE_JOB
            }
        }
    }
    ${BACKUP_RESTORE_JOB}
`;

export const CANCEL_BACKUP_RESTORE = gql`
    mutation CANCEL_BACKUP_RESTORE($restoreId: String!) {
        cancelBackupRestore(input: { restoreId: $restoreId }) {
            error
            job {
                ...BACKUP_RESTORE_JOB
            }
        }
    }
    ${BACKUP_RESTORE_JOB}
`;

export const CLEANUP_BACKUP_RESTORE = gql`
    mutation CLEANUP_BACKUP_RESTORE($restoreId: String!) {
        cleanupBackupRestore(input: { restoreId: $restoreId }) {
            error
            job {
                ...BACKUP_RESTORE_JOB
            }
        }
    }
    ${BACKUP_RESTORE_JOB}
`;

/**
 * Starting an integrity audit.
 *
 * The payload carries an error instead of throwing, because "another audit is active" and "no archived
 * revision matches" are answers an operator has to read rather than failures to report as crashes.
 */
export const START_CHAPTER_INTEGRITY_AUDIT = gql`
    mutation START_CHAPTER_INTEGRITY_AUDIT($kind: ChapterIntegrityAuditKind!, $mangaIds: [Int!]) {
        startChapterIntegrityAudit(input: { kind: $kind, mangaIds: $mangaIds }) {
            error
            itemCount
            session {
                ...ARCHIVE_INTEGRITY_SESSION
            }
        }
    }
    ${ARCHIVE_INTEGRITY_SESSION}
`;

export const PAUSE_CHAPTER_INTEGRITY_AUDIT = gql`
    mutation PAUSE_CHAPTER_INTEGRITY_AUDIT($sessionId: Int!) {
        pauseChapterIntegrityAudit(input: { sessionId: $sessionId }) {
            error
            session {
                ...ARCHIVE_INTEGRITY_SESSION
            }
        }
    }
    ${ARCHIVE_INTEGRITY_SESSION}
`;

export const RESUME_CHAPTER_INTEGRITY_AUDIT = gql`
    mutation RESUME_CHAPTER_INTEGRITY_AUDIT($sessionId: Int!) {
        resumeChapterIntegrityAudit(input: { sessionId: $sessionId }) {
            error
            session {
                ...ARCHIVE_INTEGRITY_SESSION
            }
        }
    }
    ${ARCHIVE_INTEGRITY_SESSION}
`;

export const CANCEL_CHAPTER_INTEGRITY_AUDIT = gql`
    mutation CANCEL_CHAPTER_INTEGRITY_AUDIT($sessionId: Int!) {
        cancelChapterIntegrityAudit(input: { sessionId: $sessionId }) {
            error
            session {
                ...ARCHIVE_INTEGRITY_SESSION
            }
        }
    }
    ${ARCHIVE_INTEGRITY_SESSION}
`;

export const RETRY_CHAPTER_INTEGRITY_AUDIT_ITEMS = gql`
    mutation RETRY_CHAPTER_INTEGRITY_AUDIT_ITEMS($sessionId: Int!, $itemIds: [Int!]) {
        retryChapterIntegrityAuditItems(input: { sessionId: $sessionId, itemIds: $itemIds }) {
            error
            itemCount
            session {
                ...ARCHIVE_INTEGRITY_SESSION
            }
        }
    }
    ${ARCHIVE_INTEGRITY_SESSION}
`;

/**
 * Saves the automatic audit settings through the regular server settings mutation.
 *
 * Only the three scheduling fields are written, so a save from this panel can never overwrite an
 * unrelated setting that another screen edited in the meantime.
 */
export const UPDATE_ARCHIVE_INTEGRITY_SETTINGS = gql`
    mutation UPDATE_ARCHIVE_INTEGRITY_SETTINGS($settings: PartialSettingsTypeInput!) {
        setSettings(input: { settings: $settings }) {
            settings {
                chapterIntegrityAuditEnabled
                chapterIntegrityAuditIntervalDays
                chapterIntegrityAuditRecentRevisions
            }
        }
    }
`;

/**
 * The canonical work mutations.
 *
 * Every one of them answers with a [CanonicalWriteOutcome] rather than throwing, because a conflicting
 * priority, an already-bound series and a missing work are answers the operator has to read. The client
 * never patches its own copy from the input: after any of these it re-reads the server.
 */
export const CREATE_CANONICAL_WORK = gql`
    mutation CREATE_CANONICAL_WORK(
        $title: String!
        $duplicateStrategy: CanonicalDuplicateStrategy!
        $preferredScanlator: String
    ) {
        createCanonicalWork(
            input: { title: $title, duplicateStrategy: $duplicateStrategy, preferredScanlator: $preferredScanlator }
        ) {
            outcome
            work {
                ...CANONICAL_WORK_ROW
            }
        }
    }
    ${CANONICAL_WORK_ROW}
`;

export const UPDATE_CANONICAL_WORK = gql`
    mutation UPDATE_CANONICAL_WORK(
        $workKey: String!
        $title: String
        $duplicateStrategy: CanonicalDuplicateStrategy
        $preferredScanlator: String
        $clearPreferredScanlator: Boolean!
    ) {
        updateCanonicalWork(
            input: {
                workKey: $workKey
                title: $title
                duplicateStrategy: $duplicateStrategy
                preferredScanlator: $preferredScanlator
                clearPreferredScanlator: $clearPreferredScanlator
            }
        ) {
            outcome
            work {
                ...CANONICAL_WORK_ROW
            }
        }
    }
    ${CANONICAL_WORK_ROW}
`;

export const DELETE_CANONICAL_WORK = gql`
    mutation DELETE_CANONICAL_WORK($workKey: String!) {
        deleteCanonicalWork(input: { workKey: $workKey }) {
            outcome
        }
    }
`;

export const ATTACH_MANGA_TO_CANONICAL_WORK = gql`
    mutation ATTACH_MANGA_TO_CANONICAL_WORK(
        $workKey: String!
        $mangaId: Int!
        $role: CanonicalBindingRole!
        $priority: Int
        $isPrimary: Boolean!
    ) {
        attachMangaToCanonicalWork(
            input: { workKey: $workKey, mangaId: $mangaId, role: $role, priority: $priority, isPrimary: $isPrimary }
        ) {
            outcome
            binding {
                ...CANONICAL_BINDING_ROW
            }
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

export const CHANGE_CANONICAL_BINDING = gql`
    mutation CHANGE_CANONICAL_BINDING($bindingId: Int!, $role: CanonicalBindingRole, $priority: Int) {
        changeCanonicalBinding(input: { bindingId: $bindingId, role: $role, priority: $priority }) {
            outcome
            binding {
                ...CANONICAL_BINDING_ROW
            }
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

export const DETACH_CANONICAL_BINDING = gql`
    mutation DETACH_CANONICAL_BINDING($bindingId: Int!) {
        detachCanonicalBinding(input: { bindingId: $bindingId }) {
            outcome
            binding {
                ...CANONICAL_BINDING_ROW
            }
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

export const PROMOTE_CANONICAL_BINDING = gql`
    mutation PROMOTE_CANONICAL_BINDING($bindingId: Int!) {
        promoteCanonicalBinding(input: { bindingId: $bindingId }) {
            outcome
            binding {
                ...CANONICAL_BINDING_ROW
            }
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

export const FAILOVER_CANONICAL_WORK = gql`
    mutation FAILOVER_CANONICAL_WORK($workKey: String!, $bindingId: Int!) {
        failoverCanonicalWork(input: { workKey: $workKey, bindingId: $bindingId }) {
            outcome
            binding {
                ...CANONICAL_BINDING_ROW
            }
        }
    }
    ${CANONICAL_BINDING_ROW}
`;

export const EXPORT_CANONICAL_IDENTITY = gql`
    mutation EXPORT_CANONICAL_IDENTITY {
        exportCanonicalIdentity {
            export {
                ...CANONICAL_IDENTITY_EXPORT
            }
        }
    }
    ${CANONICAL_IDENTITY_EXPORT}
`;

export const IMPORT_CANONICAL_IDENTITY = gql`
    mutation IMPORT_CANONICAL_IDENTITY($payload: String!) {
        importCanonicalIdentity(input: { payload: $payload }) {
            import {
                ...CANONICAL_IDENTITY_IMPORT
            }
        }
    }
    ${CANONICAL_IDENTITY_IMPORT}
`;

/**
 * Rolling a chapter back to an earlier accepted revision.
 *
 * The payload is authoritative: it either reports an error or the revision the chapter serves now and
 * the one it replaced, so the caller re-reads the history instead of assuming the outcome.
 */
export const ROLLBACK_CHAPTER_REVISION = gql`
    mutation ROLLBACK_CHAPTER_REVISION($revisionId: Int!) {
        rollbackChapterRevision(input: { revisionId: $revisionId }) {
            error
            replacedRevisionId
            revision {
                ...ARCHIVE_REVISION_HISTORY_ROW
            }
        }
    }
    ${ARCHIVE_REVISION_HISTORY_ROW}
`;
