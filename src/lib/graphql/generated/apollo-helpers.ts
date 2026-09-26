import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AboutServerPayloadKeySpecifier = (
    | 'buildTime'
    | 'buildType'
    | 'discord'
    | 'github'
    | 'name'
    | 'platformInfo'
    | 'revision'
    | 'version'
    | AboutServerPayloadKeySpecifier
)[];
export type AboutServerPayloadFieldPolicy = {
    buildTime?: FieldPolicy<any> | FieldReadFunction<any>;
    buildType?: FieldPolicy<any> | FieldReadFunction<any>;
    discord?: FieldPolicy<any> | FieldReadFunction<any>;
    github?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    platformInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    revision?: FieldPolicy<any> | FieldReadFunction<any>;
    version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutWebUIKeySpecifier = ('channel' | 'tag' | 'updateTimestamp' | AboutWebUIKeySpecifier)[];
export type AboutWebUIFieldPolicy = {
    channel?: FieldPolicy<any> | FieldReadFunction<any>;
    tag?: FieldPolicy<any> | FieldReadFunction<any>;
    updateTimestamp?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AcceptChapterRevisionCandidatesPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | AcceptChapterRevisionCandidatesPayloadKeySpecifier
)[];
export type AcceptChapterRevisionCandidatesPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddExtensionStorePayloadKeySpecifier = (
    | 'clientMutationId'
    | 'extensionStore'
    | AddExtensionStorePayloadKeySpecifier
)[];
export type AddExtensionStorePayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionStore?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ApproveChapterRevisionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | ApproveChapterRevisionsPayloadKeySpecifier
)[];
export type ApproveChapterRevisionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapCategoryPolicyTypeKeySpecifier = (
    | 'categoryId'
    | 'policy'
    | ArchiveBootstrapCategoryPolicyTypeKeySpecifier
)[];
export type ArchiveBootstrapCategoryPolicyTypeFieldPolicy = {
    categoryId?: FieldPolicy<any> | FieldReadFunction<any>;
    policy?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapItemEdgeKeySpecifier = ('cursor' | 'node' | ArchiveBootstrapItemEdgeKeySpecifier)[];
export type ArchiveBootstrapItemEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapItemNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ArchiveBootstrapItemNodeListKeySpecifier
)[];
export type ArchiveBootstrapItemNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapItemTypeKeySpecifier = (
    | 'attempts'
    | 'candidateCount'
    | 'categoryIds'
    | 'dueAt'
    | 'finishedAt'
    | 'id'
    | 'lastError'
    | 'mangaId'
    | 'mangaUrl'
    | 'policy'
    | 'sessionId'
    | 'sourceId'
    | 'startedAt'
    | 'state'
    | 'title'
    | 'updatedAt'
    | ArchiveBootstrapItemTypeKeySpecifier
)[];
export type ArchiveBootstrapItemTypeFieldPolicy = {
    attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateCount?: FieldPolicy<any> | FieldReadFunction<any>;
    categoryIds?: FieldPolicy<any> | FieldReadFunction<any>;
    dueAt?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    lastError?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    policy?: FieldPolicy<any> | FieldReadFunction<any>;
    sessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapProgressTypeKeySpecifier = (
    | 'cancelled'
    | 'complete'
    | 'failed'
    | 'pending'
    | 'processing'
    | 'remaining'
    | 'retryWait'
    | 'skipped'
    | 'total'
    | 'unresolvedSource'
    | ArchiveBootstrapProgressTypeKeySpecifier
)[];
export type ArchiveBootstrapProgressTypeFieldPolicy = {
    cancelled?: FieldPolicy<any> | FieldReadFunction<any>;
    complete?: FieldPolicy<any> | FieldReadFunction<any>;
    failed?: FieldPolicy<any> | FieldReadFunction<any>;
    pending?: FieldPolicy<any> | FieldReadFunction<any>;
    processing?: FieldPolicy<any> | FieldReadFunction<any>;
    remaining?: FieldPolicy<any> | FieldReadFunction<any>;
    retryWait?: FieldPolicy<any> | FieldReadFunction<any>;
    skipped?: FieldPolicy<any> | FieldReadFunction<any>;
    total?: FieldPolicy<any> | FieldReadFunction<any>;
    unresolvedSource?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapSessionEdgeKeySpecifier = ('cursor' | 'node' | ArchiveBootstrapSessionEdgeKeySpecifier)[];
export type ArchiveBootstrapSessionEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapSessionNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ArchiveBootstrapSessionNodeListKeySpecifier
)[];
export type ArchiveBootstrapSessionNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapSessionPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | ArchiveBootstrapSessionPayloadKeySpecifier
)[];
export type ArchiveBootstrapSessionPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapSessionTypeKeySpecifier = (
    | 'cancelledAt'
    | 'categoryPolicies'
    | 'defaultPolicy'
    | 'finishedAt'
    | 'id'
    | 'interItemDelaySeconds'
    | 'lastItemAt'
    | 'maxAttempts'
    | 'nextItemAt'
    | 'pausedAt'
    | 'retrySeconds'
    | 'startedAt'
    | 'state'
    | 'updatedAt'
    | ArchiveBootstrapSessionTypeKeySpecifier
)[];
export type ArchiveBootstrapSessionTypeFieldPolicy = {
    cancelledAt?: FieldPolicy<any> | FieldReadFunction<any>;
    categoryPolicies?: FieldPolicy<any> | FieldReadFunction<any>;
    defaultPolicy?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    interItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    lastItemAt?: FieldPolicy<any> | FieldReadFunction<any>;
    maxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    nextItemAt?: FieldPolicy<any> | FieldReadFunction<any>;
    pausedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArchiveBootstrapUnresolvedSourceTypeKeySpecifier = (
    | 'mangaCount'
    | 'sampleTitles'
    | 'sourceId'
    | ArchiveBootstrapUnresolvedSourceTypeKeySpecifier
)[];
export type ArchiveBootstrapUnresolvedSourceTypeFieldPolicy = {
    mangaCount?: FieldPolicy<any> | FieldReadFunction<any>;
    sampleTitles?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AttachMangaToCanonicalWorkPayloadKeySpecifier = (
    | 'binding'
    | 'clientMutationId'
    | 'outcome'
    | AttachMangaToCanonicalWorkPayloadKeySpecifier
)[];
export type AttachMangaToCanonicalWorkPayloadFieldPolicy = {
    binding?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BackupRestoreAuditTypeKeySpecifier = (
    | 'createdAt'
    | 'id'
    | 'level'
    | 'mangaIndex'
    | 'message'
    | 'phase'
    | 'sourceId'
    | 'sourceName'
    | BackupRestoreAuditTypeKeySpecifier
)[];
export type BackupRestoreAuditTypeFieldPolicy = {
    createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    level?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaIndex?: FieldPolicy<any> | FieldReadFunction<any>;
    message?: FieldPolicy<any> | FieldReadFunction<any>;
    phase?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BackupRestoreErrorCountsTypeKeySpecifier = (
    | 'mangaErrors'
    | 'missingSources'
    | BackupRestoreErrorCountsTypeKeySpecifier
)[];
export type BackupRestoreErrorCountsTypeFieldPolicy = {
    mangaErrors?: FieldPolicy<any> | FieldReadFunction<any>;
    missingSources?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BackupRestoreJobPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'job'
    | BackupRestoreJobPayloadKeySpecifier
)[];
export type BackupRestoreJobPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    job?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BackupRestoreJobTypeKeySpecifier = (
    | 'cancelledAt'
    | 'createdAt'
    | 'errorCount'
    | 'finishedAt'
    | 'handoffError'
    | 'handoffSessionId'
    | 'handoffState'
    | 'id'
    | 'lastError'
    | 'phase'
    | 'progress'
    | 'restoreId'
    | 'stagedPayloadRetained'
    | 'startedAt'
    | 'state'
    | 'total'
    | 'updatedAt'
    | BackupRestoreJobTypeKeySpecifier
)[];
export type BackupRestoreJobTypeFieldPolicy = {
    cancelledAt?: FieldPolicy<any> | FieldReadFunction<any>;
    createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
    errorCount?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    handoffError?: FieldPolicy<any> | FieldReadFunction<any>;
    handoffSessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    handoffState?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    lastError?: FieldPolicy<any> | FieldReadFunction<any>;
    phase?: FieldPolicy<any> | FieldReadFunction<any>;
    progress?: FieldPolicy<any> | FieldReadFunction<any>;
    restoreId?: FieldPolicy<any> | FieldReadFunction<any>;
    stagedPayloadRetained?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    total?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BackupRestoreStatusKeySpecifier = (
    | 'mangaProgress'
    | 'state'
    | 'totalManga'
    | BackupRestoreStatusKeySpecifier
)[];
export type BackupRestoreStatusFieldPolicy = {
    mangaProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    totalManga?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BindTrackPayloadKeySpecifier = ('clientMutationId' | 'trackRecord' | BindTrackPayloadKeySpecifier)[];
export type BindTrackPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BindTrackRecordPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'trackRecord'
    | BindTrackRecordPayloadKeySpecifier
)[];
export type BindTrackRecordPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalIdentityExportTypeKeySpecifier = (
    | 'bindingCount'
    | 'payload'
    | 'schemaVersion'
    | 'workCount'
    | CanonicalIdentityExportTypeKeySpecifier
)[];
export type CanonicalIdentityExportTypeFieldPolicy = {
    bindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    payload?: FieldPolicy<any> | FieldReadFunction<any>;
    schemaVersion?: FieldPolicy<any> | FieldReadFunction<any>;
    workCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalIdentityImportTypeKeySpecifier = (
    | 'bindingsBound'
    | 'bindingsRebound'
    | 'bindingsUnresolved'
    | 'worksCreated'
    | 'worksUpdated'
    | CanonicalIdentityImportTypeKeySpecifier
)[];
export type CanonicalIdentityImportTypeFieldPolicy = {
    bindingsBound?: FieldPolicy<any> | FieldReadFunction<any>;
    bindingsRebound?: FieldPolicy<any> | FieldReadFunction<any>;
    bindingsUnresolved?: FieldPolicy<any> | FieldReadFunction<any>;
    worksCreated?: FieldPolicy<any> | FieldReadFunction<any>;
    worksUpdated?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalIdentityStatusTypeKeySpecifier = (
    | 'activeBindingCount'
    | 'bindingCount'
    | 'detachedBindingCount'
    | 'disabledBindingCount'
    | 'duplicatePolicyApplied'
    | 'fallbackBindingCount'
    | 'primaryBindingCount'
    | 'workCount'
    | CanonicalIdentityStatusTypeKeySpecifier
)[];
export type CanonicalIdentityStatusTypeFieldPolicy = {
    activeBindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    bindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    detachedBindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    disabledBindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    duplicatePolicyApplied?: FieldPolicy<any> | FieldReadFunction<any>;
    fallbackBindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    primaryBindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    workCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalSourceBindingEdgeKeySpecifier = ('cursor' | 'node' | CanonicalSourceBindingEdgeKeySpecifier)[];
export type CanonicalSourceBindingEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalSourceBindingNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | CanonicalSourceBindingNodeListKeySpecifier
)[];
export type CanonicalSourceBindingNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalSourceBindingTypeKeySpecifier = (
    | 'acquisitionEligible'
    | 'boundAt'
    | 'id'
    | 'isPrimary'
    | 'manga'
    | 'mangaAvailable'
    | 'mangaId'
    | 'mangaTitle'
    | 'mangaUrl'
    | 'priority'
    | 'role'
    | 'sourceId'
    | 'sourceName'
    | 'updatedAt'
    | 'work'
    | 'workId'
    | 'workKey'
    | CanonicalSourceBindingTypeKeySpecifier
)[];
export type CanonicalSourceBindingTypeFieldPolicy = {
    acquisitionEligible?: FieldPolicy<any> | FieldReadFunction<any>;
    boundAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaAvailable?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaTitle?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    priority?: FieldPolicy<any> | FieldReadFunction<any>;
    role?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceName?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    work?: FieldPolicy<any> | FieldReadFunction<any>;
    workId?: FieldPolicy<any> | FieldReadFunction<any>;
    workKey?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalWorkEdgeKeySpecifier = ('cursor' | 'node' | CanonicalWorkEdgeKeySpecifier)[];
export type CanonicalWorkEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalWorkNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | CanonicalWorkNodeListKeySpecifier
)[];
export type CanonicalWorkNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CanonicalWorkTypeKeySpecifier = (
    | 'bindingCount'
    | 'bindings'
    | 'createdAt'
    | 'duplicatePolicyApplied'
    | 'duplicateStrategy'
    | 'id'
    | 'preferredScanlator'
    | 'primaryBinding'
    | 'title'
    | 'updatedAt'
    | 'workKey'
    | CanonicalWorkTypeKeySpecifier
)[];
export type CanonicalWorkTypeFieldPolicy = {
    bindingCount?: FieldPolicy<any> | FieldReadFunction<any>;
    bindings?: FieldPolicy<any> | FieldReadFunction<any>;
    createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
    duplicatePolicyApplied?: FieldPolicy<any> | FieldReadFunction<any>;
    duplicateStrategy?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    preferredScanlator?: FieldPolicy<any> | FieldReadFunction<any>;
    primaryBinding?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    workKey?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryEdgeKeySpecifier = ('cursor' | 'node' | CategoryEdgeKeySpecifier)[];
export type CategoryEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryMetaTypeKeySpecifier = (
    | 'category'
    | 'categoryId'
    | 'key'
    | 'value'
    | CategoryMetaTypeKeySpecifier
)[];
export type CategoryMetaTypeFieldPolicy = {
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    categoryId?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | CategoryNodeListKeySpecifier
)[];
export type CategoryNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryTypeKeySpecifier = (
    | 'default'
    | 'id'
    | 'includeInDownload'
    | 'includeInUpdate'
    | 'isDefaultCategory'
    | 'mangas'
    | 'meta'
    | 'name'
    | 'order'
    | CategoryTypeKeySpecifier
)[];
export type CategoryTypeFieldPolicy = {
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    includeInDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    includeInUpdate?: FieldPolicy<any> | FieldReadFunction<any>;
    isDefaultCategory?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    order?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryUpdateTypeKeySpecifier = ('category' | 'status' | CategoryUpdateTypeKeySpecifier)[];
export type CategoryUpdateTypeFieldPolicy = {
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChangeCanonicalBindingPayloadKeySpecifier = (
    | 'binding'
    | 'clientMutationId'
    | 'outcome'
    | ChangeCanonicalBindingPayloadKeySpecifier
)[];
export type ChangeCanonicalBindingPayloadFieldPolicy = {
    binding?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterEdgeKeySpecifier = ('cursor' | 'node' | ChapterEdgeKeySpecifier)[];
export type ChapterEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditItemEdgeKeySpecifier = (
    | 'cursor'
    | 'node'
    | ChapterIntegrityAuditItemEdgeKeySpecifier
)[];
export type ChapterIntegrityAuditItemEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditItemNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterIntegrityAuditItemNodeListKeySpecifier
)[];
export type ChapterIntegrityAuditItemNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditItemTypeKeySpecifier = (
    | 'attempts'
    | 'candidateKey'
    | 'chapterId'
    | 'chapterKey'
    | 'chapterName'
    | 'dueAt'
    | 'finishedAt'
    | 'id'
    | 'lastError'
    | 'mangaId'
    | 'revisionId'
    | 'seriesTitle'
    | 'sessionId'
    | 'startedAt'
    | 'state'
    | 'updatedAt'
    | ChapterIntegrityAuditItemTypeKeySpecifier
)[];
export type ChapterIntegrityAuditItemTypeFieldPolicy = {
    attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateKey?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterId?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterKey?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterName?: FieldPolicy<any> | FieldReadFunction<any>;
    dueAt?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    lastError?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisionId?: FieldPolicy<any> | FieldReadFunction<any>;
    seriesTitle?: FieldPolicy<any> | FieldReadFunction<any>;
    sessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditProgressTypeKeySpecifier = (
    | 'checking'
    | 'corrupt'
    | 'failed'
    | 'findings'
    | 'missing'
    | 'pending'
    | 'remaining'
    | 'retryWait'
    | 'skipped'
    | 'total'
    | 'verified'
    | ChapterIntegrityAuditProgressTypeKeySpecifier
)[];
export type ChapterIntegrityAuditProgressTypeFieldPolicy = {
    checking?: FieldPolicy<any> | FieldReadFunction<any>;
    corrupt?: FieldPolicy<any> | FieldReadFunction<any>;
    failed?: FieldPolicy<any> | FieldReadFunction<any>;
    findings?: FieldPolicy<any> | FieldReadFunction<any>;
    missing?: FieldPolicy<any> | FieldReadFunction<any>;
    pending?: FieldPolicy<any> | FieldReadFunction<any>;
    remaining?: FieldPolicy<any> | FieldReadFunction<any>;
    retryWait?: FieldPolicy<any> | FieldReadFunction<any>;
    skipped?: FieldPolicy<any> | FieldReadFunction<any>;
    total?: FieldPolicy<any> | FieldReadFunction<any>;
    verified?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditScheduleTypeKeySpecifier = (
    | 'lastRunAt'
    | 'lastSessionId'
    | 'nextDueAt'
    | 'updatedAt'
    | ChapterIntegrityAuditScheduleTypeKeySpecifier
)[];
export type ChapterIntegrityAuditScheduleTypeFieldPolicy = {
    lastRunAt?: FieldPolicy<any> | FieldReadFunction<any>;
    lastSessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    nextDueAt?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditSessionEdgeKeySpecifier = (
    | 'cursor'
    | 'node'
    | ChapterIntegrityAuditSessionEdgeKeySpecifier
)[];
export type ChapterIntegrityAuditSessionEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditSessionNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterIntegrityAuditSessionNodeListKeySpecifier
)[];
export type ChapterIntegrityAuditSessionNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditSessionPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'session'
    | ChapterIntegrityAuditSessionPayloadKeySpecifier
)[];
export type ChapterIntegrityAuditSessionPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterIntegrityAuditSessionTypeKeySpecifier = (
    | 'cancelledAt'
    | 'finishedAt'
    | 'id'
    | 'itemDelaySeconds'
    | 'kind'
    | 'lastItemAt'
    | 'maxAttempts'
    | 'newestPerManga'
    | 'nextItemAt'
    | 'pausedAt'
    | 'retrySeconds'
    | 'startedAt'
    | 'state'
    | 'updatedAt'
    | ChapterIntegrityAuditSessionTypeKeySpecifier
)[];
export type ChapterIntegrityAuditSessionTypeFieldPolicy = {
    cancelledAt?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    itemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    kind?: FieldPolicy<any> | FieldReadFunction<any>;
    lastItemAt?: FieldPolicy<any> | FieldReadFunction<any>;
    maxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    newestPerManga?: FieldPolicy<any> | FieldReadFunction<any>;
    nextItemAt?: FieldPolicy<any> | FieldReadFunction<any>;
    pausedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterMetaTypeKeySpecifier = ('chapter' | 'chapterId' | 'key' | 'value' | ChapterMetaTypeKeySpecifier)[];
export type ChapterMetaTypeFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterId?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterNodeListKeySpecifier
)[];
export type ChapterNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionComparisonPageEdgeKeySpecifier = (
    | 'cursor'
    | 'node'
    | ChapterRevisionComparisonPageEdgeKeySpecifier
)[];
export type ChapterRevisionComparisonPageEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionComparisonPageNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterRevisionComparisonPageNodeListKeySpecifier
)[];
export type ChapterRevisionComparisonPageNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionComparisonPageTypeKeySpecifier = (
    | 'baselineHeight'
    | 'baselinePageIndex'
    | 'baselinePageUrl'
    | 'baselinePreviewAvailable'
    | 'baselineSize'
    | 'baselineThumbnailUrl'
    | 'baselineWidth'
    | 'candidateHeight'
    | 'candidatePageIndex'
    | 'candidatePageUrl'
    | 'candidatePreviewAvailable'
    | 'candidateSize'
    | 'candidateThumbnailUrl'
    | 'candidateWidth'
    | 'hammingDistance'
    | 'ordinal'
    | 'state'
    | ChapterRevisionComparisonPageTypeKeySpecifier
)[];
export type ChapterRevisionComparisonPageTypeFieldPolicy = {
    baselineHeight?: FieldPolicy<any> | FieldReadFunction<any>;
    baselinePageIndex?: FieldPolicy<any> | FieldReadFunction<any>;
    baselinePageUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    baselinePreviewAvailable?: FieldPolicy<any> | FieldReadFunction<any>;
    baselineSize?: FieldPolicy<any> | FieldReadFunction<any>;
    baselineThumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    baselineWidth?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateHeight?: FieldPolicy<any> | FieldReadFunction<any>;
    candidatePageIndex?: FieldPolicy<any> | FieldReadFunction<any>;
    candidatePageUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    candidatePreviewAvailable?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateSize?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateThumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateWidth?: FieldPolicy<any> | FieldReadFunction<any>;
    hammingDistance?: FieldPolicy<any> | FieldReadFunction<any>;
    ordinal?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionComparisonTypeKeySpecifier = (
    | 'addedCount'
    | 'algorithmVersion'
    | 'alignedCount'
    | 'allPagesVisuallyEquivalent'
    | 'baselinePageCount'
    | 'baselineRevisionId'
    | 'candidatePageCount'
    | 'createdAt'
    | 'exactCount'
    | 'hammingThreshold'
    | 'hasLimitations'
    | 'limitations'
    | 'modifiedCount'
    | 'removedCount'
    | 'revisionId'
    | 'updatedAt'
    | 'visuallyEquivalentCount'
    | ChapterRevisionComparisonTypeKeySpecifier
)[];
export type ChapterRevisionComparisonTypeFieldPolicy = {
    addedCount?: FieldPolicy<any> | FieldReadFunction<any>;
    algorithmVersion?: FieldPolicy<any> | FieldReadFunction<any>;
    alignedCount?: FieldPolicy<any> | FieldReadFunction<any>;
    allPagesVisuallyEquivalent?: FieldPolicy<any> | FieldReadFunction<any>;
    baselinePageCount?: FieldPolicy<any> | FieldReadFunction<any>;
    baselineRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
    candidatePageCount?: FieldPolicy<any> | FieldReadFunction<any>;
    createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
    exactCount?: FieldPolicy<any> | FieldReadFunction<any>;
    hammingThreshold?: FieldPolicy<any> | FieldReadFunction<any>;
    hasLimitations?: FieldPolicy<any> | FieldReadFunction<any>;
    limitations?: FieldPolicy<any> | FieldReadFunction<any>;
    modifiedCount?: FieldPolicy<any> | FieldReadFunction<any>;
    removedCount?: FieldPolicy<any> | FieldReadFunction<any>;
    revisionId?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    visuallyEquivalentCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionEdgeKeySpecifier = ('cursor' | 'node' | ChapterRevisionEdgeKeySpecifier)[];
export type ChapterRevisionEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterRevisionNodeListKeySpecifier
)[];
export type ChapterRevisionNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionRollbackEdgeKeySpecifier = ('cursor' | 'node' | ChapterRevisionRollbackEdgeKeySpecifier)[];
export type ChapterRevisionRollbackEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionRollbackNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterRevisionRollbackNodeListKeySpecifier
)[];
export type ChapterRevisionRollbackNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionRollbackTypeKeySpecifier = (
    | 'chapterKey'
    | 'fromRevisionId'
    | 'id'
    | 'rolledBackAt'
    | 'toRevisionId'
    | ChapterRevisionRollbackTypeKeySpecifier
)[];
export type ChapterRevisionRollbackTypeFieldPolicy = {
    chapterKey?: FieldPolicy<any> | FieldReadFunction<any>;
    fromRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    rolledBackAt?: FieldPolicy<any> | FieldReadFunction<any>;
    toRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepItemEdgeKeySpecifier = ('cursor' | 'node' | ChapterRevisionSweepItemEdgeKeySpecifier)[];
export type ChapterRevisionSweepItemEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepItemNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterRevisionSweepItemNodeListKeySpecifier
)[];
export type ChapterRevisionSweepItemNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepItemTypeKeySpecifier = (
    | 'attempts'
    | 'candidateCount'
    | 'chapterId'
    | 'chapterKey'
    | 'chapterName'
    | 'dueAt'
    | 'finishedAt'
    | 'id'
    | 'lastError'
    | 'mangaId'
    | 'policy'
    | 'seriesTitle'
    | 'sessionId'
    | 'sourceChapterUrl'
    | 'sourceId'
    | 'startedAt'
    | 'state'
    | 'updatedAt'
    | ChapterRevisionSweepItemTypeKeySpecifier
)[];
export type ChapterRevisionSweepItemTypeFieldPolicy = {
    attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateCount?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterId?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterKey?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterName?: FieldPolicy<any> | FieldReadFunction<any>;
    dueAt?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    lastError?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    policy?: FieldPolicy<any> | FieldReadFunction<any>;
    seriesTitle?: FieldPolicy<any> | FieldReadFunction<any>;
    sessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceChapterUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepProgressTypeKeySpecifier = (
    | 'cancelled'
    | 'complete'
    | 'failed'
    | 'pending'
    | 'processing'
    | 'remaining'
    | 'retryWait'
    | 'skipped'
    | 'total'
    | ChapterRevisionSweepProgressTypeKeySpecifier
)[];
export type ChapterRevisionSweepProgressTypeFieldPolicy = {
    cancelled?: FieldPolicy<any> | FieldReadFunction<any>;
    complete?: FieldPolicy<any> | FieldReadFunction<any>;
    failed?: FieldPolicy<any> | FieldReadFunction<any>;
    pending?: FieldPolicy<any> | FieldReadFunction<any>;
    processing?: FieldPolicy<any> | FieldReadFunction<any>;
    remaining?: FieldPolicy<any> | FieldReadFunction<any>;
    retryWait?: FieldPolicy<any> | FieldReadFunction<any>;
    skipped?: FieldPolicy<any> | FieldReadFunction<any>;
    total?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepScheduleTypeKeySpecifier = (
    | 'lastRunAt'
    | 'lastSessionId'
    | 'nextDueAt'
    | 'updatedAt'
    | ChapterRevisionSweepScheduleTypeKeySpecifier
)[];
export type ChapterRevisionSweepScheduleTypeFieldPolicy = {
    lastRunAt?: FieldPolicy<any> | FieldReadFunction<any>;
    lastSessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    nextDueAt?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepSessionEdgeKeySpecifier = (
    | 'cursor'
    | 'node'
    | ChapterRevisionSweepSessionEdgeKeySpecifier
)[];
export type ChapterRevisionSweepSessionEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepSessionNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ChapterRevisionSweepSessionNodeListKeySpecifier
)[];
export type ChapterRevisionSweepSessionNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepSessionPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | ChapterRevisionSweepSessionPayloadKeySpecifier
)[];
export type ChapterRevisionSweepSessionPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionSweepSessionTypeKeySpecifier = (
    | 'cancelledAt'
    | 'finishedAt'
    | 'id'
    | 'itemDelaySeconds'
    | 'kind'
    | 'lastItemAt'
    | 'maxAttempts'
    | 'newestPerSeries'
    | 'nextItemAt'
    | 'pausedAt'
    | 'retrySeconds'
    | 'startedAt'
    | 'state'
    | 'updatedAt'
    | ChapterRevisionSweepSessionTypeKeySpecifier
)[];
export type ChapterRevisionSweepSessionTypeFieldPolicy = {
    cancelledAt?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    itemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    kind?: FieldPolicy<any> | FieldReadFunction<any>;
    lastItemAt?: FieldPolicy<any> | FieldReadFunction<any>;
    maxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    newestPerSeries?: FieldPolicy<any> | FieldReadFunction<any>;
    nextItemAt?: FieldPolicy<any> | FieldReadFunction<any>;
    pausedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    startedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionTypeKeySpecifier = (
    | 'acceptedAt'
    | 'acquisitionState'
    | 'activatedAt'
    | 'activeCbzHash'
    | 'activeCbzPath'
    | 'activeCbzSize'
    | 'approvedAt'
    | 'archiveAttempts'
    | 'archiveCbzHash'
    | 'archiveCbzPath'
    | 'archiveCbzSize'
    | 'archiveLastAttemptAt'
    | 'archiveLastError'
    | 'archiveLastVerificationAt'
    | 'archiveManifestHash'
    | 'archiveManifestPath'
    | 'archiveManifestSize'
    | 'archiveNextVerificationAt'
    | 'archiveState'
    | 'archiveVerificationAttempts'
    | 'archivedAt'
    | 'attempts'
    | 'candidateKey'
    | 'candidatePath'
    | 'changedMetadataFields'
    | 'chapter'
    | 'chapterId'
    | 'chapterKey'
    | 'chapterNumber'
    | 'contentHash'
    | 'deletedAt'
    | 'discoveredAt'
    | 'discoveryReason'
    | 'disposition'
    | 'downloadUrl'
    | 'id'
    | 'integrityLastAuditSessionId'
    | 'integrityLastAuditedAt'
    | 'integrityLastError'
    | 'integrityState'
    | 'isActiveRevision'
    | 'lastAttemptAt'
    | 'lastError'
    | 'manga'
    | 'mangaId'
    | 'name'
    | 'pageCount'
    | 'prunedAt'
    | 'publicationAttempts'
    | 'publicationLastAttemptAt'
    | 'publicationLastError'
    | 'publicationState'
    | 'publishedAt'
    | 'retentionAttempts'
    | 'retentionLastAttemptAt'
    | 'retentionLastError'
    | 'retentionNextVerificationAt'
    | 'retentionQueuedAt'
    | 'retentionState'
    | 'scanlator'
    | 'signalConfidence'
    | 'sourceChapterUrl'
    | 'sourceId'
    | 'sourceMangaUrl'
    | 'supersededAt'
    | 'updatedAt'
    | 'uploadDate'
    | 'visualAnalysisAttempts'
    | 'visualAnalysisCompletedAt'
    | 'visualAnalysisLastAttemptAt'
    | 'visualAnalysisLastError'
    | 'visualAnalysisNextAttemptAt'
    | 'visualAnalysisState'
    | ChapterRevisionTypeKeySpecifier
)[];
export type ChapterRevisionTypeFieldPolicy = {
    acceptedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    acquisitionState?: FieldPolicy<any> | FieldReadFunction<any>;
    activatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    activeCbzHash?: FieldPolicy<any> | FieldReadFunction<any>;
    activeCbzPath?: FieldPolicy<any> | FieldReadFunction<any>;
    activeCbzSize?: FieldPolicy<any> | FieldReadFunction<any>;
    approvedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveCbzHash?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveCbzPath?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveCbzSize?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveLastAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveLastError?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveLastVerificationAt?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveManifestHash?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveManifestPath?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveManifestSize?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveNextVerificationAt?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveState?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    archivedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    candidateKey?: FieldPolicy<any> | FieldReadFunction<any>;
    candidatePath?: FieldPolicy<any> | FieldReadFunction<any>;
    changedMetadataFields?: FieldPolicy<any> | FieldReadFunction<any>;
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterId?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterKey?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterNumber?: FieldPolicy<any> | FieldReadFunction<any>;
    contentHash?: FieldPolicy<any> | FieldReadFunction<any>;
    deletedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    discoveredAt?: FieldPolicy<any> | FieldReadFunction<any>;
    discoveryReason?: FieldPolicy<any> | FieldReadFunction<any>;
    disposition?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    integrityLastAuditSessionId?: FieldPolicy<any> | FieldReadFunction<any>;
    integrityLastAuditedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    integrityLastError?: FieldPolicy<any> | FieldReadFunction<any>;
    integrityState?: FieldPolicy<any> | FieldReadFunction<any>;
    isActiveRevision?: FieldPolicy<any> | FieldReadFunction<any>;
    lastAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    lastError?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
    prunedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    publicationAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    publicationLastAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    publicationLastError?: FieldPolicy<any> | FieldReadFunction<any>;
    publicationState?: FieldPolicy<any> | FieldReadFunction<any>;
    publishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retentionAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    retentionLastAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retentionLastError?: FieldPolicy<any> | FieldReadFunction<any>;
    retentionNextVerificationAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retentionQueuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    retentionState?: FieldPolicy<any> | FieldReadFunction<any>;
    scanlator?: FieldPolicy<any> | FieldReadFunction<any>;
    signalConfidence?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceChapterUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceMangaUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    supersededAt?: FieldPolicy<any> | FieldReadFunction<any>;
    updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    uploadDate?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisCompletedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisLastAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisLastError?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisNextAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisState?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterRevisionVisualAnalysisStatusKeySpecifier = (
    | 'analyzing'
    | 'complete'
    | 'completeWithLimitations'
    | 'failed'
    | 'notRequired'
    | 'queued'
    | ChapterRevisionVisualAnalysisStatusKeySpecifier
)[];
export type ChapterRevisionVisualAnalysisStatusFieldPolicy = {
    analyzing?: FieldPolicy<any> | FieldReadFunction<any>;
    complete?: FieldPolicy<any> | FieldReadFunction<any>;
    completeWithLimitations?: FieldPolicy<any> | FieldReadFunction<any>;
    failed?: FieldPolicy<any> | FieldReadFunction<any>;
    notRequired?: FieldPolicy<any> | FieldReadFunction<any>;
    queued?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChapterTypeKeySpecifier = (
    | 'chapterNumber'
    | 'fetchedAt'
    | 'id'
    | 'isBookmarked'
    | 'isDownloaded'
    | 'isRead'
    | 'lastPageRead'
    | 'lastReadAt'
    | 'manga'
    | 'mangaId'
    | 'meta'
    | 'name'
    | 'pageCount'
    | 'realUrl'
    | 'scanlator'
    | 'sourceOrder'
    | 'uploadDate'
    | 'url'
    | ChapterTypeKeySpecifier
)[];
export type ChapterTypeFieldPolicy = {
    chapterNumber?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    isBookmarked?: FieldPolicy<any> | FieldReadFunction<any>;
    isDownloaded?: FieldPolicy<any> | FieldReadFunction<any>;
    isRead?: FieldPolicy<any> | FieldReadFunction<any>;
    lastPageRead?: FieldPolicy<any> | FieldReadFunction<any>;
    lastReadAt?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
    realUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    scanlator?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceOrder?: FieldPolicy<any> | FieldReadFunction<any>;
    uploadDate?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckBoxFilterKeySpecifier = ('default' | 'name' | CheckBoxFilterKeySpecifier)[];
export type CheckBoxFilterFieldPolicy = {
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckBoxPreferenceKeySpecifier = (
    | 'currentValue'
    | 'default'
    | 'enabled'
    | 'key'
    | 'summary'
    | 'title'
    | 'visible'
    | CheckBoxPreferenceKeySpecifier
)[];
export type CheckBoxPreferenceFieldPolicy = {
    currentValue?: FieldPolicy<any> | FieldReadFunction<any>;
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    enabled?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    visible?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckForServerUpdatesPayloadKeySpecifier = (
    | 'channel'
    | 'tag'
    | 'url'
    | CheckForServerUpdatesPayloadKeySpecifier
)[];
export type CheckForServerUpdatesPayloadFieldPolicy = {
    channel?: FieldPolicy<any> | FieldReadFunction<any>;
    tag?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClearCachedImagesPayloadKeySpecifier = (
    | 'cachedPages'
    | 'cachedThumbnails'
    | 'clientMutationId'
    | 'downloadedThumbnails'
    | ClearCachedImagesPayloadKeySpecifier
)[];
export type ClearCachedImagesPayloadFieldPolicy = {
    cachedPages?: FieldPolicy<any> | FieldReadFunction<any>;
    cachedThumbnails?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadedThumbnails?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClearCookiesAndCachePayloadKeySpecifier = ('clientMutationId' | ClearCookiesAndCachePayloadKeySpecifier)[];
export type ClearCookiesAndCachePayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClearDownloaderPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | ClearDownloaderPayloadKeySpecifier
)[];
export type ClearDownloaderPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CloseWebViewPayloadKeySpecifier = ('clientMutationId' | 'closed' | CloseWebViewPayloadKeySpecifier)[];
export type CloseWebViewPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    closed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateBackupPayloadKeySpecifier = ('clientMutationId' | 'url' | CreateBackupPayloadKeySpecifier)[];
export type CreateBackupPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCanonicalWorkPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'outcome'
    | 'work'
    | CreateCanonicalWorkPayloadKeySpecifier
)[];
export type CreateCanonicalWorkPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
    work?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCategoryPayloadKeySpecifier = ('category' | 'clientMutationId' | CreateCategoryPayloadKeySpecifier)[];
export type CreateCategoryPayloadFieldPolicy = {
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCanonicalWorkPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'outcome'
    | DeleteCanonicalWorkPayloadKeySpecifier
)[];
export type DeleteCanonicalWorkPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCategoryMetaPayloadKeySpecifier = (
    | 'category'
    | 'clientMutationId'
    | 'meta'
    | DeleteCategoryMetaPayloadKeySpecifier
)[];
export type DeleteCategoryMetaPayloadFieldPolicy = {
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCategoryMetasPayloadKeySpecifier = (
    | 'categories'
    | 'clientMutationId'
    | 'metas'
    | DeleteCategoryMetasPayloadKeySpecifier
)[];
export type DeleteCategoryMetasPayloadFieldPolicy = {
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCategoryPayloadKeySpecifier = (
    | 'category'
    | 'clientMutationId'
    | 'mangas'
    | DeleteCategoryPayloadKeySpecifier
)[];
export type DeleteCategoryPayloadFieldPolicy = {
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteChapterMetaPayloadKeySpecifier = (
    | 'chapter'
    | 'clientMutationId'
    | 'meta'
    | DeleteChapterMetaPayloadKeySpecifier
)[];
export type DeleteChapterMetaPayloadFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteChapterMetasPayloadKeySpecifier = (
    | 'chapters'
    | 'clientMutationId'
    | 'metas'
    | DeleteChapterMetasPayloadKeySpecifier
)[];
export type DeleteChapterMetasPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteDownloadedChapterPayloadKeySpecifier = (
    | 'chapters'
    | 'clientMutationId'
    | DeleteDownloadedChapterPayloadKeySpecifier
)[];
export type DeleteDownloadedChapterPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteDownloadedChaptersPayloadKeySpecifier = (
    | 'chapters'
    | 'clientMutationId'
    | DeleteDownloadedChaptersPayloadKeySpecifier
)[];
export type DeleteDownloadedChaptersPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteGlobalMetaPayloadKeySpecifier = ('clientMutationId' | 'meta' | DeleteGlobalMetaPayloadKeySpecifier)[];
export type DeleteGlobalMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteGlobalMetasPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'metas'
    | DeleteGlobalMetasPayloadKeySpecifier
)[];
export type DeleteGlobalMetasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteMangaMetaPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'manga'
    | 'meta'
    | DeleteMangaMetaPayloadKeySpecifier
)[];
export type DeleteMangaMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteMangaMetasPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'mangas'
    | 'metas'
    | DeleteMangaMetasPayloadKeySpecifier
)[];
export type DeleteMangaMetasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteSourceMetaPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'meta'
    | 'source'
    | DeleteSourceMetaPayloadKeySpecifier
)[];
export type DeleteSourceMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
    source?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteSourceMetasPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'metas'
    | 'sources'
    | DeleteSourceMetasPayloadKeySpecifier
)[];
export type DeleteSourceMetasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
    sources?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DequeueChapterDownloadPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | DequeueChapterDownloadPayloadKeySpecifier
)[];
export type DequeueChapterDownloadPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DequeueChapterDownloadsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | DequeueChapterDownloadsPayloadKeySpecifier
)[];
export type DequeueChapterDownloadsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DetachCanonicalBindingPayloadKeySpecifier = (
    | 'binding'
    | 'clientMutationId'
    | 'outcome'
    | DetachCanonicalBindingPayloadKeySpecifier
)[];
export type DetachCanonicalBindingPayloadFieldPolicy = {
    binding?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DownloadEdgeKeySpecifier = ('cursor' | 'node' | DownloadEdgeKeySpecifier)[];
export type DownloadEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DownloadNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | DownloadNodeListKeySpecifier
)[];
export type DownloadNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DownloadStatusKeySpecifier = ('queue' | 'state' | DownloadStatusKeySpecifier)[];
export type DownloadStatusFieldPolicy = {
    queue?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DownloadTypeKeySpecifier = (
    | 'chapter'
    | 'manga'
    | 'position'
    | 'progress'
    | 'state'
    | 'tries'
    | DownloadTypeKeySpecifier
)[];
export type DownloadTypeFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    position?: FieldPolicy<any> | FieldReadFunction<any>;
    progress?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    tries?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DownloadUpdateKeySpecifier = ('download' | 'type' | DownloadUpdateKeySpecifier)[];
export type DownloadUpdateFieldPolicy = {
    download?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DownloadUpdatesKeySpecifier = (
    | 'initial'
    | 'omittedUpdates'
    | 'state'
    | 'updates'
    | DownloadUpdatesKeySpecifier
)[];
export type DownloadUpdatesFieldPolicy = {
    initial?: FieldPolicy<any> | FieldReadFunction<any>;
    omittedUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
    updates?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EdgeKeySpecifier = ('cursor' | 'node' | EdgeKeySpecifier)[];
export type EdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EditTextPreferenceKeySpecifier = (
    | 'currentValue'
    | 'default'
    | 'dialogMessage'
    | 'dialogTitle'
    | 'enabled'
    | 'key'
    | 'summary'
    | 'text'
    | 'title'
    | 'visible'
    | EditTextPreferenceKeySpecifier
)[];
export type EditTextPreferenceFieldPolicy = {
    currentValue?: FieldPolicy<any> | FieldReadFunction<any>;
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    dialogMessage?: FieldPolicy<any> | FieldReadFunction<any>;
    dialogTitle?: FieldPolicy<any> | FieldReadFunction<any>;
    enabled?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    text?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    visible?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueueChapterDownloadPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | EnqueueChapterDownloadPayloadKeySpecifier
)[];
export type EnqueueChapterDownloadPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueueChapterDownloadsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | EnqueueChapterDownloadsPayloadKeySpecifier
)[];
export type EnqueueChapterDownloadsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExportCanonicalIdentityPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'export'
    | ExportCanonicalIdentityPayloadKeySpecifier
)[];
export type ExportCanonicalIdentityPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    export?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExtensionEdgeKeySpecifier = ('cursor' | 'node' | ExtensionEdgeKeySpecifier)[];
export type ExtensionEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExtensionNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ExtensionNodeListKeySpecifier
)[];
export type ExtensionNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExtensionStoreEdgeKeySpecifier = ('cursor' | 'node' | ExtensionStoreEdgeKeySpecifier)[];
export type ExtensionStoreEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExtensionStoreNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | ExtensionStoreNodeListKeySpecifier
)[];
export type ExtensionStoreNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExtensionStoreTypeKeySpecifier = (
    | 'badgeLabel'
    | 'contactDiscord'
    | 'contactWebsite'
    | 'extensionListUrl'
    | 'extensions'
    | 'indexUrl'
    | 'isLegacy'
    | 'name'
    | 'signingKey'
    | ExtensionStoreTypeKeySpecifier
)[];
export type ExtensionStoreTypeFieldPolicy = {
    badgeLabel?: FieldPolicy<any> | FieldReadFunction<any>;
    contactDiscord?: FieldPolicy<any> | FieldReadFunction<any>;
    contactWebsite?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionListUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    extensions?: FieldPolicy<any> | FieldReadFunction<any>;
    indexUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    isLegacy?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    signingKey?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ExtensionTypeKeySpecifier = (
    | 'apkName'
    | 'apkUrl'
    | 'contentWarning'
    | 'extensionLib'
    | 'extensionStore'
    | 'hasUpdate'
    | 'iconUrl'
    | 'isInstalled'
    | 'isNsfw'
    | 'isObsolete'
    | 'jarUrl'
    | 'lang'
    | 'name'
    | 'pkgName'
    | 'repo'
    | 'source'
    | 'storeIndexUrl'
    | 'versionCode'
    | 'versionCodeLong'
    | 'versionName'
    | ExtensionTypeKeySpecifier
)[];
export type ExtensionTypeFieldPolicy = {
    apkName?: FieldPolicy<any> | FieldReadFunction<any>;
    apkUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    contentWarning?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionLib?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionStore?: FieldPolicy<any> | FieldReadFunction<any>;
    hasUpdate?: FieldPolicy<any> | FieldReadFunction<any>;
    iconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    isInstalled?: FieldPolicy<any> | FieldReadFunction<any>;
    isNsfw?: FieldPolicy<any> | FieldReadFunction<any>;
    isObsolete?: FieldPolicy<any> | FieldReadFunction<any>;
    jarUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    lang?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    pkgName?: FieldPolicy<any> | FieldReadFunction<any>;
    repo?: FieldPolicy<any> | FieldReadFunction<any>;
    source?: FieldPolicy<any> | FieldReadFunction<any>;
    storeIndexUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    versionCode?: FieldPolicy<any> | FieldReadFunction<any>;
    versionCodeLong?: FieldPolicy<any> | FieldReadFunction<any>;
    versionName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FailoverCanonicalWorkPayloadKeySpecifier = (
    | 'binding'
    | 'clientMutationId'
    | 'outcome'
    | FailoverCanonicalWorkPayloadKeySpecifier
)[];
export type FailoverCanonicalWorkPayloadFieldPolicy = {
    binding?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchChapterPagesPayloadKeySpecifier = (
    | 'chapter'
    | 'clientMutationId'
    | 'pages'
    | 'syncConflict'
    | FetchChapterPagesPayloadKeySpecifier
)[];
export type FetchChapterPagesPayloadFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    pages?: FieldPolicy<any> | FieldReadFunction<any>;
    syncConflict?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchChaptersPayloadKeySpecifier = ('chapters' | 'clientMutationId' | FetchChaptersPayloadKeySpecifier)[];
export type FetchChaptersPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchExtensionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'extensionStores'
    | 'extensions'
    | FetchExtensionsPayloadKeySpecifier
)[];
export type FetchExtensionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionStores?: FieldPolicy<any> | FieldReadFunction<any>;
    extensions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchMangaAndChaptersPayloadKeySpecifier = (
    | 'chapters'
    | 'clientMutationId'
    | 'manga'
    | FetchMangaAndChaptersPayloadKeySpecifier
)[];
export type FetchMangaAndChaptersPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchMangaPayloadKeySpecifier = ('clientMutationId' | 'manga' | FetchMangaPayloadKeySpecifier)[];
export type FetchMangaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchSourceMangaPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'hasNextPage'
    | 'mangas'
    | FetchSourceMangaPayloadKeySpecifier
)[];
export type FetchSourceMangaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FetchTrackPayloadKeySpecifier = ('clientMutationId' | 'trackRecord' | FetchTrackPayloadKeySpecifier)[];
export type FetchTrackPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GlobalMetaNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | GlobalMetaNodeListKeySpecifier
)[];
export type GlobalMetaNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GlobalMetaTypeKeySpecifier = ('key' | 'value' | GlobalMetaTypeKeySpecifier)[];
export type GlobalMetaTypeFieldPolicy = {
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GroupFilterKeySpecifier = ('filters' | 'name' | GroupFilterKeySpecifier)[];
export type GroupFilterFieldPolicy = {
    filters?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HeaderFilterKeySpecifier = ('name' | HeaderFilterKeySpecifier)[];
export type HeaderFilterFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ImportCanonicalIdentityPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'import'
    | ImportCanonicalIdentityPayloadKeySpecifier
)[];
export type ImportCanonicalIdentityPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    import?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type InstallExternalExtensionPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'extension'
    | InstallExternalExtensionPayloadKeySpecifier
)[];
export type InstallExternalExtensionPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    extension?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type JvmInfoKeySpecifier = ('javaVersion' | 'vmName' | 'vmVendor' | 'vmVersion' | JvmInfoKeySpecifier)[];
export type JvmInfoFieldPolicy = {
    javaVersion?: FieldPolicy<any> | FieldReadFunction<any>;
    vmName?: FieldPolicy<any> | FieldReadFunction<any>;
    vmVendor?: FieldPolicy<any> | FieldReadFunction<any>;
    vmVersion?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeepBothChapterRevisionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | KeepBothChapterRevisionsPayloadKeySpecifier
)[];
export type KeepBothChapterRevisionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeepCurrentChapterRevisionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | KeepCurrentChapterRevisionsPayloadKeySpecifier
)[];
export type KeepCurrentChapterRevisionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KoSyncConnectPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'message'
    | 'status'
    | KoSyncConnectPayloadKeySpecifier
)[];
export type KoSyncConnectPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    message?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KoSyncStatusPayloadKeySpecifier = (
    | 'isLoggedIn'
    | 'serverAddress'
    | 'username'
    | KoSyncStatusPayloadKeySpecifier
)[];
export type KoSyncStatusPayloadFieldPolicy = {
    isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>;
    serverAddress?: FieldPolicy<any> | FieldReadFunction<any>;
    username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KomgaRescanStatusTypeKeySpecifier = (
    | 'attempts'
    | 'configurationError'
    | 'configured'
    | 'generation'
    | 'lastAttemptAt'
    | 'lastCompletedAt'
    | 'lastError'
    | 'notBeforeAt'
    | 'requestedAt'
    | 'state'
    | KomgaRescanStatusTypeKeySpecifier
)[];
export type KomgaRescanStatusTypeFieldPolicy = {
    attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    configurationError?: FieldPolicy<any> | FieldReadFunction<any>;
    configured?: FieldPolicy<any> | FieldReadFunction<any>;
    generation?: FieldPolicy<any> | FieldReadFunction<any>;
    lastAttemptAt?: FieldPolicy<any> | FieldReadFunction<any>;
    lastCompletedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    lastError?: FieldPolicy<any> | FieldReadFunction<any>;
    notBeforeAt?: FieldPolicy<any> | FieldReadFunction<any>;
    requestedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LastUpdateTimestampPayloadKeySpecifier = ('timestamp' | LastUpdateTimestampPayloadKeySpecifier)[];
export type LastUpdateTimestampPayloadFieldPolicy = {
    timestamp?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LibraryUpdateStatusKeySpecifier = (
    | 'categoryUpdates'
    | 'jobsInfo'
    | 'mangaUpdates'
    | LibraryUpdateStatusKeySpecifier
)[];
export type LibraryUpdateStatusFieldPolicy = {
    categoryUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
    jobsInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListPreferenceKeySpecifier = (
    | 'currentValue'
    | 'default'
    | 'enabled'
    | 'entries'
    | 'entryValues'
    | 'key'
    | 'summary'
    | 'title'
    | 'visible'
    | ListPreferenceKeySpecifier
)[];
export type ListPreferenceFieldPolicy = {
    currentValue?: FieldPolicy<any> | FieldReadFunction<any>;
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    enabled?: FieldPolicy<any> | FieldReadFunction<any>;
    entries?: FieldPolicy<any> | FieldReadFunction<any>;
    entryValues?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    visible?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginPayloadKeySpecifier = (
    | 'accessToken'
    | 'clientMutationId'
    | 'refreshToken'
    | LoginPayloadKeySpecifier
)[];
export type LoginPayloadFieldPolicy = {
    accessToken?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginTrackerCredentialsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'isLoggedIn'
    | 'tracker'
    | LoginTrackerCredentialsPayloadKeySpecifier
)[];
export type LoginTrackerCredentialsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>;
    tracker?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginTrackerOAuthPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'isLoggedIn'
    | 'tracker'
    | LoginTrackerOAuthPayloadKeySpecifier
)[];
export type LoginTrackerOAuthPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>;
    tracker?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LogoutKoSyncAccountPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'status'
    | LogoutKoSyncAccountPayloadKeySpecifier
)[];
export type LogoutKoSyncAccountPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LogoutTrackerPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'isLoggedIn'
    | 'tracker'
    | LogoutTrackerPayloadKeySpecifier
)[];
export type LogoutTrackerPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>;
    tracker?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MangaEdgeKeySpecifier = ('cursor' | 'node' | MangaEdgeKeySpecifier)[];
export type MangaEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MangaMetaTypeKeySpecifier = ('key' | 'manga' | 'mangaId' | 'value' | MangaMetaTypeKeySpecifier)[];
export type MangaMetaTypeFieldPolicy = {
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MangaNodeListKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | MangaNodeListKeySpecifier)[];
export type MangaNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MangaTypeKeySpecifier = (
    | 'acceptedRevisionRetention'
    | 'acquisitionPolicy'
    | 'acquisitionPolicyOverride'
    | 'age'
    | 'artist'
    | 'author'
    | 'bookmarkCount'
    | 'canonicalAcquisitionEligible'
    | 'canonicalBinding'
    | 'categories'
    | 'chapters'
    | 'chaptersAge'
    | 'chaptersLastFetchedAt'
    | 'description'
    | 'downloadCount'
    | 'effectiveAcceptedRevisionRetention'
    | 'firstUnreadChapter'
    | 'genre'
    | 'hasDuplicateChapters'
    | 'highestNumberedChapter'
    | 'id'
    | 'inLibrary'
    | 'inLibraryAt'
    | 'initialized'
    | 'lastFetchedAt'
    | 'lastReadChapter'
    | 'latestFetchedChapter'
    | 'latestReadChapter'
    | 'latestUploadedChapter'
    | 'meta'
    | 'realUrl'
    | 'source'
    | 'sourceId'
    | 'status'
    | 'thumbnailUrl'
    | 'thumbnailUrlLastFetched'
    | 'title'
    | 'trackRecords'
    | 'unreadCount'
    | 'updateStrategy'
    | 'url'
    | MangaTypeKeySpecifier
)[];
export type MangaTypeFieldPolicy = {
    acceptedRevisionRetention?: FieldPolicy<any> | FieldReadFunction<any>;
    acquisitionPolicy?: FieldPolicy<any> | FieldReadFunction<any>;
    acquisitionPolicyOverride?: FieldPolicy<any> | FieldReadFunction<any>;
    age?: FieldPolicy<any> | FieldReadFunction<any>;
    artist?: FieldPolicy<any> | FieldReadFunction<any>;
    author?: FieldPolicy<any> | FieldReadFunction<any>;
    bookmarkCount?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalAcquisitionEligible?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalBinding?: FieldPolicy<any> | FieldReadFunction<any>;
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    chaptersAge?: FieldPolicy<any> | FieldReadFunction<any>;
    chaptersLastFetchedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    description?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadCount?: FieldPolicy<any> | FieldReadFunction<any>;
    effectiveAcceptedRevisionRetention?: FieldPolicy<any> | FieldReadFunction<any>;
    firstUnreadChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    genre?: FieldPolicy<any> | FieldReadFunction<any>;
    hasDuplicateChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    highestNumberedChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    inLibrary?: FieldPolicy<any> | FieldReadFunction<any>;
    inLibraryAt?: FieldPolicy<any> | FieldReadFunction<any>;
    initialized?: FieldPolicy<any> | FieldReadFunction<any>;
    lastFetchedAt?: FieldPolicy<any> | FieldReadFunction<any>;
    lastReadChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    latestFetchedChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    latestReadChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    latestUploadedChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
    realUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    source?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    thumbnailUrlLastFetched?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecords?: FieldPolicy<any> | FieldReadFunction<any>;
    unreadCount?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStrategy?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MangaUpdateTypeKeySpecifier = ('manga' | 'status' | MangaUpdateTypeKeySpecifier)[];
export type MangaUpdateTypeFieldPolicy = {
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MetaEdgeKeySpecifier = ('cursor' | 'node' | MetaEdgeKeySpecifier)[];
export type MetaEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MetaTypeKeySpecifier = ('key' | 'value' | MetaTypeKeySpecifier)[];
export type MetaTypeFieldPolicy = {
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MultiSelectListPreferenceKeySpecifier = (
    | 'currentValue'
    | 'default'
    | 'dialogMessage'
    | 'dialogTitle'
    | 'enabled'
    | 'entries'
    | 'entryValues'
    | 'key'
    | 'summary'
    | 'title'
    | 'visible'
    | MultiSelectListPreferenceKeySpecifier
)[];
export type MultiSelectListPreferenceFieldPolicy = {
    currentValue?: FieldPolicy<any> | FieldReadFunction<any>;
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    dialogMessage?: FieldPolicy<any> | FieldReadFunction<any>;
    dialogTitle?: FieldPolicy<any> | FieldReadFunction<any>;
    enabled?: FieldPolicy<any> | FieldReadFunction<any>;
    entries?: FieldPolicy<any> | FieldReadFunction<any>;
    entryValues?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    visible?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
    | 'acceptChapterRevisionCandidates'
    | 'addExtensionStore'
    | 'approveChapterRevisions'
    | 'attachMangaToCanonicalWork'
    | 'bindTrack'
    | 'bindTrackRecord'
    | 'cancelArchiveBootstrap'
    | 'cancelBackupRestore'
    | 'cancelChapterIntegrityAudit'
    | 'cancelChapterRevisionSweep'
    | 'changeCanonicalBinding'
    | 'cleanupBackupRestore'
    | 'clearCachedImages'
    | 'clearCookiesAndCache'
    | 'clearDownloader'
    | 'closeWebView'
    | 'connectKoSyncAccount'
    | 'createBackup'
    | 'createCanonicalWork'
    | 'createCategory'
    | 'deleteCanonicalWork'
    | 'deleteCategory'
    | 'deleteCategoryMeta'
    | 'deleteCategoryMetas'
    | 'deleteChapterMeta'
    | 'deleteChapterMetas'
    | 'deleteDownloadedChapter'
    | 'deleteDownloadedChapters'
    | 'deleteGlobalMeta'
    | 'deleteGlobalMetas'
    | 'deleteMangaMeta'
    | 'deleteMangaMetas'
    | 'deleteSourceMeta'
    | 'deleteSourceMetas'
    | 'dequeueChapterDownload'
    | 'dequeueChapterDownloads'
    | 'detachCanonicalBinding'
    | 'enqueueChapterDownload'
    | 'enqueueChapterDownloads'
    | 'exportCanonicalIdentity'
    | 'failoverCanonicalWork'
    | 'fetchChapterPages'
    | 'fetchChapters'
    | 'fetchExtensions'
    | 'fetchManga'
    | 'fetchMangaAndChapters'
    | 'fetchSourceManga'
    | 'fetchTrack'
    | 'importCanonicalIdentity'
    | 'installExternalExtension'
    | 'keepBothChapterRevisions'
    | 'keepCurrentChapterRevisions'
    | 'login'
    | 'loginTrackerCredentials'
    | 'loginTrackerOAuth'
    | 'logoutKoSyncAccount'
    | 'logoutTracker'
    | 'openWebView'
    | 'pauseArchiveBootstrap'
    | 'pauseChapterIntegrityAudit'
    | 'pauseChapterRevisionSweep'
    | 'promoteCanonicalBinding'
    | 'pullKoSyncProgress'
    | 'pushKoSyncProgress'
    | 'refreshToken'
    | 'rejectChapterRevisionCandidates'
    | 'rejectChapterRevisions'
    | 'removeExtensionStore'
    | 'reorderChapterDownload'
    | 'reorderChapterDownloads'
    | 'requestKomgaRescan'
    | 'resetSettings'
    | 'resetWebUIUpdateStatus'
    | 'restoreBackup'
    | 'resumeArchiveBootstrap'
    | 'resumeChapterIntegrityAudit'
    | 'resumeChapterRevisionSweep'
    | 'retryArchiveBootstrapItems'
    | 'retryBackupRestore'
    | 'retryBackupRestoreHandoff'
    | 'retryChapterIntegrityAuditItems'
    | 'retryChapterRevisionArchives'
    | 'retryChapterRevisionPrunings'
    | 'retryChapterRevisionPublications'
    | 'retryChapterRevisionSweepItems'
    | 'retryChapterRevisionVisualAnalyses'
    | 'retryChapterRevisions'
    | 'retryKomgaRescan'
    | 'rollbackChapterRevision'
    | 'setCategoryMeta'
    | 'setCategoryMetas'
    | 'setChapterMeta'
    | 'setChapterMetas'
    | 'setGlobalMeta'
    | 'setGlobalMetas'
    | 'setMangaMeta'
    | 'setMangaMetas'
    | 'setSettings'
    | 'setSourceMeta'
    | 'setSourceMetas'
    | 'startArchiveBootstrap'
    | 'startChapterIntegrityAudit'
    | 'startChapterRevisionSweep'
    | 'startDownloader'
    | 'startSync'
    | 'stopDownloader'
    | 'trackProgress'
    | 'unbindTrack'
    | 'updateCanonicalWork'
    | 'updateCategories'
    | 'updateCategory'
    | 'updateCategoryManga'
    | 'updateCategoryOrder'
    | 'updateChapter'
    | 'updateChapters'
    | 'updateExtension'
    | 'updateExtensions'
    | 'updateLibrary'
    | 'updateLibraryManga'
    | 'updateManga'
    | 'updateMangaCategories'
    | 'updateMangas'
    | 'updateMangasCategories'
    | 'updateSourcePreference'
    | 'updateStop'
    | 'updateTrack'
    | 'updateWebUI'
    | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
    acceptChapterRevisionCandidates?: FieldPolicy<any> | FieldReadFunction<any>;
    addExtensionStore?: FieldPolicy<any> | FieldReadFunction<any>;
    approveChapterRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    attachMangaToCanonicalWork?: FieldPolicy<any> | FieldReadFunction<any>;
    bindTrack?: FieldPolicy<any> | FieldReadFunction<any>;
    bindTrackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
    cancelArchiveBootstrap?: FieldPolicy<any> | FieldReadFunction<any>;
    cancelBackupRestore?: FieldPolicy<any> | FieldReadFunction<any>;
    cancelChapterIntegrityAudit?: FieldPolicy<any> | FieldReadFunction<any>;
    cancelChapterRevisionSweep?: FieldPolicy<any> | FieldReadFunction<any>;
    changeCanonicalBinding?: FieldPolicy<any> | FieldReadFunction<any>;
    cleanupBackupRestore?: FieldPolicy<any> | FieldReadFunction<any>;
    clearCachedImages?: FieldPolicy<any> | FieldReadFunction<any>;
    clearCookiesAndCache?: FieldPolicy<any> | FieldReadFunction<any>;
    clearDownloader?: FieldPolicy<any> | FieldReadFunction<any>;
    closeWebView?: FieldPolicy<any> | FieldReadFunction<any>;
    connectKoSyncAccount?: FieldPolicy<any> | FieldReadFunction<any>;
    createBackup?: FieldPolicy<any> | FieldReadFunction<any>;
    createCanonicalWork?: FieldPolicy<any> | FieldReadFunction<any>;
    createCategory?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteCanonicalWork?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteCategoryMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteCategoryMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteChapterMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteChapterMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteDownloadedChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteDownloadedChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteGlobalMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteGlobalMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteMangaMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteMangaMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteSourceMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    deleteSourceMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    dequeueChapterDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    dequeueChapterDownloads?: FieldPolicy<any> | FieldReadFunction<any>;
    detachCanonicalBinding?: FieldPolicy<any> | FieldReadFunction<any>;
    enqueueChapterDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    enqueueChapterDownloads?: FieldPolicy<any> | FieldReadFunction<any>;
    exportCanonicalIdentity?: FieldPolicy<any> | FieldReadFunction<any>;
    failoverCanonicalWork?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchChapterPages?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchExtensions?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchManga?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchMangaAndChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchSourceManga?: FieldPolicy<any> | FieldReadFunction<any>;
    fetchTrack?: FieldPolicy<any> | FieldReadFunction<any>;
    importCanonicalIdentity?: FieldPolicy<any> | FieldReadFunction<any>;
    installExternalExtension?: FieldPolicy<any> | FieldReadFunction<any>;
    keepBothChapterRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    keepCurrentChapterRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    login?: FieldPolicy<any> | FieldReadFunction<any>;
    loginTrackerCredentials?: FieldPolicy<any> | FieldReadFunction<any>;
    loginTrackerOAuth?: FieldPolicy<any> | FieldReadFunction<any>;
    logoutKoSyncAccount?: FieldPolicy<any> | FieldReadFunction<any>;
    logoutTracker?: FieldPolicy<any> | FieldReadFunction<any>;
    openWebView?: FieldPolicy<any> | FieldReadFunction<any>;
    pauseArchiveBootstrap?: FieldPolicy<any> | FieldReadFunction<any>;
    pauseChapterIntegrityAudit?: FieldPolicy<any> | FieldReadFunction<any>;
    pauseChapterRevisionSweep?: FieldPolicy<any> | FieldReadFunction<any>;
    promoteCanonicalBinding?: FieldPolicy<any> | FieldReadFunction<any>;
    pullKoSyncProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    pushKoSyncProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
    rejectChapterRevisionCandidates?: FieldPolicy<any> | FieldReadFunction<any>;
    rejectChapterRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    removeExtensionStore?: FieldPolicy<any> | FieldReadFunction<any>;
    reorderChapterDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    reorderChapterDownloads?: FieldPolicy<any> | FieldReadFunction<any>;
    requestKomgaRescan?: FieldPolicy<any> | FieldReadFunction<any>;
    resetSettings?: FieldPolicy<any> | FieldReadFunction<any>;
    resetWebUIUpdateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    restoreBackup?: FieldPolicy<any> | FieldReadFunction<any>;
    resumeArchiveBootstrap?: FieldPolicy<any> | FieldReadFunction<any>;
    resumeChapterIntegrityAudit?: FieldPolicy<any> | FieldReadFunction<any>;
    resumeChapterRevisionSweep?: FieldPolicy<any> | FieldReadFunction<any>;
    retryArchiveBootstrapItems?: FieldPolicy<any> | FieldReadFunction<any>;
    retryBackupRestore?: FieldPolicy<any> | FieldReadFunction<any>;
    retryBackupRestoreHandoff?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterIntegrityAuditItems?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterRevisionArchives?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterRevisionPrunings?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterRevisionPublications?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterRevisionSweepItems?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterRevisionVisualAnalyses?: FieldPolicy<any> | FieldReadFunction<any>;
    retryChapterRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    retryKomgaRescan?: FieldPolicy<any> | FieldReadFunction<any>;
    rollbackChapterRevision?: FieldPolicy<any> | FieldReadFunction<any>;
    setCategoryMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    setCategoryMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    setChapterMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    setChapterMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    setGlobalMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    setGlobalMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    setMangaMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    setMangaMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    setSettings?: FieldPolicy<any> | FieldReadFunction<any>;
    setSourceMeta?: FieldPolicy<any> | FieldReadFunction<any>;
    setSourceMetas?: FieldPolicy<any> | FieldReadFunction<any>;
    startArchiveBootstrap?: FieldPolicy<any> | FieldReadFunction<any>;
    startChapterIntegrityAudit?: FieldPolicy<any> | FieldReadFunction<any>;
    startChapterRevisionSweep?: FieldPolicy<any> | FieldReadFunction<any>;
    startDownloader?: FieldPolicy<any> | FieldReadFunction<any>;
    startSync?: FieldPolicy<any> | FieldReadFunction<any>;
    stopDownloader?: FieldPolicy<any> | FieldReadFunction<any>;
    trackProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    unbindTrack?: FieldPolicy<any> | FieldReadFunction<any>;
    updateCanonicalWork?: FieldPolicy<any> | FieldReadFunction<any>;
    updateCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    updateCategory?: FieldPolicy<any> | FieldReadFunction<any>;
    updateCategoryManga?: FieldPolicy<any> | FieldReadFunction<any>;
    updateCategoryOrder?: FieldPolicy<any> | FieldReadFunction<any>;
    updateChapter?: FieldPolicy<any> | FieldReadFunction<any>;
    updateChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    updateExtension?: FieldPolicy<any> | FieldReadFunction<any>;
    updateExtensions?: FieldPolicy<any> | FieldReadFunction<any>;
    updateLibrary?: FieldPolicy<any> | FieldReadFunction<any>;
    updateLibraryManga?: FieldPolicy<any> | FieldReadFunction<any>;
    updateManga?: FieldPolicy<any> | FieldReadFunction<any>;
    updateMangaCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    updateMangas?: FieldPolicy<any> | FieldReadFunction<any>;
    updateMangasCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    updateSourcePreference?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStop?: FieldPolicy<any> | FieldReadFunction<any>;
    updateTrack?: FieldPolicy<any> | FieldReadFunction<any>;
    updateWebUI?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeListKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | NodeListKeySpecifier)[];
export type NodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OSInfoKeySpecifier = ('build' | 'name' | 'version' | OSInfoKeySpecifier)[];
export type OSInfoFieldPolicy = {
    build?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OpenWebViewPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'status'
    | 'tab'
    | 'title'
    | 'url'
    | OpenWebViewPayloadKeySpecifier
)[];
export type OpenWebViewPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    tab?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageInfoKeySpecifier = (
    | 'endCursor'
    | 'hasNextPage'
    | 'hasPreviousPage'
    | 'startCursor'
    | PageInfoKeySpecifier
)[];
export type PageInfoFieldPolicy = {
    endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
    hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
    hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
    startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PartialSettingsTypeKeySpecifier = (
    | 'acceptedRevisionRetention'
    | 'archiveBootstrapInterItemDelaySeconds'
    | 'archiveBootstrapMaxAttempts'
    | 'archiveBootstrapRetrySeconds'
    | 'archiveDefaultAcquisitionPolicy'
    | 'archiveDirectDeliveryEnabled'
    | 'archiveDirectDeliveryExpirySeconds'
    | 'archiveDirectDeliveryFallbackToLocal'
    | 'archiveDirectDeliveryRequireExpiryEvidence'
    | 'archiveVerificationRetrySeconds'
    | 'archiveVerificationTimeoutSeconds'
    | 'authMode'
    | 'authPassword'
    | 'authUsername'
    | 'autoBackupIncludeCategories'
    | 'autoBackupIncludeChapters'
    | 'autoBackupIncludeClientData'
    | 'autoBackupIncludeHistory'
    | 'autoBackupIncludeManga'
    | 'autoBackupIncludeServerSettings'
    | 'autoBackupIncludeTracking'
    | 'autoDownloadAheadLimit'
    | 'autoDownloadIgnoreReUploads'
    | 'autoDownloadNewChapters'
    | 'autoDownloadNewChaptersLimit'
    | 'backupInterval'
    | 'backupPath'
    | 'backupTTL'
    | 'backupTime'
    | 'basicAuthEnabled'
    | 'basicAuthPassword'
    | 'basicAuthUsername'
    | 'chapterIntegrityAuditEnabled'
    | 'chapterIntegrityAuditIntervalDays'
    | 'chapterIntegrityAuditItemDelaySeconds'
    | 'chapterIntegrityAuditMaxAttempts'
    | 'chapterIntegrityAuditRecentRevisions'
    | 'chapterIntegrityAuditRetrySeconds'
    | 'chapterRevisionAutoDismissVisuallyEquivalent'
    | 'chapterRevisionSweepEnabled'
    | 'chapterRevisionSweepIntervalDays'
    | 'chapterRevisionSweepItemDelaySeconds'
    | 'chapterRevisionSweepMaxAttempts'
    | 'chapterRevisionSweepNewestChapters'
    | 'chapterRevisionSweepRetrySeconds'
    | 'chapterRevisionThumbnailMaxDimension'
    | 'chapterRevisionVisualAnalysisMaxAttempts'
    | 'chapterRevisionVisualAnalysisRetrySeconds'
    | 'chapterRevisionVisualHashThreshold'
    | 'databasePassword'
    | 'databaseType'
    | 'databaseUrl'
    | 'databaseUsername'
    | 'debugLogsEnabled'
    | 'downloadAsCbz'
    | 'downloadConversions'
    | 'downloadsPath'
    | 'electronPath'
    | 'excludeCompleted'
    | 'excludeEntryWithUnreadChapters'
    | 'excludeNotStarted'
    | 'excludeUnreadChapters'
    | 'extensionRepos'
    | 'flareSolverrAsResponseFallback'
    | 'flareSolverrEnabled'
    | 'flareSolverrSessionName'
    | 'flareSolverrSessionTtl'
    | 'flareSolverrTimeout'
    | 'flareSolverrUrl'
    | 'globalUpdateInterval'
    | 'gqlDebugLogsEnabled'
    | 'initialOpenInBrowserEnabled'
    | 'ip'
    | 'jwtAudience'
    | 'jwtRefreshExpiry'
    | 'jwtTokenExpiry'
    | 'kcefEnabled'
    | 'komgaApiKey'
    | 'komgaBaseUrl'
    | 'komgaLibraryId'
    | 'komgaRequestTimeoutSeconds'
    | 'komgaRescanDebounceSeconds'
    | 'komgaRescanRetrySeconds'
    | 'koreaderSyncChecksumMethod'
    | 'koreaderSyncDeviceId'
    | 'koreaderSyncPercentageTolerance'
    | 'koreaderSyncServerUrl'
    | 'koreaderSyncStrategy'
    | 'koreaderSyncStrategyBackward'
    | 'koreaderSyncStrategyForward'
    | 'koreaderSyncUserkey'
    | 'koreaderSyncUsername'
    | 'localSourcePath'
    | 'maxLogFileSize'
    | 'maxLogFiles'
    | 'maxLogFolderSize'
    | 'maxSourcesInParallel'
    | 'opdsCbzMimetype'
    | 'opdsChapterSortOrder'
    | 'opdsEnablePageReadProgress'
    | 'opdsItemsPerPage'
    | 'opdsMarkAsReadOnDownload'
    | 'opdsShowOnlyDownloadedChapters'
    | 'opdsShowOnlyUnreadChapters'
    | 'opdsSkipChapterMetadataFeed'
    | 'opdsUseBinaryFileSizes'
    | 'port'
    | 'serveConversions'
    | 'socksProxyEnabled'
    | 'socksProxyHost'
    | 'socksProxyPassword'
    | 'socksProxyPort'
    | 'socksProxyUsername'
    | 'socksProxyVersion'
    | 'syncDataCategories'
    | 'syncDataChapters'
    | 'syncDataHistory'
    | 'syncDataManga'
    | 'syncDataTracking'
    | 'syncInterval'
    | 'syncYomiApiKey'
    | 'syncYomiEnabled'
    | 'syncYomiHost'
    | 'systemTrayEnabled'
    | 'updateMangas'
    | 'useHikariConnectionPool'
    | 'webUIChannel'
    | 'webUIFlavor'
    | 'webUIInterface'
    | 'webUIUpdateCheckInterval'
    | 'webViewOpenTimeout'
    | 'webViewProvider'
    | 'webViewVncUrl'
    | PartialSettingsTypeKeySpecifier
)[];
export type PartialSettingsTypeFieldPolicy = {
    acceptedRevisionRetention?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapInterItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDefaultAcquisitionPolicy?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryExpirySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryFallbackToLocal?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryRequireExpiryEvidence?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationTimeoutSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    authMode?: FieldPolicy<any> | FieldReadFunction<any>;
    authPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    authUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeClientData?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeManga?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeServerSettings?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadAheadLimit?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadIgnoreReUploads?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadNewChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadNewChaptersLimit?: FieldPolicy<any> | FieldReadFunction<any>;
    backupInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    backupPath?: FieldPolicy<any> | FieldReadFunction<any>;
    backupTTL?: FieldPolicy<any> | FieldReadFunction<any>;
    backupTime?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditIntervalDays?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditRecentRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionAutoDismissVisuallyEquivalent?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepIntervalDays?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepNewestChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionThumbnailMaxDimension?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualHashThreshold?: FieldPolicy<any> | FieldReadFunction<any>;
    databasePassword?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseType?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    debugLogsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadAsCbz?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadConversions?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadsPath?: FieldPolicy<any> | FieldReadFunction<any>;
    electronPath?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeCompleted?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeEntryWithUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeNotStarted?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionRepos?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrAsResponseFallback?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrSessionName?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrSessionTtl?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    globalUpdateInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    gqlDebugLogsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    initialOpenInBrowserEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    ip?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtAudience?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtRefreshExpiry?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtTokenExpiry?: FieldPolicy<any> | FieldReadFunction<any>;
    kcefEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaBaseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaLibraryId?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRequestTimeoutSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanDebounceSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncChecksumMethod?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncDeviceId?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncPercentageTolerance?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncServerUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategy?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategyBackward?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategyForward?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncUserkey?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    localSourcePath?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFileSize?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFiles?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFolderSize?: FieldPolicy<any> | FieldReadFunction<any>;
    maxSourcesInParallel?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsCbzMimetype?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsChapterSortOrder?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsEnablePageReadProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsItemsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsMarkAsReadOnDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsShowOnlyDownloadedChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsShowOnlyUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsSkipChapterMetadataFeed?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsUseBinaryFileSizes?: FieldPolicy<any> | FieldReadFunction<any>;
    port?: FieldPolicy<any> | FieldReadFunction<any>;
    serveConversions?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyHost?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyPort?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyVersion?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataManga?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    syncInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiHost?: FieldPolicy<any> | FieldReadFunction<any>;
    systemTrayEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    updateMangas?: FieldPolicy<any> | FieldReadFunction<any>;
    useHikariConnectionPool?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIChannel?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIFlavor?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIInterface?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIUpdateCheckInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewOpenTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewProvider?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewVncUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PlatformInfoKeySpecifier = ('arch' | 'headless' | 'jvm' | 'os' | PlatformInfoKeySpecifier)[];
export type PlatformInfoFieldPolicy = {
    arch?: FieldPolicy<any> | FieldReadFunction<any>;
    headless?: FieldPolicy<any> | FieldReadFunction<any>;
    jvm?: FieldPolicy<any> | FieldReadFunction<any>;
    os?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromoteCanonicalBindingPayloadKeySpecifier = (
    | 'binding'
    | 'clientMutationId'
    | 'outcome'
    | PromoteCanonicalBindingPayloadKeySpecifier
)[];
export type PromoteCanonicalBindingPayloadFieldPolicy = {
    binding?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PullKoSyncProgressPayloadKeySpecifier = (
    | 'chapter'
    | 'clientMutationId'
    | 'syncConflict'
    | PullKoSyncProgressPayloadKeySpecifier
)[];
export type PullKoSyncProgressPayloadFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    syncConflict?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PushKoSyncProgressPayloadKeySpecifier = (
    | 'chapter'
    | 'clientMutationId'
    | 'success'
    | PushKoSyncProgressPayloadKeySpecifier
)[];
export type PushKoSyncProgressPayloadFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
    | 'aboutServer'
    | 'aboutWebUI'
    | 'activeChapterRevision'
    | 'approvalBacklog'
    | 'archiveBootstrapActiveSession'
    | 'archiveBootstrapEffectivePolicy'
    | 'archiveBootstrapItems'
    | 'archiveBootstrapLatestSession'
    | 'archiveBootstrapProgress'
    | 'archiveBootstrapSession'
    | 'archiveBootstrapSessions'
    | 'archiveBootstrapUnresolvedSources'
    | 'backupRestoreAudits'
    | 'backupRestoreErrorCounts'
    | 'backupRestoreJob'
    | 'backupRestoreJobs'
    | 'canonicalBindingForManga'
    | 'canonicalBindingsForWork'
    | 'canonicalIdentityStatus'
    | 'canonicalWork'
    | 'canonicalWorkForManga'
    | 'canonicalWorks'
    | 'categories'
    | 'category'
    | 'chapter'
    | 'chapterIntegrityAuditActiveSession'
    | 'chapterIntegrityAuditItems'
    | 'chapterIntegrityAuditLatestSession'
    | 'chapterIntegrityAuditProgress'
    | 'chapterIntegrityAuditSchedule'
    | 'chapterIntegrityAuditSession'
    | 'chapterIntegrityAuditSessions'
    | 'chapterRevision'
    | 'chapterRevisionComparison'
    | 'chapterRevisionComparisonPages'
    | 'chapterRevisionHistory'
    | 'chapterRevisionRollbacks'
    | 'chapterRevisionSweepActiveSession'
    | 'chapterRevisionSweepItems'
    | 'chapterRevisionSweepLatestSession'
    | 'chapterRevisionSweepProgress'
    | 'chapterRevisionSweepSchedule'
    | 'chapterRevisionSweepSession'
    | 'chapterRevisionSweepSessions'
    | 'chapterRevisionVisualAnalysisStatus'
    | 'chapterRevisions'
    | 'chapters'
    | 'checkForServerUpdates'
    | 'checkForWebUIUpdate'
    | 'downloadStatus'
    | 'extension'
    | 'extensionStore'
    | 'extensionStores'
    | 'extensions'
    | 'getWebUIUpdateStatus'
    | 'koSyncStatus'
    | 'komgaRescanStatus'
    | 'lastSyncStatus'
    | 'lastUpdateTimestamp'
    | 'libraryUpdateStatus'
    | 'manga'
    | 'mangas'
    | 'meta'
    | 'metas'
    | 'pruningBacklog'
    | 'publicationBacklog'
    | 'queuedBacklog'
    | 'restoreStatus'
    | 'searchTracker'
    | 'settings'
    | 'source'
    | 'sources'
    | 'trackRecord'
    | 'trackRecords'
    | 'tracker'
    | 'trackers'
    | 'updateStatus'
    | 'validateBackup'
    | 'visualAnalysisBacklog'
    | 'webViewTabs'
    | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
    aboutServer?: FieldPolicy<any> | FieldReadFunction<any>;
    aboutWebUI?: FieldPolicy<any> | FieldReadFunction<any>;
    activeChapterRevision?: FieldPolicy<any> | FieldReadFunction<any>;
    approvalBacklog?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapActiveSession?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapEffectivePolicy?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapItems?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapLatestSession?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapSession?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapSessions?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapUnresolvedSources?: FieldPolicy<any> | FieldReadFunction<any>;
    backupRestoreAudits?: FieldPolicy<any> | FieldReadFunction<any>;
    backupRestoreErrorCounts?: FieldPolicy<any> | FieldReadFunction<any>;
    backupRestoreJob?: FieldPolicy<any> | FieldReadFunction<any>;
    backupRestoreJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalBindingForManga?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalBindingsForWork?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalIdentityStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalWork?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalWorkForManga?: FieldPolicy<any> | FieldReadFunction<any>;
    canonicalWorks?: FieldPolicy<any> | FieldReadFunction<any>;
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditActiveSession?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditItems?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditLatestSession?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditSchedule?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditSession?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditSessions?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevision?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionComparison?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionComparisonPages?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionRollbacks?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepActiveSession?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepItems?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepLatestSession?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepSchedule?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepSession?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepSessions?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    checkForServerUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
    checkForWebUIUpdate?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    extension?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionStore?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionStores?: FieldPolicy<any> | FieldReadFunction<any>;
    extensions?: FieldPolicy<any> | FieldReadFunction<any>;
    getWebUIUpdateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    koSyncStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    lastSyncStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    lastUpdateTimestamp?: FieldPolicy<any> | FieldReadFunction<any>;
    libraryUpdateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
    pruningBacklog?: FieldPolicy<any> | FieldReadFunction<any>;
    publicationBacklog?: FieldPolicy<any> | FieldReadFunction<any>;
    queuedBacklog?: FieldPolicy<any> | FieldReadFunction<any>;
    restoreStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    searchTracker?: FieldPolicy<any> | FieldReadFunction<any>;
    settings?: FieldPolicy<any> | FieldReadFunction<any>;
    source?: FieldPolicy<any> | FieldReadFunction<any>;
    sources?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecords?: FieldPolicy<any> | FieldReadFunction<any>;
    tracker?: FieldPolicy<any> | FieldReadFunction<any>;
    trackers?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    validateBackup?: FieldPolicy<any> | FieldReadFunction<any>;
    visualAnalysisBacklog?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewTabs?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RefreshTokenPayloadKeySpecifier = ('accessToken' | 'clientMutationId' | RefreshTokenPayloadKeySpecifier)[];
export type RefreshTokenPayloadFieldPolicy = {
    accessToken?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RejectChapterRevisionCandidatesPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RejectChapterRevisionCandidatesPayloadKeySpecifier
)[];
export type RejectChapterRevisionCandidatesPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RejectChapterRevisionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RejectChapterRevisionsPayloadKeySpecifier
)[];
export type RejectChapterRevisionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RemoveExtensionStorePayloadKeySpecifier = (
    | 'clientMutationId'
    | 'extensionStore'
    | RemoveExtensionStorePayloadKeySpecifier
)[];
export type RemoveExtensionStorePayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionStore?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReorderChapterDownloadPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | ReorderChapterDownloadPayloadKeySpecifier
)[];
export type ReorderChapterDownloadPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RequestKomgaRescanPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'rescan'
    | RequestKomgaRescanPayloadKeySpecifier
)[];
export type RequestKomgaRescanPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    rescan?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ResetSettingsPayloadKeySpecifier = ('clientMutationId' | 'settings' | ResetSettingsPayloadKeySpecifier)[];
export type ResetSettingsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    settings?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RestoreBackupPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'id'
    | 'status'
    | RestoreBackupPayloadKeySpecifier
)[];
export type RestoreBackupPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryArchiveBootstrapItemsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | RetryArchiveBootstrapItemsPayloadKeySpecifier
)[];
export type RetryArchiveBootstrapItemsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterIntegrityAuditItemsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | RetryChapterIntegrityAuditItemsPayloadKeySpecifier
)[];
export type RetryChapterIntegrityAuditItemsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterRevisionArchivesPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RetryChapterRevisionArchivesPayloadKeySpecifier
)[];
export type RetryChapterRevisionArchivesPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterRevisionPruningsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RetryChapterRevisionPruningsPayloadKeySpecifier
)[];
export type RetryChapterRevisionPruningsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterRevisionPublicationsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RetryChapterRevisionPublicationsPayloadKeySpecifier
)[];
export type RetryChapterRevisionPublicationsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterRevisionSweepItemsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | RetryChapterRevisionSweepItemsPayloadKeySpecifier
)[];
export type RetryChapterRevisionSweepItemsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterRevisionVisualAnalysesPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RetryChapterRevisionVisualAnalysesPayloadKeySpecifier
)[];
export type RetryChapterRevisionVisualAnalysesPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryChapterRevisionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'revisions'
    | RetryChapterRevisionsPayloadKeySpecifier
)[];
export type RetryChapterRevisionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    revisions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RetryKomgaRescanPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'rescan'
    | 'retried'
    | RetryKomgaRescanPayloadKeySpecifier
)[];
export type RetryKomgaRescanPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    rescan?: FieldPolicy<any> | FieldReadFunction<any>;
    retried?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RollbackChapterRevisionPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'replacedRevisionId'
    | 'revision'
    | RollbackChapterRevisionPayloadKeySpecifier
)[];
export type RollbackChapterRevisionPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    replacedRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
    revision?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchTrackerPayloadKeySpecifier = ('trackSearches' | SearchTrackerPayloadKeySpecifier)[];
export type SearchTrackerPayloadFieldPolicy = {
    trackSearches?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SelectFilterKeySpecifier = ('default' | 'name' | 'values' | SelectFilterKeySpecifier)[];
export type SelectFilterFieldPolicy = {
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    values?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SeparatorFilterKeySpecifier = ('name' | SeparatorFilterKeySpecifier)[];
export type SeparatorFilterFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetCategoryMetaPayloadKeySpecifier = ('clientMutationId' | 'meta' | SetCategoryMetaPayloadKeySpecifier)[];
export type SetCategoryMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetCategoryMetasPayloadKeySpecifier = (
    | 'categories'
    | 'clientMutationId'
    | 'metas'
    | SetCategoryMetasPayloadKeySpecifier
)[];
export type SetCategoryMetasPayloadFieldPolicy = {
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetChapterMetaPayloadKeySpecifier = ('clientMutationId' | 'meta' | SetChapterMetaPayloadKeySpecifier)[];
export type SetChapterMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetChapterMetasPayloadKeySpecifier = (
    | 'chapters'
    | 'clientMutationId'
    | 'metas'
    | SetChapterMetasPayloadKeySpecifier
)[];
export type SetChapterMetasPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetGlobalMetaPayloadKeySpecifier = ('clientMutationId' | 'meta' | SetGlobalMetaPayloadKeySpecifier)[];
export type SetGlobalMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetGlobalMetasPayloadKeySpecifier = ('clientMutationId' | 'metas' | SetGlobalMetasPayloadKeySpecifier)[];
export type SetGlobalMetasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetMangaMetaPayloadKeySpecifier = ('clientMutationId' | 'meta' | SetMangaMetaPayloadKeySpecifier)[];
export type SetMangaMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetMangaMetasPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'mangas'
    | 'metas'
    | SetMangaMetasPayloadKeySpecifier
)[];
export type SetMangaMetasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetSettingsPayloadKeySpecifier = ('clientMutationId' | 'settings' | SetSettingsPayloadKeySpecifier)[];
export type SetSettingsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    settings?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetSourceMetaPayloadKeySpecifier = ('clientMutationId' | 'meta' | SetSourceMetaPayloadKeySpecifier)[];
export type SetSourceMetaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetSourceMetasPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'metas'
    | 'sources'
    | SetSourceMetasPayloadKeySpecifier
)[];
export type SetSourceMetasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    metas?: FieldPolicy<any> | FieldReadFunction<any>;
    sources?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsKeySpecifier = (
    | 'acceptedRevisionRetention'
    | 'archiveBootstrapInterItemDelaySeconds'
    | 'archiveBootstrapMaxAttempts'
    | 'archiveBootstrapRetrySeconds'
    | 'archiveDirectDeliveryEnabled'
    | 'archiveDirectDeliveryExpirySeconds'
    | 'archiveDirectDeliveryFallbackToLocal'
    | 'archiveDirectDeliveryRequireExpiryEvidence'
    | 'archiveVerificationRetrySeconds'
    | 'archiveVerificationTimeoutSeconds'
    | 'authMode'
    | 'authPassword'
    | 'authUsername'
    | 'autoBackupIncludeCategories'
    | 'autoBackupIncludeChapters'
    | 'autoBackupIncludeClientData'
    | 'autoBackupIncludeHistory'
    | 'autoBackupIncludeManga'
    | 'autoBackupIncludeServerSettings'
    | 'autoBackupIncludeTracking'
    | 'autoDownloadAheadLimit'
    | 'autoDownloadIgnoreReUploads'
    | 'autoDownloadNewChapters'
    | 'autoDownloadNewChaptersLimit'
    | 'backupInterval'
    | 'backupPath'
    | 'backupTTL'
    | 'backupTime'
    | 'basicAuthEnabled'
    | 'basicAuthPassword'
    | 'basicAuthUsername'
    | 'chapterIntegrityAuditEnabled'
    | 'chapterIntegrityAuditIntervalDays'
    | 'chapterIntegrityAuditItemDelaySeconds'
    | 'chapterIntegrityAuditMaxAttempts'
    | 'chapterIntegrityAuditRecentRevisions'
    | 'chapterIntegrityAuditRetrySeconds'
    | 'chapterRevisionAutoDismissVisuallyEquivalent'
    | 'chapterRevisionSweepEnabled'
    | 'chapterRevisionSweepIntervalDays'
    | 'chapterRevisionSweepItemDelaySeconds'
    | 'chapterRevisionSweepMaxAttempts'
    | 'chapterRevisionSweepNewestChapters'
    | 'chapterRevisionSweepRetrySeconds'
    | 'chapterRevisionThumbnailMaxDimension'
    | 'chapterRevisionVisualAnalysisMaxAttempts'
    | 'chapterRevisionVisualAnalysisRetrySeconds'
    | 'chapterRevisionVisualHashThreshold'
    | 'databasePassword'
    | 'databaseType'
    | 'databaseUrl'
    | 'databaseUsername'
    | 'debugLogsEnabled'
    | 'downloadAsCbz'
    | 'downloadConversions'
    | 'downloadsPath'
    | 'electronPath'
    | 'excludeCompleted'
    | 'excludeEntryWithUnreadChapters'
    | 'excludeNotStarted'
    | 'excludeUnreadChapters'
    | 'extensionRepos'
    | 'flareSolverrAsResponseFallback'
    | 'flareSolverrEnabled'
    | 'flareSolverrSessionName'
    | 'flareSolverrSessionTtl'
    | 'flareSolverrTimeout'
    | 'flareSolverrUrl'
    | 'globalUpdateInterval'
    | 'gqlDebugLogsEnabled'
    | 'initialOpenInBrowserEnabled'
    | 'ip'
    | 'jwtAudience'
    | 'jwtRefreshExpiry'
    | 'jwtTokenExpiry'
    | 'kcefEnabled'
    | 'komgaApiKey'
    | 'komgaBaseUrl'
    | 'komgaLibraryId'
    | 'komgaRequestTimeoutSeconds'
    | 'komgaRescanDebounceSeconds'
    | 'komgaRescanRetrySeconds'
    | 'koreaderSyncChecksumMethod'
    | 'koreaderSyncDeviceId'
    | 'koreaderSyncPercentageTolerance'
    | 'koreaderSyncServerUrl'
    | 'koreaderSyncStrategy'
    | 'koreaderSyncStrategyBackward'
    | 'koreaderSyncStrategyForward'
    | 'koreaderSyncUserkey'
    | 'koreaderSyncUsername'
    | 'localSourcePath'
    | 'maxLogFileSize'
    | 'maxLogFiles'
    | 'maxLogFolderSize'
    | 'maxSourcesInParallel'
    | 'opdsCbzMimetype'
    | 'opdsChapterSortOrder'
    | 'opdsEnablePageReadProgress'
    | 'opdsItemsPerPage'
    | 'opdsMarkAsReadOnDownload'
    | 'opdsShowOnlyDownloadedChapters'
    | 'opdsShowOnlyUnreadChapters'
    | 'opdsSkipChapterMetadataFeed'
    | 'opdsUseBinaryFileSizes'
    | 'port'
    | 'serveConversions'
    | 'socksProxyEnabled'
    | 'socksProxyHost'
    | 'socksProxyPassword'
    | 'socksProxyPort'
    | 'socksProxyUsername'
    | 'socksProxyVersion'
    | 'syncDataCategories'
    | 'syncDataChapters'
    | 'syncDataHistory'
    | 'syncDataManga'
    | 'syncDataTracking'
    | 'syncInterval'
    | 'syncYomiApiKey'
    | 'syncYomiEnabled'
    | 'syncYomiHost'
    | 'systemTrayEnabled'
    | 'updateMangas'
    | 'useHikariConnectionPool'
    | 'webUIChannel'
    | 'webUIFlavor'
    | 'webUIInterface'
    | 'webUIUpdateCheckInterval'
    | 'webViewOpenTimeout'
    | 'webViewProvider'
    | 'webViewVncUrl'
    | SettingsKeySpecifier
)[];
export type SettingsFieldPolicy = {
    acceptedRevisionRetention?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapInterItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryExpirySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryFallbackToLocal?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryRequireExpiryEvidence?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationTimeoutSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    authMode?: FieldPolicy<any> | FieldReadFunction<any>;
    authPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    authUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeClientData?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeManga?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeServerSettings?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadAheadLimit?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadIgnoreReUploads?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadNewChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadNewChaptersLimit?: FieldPolicy<any> | FieldReadFunction<any>;
    backupInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    backupPath?: FieldPolicy<any> | FieldReadFunction<any>;
    backupTTL?: FieldPolicy<any> | FieldReadFunction<any>;
    backupTime?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditIntervalDays?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditRecentRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionAutoDismissVisuallyEquivalent?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepIntervalDays?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepNewestChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionThumbnailMaxDimension?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualHashThreshold?: FieldPolicy<any> | FieldReadFunction<any>;
    databasePassword?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseType?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    debugLogsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadAsCbz?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadConversions?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadsPath?: FieldPolicy<any> | FieldReadFunction<any>;
    electronPath?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeCompleted?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeEntryWithUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeNotStarted?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionRepos?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrAsResponseFallback?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrSessionName?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrSessionTtl?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    globalUpdateInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    gqlDebugLogsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    initialOpenInBrowserEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    ip?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtAudience?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtRefreshExpiry?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtTokenExpiry?: FieldPolicy<any> | FieldReadFunction<any>;
    kcefEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaBaseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaLibraryId?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRequestTimeoutSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanDebounceSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncChecksumMethod?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncDeviceId?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncPercentageTolerance?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncServerUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategy?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategyBackward?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategyForward?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncUserkey?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    localSourcePath?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFileSize?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFiles?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFolderSize?: FieldPolicy<any> | FieldReadFunction<any>;
    maxSourcesInParallel?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsCbzMimetype?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsChapterSortOrder?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsEnablePageReadProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsItemsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsMarkAsReadOnDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsShowOnlyDownloadedChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsShowOnlyUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsSkipChapterMetadataFeed?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsUseBinaryFileSizes?: FieldPolicy<any> | FieldReadFunction<any>;
    port?: FieldPolicy<any> | FieldReadFunction<any>;
    serveConversions?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyHost?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyPort?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyVersion?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataManga?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    syncInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiHost?: FieldPolicy<any> | FieldReadFunction<any>;
    systemTrayEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    updateMangas?: FieldPolicy<any> | FieldReadFunction<any>;
    useHikariConnectionPool?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIChannel?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIFlavor?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIInterface?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIUpdateCheckInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewOpenTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewProvider?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewVncUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsDownloadConversionKeySpecifier = (
    | 'callTimeout'
    | 'compressionLevel'
    | 'connectTimeout'
    | 'headers'
    | 'mimeType'
    | 'target'
    | SettingsDownloadConversionKeySpecifier
)[];
export type SettingsDownloadConversionFieldPolicy = {
    callTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    compressionLevel?: FieldPolicy<any> | FieldReadFunction<any>;
    connectTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    headers?: FieldPolicy<any> | FieldReadFunction<any>;
    mimeType?: FieldPolicy<any> | FieldReadFunction<any>;
    target?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsDownloadConversionHeaderKeySpecifier = (
    | 'name'
    | 'value'
    | SettingsDownloadConversionHeaderKeySpecifier
)[];
export type SettingsDownloadConversionHeaderFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsDownloadConversionHeaderTypeKeySpecifier = (
    | 'name'
    | 'value'
    | SettingsDownloadConversionHeaderTypeKeySpecifier
)[];
export type SettingsDownloadConversionHeaderTypeFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsDownloadConversionTypeKeySpecifier = (
    | 'callTimeout'
    | 'compressionLevel'
    | 'connectTimeout'
    | 'headers'
    | 'mimeType'
    | 'target'
    | SettingsDownloadConversionTypeKeySpecifier
)[];
export type SettingsDownloadConversionTypeFieldPolicy = {
    callTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    compressionLevel?: FieldPolicy<any> | FieldReadFunction<any>;
    connectTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    headers?: FieldPolicy<any> | FieldReadFunction<any>;
    mimeType?: FieldPolicy<any> | FieldReadFunction<any>;
    target?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsTypeKeySpecifier = (
    | 'acceptedRevisionRetention'
    | 'archiveBootstrapInterItemDelaySeconds'
    | 'archiveBootstrapMaxAttempts'
    | 'archiveBootstrapRetrySeconds'
    | 'archiveDefaultAcquisitionPolicy'
    | 'archiveDirectDeliveryEnabled'
    | 'archiveDirectDeliveryExpirySeconds'
    | 'archiveDirectDeliveryFallbackToLocal'
    | 'archiveDirectDeliveryRequireExpiryEvidence'
    | 'archiveVerificationRetrySeconds'
    | 'archiveVerificationTimeoutSeconds'
    | 'authMode'
    | 'authPassword'
    | 'authUsername'
    | 'autoBackupIncludeCategories'
    | 'autoBackupIncludeChapters'
    | 'autoBackupIncludeClientData'
    | 'autoBackupIncludeHistory'
    | 'autoBackupIncludeManga'
    | 'autoBackupIncludeServerSettings'
    | 'autoBackupIncludeTracking'
    | 'autoDownloadAheadLimit'
    | 'autoDownloadIgnoreReUploads'
    | 'autoDownloadNewChapters'
    | 'autoDownloadNewChaptersLimit'
    | 'backupInterval'
    | 'backupPath'
    | 'backupTTL'
    | 'backupTime'
    | 'basicAuthEnabled'
    | 'basicAuthPassword'
    | 'basicAuthUsername'
    | 'chapterIntegrityAuditEnabled'
    | 'chapterIntegrityAuditIntervalDays'
    | 'chapterIntegrityAuditItemDelaySeconds'
    | 'chapterIntegrityAuditMaxAttempts'
    | 'chapterIntegrityAuditRecentRevisions'
    | 'chapterIntegrityAuditRetrySeconds'
    | 'chapterRevisionAutoDismissVisuallyEquivalent'
    | 'chapterRevisionSweepEnabled'
    | 'chapterRevisionSweepIntervalDays'
    | 'chapterRevisionSweepItemDelaySeconds'
    | 'chapterRevisionSweepMaxAttempts'
    | 'chapterRevisionSweepNewestChapters'
    | 'chapterRevisionSweepRetrySeconds'
    | 'chapterRevisionThumbnailMaxDimension'
    | 'chapterRevisionVisualAnalysisMaxAttempts'
    | 'chapterRevisionVisualAnalysisRetrySeconds'
    | 'chapterRevisionVisualHashThreshold'
    | 'databasePassword'
    | 'databaseType'
    | 'databaseUrl'
    | 'databaseUsername'
    | 'debugLogsEnabled'
    | 'downloadAsCbz'
    | 'downloadConversions'
    | 'downloadsPath'
    | 'electronPath'
    | 'excludeCompleted'
    | 'excludeEntryWithUnreadChapters'
    | 'excludeNotStarted'
    | 'excludeUnreadChapters'
    | 'extensionRepos'
    | 'flareSolverrAsResponseFallback'
    | 'flareSolverrEnabled'
    | 'flareSolverrSessionName'
    | 'flareSolverrSessionTtl'
    | 'flareSolverrTimeout'
    | 'flareSolverrUrl'
    | 'globalUpdateInterval'
    | 'gqlDebugLogsEnabled'
    | 'initialOpenInBrowserEnabled'
    | 'ip'
    | 'jwtAudience'
    | 'jwtRefreshExpiry'
    | 'jwtTokenExpiry'
    | 'kcefEnabled'
    | 'komgaApiKey'
    | 'komgaBaseUrl'
    | 'komgaLibraryId'
    | 'komgaRequestTimeoutSeconds'
    | 'komgaRescanDebounceSeconds'
    | 'komgaRescanRetrySeconds'
    | 'koreaderSyncChecksumMethod'
    | 'koreaderSyncDeviceId'
    | 'koreaderSyncPercentageTolerance'
    | 'koreaderSyncServerUrl'
    | 'koreaderSyncStrategy'
    | 'koreaderSyncStrategyBackward'
    | 'koreaderSyncStrategyForward'
    | 'koreaderSyncUserkey'
    | 'koreaderSyncUsername'
    | 'localSourcePath'
    | 'maxLogFileSize'
    | 'maxLogFiles'
    | 'maxLogFolderSize'
    | 'maxSourcesInParallel'
    | 'opdsCbzMimetype'
    | 'opdsChapterSortOrder'
    | 'opdsEnablePageReadProgress'
    | 'opdsItemsPerPage'
    | 'opdsMarkAsReadOnDownload'
    | 'opdsShowOnlyDownloadedChapters'
    | 'opdsShowOnlyUnreadChapters'
    | 'opdsSkipChapterMetadataFeed'
    | 'opdsUseBinaryFileSizes'
    | 'port'
    | 'serveConversions'
    | 'socksProxyEnabled'
    | 'socksProxyHost'
    | 'socksProxyPassword'
    | 'socksProxyPort'
    | 'socksProxyUsername'
    | 'socksProxyVersion'
    | 'syncDataCategories'
    | 'syncDataChapters'
    | 'syncDataHistory'
    | 'syncDataManga'
    | 'syncDataTracking'
    | 'syncInterval'
    | 'syncYomiApiKey'
    | 'syncYomiEnabled'
    | 'syncYomiHost'
    | 'systemTrayEnabled'
    | 'updateMangas'
    | 'useHikariConnectionPool'
    | 'webUIChannel'
    | 'webUIFlavor'
    | 'webUIInterface'
    | 'webUIUpdateCheckInterval'
    | 'webViewOpenTimeout'
    | 'webViewProvider'
    | 'webViewVncUrl'
    | SettingsTypeKeySpecifier
)[];
export type SettingsTypeFieldPolicy = {
    acceptedRevisionRetention?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapInterItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveBootstrapRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDefaultAcquisitionPolicy?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryExpirySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryFallbackToLocal?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveDirectDeliveryRequireExpiryEvidence?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    archiveVerificationTimeoutSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    authMode?: FieldPolicy<any> | FieldReadFunction<any>;
    authPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    authUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeClientData?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeManga?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeServerSettings?: FieldPolicy<any> | FieldReadFunction<any>;
    autoBackupIncludeTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadAheadLimit?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadIgnoreReUploads?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadNewChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    autoDownloadNewChaptersLimit?: FieldPolicy<any> | FieldReadFunction<any>;
    backupInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    backupPath?: FieldPolicy<any> | FieldReadFunction<any>;
    backupTTL?: FieldPolicy<any> | FieldReadFunction<any>;
    backupTime?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    basicAuthUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditIntervalDays?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditRecentRevisions?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterIntegrityAuditRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionAutoDismissVisuallyEquivalent?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepIntervalDays?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepItemDelaySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepNewestChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionSweepRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionThumbnailMaxDimension?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisMaxAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualAnalysisRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    chapterRevisionVisualHashThreshold?: FieldPolicy<any> | FieldReadFunction<any>;
    databasePassword?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseType?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    databaseUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    debugLogsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadAsCbz?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadConversions?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadsPath?: FieldPolicy<any> | FieldReadFunction<any>;
    electronPath?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeCompleted?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeEntryWithUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeNotStarted?: FieldPolicy<any> | FieldReadFunction<any>;
    excludeUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    extensionRepos?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrAsResponseFallback?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrSessionName?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrSessionTtl?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    flareSolverrUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    globalUpdateInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    gqlDebugLogsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    initialOpenInBrowserEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    ip?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtAudience?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtRefreshExpiry?: FieldPolicy<any> | FieldReadFunction<any>;
    jwtTokenExpiry?: FieldPolicy<any> | FieldReadFunction<any>;
    kcefEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaBaseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaLibraryId?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRequestTimeoutSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanDebounceSeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    komgaRescanRetrySeconds?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncChecksumMethod?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncDeviceId?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncPercentageTolerance?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncServerUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategy?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategyBackward?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncStrategyForward?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncUserkey?: FieldPolicy<any> | FieldReadFunction<any>;
    koreaderSyncUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    localSourcePath?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFileSize?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFiles?: FieldPolicy<any> | FieldReadFunction<any>;
    maxLogFolderSize?: FieldPolicy<any> | FieldReadFunction<any>;
    maxSourcesInParallel?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsCbzMimetype?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsChapterSortOrder?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsEnablePageReadProgress?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsItemsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsMarkAsReadOnDownload?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsShowOnlyDownloadedChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsShowOnlyUnreadChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsSkipChapterMetadataFeed?: FieldPolicy<any> | FieldReadFunction<any>;
    opdsUseBinaryFileSizes?: FieldPolicy<any> | FieldReadFunction<any>;
    port?: FieldPolicy<any> | FieldReadFunction<any>;
    serveConversions?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyHost?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyPassword?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyPort?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyUsername?: FieldPolicy<any> | FieldReadFunction<any>;
    socksProxyVersion?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataHistory?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataManga?: FieldPolicy<any> | FieldReadFunction<any>;
    syncDataTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    syncInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    syncYomiHost?: FieldPolicy<any> | FieldReadFunction<any>;
    systemTrayEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
    updateMangas?: FieldPolicy<any> | FieldReadFunction<any>;
    useHikariConnectionPool?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIChannel?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIFlavor?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIInterface?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIUpdateCheckInterval?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewOpenTimeout?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewProvider?: FieldPolicy<any> | FieldReadFunction<any>;
    webViewVncUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SortFilterKeySpecifier = ('default' | 'name' | 'values' | SortFilterKeySpecifier)[];
export type SortFilterFieldPolicy = {
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    values?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SortSelectionKeySpecifier = ('ascending' | 'index' | SortSelectionKeySpecifier)[];
export type SortSelectionFieldPolicy = {
    ascending?: FieldPolicy<any> | FieldReadFunction<any>;
    index?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SourceEdgeKeySpecifier = ('cursor' | 'node' | SourceEdgeKeySpecifier)[];
export type SourceEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SourceMetaTypeKeySpecifier = ('key' | 'source' | 'sourceId' | 'value' | SourceMetaTypeKeySpecifier)[];
export type SourceMetaTypeFieldPolicy = {
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    source?: FieldPolicy<any> | FieldReadFunction<any>;
    sourceId?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SourceNodeListKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SourceNodeListKeySpecifier)[];
export type SourceNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SourceTypeKeySpecifier = (
    | 'baseUrl'
    | 'contentWarning'
    | 'displayName'
    | 'extension'
    | 'filters'
    | 'homeUrl'
    | 'iconUrl'
    | 'id'
    | 'isConfigurable'
    | 'isNsfw'
    | 'lang'
    | 'manga'
    | 'meta'
    | 'name'
    | 'preferences'
    | 'supportsLatest'
    | SourceTypeKeySpecifier
)[];
export type SourceTypeFieldPolicy = {
    baseUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    contentWarning?: FieldPolicy<any> | FieldReadFunction<any>;
    displayName?: FieldPolicy<any> | FieldReadFunction<any>;
    extension?: FieldPolicy<any> | FieldReadFunction<any>;
    filters?: FieldPolicy<any> | FieldReadFunction<any>;
    homeUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    iconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    isConfigurable?: FieldPolicy<any> | FieldReadFunction<any>;
    isNsfw?: FieldPolicy<any> | FieldReadFunction<any>;
    lang?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    meta?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    preferences?: FieldPolicy<any> | FieldReadFunction<any>;
    supportsLatest?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StartArchiveBootstrapPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | StartArchiveBootstrapPayloadKeySpecifier
)[];
export type StartArchiveBootstrapPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StartChapterIntegrityAuditPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | StartChapterIntegrityAuditPayloadKeySpecifier
)[];
export type StartChapterIntegrityAuditPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StartChapterRevisionSweepPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'error'
    | 'itemCount'
    | 'session'
    | StartChapterRevisionSweepPayloadKeySpecifier
)[];
export type StartChapterRevisionSweepPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    error?: FieldPolicy<any> | FieldReadFunction<any>;
    itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
    session?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StartDownloaderPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | StartDownloaderPayloadKeySpecifier
)[];
export type StartDownloaderPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StartSyncPayloadKeySpecifier = ('clientMutationId' | 'result' | StartSyncPayloadKeySpecifier)[];
export type StartSyncPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    result?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StopDownloaderPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'downloadStatus'
    | StopDownloaderPayloadKeySpecifier
)[];
export type StopDownloaderPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubscriptionKeySpecifier = (
    | 'downloadChanged'
    | 'downloadStatusChanged'
    | 'libraryUpdateStatusChanged'
    | 'syncStatusChanged'
    | 'updateStatusChanged'
    | 'webUIUpdateStatusChange'
    | SubscriptionKeySpecifier
)[];
export type SubscriptionFieldPolicy = {
    downloadChanged?: FieldPolicy<any> | FieldReadFunction<any>;
    downloadStatusChanged?: FieldPolicy<any> | FieldReadFunction<any>;
    libraryUpdateStatusChanged?: FieldPolicy<any> | FieldReadFunction<any>;
    syncStatusChanged?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStatusChanged?: FieldPolicy<any> | FieldReadFunction<any>;
    webUIUpdateStatusChange?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SwitchPreferenceKeySpecifier = (
    | 'currentValue'
    | 'default'
    | 'enabled'
    | 'key'
    | 'summary'
    | 'title'
    | 'visible'
    | SwitchPreferenceKeySpecifier
)[];
export type SwitchPreferenceFieldPolicy = {
    currentValue?: FieldPolicy<any> | FieldReadFunction<any>;
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    enabled?: FieldPolicy<any> | FieldReadFunction<any>;
    key?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    visible?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SyncConflictInfoTypeKeySpecifier = ('deviceName' | 'remotePage' | SyncConflictInfoTypeKeySpecifier)[];
export type SyncConflictInfoTypeFieldPolicy = {
    deviceName?: FieldPolicy<any> | FieldReadFunction<any>;
    remotePage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SyncStatusKeySpecifier = (
    | 'backupRestoreId'
    | 'endDate'
    | 'errorMessage'
    | 'startDate'
    | 'state'
    | SyncStatusKeySpecifier
)[];
export type SyncStatusFieldPolicy = {
    backupRestoreId?: FieldPolicy<any> | FieldReadFunction<any>;
    endDate?: FieldPolicy<any> | FieldReadFunction<any>;
    errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
    startDate?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TextFilterKeySpecifier = ('default' | 'name' | TextFilterKeySpecifier)[];
export type TextFilterFieldPolicy = {
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackProgressPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'trackRecords'
    | TrackProgressPayloadKeySpecifier
)[];
export type TrackProgressPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecords?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackRecordEdgeKeySpecifier = ('cursor' | 'node' | TrackRecordEdgeKeySpecifier)[];
export type TrackRecordEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackRecordNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | TrackRecordNodeListKeySpecifier
)[];
export type TrackRecordNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackRecordTypeKeySpecifier = (
    | 'displayScore'
    | 'finishDate'
    | 'id'
    | 'lastChapterRead'
    | 'libraryId'
    | 'manga'
    | 'mangaId'
    | 'private'
    | 'remoteId'
    | 'remoteUrl'
    | 'score'
    | 'startDate'
    | 'status'
    | 'title'
    | 'totalChapters'
    | 'tracker'
    | 'trackerId'
    | TrackRecordTypeKeySpecifier
)[];
export type TrackRecordTypeFieldPolicy = {
    displayScore?: FieldPolicy<any> | FieldReadFunction<any>;
    finishDate?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    lastChapterRead?: FieldPolicy<any> | FieldReadFunction<any>;
    libraryId?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaId?: FieldPolicy<any> | FieldReadFunction<any>;
    private?: FieldPolicy<any> | FieldReadFunction<any>;
    remoteId?: FieldPolicy<any> | FieldReadFunction<any>;
    remoteUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    score?: FieldPolicy<any> | FieldReadFunction<any>;
    startDate?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    totalChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    tracker?: FieldPolicy<any> | FieldReadFunction<any>;
    trackerId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackSearchTypeKeySpecifier = (
    | 'coverUrl'
    | 'displayScore'
    | 'finishedReadingDate'
    | 'id'
    | 'lastChapterRead'
    | 'libraryId'
    | 'private'
    | 'publishingStatus'
    | 'publishingType'
    | 'remoteId'
    | 'score'
    | 'startDate'
    | 'startedReadingDate'
    | 'status'
    | 'summary'
    | 'title'
    | 'totalChapters'
    | 'tracker'
    | 'trackerId'
    | 'trackingUrl'
    | TrackSearchTypeKeySpecifier
)[];
export type TrackSearchTypeFieldPolicy = {
    coverUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    displayScore?: FieldPolicy<any> | FieldReadFunction<any>;
    finishedReadingDate?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    lastChapterRead?: FieldPolicy<any> | FieldReadFunction<any>;
    libraryId?: FieldPolicy<any> | FieldReadFunction<any>;
    private?: FieldPolicy<any> | FieldReadFunction<any>;
    publishingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
    publishingType?: FieldPolicy<any> | FieldReadFunction<any>;
    remoteId?: FieldPolicy<any> | FieldReadFunction<any>;
    score?: FieldPolicy<any> | FieldReadFunction<any>;
    startDate?: FieldPolicy<any> | FieldReadFunction<any>;
    startedReadingDate?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    totalChapters?: FieldPolicy<any> | FieldReadFunction<any>;
    tracker?: FieldPolicy<any> | FieldReadFunction<any>;
    trackerId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackingUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackStatusTypeKeySpecifier = ('name' | 'value' | TrackStatusTypeKeySpecifier)[];
export type TrackStatusTypeFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackerEdgeKeySpecifier = ('cursor' | 'node' | TrackerEdgeKeySpecifier)[];
export type TrackerEdgeFieldPolicy = {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackerNodeListKeySpecifier = (
    | 'edges'
    | 'nodes'
    | 'pageInfo'
    | 'totalCount'
    | TrackerNodeListKeySpecifier
)[];
export type TrackerNodeListFieldPolicy = {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TrackerTypeKeySpecifier = (
    | 'authUrl'
    | 'icon'
    | 'id'
    | 'isLoggedIn'
    | 'isTokenExpired'
    | 'name'
    | 'scores'
    | 'statuses'
    | 'supportsPrivateTracking'
    | 'supportsReadingDates'
    | 'supportsTrackDeletion'
    | 'trackRecords'
    | TrackerTypeKeySpecifier
)[];
export type TrackerTypeFieldPolicy = {
    authUrl?: FieldPolicy<any> | FieldReadFunction<any>;
    icon?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>;
    isTokenExpired?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    scores?: FieldPolicy<any> | FieldReadFunction<any>;
    statuses?: FieldPolicy<any> | FieldReadFunction<any>;
    supportsPrivateTracking?: FieldPolicy<any> | FieldReadFunction<any>;
    supportsReadingDates?: FieldPolicy<any> | FieldReadFunction<any>;
    supportsTrackDeletion?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecords?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TriStateFilterKeySpecifier = ('default' | 'name' | TriStateFilterKeySpecifier)[];
export type TriStateFilterFieldPolicy = {
    default?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UnbindTrackPayloadKeySpecifier = ('clientMutationId' | 'trackRecord' | UnbindTrackPayloadKeySpecifier)[];
export type UnbindTrackPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCanonicalWorkPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'outcome'
    | 'work'
    | UpdateCanonicalWorkPayloadKeySpecifier
)[];
export type UpdateCanonicalWorkPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    outcome?: FieldPolicy<any> | FieldReadFunction<any>;
    work?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCategoriesPayloadKeySpecifier = (
    | 'categories'
    | 'clientMutationId'
    | UpdateCategoriesPayloadKeySpecifier
)[];
export type UpdateCategoriesPayloadFieldPolicy = {
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCategoryMangaPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'updateStatus'
    | UpdateCategoryMangaPayloadKeySpecifier
)[];
export type UpdateCategoryMangaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCategoryOrderPayloadKeySpecifier = (
    | 'categories'
    | 'clientMutationId'
    | UpdateCategoryOrderPayloadKeySpecifier
)[];
export type UpdateCategoryOrderPayloadFieldPolicy = {
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCategoryPayloadKeySpecifier = ('category' | 'clientMutationId' | UpdateCategoryPayloadKeySpecifier)[];
export type UpdateCategoryPayloadFieldPolicy = {
    category?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateChapterPayloadKeySpecifier = ('chapter' | 'clientMutationId' | UpdateChapterPayloadKeySpecifier)[];
export type UpdateChapterPayloadFieldPolicy = {
    chapter?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateChaptersPayloadKeySpecifier = ('chapters' | 'clientMutationId' | UpdateChaptersPayloadKeySpecifier)[];
export type UpdateChaptersPayloadFieldPolicy = {
    chapters?: FieldPolicy<any> | FieldReadFunction<any>;
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateExtensionPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'extension'
    | UpdateExtensionPayloadKeySpecifier
)[];
export type UpdateExtensionPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    extension?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateExtensionsPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'extensions'
    | UpdateExtensionsPayloadKeySpecifier
)[];
export type UpdateExtensionsPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    extensions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateLibraryMangaPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'updateStatus'
    | UpdateLibraryMangaPayloadKeySpecifier
)[];
export type UpdateLibraryMangaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateLibraryPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'updateStatus'
    | UpdateLibraryPayloadKeySpecifier
)[];
export type UpdateLibraryPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMangaCategoriesPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'manga'
    | UpdateMangaCategoriesPayloadKeySpecifier
)[];
export type UpdateMangaCategoriesPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMangaPayloadKeySpecifier = ('clientMutationId' | 'manga' | UpdateMangaPayloadKeySpecifier)[];
export type UpdateMangaPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    manga?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMangasCategoriesPayloadKeySpecifier = (
    | 'clientMutationId'
    | 'mangas'
    | UpdateMangasCategoriesPayloadKeySpecifier
)[];
export type UpdateMangasCategoriesPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMangasPayloadKeySpecifier = ('clientMutationId' | 'mangas' | UpdateMangasPayloadKeySpecifier)[];
export type UpdateMangasPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateSourcePreferencePayloadKeySpecifier = (
    | 'clientMutationId'
    | 'preferences'
    | 'source'
    | UpdateSourcePreferencePayloadKeySpecifier
)[];
export type UpdateSourcePreferencePayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    preferences?: FieldPolicy<any> | FieldReadFunction<any>;
    source?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateStatusKeySpecifier = (
    | 'completeJobs'
    | 'failedJobs'
    | 'isRunning'
    | 'pendingJobs'
    | 'runningJobs'
    | 'skippedCategories'
    | 'skippedJobs'
    | 'updatingCategories'
    | UpdateStatusKeySpecifier
)[];
export type UpdateStatusFieldPolicy = {
    completeJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    failedJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    isRunning?: FieldPolicy<any> | FieldReadFunction<any>;
    pendingJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    runningJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    skippedCategories?: FieldPolicy<any> | FieldReadFunction<any>;
    skippedJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    updatingCategories?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateStatusCategoryTypeKeySpecifier = ('categories' | UpdateStatusCategoryTypeKeySpecifier)[];
export type UpdateStatusCategoryTypeFieldPolicy = {
    categories?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateStatusTypeKeySpecifier = ('mangas' | UpdateStatusTypeKeySpecifier)[];
export type UpdateStatusTypeFieldPolicy = {
    mangas?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateStopPayloadKeySpecifier = ('clientMutationId' | UpdateStopPayloadKeySpecifier)[];
export type UpdateStopPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateTrackPayloadKeySpecifier = ('clientMutationId' | 'trackRecord' | UpdateTrackPayloadKeySpecifier)[];
export type UpdateTrackPayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    trackRecord?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdaterJobsInfoTypeKeySpecifier = (
    | 'finishedJobs'
    | 'isRunning'
    | 'skippedCategoriesCount'
    | 'skippedMangasCount'
    | 'totalJobs'
    | UpdaterJobsInfoTypeKeySpecifier
)[];
export type UpdaterJobsInfoTypeFieldPolicy = {
    finishedJobs?: FieldPolicy<any> | FieldReadFunction<any>;
    isRunning?: FieldPolicy<any> | FieldReadFunction<any>;
    skippedCategoriesCount?: FieldPolicy<any> | FieldReadFunction<any>;
    skippedMangasCount?: FieldPolicy<any> | FieldReadFunction<any>;
    totalJobs?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdaterUpdatesKeySpecifier = (
    | 'categoryUpdates'
    | 'initial'
    | 'jobsInfo'
    | 'mangaUpdates'
    | 'omittedUpdates'
    | UpdaterUpdatesKeySpecifier
)[];
export type UpdaterUpdatesFieldPolicy = {
    categoryUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
    initial?: FieldPolicy<any> | FieldReadFunction<any>;
    jobsInfo?: FieldPolicy<any> | FieldReadFunction<any>;
    mangaUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
    omittedUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ValidateBackupResultKeySpecifier = (
    | 'missingSources'
    | 'missingTrackers'
    | ValidateBackupResultKeySpecifier
)[];
export type ValidateBackupResultFieldPolicy = {
    missingSources?: FieldPolicy<any> | FieldReadFunction<any>;
    missingTrackers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ValidateBackupSourceKeySpecifier = ('id' | 'name' | ValidateBackupSourceKeySpecifier)[];
export type ValidateBackupSourceFieldPolicy = {
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ValidateBackupTrackerKeySpecifier = ('name' | ValidateBackupTrackerKeySpecifier)[];
export type ValidateBackupTrackerFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WebUIUpdateCheckKeySpecifier = ('channel' | 'tag' | 'updateAvailable' | WebUIUpdateCheckKeySpecifier)[];
export type WebUIUpdateCheckFieldPolicy = {
    channel?: FieldPolicy<any> | FieldReadFunction<any>;
    tag?: FieldPolicy<any> | FieldReadFunction<any>;
    updateAvailable?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WebUIUpdateInfoKeySpecifier = ('channel' | 'tag' | WebUIUpdateInfoKeySpecifier)[];
export type WebUIUpdateInfoFieldPolicy = {
    channel?: FieldPolicy<any> | FieldReadFunction<any>;
    tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WebUIUpdatePayloadKeySpecifier = ('clientMutationId' | 'updateStatus' | WebUIUpdatePayloadKeySpecifier)[];
export type WebUIUpdatePayloadFieldPolicy = {
    clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
    updateStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WebUIUpdateStatusKeySpecifier = ('info' | 'progress' | 'state' | WebUIUpdateStatusKeySpecifier)[];
export type WebUIUpdateStatusFieldPolicy = {
    info?: FieldPolicy<any> | FieldReadFunction<any>;
    progress?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WebViewTabTypeKeySpecifier = ('id' | 'title' | 'url' | WebViewTabTypeKeySpecifier)[];
export type WebViewTabTypeFieldPolicy = {
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
    AboutServerPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | AboutServerPayloadKeySpecifier | (() => undefined | AboutServerPayloadKeySpecifier);
        fields?: AboutServerPayloadFieldPolicy;
    };
    AboutWebUI?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | AboutWebUIKeySpecifier | (() => undefined | AboutWebUIKeySpecifier);
        fields?: AboutWebUIFieldPolicy;
    };
    AcceptChapterRevisionCandidatesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | AcceptChapterRevisionCandidatesPayloadKeySpecifier
            | (() => undefined | AcceptChapterRevisionCandidatesPayloadKeySpecifier);
        fields?: AcceptChapterRevisionCandidatesPayloadFieldPolicy;
    };
    AddExtensionStorePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | AddExtensionStorePayloadKeySpecifier
            | (() => undefined | AddExtensionStorePayloadKeySpecifier);
        fields?: AddExtensionStorePayloadFieldPolicy;
    };
    ApproveChapterRevisionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ApproveChapterRevisionsPayloadKeySpecifier
            | (() => undefined | ApproveChapterRevisionsPayloadKeySpecifier);
        fields?: ApproveChapterRevisionsPayloadFieldPolicy;
    };
    ArchiveBootstrapCategoryPolicyType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapCategoryPolicyTypeKeySpecifier
            | (() => undefined | ArchiveBootstrapCategoryPolicyTypeKeySpecifier);
        fields?: ArchiveBootstrapCategoryPolicyTypeFieldPolicy;
    };
    ArchiveBootstrapItemEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapItemEdgeKeySpecifier
            | (() => undefined | ArchiveBootstrapItemEdgeKeySpecifier);
        fields?: ArchiveBootstrapItemEdgeFieldPolicy;
    };
    ArchiveBootstrapItemNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapItemNodeListKeySpecifier
            | (() => undefined | ArchiveBootstrapItemNodeListKeySpecifier);
        fields?: ArchiveBootstrapItemNodeListFieldPolicy;
    };
    ArchiveBootstrapItemType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapItemTypeKeySpecifier
            | (() => undefined | ArchiveBootstrapItemTypeKeySpecifier);
        fields?: ArchiveBootstrapItemTypeFieldPolicy;
    };
    ArchiveBootstrapProgressType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapProgressTypeKeySpecifier
            | (() => undefined | ArchiveBootstrapProgressTypeKeySpecifier);
        fields?: ArchiveBootstrapProgressTypeFieldPolicy;
    };
    ArchiveBootstrapSessionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapSessionEdgeKeySpecifier
            | (() => undefined | ArchiveBootstrapSessionEdgeKeySpecifier);
        fields?: ArchiveBootstrapSessionEdgeFieldPolicy;
    };
    ArchiveBootstrapSessionNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapSessionNodeListKeySpecifier
            | (() => undefined | ArchiveBootstrapSessionNodeListKeySpecifier);
        fields?: ArchiveBootstrapSessionNodeListFieldPolicy;
    };
    ArchiveBootstrapSessionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapSessionPayloadKeySpecifier
            | (() => undefined | ArchiveBootstrapSessionPayloadKeySpecifier);
        fields?: ArchiveBootstrapSessionPayloadFieldPolicy;
    };
    ArchiveBootstrapSessionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapSessionTypeKeySpecifier
            | (() => undefined | ArchiveBootstrapSessionTypeKeySpecifier);
        fields?: ArchiveBootstrapSessionTypeFieldPolicy;
    };
    ArchiveBootstrapUnresolvedSourceType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ArchiveBootstrapUnresolvedSourceTypeKeySpecifier
            | (() => undefined | ArchiveBootstrapUnresolvedSourceTypeKeySpecifier);
        fields?: ArchiveBootstrapUnresolvedSourceTypeFieldPolicy;
    };
    AttachMangaToCanonicalWorkPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | AttachMangaToCanonicalWorkPayloadKeySpecifier
            | (() => undefined | AttachMangaToCanonicalWorkPayloadKeySpecifier);
        fields?: AttachMangaToCanonicalWorkPayloadFieldPolicy;
    };
    BackupRestoreAuditType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | BackupRestoreAuditTypeKeySpecifier | (() => undefined | BackupRestoreAuditTypeKeySpecifier);
        fields?: BackupRestoreAuditTypeFieldPolicy;
    };
    BackupRestoreErrorCountsType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | BackupRestoreErrorCountsTypeKeySpecifier
            | (() => undefined | BackupRestoreErrorCountsTypeKeySpecifier);
        fields?: BackupRestoreErrorCountsTypeFieldPolicy;
    };
    BackupRestoreJobPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | BackupRestoreJobPayloadKeySpecifier
            | (() => undefined | BackupRestoreJobPayloadKeySpecifier);
        fields?: BackupRestoreJobPayloadFieldPolicy;
    };
    BackupRestoreJobType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | BackupRestoreJobTypeKeySpecifier | (() => undefined | BackupRestoreJobTypeKeySpecifier);
        fields?: BackupRestoreJobTypeFieldPolicy;
    };
    BackupRestoreStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | BackupRestoreStatusKeySpecifier | (() => undefined | BackupRestoreStatusKeySpecifier);
        fields?: BackupRestoreStatusFieldPolicy;
    };
    BindTrackPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | BindTrackPayloadKeySpecifier | (() => undefined | BindTrackPayloadKeySpecifier);
        fields?: BindTrackPayloadFieldPolicy;
    };
    BindTrackRecordPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | BindTrackRecordPayloadKeySpecifier | (() => undefined | BindTrackRecordPayloadKeySpecifier);
        fields?: BindTrackRecordPayloadFieldPolicy;
    };
    CanonicalIdentityExportType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CanonicalIdentityExportTypeKeySpecifier
            | (() => undefined | CanonicalIdentityExportTypeKeySpecifier);
        fields?: CanonicalIdentityExportTypeFieldPolicy;
    };
    CanonicalIdentityImportType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CanonicalIdentityImportTypeKeySpecifier
            | (() => undefined | CanonicalIdentityImportTypeKeySpecifier);
        fields?: CanonicalIdentityImportTypeFieldPolicy;
    };
    CanonicalIdentityStatusType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CanonicalIdentityStatusTypeKeySpecifier
            | (() => undefined | CanonicalIdentityStatusTypeKeySpecifier);
        fields?: CanonicalIdentityStatusTypeFieldPolicy;
    };
    CanonicalSourceBindingEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CanonicalSourceBindingEdgeKeySpecifier
            | (() => undefined | CanonicalSourceBindingEdgeKeySpecifier);
        fields?: CanonicalSourceBindingEdgeFieldPolicy;
    };
    CanonicalSourceBindingNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CanonicalSourceBindingNodeListKeySpecifier
            | (() => undefined | CanonicalSourceBindingNodeListKeySpecifier);
        fields?: CanonicalSourceBindingNodeListFieldPolicy;
    };
    CanonicalSourceBindingType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CanonicalSourceBindingTypeKeySpecifier
            | (() => undefined | CanonicalSourceBindingTypeKeySpecifier);
        fields?: CanonicalSourceBindingTypeFieldPolicy;
    };
    CanonicalWorkEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CanonicalWorkEdgeKeySpecifier | (() => undefined | CanonicalWorkEdgeKeySpecifier);
        fields?: CanonicalWorkEdgeFieldPolicy;
    };
    CanonicalWorkNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CanonicalWorkNodeListKeySpecifier | (() => undefined | CanonicalWorkNodeListKeySpecifier);
        fields?: CanonicalWorkNodeListFieldPolicy;
    };
    CanonicalWorkType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CanonicalWorkTypeKeySpecifier | (() => undefined | CanonicalWorkTypeKeySpecifier);
        fields?: CanonicalWorkTypeFieldPolicy;
    };
    CategoryEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CategoryEdgeKeySpecifier | (() => undefined | CategoryEdgeKeySpecifier);
        fields?: CategoryEdgeFieldPolicy;
    };
    CategoryMetaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CategoryMetaTypeKeySpecifier | (() => undefined | CategoryMetaTypeKeySpecifier);
        fields?: CategoryMetaTypeFieldPolicy;
    };
    CategoryNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CategoryNodeListKeySpecifier | (() => undefined | CategoryNodeListKeySpecifier);
        fields?: CategoryNodeListFieldPolicy;
    };
    CategoryType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CategoryTypeKeySpecifier | (() => undefined | CategoryTypeKeySpecifier);
        fields?: CategoryTypeFieldPolicy;
    };
    CategoryUpdateType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CategoryUpdateTypeKeySpecifier | (() => undefined | CategoryUpdateTypeKeySpecifier);
        fields?: CategoryUpdateTypeFieldPolicy;
    };
    ChangeCanonicalBindingPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChangeCanonicalBindingPayloadKeySpecifier
            | (() => undefined | ChangeCanonicalBindingPayloadKeySpecifier);
        fields?: ChangeCanonicalBindingPayloadFieldPolicy;
    };
    ChapterEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ChapterEdgeKeySpecifier | (() => undefined | ChapterEdgeKeySpecifier);
        fields?: ChapterEdgeFieldPolicy;
    };
    ChapterIntegrityAuditItemEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditItemEdgeKeySpecifier
            | (() => undefined | ChapterIntegrityAuditItemEdgeKeySpecifier);
        fields?: ChapterIntegrityAuditItemEdgeFieldPolicy;
    };
    ChapterIntegrityAuditItemNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditItemNodeListKeySpecifier
            | (() => undefined | ChapterIntegrityAuditItemNodeListKeySpecifier);
        fields?: ChapterIntegrityAuditItemNodeListFieldPolicy;
    };
    ChapterIntegrityAuditItemType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditItemTypeKeySpecifier
            | (() => undefined | ChapterIntegrityAuditItemTypeKeySpecifier);
        fields?: ChapterIntegrityAuditItemTypeFieldPolicy;
    };
    ChapterIntegrityAuditProgressType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditProgressTypeKeySpecifier
            | (() => undefined | ChapterIntegrityAuditProgressTypeKeySpecifier);
        fields?: ChapterIntegrityAuditProgressTypeFieldPolicy;
    };
    ChapterIntegrityAuditScheduleType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditScheduleTypeKeySpecifier
            | (() => undefined | ChapterIntegrityAuditScheduleTypeKeySpecifier);
        fields?: ChapterIntegrityAuditScheduleTypeFieldPolicy;
    };
    ChapterIntegrityAuditSessionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditSessionEdgeKeySpecifier
            | (() => undefined | ChapterIntegrityAuditSessionEdgeKeySpecifier);
        fields?: ChapterIntegrityAuditSessionEdgeFieldPolicy;
    };
    ChapterIntegrityAuditSessionNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditSessionNodeListKeySpecifier
            | (() => undefined | ChapterIntegrityAuditSessionNodeListKeySpecifier);
        fields?: ChapterIntegrityAuditSessionNodeListFieldPolicy;
    };
    ChapterIntegrityAuditSessionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditSessionPayloadKeySpecifier
            | (() => undefined | ChapterIntegrityAuditSessionPayloadKeySpecifier);
        fields?: ChapterIntegrityAuditSessionPayloadFieldPolicy;
    };
    ChapterIntegrityAuditSessionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterIntegrityAuditSessionTypeKeySpecifier
            | (() => undefined | ChapterIntegrityAuditSessionTypeKeySpecifier);
        fields?: ChapterIntegrityAuditSessionTypeFieldPolicy;
    };
    ChapterMetaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ChapterMetaTypeKeySpecifier | (() => undefined | ChapterMetaTypeKeySpecifier);
        fields?: ChapterMetaTypeFieldPolicy;
    };
    ChapterNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ChapterNodeListKeySpecifier | (() => undefined | ChapterNodeListKeySpecifier);
        fields?: ChapterNodeListFieldPolicy;
    };
    ChapterRevisionComparisonPageEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionComparisonPageEdgeKeySpecifier
            | (() => undefined | ChapterRevisionComparisonPageEdgeKeySpecifier);
        fields?: ChapterRevisionComparisonPageEdgeFieldPolicy;
    };
    ChapterRevisionComparisonPageNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionComparisonPageNodeListKeySpecifier
            | (() => undefined | ChapterRevisionComparisonPageNodeListKeySpecifier);
        fields?: ChapterRevisionComparisonPageNodeListFieldPolicy;
    };
    ChapterRevisionComparisonPageType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionComparisonPageTypeKeySpecifier
            | (() => undefined | ChapterRevisionComparisonPageTypeKeySpecifier);
        fields?: ChapterRevisionComparisonPageTypeFieldPolicy;
    };
    ChapterRevisionComparisonType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionComparisonTypeKeySpecifier
            | (() => undefined | ChapterRevisionComparisonTypeKeySpecifier);
        fields?: ChapterRevisionComparisonTypeFieldPolicy;
    };
    ChapterRevisionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ChapterRevisionEdgeKeySpecifier | (() => undefined | ChapterRevisionEdgeKeySpecifier);
        fields?: ChapterRevisionEdgeFieldPolicy;
    };
    ChapterRevisionNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionNodeListKeySpecifier
            | (() => undefined | ChapterRevisionNodeListKeySpecifier);
        fields?: ChapterRevisionNodeListFieldPolicy;
    };
    ChapterRevisionRollbackEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionRollbackEdgeKeySpecifier
            | (() => undefined | ChapterRevisionRollbackEdgeKeySpecifier);
        fields?: ChapterRevisionRollbackEdgeFieldPolicy;
    };
    ChapterRevisionRollbackNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionRollbackNodeListKeySpecifier
            | (() => undefined | ChapterRevisionRollbackNodeListKeySpecifier);
        fields?: ChapterRevisionRollbackNodeListFieldPolicy;
    };
    ChapterRevisionRollbackType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionRollbackTypeKeySpecifier
            | (() => undefined | ChapterRevisionRollbackTypeKeySpecifier);
        fields?: ChapterRevisionRollbackTypeFieldPolicy;
    };
    ChapterRevisionSweepItemEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepItemEdgeKeySpecifier
            | (() => undefined | ChapterRevisionSweepItemEdgeKeySpecifier);
        fields?: ChapterRevisionSweepItemEdgeFieldPolicy;
    };
    ChapterRevisionSweepItemNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepItemNodeListKeySpecifier
            | (() => undefined | ChapterRevisionSweepItemNodeListKeySpecifier);
        fields?: ChapterRevisionSweepItemNodeListFieldPolicy;
    };
    ChapterRevisionSweepItemType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepItemTypeKeySpecifier
            | (() => undefined | ChapterRevisionSweepItemTypeKeySpecifier);
        fields?: ChapterRevisionSweepItemTypeFieldPolicy;
    };
    ChapterRevisionSweepProgressType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepProgressTypeKeySpecifier
            | (() => undefined | ChapterRevisionSweepProgressTypeKeySpecifier);
        fields?: ChapterRevisionSweepProgressTypeFieldPolicy;
    };
    ChapterRevisionSweepScheduleType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepScheduleTypeKeySpecifier
            | (() => undefined | ChapterRevisionSweepScheduleTypeKeySpecifier);
        fields?: ChapterRevisionSweepScheduleTypeFieldPolicy;
    };
    ChapterRevisionSweepSessionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepSessionEdgeKeySpecifier
            | (() => undefined | ChapterRevisionSweepSessionEdgeKeySpecifier);
        fields?: ChapterRevisionSweepSessionEdgeFieldPolicy;
    };
    ChapterRevisionSweepSessionNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepSessionNodeListKeySpecifier
            | (() => undefined | ChapterRevisionSweepSessionNodeListKeySpecifier);
        fields?: ChapterRevisionSweepSessionNodeListFieldPolicy;
    };
    ChapterRevisionSweepSessionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepSessionPayloadKeySpecifier
            | (() => undefined | ChapterRevisionSweepSessionPayloadKeySpecifier);
        fields?: ChapterRevisionSweepSessionPayloadFieldPolicy;
    };
    ChapterRevisionSweepSessionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionSweepSessionTypeKeySpecifier
            | (() => undefined | ChapterRevisionSweepSessionTypeKeySpecifier);
        fields?: ChapterRevisionSweepSessionTypeFieldPolicy;
    };
    ChapterRevisionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ChapterRevisionTypeKeySpecifier | (() => undefined | ChapterRevisionTypeKeySpecifier);
        fields?: ChapterRevisionTypeFieldPolicy;
    };
    ChapterRevisionVisualAnalysisStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ChapterRevisionVisualAnalysisStatusKeySpecifier
            | (() => undefined | ChapterRevisionVisualAnalysisStatusKeySpecifier);
        fields?: ChapterRevisionVisualAnalysisStatusFieldPolicy;
    };
    ChapterType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ChapterTypeKeySpecifier | (() => undefined | ChapterTypeKeySpecifier);
        fields?: ChapterTypeFieldPolicy;
    };
    CheckBoxFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CheckBoxFilterKeySpecifier | (() => undefined | CheckBoxFilterKeySpecifier);
        fields?: CheckBoxFilterFieldPolicy;
    };
    CheckBoxPreference?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CheckBoxPreferenceKeySpecifier | (() => undefined | CheckBoxPreferenceKeySpecifier);
        fields?: CheckBoxPreferenceFieldPolicy;
    };
    CheckForServerUpdatesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CheckForServerUpdatesPayloadKeySpecifier
            | (() => undefined | CheckForServerUpdatesPayloadKeySpecifier);
        fields?: CheckForServerUpdatesPayloadFieldPolicy;
    };
    ClearCachedImagesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ClearCachedImagesPayloadKeySpecifier
            | (() => undefined | ClearCachedImagesPayloadKeySpecifier);
        fields?: ClearCachedImagesPayloadFieldPolicy;
    };
    ClearCookiesAndCachePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ClearCookiesAndCachePayloadKeySpecifier
            | (() => undefined | ClearCookiesAndCachePayloadKeySpecifier);
        fields?: ClearCookiesAndCachePayloadFieldPolicy;
    };
    ClearDownloaderPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ClearDownloaderPayloadKeySpecifier | (() => undefined | ClearDownloaderPayloadKeySpecifier);
        fields?: ClearDownloaderPayloadFieldPolicy;
    };
    CloseWebViewPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CloseWebViewPayloadKeySpecifier | (() => undefined | CloseWebViewPayloadKeySpecifier);
        fields?: CloseWebViewPayloadFieldPolicy;
    };
    CreateBackupPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CreateBackupPayloadKeySpecifier | (() => undefined | CreateBackupPayloadKeySpecifier);
        fields?: CreateBackupPayloadFieldPolicy;
    };
    CreateCanonicalWorkPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | CreateCanonicalWorkPayloadKeySpecifier
            | (() => undefined | CreateCanonicalWorkPayloadKeySpecifier);
        fields?: CreateCanonicalWorkPayloadFieldPolicy;
    };
    CreateCategoryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CreateCategoryPayloadKeySpecifier | (() => undefined | CreateCategoryPayloadKeySpecifier);
        fields?: CreateCategoryPayloadFieldPolicy;
    };
    DeleteCanonicalWorkPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteCanonicalWorkPayloadKeySpecifier
            | (() => undefined | DeleteCanonicalWorkPayloadKeySpecifier);
        fields?: DeleteCanonicalWorkPayloadFieldPolicy;
    };
    DeleteCategoryMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteCategoryMetaPayloadKeySpecifier
            | (() => undefined | DeleteCategoryMetaPayloadKeySpecifier);
        fields?: DeleteCategoryMetaPayloadFieldPolicy;
    };
    DeleteCategoryMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteCategoryMetasPayloadKeySpecifier
            | (() => undefined | DeleteCategoryMetasPayloadKeySpecifier);
        fields?: DeleteCategoryMetasPayloadFieldPolicy;
    };
    DeleteCategoryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DeleteCategoryPayloadKeySpecifier | (() => undefined | DeleteCategoryPayloadKeySpecifier);
        fields?: DeleteCategoryPayloadFieldPolicy;
    };
    DeleteChapterMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteChapterMetaPayloadKeySpecifier
            | (() => undefined | DeleteChapterMetaPayloadKeySpecifier);
        fields?: DeleteChapterMetaPayloadFieldPolicy;
    };
    DeleteChapterMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteChapterMetasPayloadKeySpecifier
            | (() => undefined | DeleteChapterMetasPayloadKeySpecifier);
        fields?: DeleteChapterMetasPayloadFieldPolicy;
    };
    DeleteDownloadedChapterPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteDownloadedChapterPayloadKeySpecifier
            | (() => undefined | DeleteDownloadedChapterPayloadKeySpecifier);
        fields?: DeleteDownloadedChapterPayloadFieldPolicy;
    };
    DeleteDownloadedChaptersPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteDownloadedChaptersPayloadKeySpecifier
            | (() => undefined | DeleteDownloadedChaptersPayloadKeySpecifier);
        fields?: DeleteDownloadedChaptersPayloadFieldPolicy;
    };
    DeleteGlobalMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteGlobalMetaPayloadKeySpecifier
            | (() => undefined | DeleteGlobalMetaPayloadKeySpecifier);
        fields?: DeleteGlobalMetaPayloadFieldPolicy;
    };
    DeleteGlobalMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteGlobalMetasPayloadKeySpecifier
            | (() => undefined | DeleteGlobalMetasPayloadKeySpecifier);
        fields?: DeleteGlobalMetasPayloadFieldPolicy;
    };
    DeleteMangaMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DeleteMangaMetaPayloadKeySpecifier | (() => undefined | DeleteMangaMetaPayloadKeySpecifier);
        fields?: DeleteMangaMetaPayloadFieldPolicy;
    };
    DeleteMangaMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteMangaMetasPayloadKeySpecifier
            | (() => undefined | DeleteMangaMetasPayloadKeySpecifier);
        fields?: DeleteMangaMetasPayloadFieldPolicy;
    };
    DeleteSourceMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteSourceMetaPayloadKeySpecifier
            | (() => undefined | DeleteSourceMetaPayloadKeySpecifier);
        fields?: DeleteSourceMetaPayloadFieldPolicy;
    };
    DeleteSourceMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DeleteSourceMetasPayloadKeySpecifier
            | (() => undefined | DeleteSourceMetasPayloadKeySpecifier);
        fields?: DeleteSourceMetasPayloadFieldPolicy;
    };
    DequeueChapterDownloadPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DequeueChapterDownloadPayloadKeySpecifier
            | (() => undefined | DequeueChapterDownloadPayloadKeySpecifier);
        fields?: DequeueChapterDownloadPayloadFieldPolicy;
    };
    DequeueChapterDownloadsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DequeueChapterDownloadsPayloadKeySpecifier
            | (() => undefined | DequeueChapterDownloadsPayloadKeySpecifier);
        fields?: DequeueChapterDownloadsPayloadFieldPolicy;
    };
    DetachCanonicalBindingPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DetachCanonicalBindingPayloadKeySpecifier
            | (() => undefined | DetachCanonicalBindingPayloadKeySpecifier);
        fields?: DetachCanonicalBindingPayloadFieldPolicy;
    };
    DownloadEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DownloadEdgeKeySpecifier | (() => undefined | DownloadEdgeKeySpecifier);
        fields?: DownloadEdgeFieldPolicy;
    };
    DownloadNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DownloadNodeListKeySpecifier | (() => undefined | DownloadNodeListKeySpecifier);
        fields?: DownloadNodeListFieldPolicy;
    };
    DownloadStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DownloadStatusKeySpecifier | (() => undefined | DownloadStatusKeySpecifier);
        fields?: DownloadStatusFieldPolicy;
    };
    DownloadType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DownloadTypeKeySpecifier | (() => undefined | DownloadTypeKeySpecifier);
        fields?: DownloadTypeFieldPolicy;
    };
    DownloadUpdate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DownloadUpdateKeySpecifier | (() => undefined | DownloadUpdateKeySpecifier);
        fields?: DownloadUpdateFieldPolicy;
    };
    DownloadUpdates?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DownloadUpdatesKeySpecifier | (() => undefined | DownloadUpdatesKeySpecifier);
        fields?: DownloadUpdatesFieldPolicy;
    };
    Edge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | EdgeKeySpecifier | (() => undefined | EdgeKeySpecifier);
        fields?: EdgeFieldPolicy;
    };
    EditTextPreference?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | EditTextPreferenceKeySpecifier | (() => undefined | EditTextPreferenceKeySpecifier);
        fields?: EditTextPreferenceFieldPolicy;
    };
    EnqueueChapterDownloadPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | EnqueueChapterDownloadPayloadKeySpecifier
            | (() => undefined | EnqueueChapterDownloadPayloadKeySpecifier);
        fields?: EnqueueChapterDownloadPayloadFieldPolicy;
    };
    EnqueueChapterDownloadsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | EnqueueChapterDownloadsPayloadKeySpecifier
            | (() => undefined | EnqueueChapterDownloadsPayloadKeySpecifier);
        fields?: EnqueueChapterDownloadsPayloadFieldPolicy;
    };
    ExportCanonicalIdentityPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ExportCanonicalIdentityPayloadKeySpecifier
            | (() => undefined | ExportCanonicalIdentityPayloadKeySpecifier);
        fields?: ExportCanonicalIdentityPayloadFieldPolicy;
    };
    ExtensionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ExtensionEdgeKeySpecifier | (() => undefined | ExtensionEdgeKeySpecifier);
        fields?: ExtensionEdgeFieldPolicy;
    };
    ExtensionNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ExtensionNodeListKeySpecifier | (() => undefined | ExtensionNodeListKeySpecifier);
        fields?: ExtensionNodeListFieldPolicy;
    };
    ExtensionStoreEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ExtensionStoreEdgeKeySpecifier | (() => undefined | ExtensionStoreEdgeKeySpecifier);
        fields?: ExtensionStoreEdgeFieldPolicy;
    };
    ExtensionStoreNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ExtensionStoreNodeListKeySpecifier | (() => undefined | ExtensionStoreNodeListKeySpecifier);
        fields?: ExtensionStoreNodeListFieldPolicy;
    };
    ExtensionStoreType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ExtensionStoreTypeKeySpecifier | (() => undefined | ExtensionStoreTypeKeySpecifier);
        fields?: ExtensionStoreTypeFieldPolicy;
    };
    ExtensionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ExtensionTypeKeySpecifier | (() => undefined | ExtensionTypeKeySpecifier);
        fields?: ExtensionTypeFieldPolicy;
    };
    FailoverCanonicalWorkPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | FailoverCanonicalWorkPayloadKeySpecifier
            | (() => undefined | FailoverCanonicalWorkPayloadKeySpecifier);
        fields?: FailoverCanonicalWorkPayloadFieldPolicy;
    };
    FetchChapterPagesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | FetchChapterPagesPayloadKeySpecifier
            | (() => undefined | FetchChapterPagesPayloadKeySpecifier);
        fields?: FetchChapterPagesPayloadFieldPolicy;
    };
    FetchChaptersPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | FetchChaptersPayloadKeySpecifier | (() => undefined | FetchChaptersPayloadKeySpecifier);
        fields?: FetchChaptersPayloadFieldPolicy;
    };
    FetchExtensionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | FetchExtensionsPayloadKeySpecifier | (() => undefined | FetchExtensionsPayloadKeySpecifier);
        fields?: FetchExtensionsPayloadFieldPolicy;
    };
    FetchMangaAndChaptersPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | FetchMangaAndChaptersPayloadKeySpecifier
            | (() => undefined | FetchMangaAndChaptersPayloadKeySpecifier);
        fields?: FetchMangaAndChaptersPayloadFieldPolicy;
    };
    FetchMangaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | FetchMangaPayloadKeySpecifier | (() => undefined | FetchMangaPayloadKeySpecifier);
        fields?: FetchMangaPayloadFieldPolicy;
    };
    FetchSourceMangaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | FetchSourceMangaPayloadKeySpecifier
            | (() => undefined | FetchSourceMangaPayloadKeySpecifier);
        fields?: FetchSourceMangaPayloadFieldPolicy;
    };
    FetchTrackPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | FetchTrackPayloadKeySpecifier | (() => undefined | FetchTrackPayloadKeySpecifier);
        fields?: FetchTrackPayloadFieldPolicy;
    };
    GlobalMetaNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | GlobalMetaNodeListKeySpecifier | (() => undefined | GlobalMetaNodeListKeySpecifier);
        fields?: GlobalMetaNodeListFieldPolicy;
    };
    GlobalMetaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | GlobalMetaTypeKeySpecifier | (() => undefined | GlobalMetaTypeKeySpecifier);
        fields?: GlobalMetaTypeFieldPolicy;
    };
    GroupFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | GroupFilterKeySpecifier | (() => undefined | GroupFilterKeySpecifier);
        fields?: GroupFilterFieldPolicy;
    };
    HeaderFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | HeaderFilterKeySpecifier | (() => undefined | HeaderFilterKeySpecifier);
        fields?: HeaderFilterFieldPolicy;
    };
    ImportCanonicalIdentityPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ImportCanonicalIdentityPayloadKeySpecifier
            | (() => undefined | ImportCanonicalIdentityPayloadKeySpecifier);
        fields?: ImportCanonicalIdentityPayloadFieldPolicy;
    };
    InstallExternalExtensionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | InstallExternalExtensionPayloadKeySpecifier
            | (() => undefined | InstallExternalExtensionPayloadKeySpecifier);
        fields?: InstallExternalExtensionPayloadFieldPolicy;
    };
    JvmInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | JvmInfoKeySpecifier | (() => undefined | JvmInfoKeySpecifier);
        fields?: JvmInfoFieldPolicy;
    };
    KeepBothChapterRevisionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | KeepBothChapterRevisionsPayloadKeySpecifier
            | (() => undefined | KeepBothChapterRevisionsPayloadKeySpecifier);
        fields?: KeepBothChapterRevisionsPayloadFieldPolicy;
    };
    KeepCurrentChapterRevisionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | KeepCurrentChapterRevisionsPayloadKeySpecifier
            | (() => undefined | KeepCurrentChapterRevisionsPayloadKeySpecifier);
        fields?: KeepCurrentChapterRevisionsPayloadFieldPolicy;
    };
    KoSyncConnectPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | KoSyncConnectPayloadKeySpecifier | (() => undefined | KoSyncConnectPayloadKeySpecifier);
        fields?: KoSyncConnectPayloadFieldPolicy;
    };
    KoSyncStatusPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | KoSyncStatusPayloadKeySpecifier | (() => undefined | KoSyncStatusPayloadKeySpecifier);
        fields?: KoSyncStatusPayloadFieldPolicy;
    };
    KomgaRescanStatusType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | KomgaRescanStatusTypeKeySpecifier | (() => undefined | KomgaRescanStatusTypeKeySpecifier);
        fields?: KomgaRescanStatusTypeFieldPolicy;
    };
    LastUpdateTimestampPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | LastUpdateTimestampPayloadKeySpecifier
            | (() => undefined | LastUpdateTimestampPayloadKeySpecifier);
        fields?: LastUpdateTimestampPayloadFieldPolicy;
    };
    LibraryUpdateStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LibraryUpdateStatusKeySpecifier | (() => undefined | LibraryUpdateStatusKeySpecifier);
        fields?: LibraryUpdateStatusFieldPolicy;
    };
    ListPreference?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ListPreferenceKeySpecifier | (() => undefined | ListPreferenceKeySpecifier);
        fields?: ListPreferenceFieldPolicy;
    };
    LoginPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LoginPayloadKeySpecifier | (() => undefined | LoginPayloadKeySpecifier);
        fields?: LoginPayloadFieldPolicy;
    };
    LoginTrackerCredentialsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | LoginTrackerCredentialsPayloadKeySpecifier
            | (() => undefined | LoginTrackerCredentialsPayloadKeySpecifier);
        fields?: LoginTrackerCredentialsPayloadFieldPolicy;
    };
    LoginTrackerOAuthPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | LoginTrackerOAuthPayloadKeySpecifier
            | (() => undefined | LoginTrackerOAuthPayloadKeySpecifier);
        fields?: LoginTrackerOAuthPayloadFieldPolicy;
    };
    LogoutKoSyncAccountPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | LogoutKoSyncAccountPayloadKeySpecifier
            | (() => undefined | LogoutKoSyncAccountPayloadKeySpecifier);
        fields?: LogoutKoSyncAccountPayloadFieldPolicy;
    };
    LogoutTrackerPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LogoutTrackerPayloadKeySpecifier | (() => undefined | LogoutTrackerPayloadKeySpecifier);
        fields?: LogoutTrackerPayloadFieldPolicy;
    };
    MangaEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MangaEdgeKeySpecifier | (() => undefined | MangaEdgeKeySpecifier);
        fields?: MangaEdgeFieldPolicy;
    };
    MangaMetaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MangaMetaTypeKeySpecifier | (() => undefined | MangaMetaTypeKeySpecifier);
        fields?: MangaMetaTypeFieldPolicy;
    };
    MangaNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MangaNodeListKeySpecifier | (() => undefined | MangaNodeListKeySpecifier);
        fields?: MangaNodeListFieldPolicy;
    };
    MangaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MangaTypeKeySpecifier | (() => undefined | MangaTypeKeySpecifier);
        fields?: MangaTypeFieldPolicy;
    };
    MangaUpdateType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MangaUpdateTypeKeySpecifier | (() => undefined | MangaUpdateTypeKeySpecifier);
        fields?: MangaUpdateTypeFieldPolicy;
    };
    MetaEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MetaEdgeKeySpecifier | (() => undefined | MetaEdgeKeySpecifier);
        fields?: MetaEdgeFieldPolicy;
    };
    MetaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MetaTypeKeySpecifier | (() => undefined | MetaTypeKeySpecifier);
        fields?: MetaTypeFieldPolicy;
    };
    MultiSelectListPreference?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | MultiSelectListPreferenceKeySpecifier
            | (() => undefined | MultiSelectListPreferenceKeySpecifier);
        fields?: MultiSelectListPreferenceFieldPolicy;
    };
    Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
        fields?: MutationFieldPolicy;
    };
    NodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | NodeListKeySpecifier | (() => undefined | NodeListKeySpecifier);
        fields?: NodeListFieldPolicy;
    };
    OSInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | OSInfoKeySpecifier | (() => undefined | OSInfoKeySpecifier);
        fields?: OSInfoFieldPolicy;
    };
    OpenWebViewPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | OpenWebViewPayloadKeySpecifier | (() => undefined | OpenWebViewPayloadKeySpecifier);
        fields?: OpenWebViewPayloadFieldPolicy;
    };
    PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier);
        fields?: PageInfoFieldPolicy;
    };
    PartialSettingsType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | PartialSettingsTypeKeySpecifier | (() => undefined | PartialSettingsTypeKeySpecifier);
        fields?: PartialSettingsTypeFieldPolicy;
    };
    PlatformInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | PlatformInfoKeySpecifier | (() => undefined | PlatformInfoKeySpecifier);
        fields?: PlatformInfoFieldPolicy;
    };
    PromoteCanonicalBindingPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | PromoteCanonicalBindingPayloadKeySpecifier
            | (() => undefined | PromoteCanonicalBindingPayloadKeySpecifier);
        fields?: PromoteCanonicalBindingPayloadFieldPolicy;
    };
    PullKoSyncProgressPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | PullKoSyncProgressPayloadKeySpecifier
            | (() => undefined | PullKoSyncProgressPayloadKeySpecifier);
        fields?: PullKoSyncProgressPayloadFieldPolicy;
    };
    PushKoSyncProgressPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | PushKoSyncProgressPayloadKeySpecifier
            | (() => undefined | PushKoSyncProgressPayloadKeySpecifier);
        fields?: PushKoSyncProgressPayloadFieldPolicy;
    };
    Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
        fields?: QueryFieldPolicy;
    };
    RefreshTokenPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RefreshTokenPayloadKeySpecifier | (() => undefined | RefreshTokenPayloadKeySpecifier);
        fields?: RefreshTokenPayloadFieldPolicy;
    };
    RejectChapterRevisionCandidatesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RejectChapterRevisionCandidatesPayloadKeySpecifier
            | (() => undefined | RejectChapterRevisionCandidatesPayloadKeySpecifier);
        fields?: RejectChapterRevisionCandidatesPayloadFieldPolicy;
    };
    RejectChapterRevisionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RejectChapterRevisionsPayloadKeySpecifier
            | (() => undefined | RejectChapterRevisionsPayloadKeySpecifier);
        fields?: RejectChapterRevisionsPayloadFieldPolicy;
    };
    RemoveExtensionStorePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RemoveExtensionStorePayloadKeySpecifier
            | (() => undefined | RemoveExtensionStorePayloadKeySpecifier);
        fields?: RemoveExtensionStorePayloadFieldPolicy;
    };
    ReorderChapterDownloadPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | ReorderChapterDownloadPayloadKeySpecifier
            | (() => undefined | ReorderChapterDownloadPayloadKeySpecifier);
        fields?: ReorderChapterDownloadPayloadFieldPolicy;
    };
    RequestKomgaRescanPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RequestKomgaRescanPayloadKeySpecifier
            | (() => undefined | RequestKomgaRescanPayloadKeySpecifier);
        fields?: RequestKomgaRescanPayloadFieldPolicy;
    };
    ResetSettingsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ResetSettingsPayloadKeySpecifier | (() => undefined | ResetSettingsPayloadKeySpecifier);
        fields?: ResetSettingsPayloadFieldPolicy;
    };
    RestoreBackupPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RestoreBackupPayloadKeySpecifier | (() => undefined | RestoreBackupPayloadKeySpecifier);
        fields?: RestoreBackupPayloadFieldPolicy;
    };
    RetryArchiveBootstrapItemsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryArchiveBootstrapItemsPayloadKeySpecifier
            | (() => undefined | RetryArchiveBootstrapItemsPayloadKeySpecifier);
        fields?: RetryArchiveBootstrapItemsPayloadFieldPolicy;
    };
    RetryChapterIntegrityAuditItemsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterIntegrityAuditItemsPayloadKeySpecifier
            | (() => undefined | RetryChapterIntegrityAuditItemsPayloadKeySpecifier);
        fields?: RetryChapterIntegrityAuditItemsPayloadFieldPolicy;
    };
    RetryChapterRevisionArchivesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterRevisionArchivesPayloadKeySpecifier
            | (() => undefined | RetryChapterRevisionArchivesPayloadKeySpecifier);
        fields?: RetryChapterRevisionArchivesPayloadFieldPolicy;
    };
    RetryChapterRevisionPruningsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterRevisionPruningsPayloadKeySpecifier
            | (() => undefined | RetryChapterRevisionPruningsPayloadKeySpecifier);
        fields?: RetryChapterRevisionPruningsPayloadFieldPolicy;
    };
    RetryChapterRevisionPublicationsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterRevisionPublicationsPayloadKeySpecifier
            | (() => undefined | RetryChapterRevisionPublicationsPayloadKeySpecifier);
        fields?: RetryChapterRevisionPublicationsPayloadFieldPolicy;
    };
    RetryChapterRevisionSweepItemsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterRevisionSweepItemsPayloadKeySpecifier
            | (() => undefined | RetryChapterRevisionSweepItemsPayloadKeySpecifier);
        fields?: RetryChapterRevisionSweepItemsPayloadFieldPolicy;
    };
    RetryChapterRevisionVisualAnalysesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterRevisionVisualAnalysesPayloadKeySpecifier
            | (() => undefined | RetryChapterRevisionVisualAnalysesPayloadKeySpecifier);
        fields?: RetryChapterRevisionVisualAnalysesPayloadFieldPolicy;
    };
    RetryChapterRevisionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryChapterRevisionsPayloadKeySpecifier
            | (() => undefined | RetryChapterRevisionsPayloadKeySpecifier);
        fields?: RetryChapterRevisionsPayloadFieldPolicy;
    };
    RetryKomgaRescanPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RetryKomgaRescanPayloadKeySpecifier
            | (() => undefined | RetryKomgaRescanPayloadKeySpecifier);
        fields?: RetryKomgaRescanPayloadFieldPolicy;
    };
    RollbackChapterRevisionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RollbackChapterRevisionPayloadKeySpecifier
            | (() => undefined | RollbackChapterRevisionPayloadKeySpecifier);
        fields?: RollbackChapterRevisionPayloadFieldPolicy;
    };
    SearchTrackerPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SearchTrackerPayloadKeySpecifier | (() => undefined | SearchTrackerPayloadKeySpecifier);
        fields?: SearchTrackerPayloadFieldPolicy;
    };
    SelectFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SelectFilterKeySpecifier | (() => undefined | SelectFilterKeySpecifier);
        fields?: SelectFilterFieldPolicy;
    };
    SeparatorFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SeparatorFilterKeySpecifier | (() => undefined | SeparatorFilterKeySpecifier);
        fields?: SeparatorFilterFieldPolicy;
    };
    SetCategoryMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetCategoryMetaPayloadKeySpecifier | (() => undefined | SetCategoryMetaPayloadKeySpecifier);
        fields?: SetCategoryMetaPayloadFieldPolicy;
    };
    SetCategoryMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | SetCategoryMetasPayloadKeySpecifier
            | (() => undefined | SetCategoryMetasPayloadKeySpecifier);
        fields?: SetCategoryMetasPayloadFieldPolicy;
    };
    SetChapterMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetChapterMetaPayloadKeySpecifier | (() => undefined | SetChapterMetaPayloadKeySpecifier);
        fields?: SetChapterMetaPayloadFieldPolicy;
    };
    SetChapterMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetChapterMetasPayloadKeySpecifier | (() => undefined | SetChapterMetasPayloadKeySpecifier);
        fields?: SetChapterMetasPayloadFieldPolicy;
    };
    SetGlobalMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetGlobalMetaPayloadKeySpecifier | (() => undefined | SetGlobalMetaPayloadKeySpecifier);
        fields?: SetGlobalMetaPayloadFieldPolicy;
    };
    SetGlobalMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetGlobalMetasPayloadKeySpecifier | (() => undefined | SetGlobalMetasPayloadKeySpecifier);
        fields?: SetGlobalMetasPayloadFieldPolicy;
    };
    SetMangaMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetMangaMetaPayloadKeySpecifier | (() => undefined | SetMangaMetaPayloadKeySpecifier);
        fields?: SetMangaMetaPayloadFieldPolicy;
    };
    SetMangaMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetMangaMetasPayloadKeySpecifier | (() => undefined | SetMangaMetasPayloadKeySpecifier);
        fields?: SetMangaMetasPayloadFieldPolicy;
    };
    SetSettingsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetSettingsPayloadKeySpecifier | (() => undefined | SetSettingsPayloadKeySpecifier);
        fields?: SetSettingsPayloadFieldPolicy;
    };
    SetSourceMetaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetSourceMetaPayloadKeySpecifier | (() => undefined | SetSourceMetaPayloadKeySpecifier);
        fields?: SetSourceMetaPayloadFieldPolicy;
    };
    SetSourceMetasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SetSourceMetasPayloadKeySpecifier | (() => undefined | SetSourceMetasPayloadKeySpecifier);
        fields?: SetSourceMetasPayloadFieldPolicy;
    };
    Settings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SettingsKeySpecifier | (() => undefined | SettingsKeySpecifier);
        fields?: SettingsFieldPolicy;
    };
    SettingsDownloadConversion?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | SettingsDownloadConversionKeySpecifier
            | (() => undefined | SettingsDownloadConversionKeySpecifier);
        fields?: SettingsDownloadConversionFieldPolicy;
    };
    SettingsDownloadConversionHeader?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | SettingsDownloadConversionHeaderKeySpecifier
            | (() => undefined | SettingsDownloadConversionHeaderKeySpecifier);
        fields?: SettingsDownloadConversionHeaderFieldPolicy;
    };
    SettingsDownloadConversionHeaderType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | SettingsDownloadConversionHeaderTypeKeySpecifier
            | (() => undefined | SettingsDownloadConversionHeaderTypeKeySpecifier);
        fields?: SettingsDownloadConversionHeaderTypeFieldPolicy;
    };
    SettingsDownloadConversionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | SettingsDownloadConversionTypeKeySpecifier
            | (() => undefined | SettingsDownloadConversionTypeKeySpecifier);
        fields?: SettingsDownloadConversionTypeFieldPolicy;
    };
    SettingsType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SettingsTypeKeySpecifier | (() => undefined | SettingsTypeKeySpecifier);
        fields?: SettingsTypeFieldPolicy;
    };
    SortFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SortFilterKeySpecifier | (() => undefined | SortFilterKeySpecifier);
        fields?: SortFilterFieldPolicy;
    };
    SortSelection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SortSelectionKeySpecifier | (() => undefined | SortSelectionKeySpecifier);
        fields?: SortSelectionFieldPolicy;
    };
    SourceEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SourceEdgeKeySpecifier | (() => undefined | SourceEdgeKeySpecifier);
        fields?: SourceEdgeFieldPolicy;
    };
    SourceMetaType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SourceMetaTypeKeySpecifier | (() => undefined | SourceMetaTypeKeySpecifier);
        fields?: SourceMetaTypeFieldPolicy;
    };
    SourceNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SourceNodeListKeySpecifier | (() => undefined | SourceNodeListKeySpecifier);
        fields?: SourceNodeListFieldPolicy;
    };
    SourceType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SourceTypeKeySpecifier | (() => undefined | SourceTypeKeySpecifier);
        fields?: SourceTypeFieldPolicy;
    };
    StartArchiveBootstrapPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | StartArchiveBootstrapPayloadKeySpecifier
            | (() => undefined | StartArchiveBootstrapPayloadKeySpecifier);
        fields?: StartArchiveBootstrapPayloadFieldPolicy;
    };
    StartChapterIntegrityAuditPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | StartChapterIntegrityAuditPayloadKeySpecifier
            | (() => undefined | StartChapterIntegrityAuditPayloadKeySpecifier);
        fields?: StartChapterIntegrityAuditPayloadFieldPolicy;
    };
    StartChapterRevisionSweepPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | StartChapterRevisionSweepPayloadKeySpecifier
            | (() => undefined | StartChapterRevisionSweepPayloadKeySpecifier);
        fields?: StartChapterRevisionSweepPayloadFieldPolicy;
    };
    StartDownloaderPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | StartDownloaderPayloadKeySpecifier | (() => undefined | StartDownloaderPayloadKeySpecifier);
        fields?: StartDownloaderPayloadFieldPolicy;
    };
    StartSyncPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | StartSyncPayloadKeySpecifier | (() => undefined | StartSyncPayloadKeySpecifier);
        fields?: StartSyncPayloadFieldPolicy;
    };
    StopDownloaderPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | StopDownloaderPayloadKeySpecifier | (() => undefined | StopDownloaderPayloadKeySpecifier);
        fields?: StopDownloaderPayloadFieldPolicy;
    };
    Subscription?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier);
        fields?: SubscriptionFieldPolicy;
    };
    SwitchPreference?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SwitchPreferenceKeySpecifier | (() => undefined | SwitchPreferenceKeySpecifier);
        fields?: SwitchPreferenceFieldPolicy;
    };
    SyncConflictInfoType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SyncConflictInfoTypeKeySpecifier | (() => undefined | SyncConflictInfoTypeKeySpecifier);
        fields?: SyncConflictInfoTypeFieldPolicy;
    };
    SyncStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | SyncStatusKeySpecifier | (() => undefined | SyncStatusKeySpecifier);
        fields?: SyncStatusFieldPolicy;
    };
    TextFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TextFilterKeySpecifier | (() => undefined | TextFilterKeySpecifier);
        fields?: TextFilterFieldPolicy;
    };
    TrackProgressPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackProgressPayloadKeySpecifier | (() => undefined | TrackProgressPayloadKeySpecifier);
        fields?: TrackProgressPayloadFieldPolicy;
    };
    TrackRecordEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackRecordEdgeKeySpecifier | (() => undefined | TrackRecordEdgeKeySpecifier);
        fields?: TrackRecordEdgeFieldPolicy;
    };
    TrackRecordNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackRecordNodeListKeySpecifier | (() => undefined | TrackRecordNodeListKeySpecifier);
        fields?: TrackRecordNodeListFieldPolicy;
    };
    TrackRecordType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackRecordTypeKeySpecifier | (() => undefined | TrackRecordTypeKeySpecifier);
        fields?: TrackRecordTypeFieldPolicy;
    };
    TrackSearchType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackSearchTypeKeySpecifier | (() => undefined | TrackSearchTypeKeySpecifier);
        fields?: TrackSearchTypeFieldPolicy;
    };
    TrackStatusType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackStatusTypeKeySpecifier | (() => undefined | TrackStatusTypeKeySpecifier);
        fields?: TrackStatusTypeFieldPolicy;
    };
    TrackerEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackerEdgeKeySpecifier | (() => undefined | TrackerEdgeKeySpecifier);
        fields?: TrackerEdgeFieldPolicy;
    };
    TrackerNodeList?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackerNodeListKeySpecifier | (() => undefined | TrackerNodeListKeySpecifier);
        fields?: TrackerNodeListFieldPolicy;
    };
    TrackerType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TrackerTypeKeySpecifier | (() => undefined | TrackerTypeKeySpecifier);
        fields?: TrackerTypeFieldPolicy;
    };
    TriStateFilter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | TriStateFilterKeySpecifier | (() => undefined | TriStateFilterKeySpecifier);
        fields?: TriStateFilterFieldPolicy;
    };
    UnbindTrackPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UnbindTrackPayloadKeySpecifier | (() => undefined | UnbindTrackPayloadKeySpecifier);
        fields?: UnbindTrackPayloadFieldPolicy;
    };
    UpdateCanonicalWorkPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateCanonicalWorkPayloadKeySpecifier
            | (() => undefined | UpdateCanonicalWorkPayloadKeySpecifier);
        fields?: UpdateCanonicalWorkPayloadFieldPolicy;
    };
    UpdateCategoriesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateCategoriesPayloadKeySpecifier
            | (() => undefined | UpdateCategoriesPayloadKeySpecifier);
        fields?: UpdateCategoriesPayloadFieldPolicy;
    };
    UpdateCategoryMangaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateCategoryMangaPayloadKeySpecifier
            | (() => undefined | UpdateCategoryMangaPayloadKeySpecifier);
        fields?: UpdateCategoryMangaPayloadFieldPolicy;
    };
    UpdateCategoryOrderPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateCategoryOrderPayloadKeySpecifier
            | (() => undefined | UpdateCategoryOrderPayloadKeySpecifier);
        fields?: UpdateCategoryOrderPayloadFieldPolicy;
    };
    UpdateCategoryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateCategoryPayloadKeySpecifier | (() => undefined | UpdateCategoryPayloadKeySpecifier);
        fields?: UpdateCategoryPayloadFieldPolicy;
    };
    UpdateChapterPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateChapterPayloadKeySpecifier | (() => undefined | UpdateChapterPayloadKeySpecifier);
        fields?: UpdateChapterPayloadFieldPolicy;
    };
    UpdateChaptersPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateChaptersPayloadKeySpecifier | (() => undefined | UpdateChaptersPayloadKeySpecifier);
        fields?: UpdateChaptersPayloadFieldPolicy;
    };
    UpdateExtensionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateExtensionPayloadKeySpecifier | (() => undefined | UpdateExtensionPayloadKeySpecifier);
        fields?: UpdateExtensionPayloadFieldPolicy;
    };
    UpdateExtensionsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateExtensionsPayloadKeySpecifier
            | (() => undefined | UpdateExtensionsPayloadKeySpecifier);
        fields?: UpdateExtensionsPayloadFieldPolicy;
    };
    UpdateLibraryMangaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateLibraryMangaPayloadKeySpecifier
            | (() => undefined | UpdateLibraryMangaPayloadKeySpecifier);
        fields?: UpdateLibraryMangaPayloadFieldPolicy;
    };
    UpdateLibraryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateLibraryPayloadKeySpecifier | (() => undefined | UpdateLibraryPayloadKeySpecifier);
        fields?: UpdateLibraryPayloadFieldPolicy;
    };
    UpdateMangaCategoriesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateMangaCategoriesPayloadKeySpecifier
            | (() => undefined | UpdateMangaCategoriesPayloadKeySpecifier);
        fields?: UpdateMangaCategoriesPayloadFieldPolicy;
    };
    UpdateMangaPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateMangaPayloadKeySpecifier | (() => undefined | UpdateMangaPayloadKeySpecifier);
        fields?: UpdateMangaPayloadFieldPolicy;
    };
    UpdateMangasCategoriesPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateMangasCategoriesPayloadKeySpecifier
            | (() => undefined | UpdateMangasCategoriesPayloadKeySpecifier);
        fields?: UpdateMangasCategoriesPayloadFieldPolicy;
    };
    UpdateMangasPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateMangasPayloadKeySpecifier | (() => undefined | UpdateMangasPayloadKeySpecifier);
        fields?: UpdateMangasPayloadFieldPolicy;
    };
    UpdateSourcePreferencePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateSourcePreferencePayloadKeySpecifier
            | (() => undefined | UpdateSourcePreferencePayloadKeySpecifier);
        fields?: UpdateSourcePreferencePayloadFieldPolicy;
    };
    UpdateStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateStatusKeySpecifier | (() => undefined | UpdateStatusKeySpecifier);
        fields?: UpdateStatusFieldPolicy;
    };
    UpdateStatusCategoryType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | UpdateStatusCategoryTypeKeySpecifier
            | (() => undefined | UpdateStatusCategoryTypeKeySpecifier);
        fields?: UpdateStatusCategoryTypeFieldPolicy;
    };
    UpdateStatusType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateStatusTypeKeySpecifier | (() => undefined | UpdateStatusTypeKeySpecifier);
        fields?: UpdateStatusTypeFieldPolicy;
    };
    UpdateStopPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateStopPayloadKeySpecifier | (() => undefined | UpdateStopPayloadKeySpecifier);
        fields?: UpdateStopPayloadFieldPolicy;
    };
    UpdateTrackPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdateTrackPayloadKeySpecifier | (() => undefined | UpdateTrackPayloadKeySpecifier);
        fields?: UpdateTrackPayloadFieldPolicy;
    };
    UpdaterJobsInfoType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdaterJobsInfoTypeKeySpecifier | (() => undefined | UpdaterJobsInfoTypeKeySpecifier);
        fields?: UpdaterJobsInfoTypeFieldPolicy;
    };
    UpdaterUpdates?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | UpdaterUpdatesKeySpecifier | (() => undefined | UpdaterUpdatesKeySpecifier);
        fields?: UpdaterUpdatesFieldPolicy;
    };
    ValidateBackupResult?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ValidateBackupResultKeySpecifier | (() => undefined | ValidateBackupResultKeySpecifier);
        fields?: ValidateBackupResultFieldPolicy;
    };
    ValidateBackupSource?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ValidateBackupSourceKeySpecifier | (() => undefined | ValidateBackupSourceKeySpecifier);
        fields?: ValidateBackupSourceFieldPolicy;
    };
    ValidateBackupTracker?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ValidateBackupTrackerKeySpecifier | (() => undefined | ValidateBackupTrackerKeySpecifier);
        fields?: ValidateBackupTrackerFieldPolicy;
    };
    WebUIUpdateCheck?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | WebUIUpdateCheckKeySpecifier | (() => undefined | WebUIUpdateCheckKeySpecifier);
        fields?: WebUIUpdateCheckFieldPolicy;
    };
    WebUIUpdateInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | WebUIUpdateInfoKeySpecifier | (() => undefined | WebUIUpdateInfoKeySpecifier);
        fields?: WebUIUpdateInfoFieldPolicy;
    };
    WebUIUpdatePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | WebUIUpdatePayloadKeySpecifier | (() => undefined | WebUIUpdatePayloadKeySpecifier);
        fields?: WebUIUpdatePayloadFieldPolicy;
    };
    WebUIUpdateStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | WebUIUpdateStatusKeySpecifier | (() => undefined | WebUIUpdateStatusKeySpecifier);
        fields?: WebUIUpdateStatusFieldPolicy;
    };
    WebViewTabType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | WebViewTabTypeKeySpecifier | (() => undefined | WebViewTabTypeKeySpecifier);
        fields?: WebViewTabTypeFieldPolicy;
    };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
