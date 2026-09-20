export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    /** A location in a connection that can be used for resuming pagination. */
    Cursor: { input: string; output: string };
    /** An ISO-8601 encoded duration string */
    Duration: { input: string; output: string };
    /** A 64-bit signed integer as a String */
    LongString: { input: string; output: string };
    /** A file part in a multipart request */
    Upload: { input: unknown; output: unknown };
};

export type AboutServerPayload = {
    __typename?: 'AboutServerPayload';
    buildTime: Scalars['LongString']['output'];
    buildType: Scalars['String']['output'];
    discord: Scalars['String']['output'];
    github: Scalars['String']['output'];
    name: Scalars['String']['output'];
    platformInfo: PlatformInfo;
    /** @deprecated The version includes the revision as the patch number */
    revision: Scalars['String']['output'];
    version: Scalars['String']['output'];
};

export type AboutWebUi = {
    __typename?: 'AboutWebUI';
    channel: WebUiChannel;
    tag: Scalars['String']['output'];
    updateTimestamp: Scalars['LongString']['output'];
};

export type AcceptChapterRevisionCandidatesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type AcceptChapterRevisionCandidatesPayload = {
    __typename?: 'AcceptChapterRevisionCandidatesPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type AddExtensionStoreInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    indexUrl: Scalars['String']['input'];
};

export type AddExtensionStorePayload = {
    __typename?: 'AddExtensionStorePayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    extensionStore: ExtensionStoreType;
};

export type ApproveChapterRevisionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type ApproveChapterRevisionsPayload = {
    __typename?: 'ApproveChapterRevisionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type ArchiveBootstrapCategoryPolicyInput = {
    categoryId: Scalars['Int']['input'];
    policy: MangaAcquisitionPolicy;
};

export type ArchiveBootstrapCategoryPolicyType = {
    __typename?: 'ArchiveBootstrapCategoryPolicyType';
    categoryId: Scalars['Int']['output'];
    policy: MangaAcquisitionPolicy;
};

export type ArchiveBootstrapItemEdge = {
    __typename?: 'ArchiveBootstrapItemEdge';
    cursor: Scalars['Cursor']['output'];
    node: ArchiveBootstrapItemType;
};

export type ArchiveBootstrapItemNodeList = {
    __typename?: 'ArchiveBootstrapItemNodeList';
    edges: Array<ArchiveBootstrapItemEdge>;
    nodes: Array<ArchiveBootstrapItemType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ArchiveBootstrapItemOrderBy {
    Id = 'ID',
}

export type ArchiveBootstrapItemOrderInput = {
    by: ArchiveBootstrapItemOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export enum ArchiveBootstrapItemState {
    Cancelled = 'CANCELLED',
    Complete = 'COMPLETE',
    Failed = 'FAILED',
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    RetryWait = 'RETRY_WAIT',
    Skipped = 'SKIPPED',
    UnresolvedSource = 'UNRESOLVED_SOURCE',
}

export type ArchiveBootstrapItemType = {
    __typename?: 'ArchiveBootstrapItemType';
    attempts: Scalars['Int']['output'];
    candidateCount?: Maybe<Scalars['Int']['output']>;
    categoryIds: Array<Scalars['Int']['output']>;
    dueAt?: Maybe<Scalars['LongString']['output']>;
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    id: Scalars['Int']['output'];
    lastError?: Maybe<Scalars['String']['output']>;
    mangaId?: Maybe<Scalars['Int']['output']>;
    mangaUrl?: Maybe<Scalars['String']['output']>;
    policy: MangaAcquisitionPolicy;
    sessionId: Scalars['Int']['output'];
    sourceId?: Maybe<Scalars['LongString']['output']>;
    startedAt?: Maybe<Scalars['LongString']['output']>;
    state: ArchiveBootstrapItemState;
    title: Scalars['String']['output'];
    updatedAt: Scalars['LongString']['output'];
};

export type ArchiveBootstrapProgressType = {
    __typename?: 'ArchiveBootstrapProgressType';
    cancelled: Scalars['Int']['output'];
    complete: Scalars['Int']['output'];
    failed: Scalars['Int']['output'];
    pending: Scalars['Int']['output'];
    processing: Scalars['Int']['output'];
    remaining: Scalars['Int']['output'];
    retryWait: Scalars['Int']['output'];
    skipped: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
    unresolvedSource: Scalars['Int']['output'];
};

export type ArchiveBootstrapSessionEdge = {
    __typename?: 'ArchiveBootstrapSessionEdge';
    cursor: Scalars['Cursor']['output'];
    node: ArchiveBootstrapSessionType;
};

export type ArchiveBootstrapSessionInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    sessionId: Scalars['Int']['input'];
};

export type ArchiveBootstrapSessionNodeList = {
    __typename?: 'ArchiveBootstrapSessionNodeList';
    edges: Array<ArchiveBootstrapSessionEdge>;
    nodes: Array<ArchiveBootstrapSessionType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ArchiveBootstrapSessionOrderBy {
    Id = 'ID',
    StartedAt = 'STARTED_AT',
}

export type ArchiveBootstrapSessionOrderInput = {
    by: ArchiveBootstrapSessionOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type ArchiveBootstrapSessionPayload = {
    __typename?: 'ArchiveBootstrapSessionPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ArchiveBootstrapSessionType>;
};

export type ArchiveBootstrapSessionType = {
    __typename?: 'ArchiveBootstrapSessionType';
    cancelledAt?: Maybe<Scalars['LongString']['output']>;
    categoryPolicies: Array<ArchiveBootstrapCategoryPolicyType>;
    defaultPolicy: MangaAcquisitionPolicy;
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    id: Scalars['Int']['output'];
    interItemDelaySeconds: Scalars['LongString']['output'];
    lastItemAt?: Maybe<Scalars['LongString']['output']>;
    maxAttempts: Scalars['Int']['output'];
    nextItemAt?: Maybe<Scalars['LongString']['output']>;
    pausedAt?: Maybe<Scalars['LongString']['output']>;
    retrySeconds: Scalars['LongString']['output'];
    startedAt: Scalars['LongString']['output'];
    state: ArchiveBootstrapState;
    updatedAt: Scalars['LongString']['output'];
};

export enum ArchiveBootstrapState {
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    CompletedWithErrors = 'COMPLETED_WITH_ERRORS',
    Paused = 'PAUSED',
    Running = 'RUNNING',
}

export type ArchiveBootstrapUnresolvedSourceType = {
    __typename?: 'ArchiveBootstrapUnresolvedSourceType';
    mangaCount: Scalars['Int']['output'];
    sampleTitles: Array<Scalars['String']['output']>;
    sourceId?: Maybe<Scalars['LongString']['output']>;
};

export type AttachMangaToCanonicalWorkInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    isPrimary: Scalars['Boolean']['input'];
    mangaId: Scalars['Int']['input'];
    priority?: InputMaybe<Scalars['Int']['input']>;
    role: CanonicalBindingRole;
    workKey: Scalars['String']['input'];
};

export type AttachMangaToCanonicalWorkPayload = {
    __typename?: 'AttachMangaToCanonicalWorkPayload';
    binding?: Maybe<CanonicalSourceBindingType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
};

export enum AuthMode {
    BasicAuth = 'BASIC_AUTH',
    None = 'NONE',
    SimpleLogin = 'SIMPLE_LOGIN',
    UiLogin = 'UI_LOGIN',
}

export enum BackupRestoreAuditLevel {
    MangaError = 'MANGA_ERROR',
    MissingSource = 'MISSING_SOURCE',
}

export type BackupRestoreAuditType = {
    __typename?: 'BackupRestoreAuditType';
    createdAt: Scalars['LongString']['output'];
    id: Scalars['Int']['output'];
    level: BackupRestoreAuditLevel;
    mangaIndex?: Maybe<Scalars['Int']['output']>;
    message: Scalars['String']['output'];
    phase: BackupRestorePhase;
    sourceId?: Maybe<Scalars['LongString']['output']>;
    sourceName?: Maybe<Scalars['String']['output']>;
};

export type BackupRestoreErrorCountsType = {
    __typename?: 'BackupRestoreErrorCountsType';
    mangaErrors: Scalars['Int']['output'];
    missingSources: Scalars['Int']['output'];
};

export enum BackupRestoreHandoffState {
    Blocked = 'BLOCKED',
    Failed = 'FAILED',
    None = 'NONE',
    Pending = 'PENDING',
    Started = 'STARTED',
}

export type BackupRestoreJobInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    restoreId: Scalars['String']['input'];
};

export type BackupRestoreJobPayload = {
    __typename?: 'BackupRestoreJobPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    job?: Maybe<BackupRestoreJobType>;
};

export enum BackupRestoreJobState {
    Cancelled = 'CANCELLED',
    Failure = 'FAILURE',
    Queued = 'QUEUED',
    Running = 'RUNNING',
    Success = 'SUCCESS',
}

export type BackupRestoreJobType = {
    __typename?: 'BackupRestoreJobType';
    cancelledAt?: Maybe<Scalars['LongString']['output']>;
    createdAt: Scalars['LongString']['output'];
    errorCount: Scalars['Int']['output'];
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    handoffError?: Maybe<Scalars['String']['output']>;
    handoffSessionId?: Maybe<Scalars['Int']['output']>;
    handoffState: BackupRestoreHandoffState;
    id: Scalars['Int']['output'];
    lastError?: Maybe<Scalars['String']['output']>;
    phase: BackupRestorePhase;
    progress: Scalars['Int']['output'];
    restoreId: Scalars['String']['output'];
    stagedPayloadRetained: Scalars['Boolean']['output'];
    startedAt?: Maybe<Scalars['LongString']['output']>;
    state: BackupRestoreJobState;
    total: Scalars['Int']['output'];
    updatedAt: Scalars['LongString']['output'];
};

export enum BackupRestorePhase {
    Categories = 'CATEGORIES',
    Completed = 'COMPLETED',
    Manga = 'MANGA',
    Meta = 'META',
    Pending = 'PENDING',
    Settings = 'SETTINGS',
}

export enum BackupRestoreState {
    Failure = 'FAILURE',
    Idle = 'IDLE',
    RestoringCategories = 'RESTORING_CATEGORIES',
    RestoringManga = 'RESTORING_MANGA',
    RestoringMeta = 'RESTORING_META',
    RestoringSettings = 'RESTORING_SETTINGS',
    Success = 'SUCCESS',
}

export type BackupRestoreStatus = {
    __typename?: 'BackupRestoreStatus';
    mangaProgress: Scalars['Int']['output'];
    state: BackupRestoreState;
    totalManga: Scalars['Int']['output'];
};

export type BindTrackInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    mangaId: Scalars['Int']['input'];
    /** This will only work if the tracker of the track record supports private tracking */
    private?: InputMaybe<Scalars['Boolean']['input']>;
    remoteId: Scalars['LongString']['input'];
    trackerId: Scalars['Int']['input'];
};

export type BindTrackPayload = {
    __typename?: 'BindTrackPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    trackRecord: TrackRecordType;
};

export type BindTrackRecordInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    mangaId: Scalars['Int']['input'];
    trackRecordId: Scalars['Int']['input'];
};

export type BindTrackRecordPayload = {
    __typename?: 'BindTrackRecordPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    trackRecord: TrackRecordType;
};

export type BooleanFilterInput = {
    distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
    distinctFromAll?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    distinctFromAny?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    equalTo?: InputMaybe<Scalars['Boolean']['input']>;
    greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
    greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<Scalars['Boolean']['input']>;
    lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
    notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
    notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
    notEqualToAll?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    notEqualToAny?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type BootstrapCategoryPolicyInput = {
    categoryName: Scalars['String']['input'];
    policy: MangaAcquisitionPolicy;
};

export enum CanonicalBindingRole {
    Active = 'ACTIVE',
    Disabled = 'DISABLED',
    Fallback = 'FALLBACK',
}

export enum CanonicalDuplicateStrategy {
    KeepAll = 'KEEP_ALL',
    PreferPrimarySource = 'PREFER_PRIMARY_SOURCE',
    PreferScanlator = 'PREFER_SCANLATOR',
}

export type CanonicalIdentityExportType = {
    __typename?: 'CanonicalIdentityExportType';
    bindingCount: Scalars['Int']['output'];
    payload: Scalars['String']['output'];
    schemaVersion: Scalars['Int']['output'];
    workCount: Scalars['Int']['output'];
};

export type CanonicalIdentityImportType = {
    __typename?: 'CanonicalIdentityImportType';
    bindingsBound: Scalars['Int']['output'];
    bindingsRebound: Scalars['Int']['output'];
    bindingsUnresolved: Scalars['Int']['output'];
    worksCreated: Scalars['Int']['output'];
    worksUpdated: Scalars['Int']['output'];
};

export type CanonicalIdentityStatusType = {
    __typename?: 'CanonicalIdentityStatusType';
    activeBindingCount: Scalars['Int']['output'];
    bindingCount: Scalars['Int']['output'];
    detachedBindingCount: Scalars['Int']['output'];
    disabledBindingCount: Scalars['Int']['output'];
    duplicatePolicyApplied: Scalars['Boolean']['output'];
    fallbackBindingCount: Scalars['Int']['output'];
    primaryBindingCount: Scalars['Int']['output'];
    workCount: Scalars['Int']['output'];
};

export type CanonicalSourceBindingEdge = Edge & {
    __typename?: 'CanonicalSourceBindingEdge';
    cursor: Scalars['Cursor']['output'];
    node: CanonicalSourceBindingType;
};

export type CanonicalSourceBindingNodeList = NodeList & {
    __typename?: 'CanonicalSourceBindingNodeList';
    edges: Array<CanonicalSourceBindingEdge>;
    nodes: Array<CanonicalSourceBindingType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type CanonicalSourceBindingType = {
    __typename?: 'CanonicalSourceBindingType';
    acquisitionEligible: Scalars['Boolean']['output'];
    boundAt: Scalars['LongString']['output'];
    id: Scalars['Int']['output'];
    isPrimary: Scalars['Boolean']['output'];
    manga?: Maybe<MangaType>;
    mangaAvailable: Scalars['Boolean']['output'];
    mangaId?: Maybe<Scalars['Int']['output']>;
    mangaTitle?: Maybe<Scalars['String']['output']>;
    mangaUrl?: Maybe<Scalars['String']['output']>;
    priority: Scalars['Int']['output'];
    role: CanonicalBindingRole;
    sourceId?: Maybe<Scalars['LongString']['output']>;
    sourceName?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['LongString']['output'];
    work?: Maybe<CanonicalWorkType>;
    workId: Scalars['Int']['output'];
    workKey: Scalars['String']['output'];
};

export type CanonicalWorkEdge = Edge & {
    __typename?: 'CanonicalWorkEdge';
    cursor: Scalars['Cursor']['output'];
    node: CanonicalWorkType;
};

export type CanonicalWorkNodeList = NodeList & {
    __typename?: 'CanonicalWorkNodeList';
    edges: Array<CanonicalWorkEdge>;
    nodes: Array<CanonicalWorkType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum CanonicalWorkOrderBy {
    CreatedAt = 'CREATED_AT',
    Id = 'ID',
    UpdatedAt = 'UPDATED_AT',
}

export type CanonicalWorkOrderInput = {
    by: CanonicalWorkOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type CanonicalWorkType = {
    __typename?: 'CanonicalWorkType';
    bindingCount: Scalars['Int']['output'];
    bindings: CanonicalSourceBindingNodeList;
    createdAt: Scalars['LongString']['output'];
    duplicatePolicyApplied: Scalars['Boolean']['output'];
    duplicateStrategy: CanonicalDuplicateStrategy;
    id: Scalars['Int']['output'];
    preferredScanlator?: Maybe<Scalars['String']['output']>;
    primaryBinding?: Maybe<CanonicalSourceBindingType>;
    title: Scalars['String']['output'];
    updatedAt: Scalars['LongString']['output'];
    workKey: Scalars['String']['output'];
};

export enum CanonicalWriteOutcome {
    Applied = 'APPLIED',
    Conflict = 'CONFLICT',
    NotFound = 'NOT_FOUND',
}

export type CategoryConditionInput = {
    default?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryEdge = Edge & {
    __typename?: 'CategoryEdge';
    cursor: Scalars['Cursor']['output'];
    node: CategoryType;
};

export type CategoryFilterInput = {
    and?: InputMaybe<Array<CategoryFilterInput>>;
    default?: InputMaybe<BooleanFilterInput>;
    id?: InputMaybe<IntFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<CategoryFilterInput>;
    or?: InputMaybe<Array<CategoryFilterInput>>;
    order?: InputMaybe<IntFilterInput>;
};

export enum CategoryJobStatus {
    Skipped = 'SKIPPED',
    Updating = 'UPDATING',
}

export type CategoryMetaType = MetaType & {
    __typename?: 'CategoryMetaType';
    category: CategoryType;
    categoryId: Scalars['Int']['output'];
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type CategoryMetaTypeInput = {
    categoryId: Scalars['Int']['input'];
    key: Scalars['String']['input'];
    value: Scalars['String']['input'];
};

export type CategoryNodeList = NodeList & {
    __typename?: 'CategoryNodeList';
    edges: Array<CategoryEdge>;
    nodes: Array<CategoryType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum CategoryOrderBy {
    Id = 'ID',
    Name = 'NAME',
    Order = 'ORDER',
}

export type CategoryOrderInput = {
    by: CategoryOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type CategoryType = {
    __typename?: 'CategoryType';
    default: Scalars['Boolean']['output'];
    id: Scalars['Int']['output'];
    includeInDownload: IncludeOrExclude;
    includeInUpdate: IncludeOrExclude;
    isDefaultCategory: Scalars['Boolean']['output'];
    mangas: MangaNodeList;
    meta: Array<CategoryMetaType>;
    name: Scalars['String']['output'];
    order: Scalars['Int']['output'];
};

export type CategoryUpdateType = {
    __typename?: 'CategoryUpdateType';
    category: CategoryType;
    status: CategoryJobStatus;
};

export enum CbzMediaType {
    Compatible = 'COMPATIBLE',
    Legacy = 'LEGACY',
    Modern = 'MODERN',
}

export type ChangeCanonicalBindingInput = {
    bindingId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    priority?: InputMaybe<Scalars['Int']['input']>;
    role?: InputMaybe<CanonicalBindingRole>;
};

export type ChangeCanonicalBindingPayload = {
    __typename?: 'ChangeCanonicalBindingPayload';
    binding?: Maybe<CanonicalSourceBindingType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
};

export enum ChapterAcquisitionState {
    Approved = 'APPROVED',
    Complete = 'COMPLETE',
    Discovered = 'DISCOVERED',
    DownloadedLocal = 'DOWNLOADED_LOCAL',
    Downloading = 'DOWNLOADING',
    DownloadFailed = 'DOWNLOAD_FAILED',
    PendingApproval = 'PENDING_APPROVAL',
    Queued = 'QUEUED',
    Validating = 'VALIDATING',
    ValidationFailed = 'VALIDATION_FAILED',
}

export enum ChapterArchiveState {
    ArchiveUnconfirmed = 'ARCHIVE_UNCONFIRMED',
    Committing = 'COMMITTING',
    CommitFailed = 'COMMIT_FAILED',
    NotCommitted = 'NOT_COMMITTED',
    RemoteConfirmed = 'REMOTE_CONFIRMED',
    RemotePending = 'REMOTE_PENDING',
}

export type ChapterConditionInput = {
    chapterNumber?: InputMaybe<Scalars['Float']['input']>;
    fetchedAt?: InputMaybe<Scalars['LongString']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
    isDownloaded?: InputMaybe<Scalars['Boolean']['input']>;
    isRead?: InputMaybe<Scalars['Boolean']['input']>;
    lastPageRead?: InputMaybe<Scalars['Int']['input']>;
    lastReadAt?: InputMaybe<Scalars['LongString']['input']>;
    mangaId?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    pageCount?: InputMaybe<Scalars['Int']['input']>;
    realUrl?: InputMaybe<Scalars['String']['input']>;
    scanlator?: InputMaybe<Scalars['String']['input']>;
    sourceOrder?: InputMaybe<Scalars['Int']['input']>;
    uploadDate?: InputMaybe<Scalars['LongString']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type ChapterDownloadReorderInput = {
    chapterId: Scalars['Int']['input'];
    to: Scalars['Int']['input'];
};

export type ChapterEdge = Edge & {
    __typename?: 'ChapterEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterType;
};

export type ChapterFilterInput = {
    and?: InputMaybe<Array<ChapterFilterInput>>;
    chapterNumber?: InputMaybe<DoubleFilterInput>;
    fetchedAt?: InputMaybe<LongFilterInput>;
    id?: InputMaybe<IntFilterInput>;
    inLibrary?: InputMaybe<BooleanFilterInput>;
    isBookmarked?: InputMaybe<BooleanFilterInput>;
    isDownloaded?: InputMaybe<BooleanFilterInput>;
    isRead?: InputMaybe<BooleanFilterInput>;
    lastPageRead?: InputMaybe<IntFilterInput>;
    lastReadAt?: InputMaybe<LongFilterInput>;
    mangaId?: InputMaybe<IntFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ChapterFilterInput>;
    or?: InputMaybe<Array<ChapterFilterInput>>;
    pageCount?: InputMaybe<IntFilterInput>;
    realUrl?: InputMaybe<StringFilterInput>;
    scanlator?: InputMaybe<StringFilterInput>;
    sourceOrder?: InputMaybe<IntFilterInput>;
    uploadDate?: InputMaybe<LongFilterInput>;
    url?: InputMaybe<StringFilterInput>;
};

export type ChapterIntegrityAuditItemEdge = {
    __typename?: 'ChapterIntegrityAuditItemEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterIntegrityAuditItemType;
};

export type ChapterIntegrityAuditItemNodeList = {
    __typename?: 'ChapterIntegrityAuditItemNodeList';
    edges: Array<ChapterIntegrityAuditItemEdge>;
    nodes: Array<ChapterIntegrityAuditItemType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterIntegrityAuditItemOrderBy {
    Id = 'ID',
}

export type ChapterIntegrityAuditItemOrderInput = {
    by: ChapterIntegrityAuditItemOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export enum ChapterIntegrityAuditItemState {
    Checking = 'CHECKING',
    Corrupt = 'CORRUPT',
    Failed = 'FAILED',
    Missing = 'MISSING',
    Pending = 'PENDING',
    RetryWait = 'RETRY_WAIT',
    Skipped = 'SKIPPED',
    Verified = 'VERIFIED',
}

export type ChapterIntegrityAuditItemType = {
    __typename?: 'ChapterIntegrityAuditItemType';
    attempts: Scalars['Int']['output'];
    candidateKey: Scalars['String']['output'];
    chapterId?: Maybe<Scalars['Int']['output']>;
    chapterKey: Scalars['String']['output'];
    chapterName: Scalars['String']['output'];
    dueAt?: Maybe<Scalars['LongString']['output']>;
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    id: Scalars['Int']['output'];
    lastError?: Maybe<Scalars['String']['output']>;
    mangaId?: Maybe<Scalars['Int']['output']>;
    revisionId?: Maybe<Scalars['Int']['output']>;
    seriesTitle?: Maybe<Scalars['String']['output']>;
    sessionId: Scalars['Int']['output'];
    startedAt?: Maybe<Scalars['LongString']['output']>;
    state: ChapterIntegrityAuditItemState;
    updatedAt: Scalars['LongString']['output'];
};

export enum ChapterIntegrityAuditKind {
    ManualFull = 'MANUAL_FULL',
    ManualRecent = 'MANUAL_RECENT',
    Scheduled = 'SCHEDULED',
}

export type ChapterIntegrityAuditProgressType = {
    __typename?: 'ChapterIntegrityAuditProgressType';
    checking: Scalars['Int']['output'];
    corrupt: Scalars['Int']['output'];
    failed: Scalars['Int']['output'];
    findings: Scalars['Int']['output'];
    missing: Scalars['Int']['output'];
    pending: Scalars['Int']['output'];
    remaining: Scalars['Int']['output'];
    retryWait: Scalars['Int']['output'];
    skipped: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
    verified: Scalars['Int']['output'];
};

export type ChapterIntegrityAuditScheduleType = {
    __typename?: 'ChapterIntegrityAuditScheduleType';
    lastRunAt?: Maybe<Scalars['LongString']['output']>;
    lastSessionId?: Maybe<Scalars['Int']['output']>;
    nextDueAt: Scalars['LongString']['output'];
    updatedAt: Scalars['LongString']['output'];
};

export type ChapterIntegrityAuditSessionEdge = {
    __typename?: 'ChapterIntegrityAuditSessionEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterIntegrityAuditSessionType;
};

export type ChapterIntegrityAuditSessionInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    sessionId: Scalars['Int']['input'];
};

export type ChapterIntegrityAuditSessionNodeList = {
    __typename?: 'ChapterIntegrityAuditSessionNodeList';
    edges: Array<ChapterIntegrityAuditSessionEdge>;
    nodes: Array<ChapterIntegrityAuditSessionType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterIntegrityAuditSessionOrderBy {
    Id = 'ID',
    StartedAt = 'STARTED_AT',
}

export type ChapterIntegrityAuditSessionOrderInput = {
    by: ChapterIntegrityAuditSessionOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type ChapterIntegrityAuditSessionPayload = {
    __typename?: 'ChapterIntegrityAuditSessionPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    session?: Maybe<ChapterIntegrityAuditSessionType>;
};

export enum ChapterIntegrityAuditSessionState {
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    CompletedWithErrors = 'COMPLETED_WITH_ERRORS',
    Paused = 'PAUSED',
    Running = 'RUNNING',
}

export type ChapterIntegrityAuditSessionType = {
    __typename?: 'ChapterIntegrityAuditSessionType';
    cancelledAt?: Maybe<Scalars['LongString']['output']>;
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    id: Scalars['Int']['output'];
    itemDelaySeconds: Scalars['LongString']['output'];
    kind: ChapterIntegrityAuditKind;
    lastItemAt?: Maybe<Scalars['LongString']['output']>;
    maxAttempts: Scalars['Int']['output'];
    newestPerManga?: Maybe<Scalars['Int']['output']>;
    nextItemAt?: Maybe<Scalars['LongString']['output']>;
    pausedAt?: Maybe<Scalars['LongString']['output']>;
    retrySeconds: Scalars['LongString']['output'];
    startedAt: Scalars['LongString']['output'];
    state: ChapterIntegrityAuditSessionState;
    updatedAt: Scalars['LongString']['output'];
};

export type ChapterMetaType = MetaType & {
    __typename?: 'ChapterMetaType';
    chapter: ChapterType;
    chapterId: Scalars['Int']['output'];
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type ChapterMetaTypeInput = {
    chapterId: Scalars['Int']['input'];
    key: Scalars['String']['input'];
    value: Scalars['String']['input'];
};

export type ChapterNodeList = NodeList & {
    __typename?: 'ChapterNodeList';
    edges: Array<ChapterEdge>;
    nodes: Array<ChapterType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterOrderBy {
    ChapterNumber = 'CHAPTER_NUMBER',
    FetchedAt = 'FETCHED_AT',
    Id = 'ID',
    LastReadAt = 'LAST_READ_AT',
    Name = 'NAME',
    SourceOrder = 'SOURCE_ORDER',
    UploadDate = 'UPLOAD_DATE',
}

export type ChapterOrderInput = {
    by: ChapterOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export enum ChapterPublicationState {
    NotPublished = 'NOT_PUBLISHED',
    PublicationFailed = 'PUBLICATION_FAILED',
    Published = 'PUBLISHED',
    Publishing = 'PUBLISHING',
}

export enum ChapterRetentionState {
    Deleting = 'DELETING',
    Pruned = 'PRUNED',
    PruneFailed = 'PRUNE_FAILED',
    PruneQueued = 'PRUNE_QUEUED',
    RemoteDeletePending = 'REMOTE_DELETE_PENDING',
    Retained = 'RETAINED',
}

export type ChapterRevisionComparisonPageEdge = Edge & {
    __typename?: 'ChapterRevisionComparisonPageEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterRevisionComparisonPageType;
};

export type ChapterRevisionComparisonPageNodeList = NodeList & {
    __typename?: 'ChapterRevisionComparisonPageNodeList';
    edges: Array<ChapterRevisionComparisonPageEdge>;
    nodes: Array<ChapterRevisionComparisonPageType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type ChapterRevisionComparisonPageType = {
    __typename?: 'ChapterRevisionComparisonPageType';
    baselineHeight?: Maybe<Scalars['Int']['output']>;
    baselinePageIndex?: Maybe<Scalars['Int']['output']>;
    baselinePageUrl?: Maybe<Scalars['String']['output']>;
    baselinePreviewAvailable: Scalars['Boolean']['output'];
    baselineSize?: Maybe<Scalars['LongString']['output']>;
    baselineThumbnailUrl?: Maybe<Scalars['String']['output']>;
    baselineWidth?: Maybe<Scalars['Int']['output']>;
    candidateHeight?: Maybe<Scalars['Int']['output']>;
    candidatePageIndex?: Maybe<Scalars['Int']['output']>;
    candidatePageUrl?: Maybe<Scalars['String']['output']>;
    candidatePreviewAvailable: Scalars['Boolean']['output'];
    candidateSize?: Maybe<Scalars['LongString']['output']>;
    candidateThumbnailUrl?: Maybe<Scalars['String']['output']>;
    candidateWidth?: Maybe<Scalars['Int']['output']>;
    hammingDistance?: Maybe<Scalars['Int']['output']>;
    ordinal: Scalars['Int']['output'];
    state: ChapterRevisionPageAlignmentState;
};

export type ChapterRevisionComparisonType = {
    __typename?: 'ChapterRevisionComparisonType';
    addedCount: Scalars['Int']['output'];
    algorithmVersion: Scalars['String']['output'];
    alignedCount: Scalars['Int']['output'];
    allPagesVisuallyEquivalent: Scalars['Boolean']['output'];
    baselinePageCount: Scalars['Int']['output'];
    baselineRevisionId?: Maybe<Scalars['Int']['output']>;
    candidatePageCount: Scalars['Int']['output'];
    createdAt: Scalars['LongString']['output'];
    exactCount: Scalars['Int']['output'];
    hammingThreshold: Scalars['Int']['output'];
    hasLimitations: Scalars['Boolean']['output'];
    limitations?: Maybe<Scalars['String']['output']>;
    modifiedCount: Scalars['Int']['output'];
    removedCount: Scalars['Int']['output'];
    revisionId: Scalars['Int']['output'];
    updatedAt: Scalars['LongString']['output'];
    visuallyEquivalentCount: Scalars['Int']['output'];
};

export enum ChapterRevisionDiscoveryReason {
    BootstrapImport = 'BOOTSTRAP_IMPORT',
    ManualSweep = 'MANUAL_SWEEP',
    MetadataChange = 'METADATA_CHANGE',
    NewChapter = 'NEW_CHAPTER',
    PeriodicSweep = 'PERIODIC_SWEEP',
}

export enum ChapterRevisionDisposition {
    Accepted = 'ACCEPTED',
    Candidate = 'CANDIDATE',
    Rejected = 'REJECTED',
    Superseded = 'SUPERSEDED',
    Unchanged = 'UNCHANGED',
}

export type ChapterRevisionEdge = Edge & {
    __typename?: 'ChapterRevisionEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterRevisionType;
};

export enum ChapterRevisionIntegrityState {
    AuditFailed = 'AUDIT_FAILED',
    Corrupt = 'CORRUPT',
    Missing = 'MISSING',
    NeverAudited = 'NEVER_AUDITED',
    Verified = 'VERIFIED',
}

export enum ChapterRevisionMetadataField {
    ChapterNumber = 'CHAPTER_NUMBER',
    Memo = 'MEMO',
    Name = 'NAME',
    Scanlator = 'SCANLATOR',
    UploadDate = 'UPLOAD_DATE',
}

export type ChapterRevisionNodeList = NodeList & {
    __typename?: 'ChapterRevisionNodeList';
    edges: Array<ChapterRevisionEdge>;
    nodes: Array<ChapterRevisionType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterRevisionOrderBy {
    DiscoveredAt = 'DISCOVERED_AT',
    Id = 'ID',
    UpdatedAt = 'UPDATED_AT',
}

export type ChapterRevisionOrderInput = {
    by: ChapterRevisionOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export enum ChapterRevisionPageAlignmentState {
    Added = 'ADDED',
    Exact = 'EXACT',
    Modified = 'MODIFIED',
    Removed = 'REMOVED',
    VisuallyEquivalent = 'VISUALLY_EQUIVALENT',
}

export type ChapterRevisionRollbackEdge = {
    __typename?: 'ChapterRevisionRollbackEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterRevisionRollbackType;
};

export type ChapterRevisionRollbackNodeList = {
    __typename?: 'ChapterRevisionRollbackNodeList';
    edges: Array<ChapterRevisionRollbackEdge>;
    nodes: Array<ChapterRevisionRollbackType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterRevisionRollbackOrderBy {
    Id = 'ID',
}

export type ChapterRevisionRollbackOrderInput = {
    by: ChapterRevisionRollbackOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type ChapterRevisionRollbackType = {
    __typename?: 'ChapterRevisionRollbackType';
    chapterKey: Scalars['String']['output'];
    fromRevisionId?: Maybe<Scalars['Int']['output']>;
    id: Scalars['Int']['output'];
    rolledBackAt: Scalars['LongString']['output'];
    toRevisionId?: Maybe<Scalars['Int']['output']>;
};

export enum ChapterRevisionSignalConfidence {
    ContentProof = 'CONTENT_PROOF',
    ManifestHint = 'MANIFEST_HINT',
    MetadataHint = 'METADATA_HINT',
}

export type ChapterRevisionSweepItemEdge = {
    __typename?: 'ChapterRevisionSweepItemEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterRevisionSweepItemType;
};

export type ChapterRevisionSweepItemNodeList = {
    __typename?: 'ChapterRevisionSweepItemNodeList';
    edges: Array<ChapterRevisionSweepItemEdge>;
    nodes: Array<ChapterRevisionSweepItemType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterRevisionSweepItemOrderBy {
    Id = 'ID',
}

export type ChapterRevisionSweepItemOrderInput = {
    by: ChapterRevisionSweepItemOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export enum ChapterRevisionSweepItemState {
    Cancelled = 'CANCELLED',
    Complete = 'COMPLETE',
    Failed = 'FAILED',
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    RetryWait = 'RETRY_WAIT',
    Skipped = 'SKIPPED',
}

export type ChapterRevisionSweepItemType = {
    __typename?: 'ChapterRevisionSweepItemType';
    attempts: Scalars['Int']['output'];
    candidateCount?: Maybe<Scalars['Int']['output']>;
    chapterId?: Maybe<Scalars['Int']['output']>;
    chapterKey: Scalars['String']['output'];
    chapterName: Scalars['String']['output'];
    dueAt?: Maybe<Scalars['LongString']['output']>;
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    id: Scalars['Int']['output'];
    lastError?: Maybe<Scalars['String']['output']>;
    mangaId?: Maybe<Scalars['Int']['output']>;
    policy: MangaAcquisitionPolicy;
    seriesTitle: Scalars['String']['output'];
    sessionId: Scalars['Int']['output'];
    sourceChapterUrl: Scalars['String']['output'];
    sourceId?: Maybe<Scalars['LongString']['output']>;
    startedAt?: Maybe<Scalars['LongString']['output']>;
    state: ChapterRevisionSweepItemState;
    updatedAt: Scalars['LongString']['output'];
};

export enum ChapterRevisionSweepKind {
    ManualFull = 'MANUAL_FULL',
    ManualRecent = 'MANUAL_RECENT',
    Scheduled = 'SCHEDULED',
}

export type ChapterRevisionSweepProgressType = {
    __typename?: 'ChapterRevisionSweepProgressType';
    cancelled: Scalars['Int']['output'];
    complete: Scalars['Int']['output'];
    failed: Scalars['Int']['output'];
    pending: Scalars['Int']['output'];
    processing: Scalars['Int']['output'];
    remaining: Scalars['Int']['output'];
    retryWait: Scalars['Int']['output'];
    skipped: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ChapterRevisionSweepScheduleType = {
    __typename?: 'ChapterRevisionSweepScheduleType';
    lastRunAt?: Maybe<Scalars['LongString']['output']>;
    lastSessionId?: Maybe<Scalars['Int']['output']>;
    nextDueAt: Scalars['LongString']['output'];
    updatedAt: Scalars['LongString']['output'];
};

export type ChapterRevisionSweepSessionEdge = {
    __typename?: 'ChapterRevisionSweepSessionEdge';
    cursor: Scalars['Cursor']['output'];
    node: ChapterRevisionSweepSessionType;
};

export type ChapterRevisionSweepSessionInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    sessionId: Scalars['Int']['input'];
};

export type ChapterRevisionSweepSessionNodeList = {
    __typename?: 'ChapterRevisionSweepSessionNodeList';
    edges: Array<ChapterRevisionSweepSessionEdge>;
    nodes: Array<ChapterRevisionSweepSessionType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ChapterRevisionSweepSessionOrderBy {
    Id = 'ID',
    StartedAt = 'STARTED_AT',
}

export type ChapterRevisionSweepSessionOrderInput = {
    by: ChapterRevisionSweepSessionOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type ChapterRevisionSweepSessionPayload = {
    __typename?: 'ChapterRevisionSweepSessionPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ChapterRevisionSweepSessionType>;
};

export enum ChapterRevisionSweepSessionState {
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    CompletedWithErrors = 'COMPLETED_WITH_ERRORS',
    Paused = 'PAUSED',
    Running = 'RUNNING',
}

export type ChapterRevisionSweepSessionType = {
    __typename?: 'ChapterRevisionSweepSessionType';
    cancelledAt?: Maybe<Scalars['LongString']['output']>;
    finishedAt?: Maybe<Scalars['LongString']['output']>;
    id: Scalars['Int']['output'];
    itemDelaySeconds: Scalars['LongString']['output'];
    kind: ChapterRevisionSweepKind;
    lastItemAt?: Maybe<Scalars['LongString']['output']>;
    maxAttempts: Scalars['Int']['output'];
    newestPerSeries?: Maybe<Scalars['Int']['output']>;
    nextItemAt?: Maybe<Scalars['LongString']['output']>;
    pausedAt?: Maybe<Scalars['LongString']['output']>;
    retrySeconds: Scalars['LongString']['output'];
    startedAt: Scalars['LongString']['output'];
    state: ChapterRevisionSweepSessionState;
    updatedAt: Scalars['LongString']['output'];
};

export type ChapterRevisionType = {
    __typename?: 'ChapterRevisionType';
    acceptedAt?: Maybe<Scalars['LongString']['output']>;
    acquisitionState: ChapterAcquisitionState;
    activatedAt?: Maybe<Scalars['LongString']['output']>;
    activeCbzHash?: Maybe<Scalars['String']['output']>;
    activeCbzPath?: Maybe<Scalars['String']['output']>;
    activeCbzSize?: Maybe<Scalars['LongString']['output']>;
    approvedAt?: Maybe<Scalars['LongString']['output']>;
    archiveAttempts: Scalars['Int']['output'];
    archiveCbzHash?: Maybe<Scalars['String']['output']>;
    archiveCbzPath?: Maybe<Scalars['String']['output']>;
    archiveCbzSize?: Maybe<Scalars['LongString']['output']>;
    archiveLastAttemptAt?: Maybe<Scalars['LongString']['output']>;
    archiveLastError?: Maybe<Scalars['String']['output']>;
    archiveLastVerificationAt?: Maybe<Scalars['LongString']['output']>;
    archiveManifestHash?: Maybe<Scalars['String']['output']>;
    archiveManifestPath?: Maybe<Scalars['String']['output']>;
    archiveManifestSize?: Maybe<Scalars['LongString']['output']>;
    archiveNextVerificationAt?: Maybe<Scalars['LongString']['output']>;
    archiveState: ChapterArchiveState;
    archiveVerificationAttempts: Scalars['Int']['output'];
    archivedAt?: Maybe<Scalars['LongString']['output']>;
    attempts: Scalars['Int']['output'];
    candidateKey: Scalars['String']['output'];
    candidatePath?: Maybe<Scalars['String']['output']>;
    changedMetadataFields: Array<ChapterRevisionMetadataField>;
    chapter?: Maybe<ChapterType>;
    chapterId?: Maybe<Scalars['Int']['output']>;
    chapterKey: Scalars['String']['output'];
    chapterNumber: Scalars['Float']['output'];
    contentHash?: Maybe<Scalars['String']['output']>;
    deletedAt?: Maybe<Scalars['LongString']['output']>;
    discoveredAt: Scalars['LongString']['output'];
    discoveryReason: ChapterRevisionDiscoveryReason;
    disposition: ChapterRevisionDisposition;
    downloadUrl?: Maybe<Scalars['String']['output']>;
    id: Scalars['Int']['output'];
    integrityLastAuditSessionId?: Maybe<Scalars['Int']['output']>;
    integrityLastAuditedAt?: Maybe<Scalars['LongString']['output']>;
    integrityLastError?: Maybe<Scalars['String']['output']>;
    integrityState: ChapterRevisionIntegrityState;
    isActiveRevision: Scalars['Boolean']['output'];
    lastAttemptAt?: Maybe<Scalars['LongString']['output']>;
    lastError?: Maybe<Scalars['String']['output']>;
    manga?: Maybe<MangaType>;
    mangaId?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    pageCount?: Maybe<Scalars['Int']['output']>;
    prunedAt?: Maybe<Scalars['LongString']['output']>;
    publicationAttempts: Scalars['Int']['output'];
    publicationLastAttemptAt?: Maybe<Scalars['LongString']['output']>;
    publicationLastError?: Maybe<Scalars['String']['output']>;
    publicationState: ChapterPublicationState;
    publishedAt?: Maybe<Scalars['LongString']['output']>;
    retentionAttempts: Scalars['Int']['output'];
    retentionLastAttemptAt?: Maybe<Scalars['LongString']['output']>;
    retentionLastError?: Maybe<Scalars['String']['output']>;
    retentionNextVerificationAt?: Maybe<Scalars['LongString']['output']>;
    retentionQueuedAt?: Maybe<Scalars['LongString']['output']>;
    retentionState: ChapterRetentionState;
    scanlator?: Maybe<Scalars['String']['output']>;
    signalConfidence: ChapterRevisionSignalConfidence;
    sourceChapterUrl: Scalars['String']['output'];
    sourceId?: Maybe<Scalars['LongString']['output']>;
    sourceMangaUrl?: Maybe<Scalars['String']['output']>;
    supersededAt?: Maybe<Scalars['LongString']['output']>;
    updatedAt: Scalars['LongString']['output'];
    uploadDate: Scalars['LongString']['output'];
    visualAnalysisAttempts: Scalars['Int']['output'];
    visualAnalysisCompletedAt?: Maybe<Scalars['LongString']['output']>;
    visualAnalysisLastAttemptAt?: Maybe<Scalars['LongString']['output']>;
    visualAnalysisLastError?: Maybe<Scalars['String']['output']>;
    visualAnalysisNextAttemptAt?: Maybe<Scalars['LongString']['output']>;
    visualAnalysisState: ChapterVisualAnalysisState;
};

export type ChapterRevisionVisualAnalysisStatus = {
    __typename?: 'ChapterRevisionVisualAnalysisStatus';
    analyzing: Scalars['Int']['output'];
    complete: Scalars['Int']['output'];
    completeWithLimitations: Scalars['Int']['output'];
    failed: Scalars['Int']['output'];
    notRequired: Scalars['Int']['output'];
    queued: Scalars['Int']['output'];
};

export type ChapterType = {
    __typename?: 'ChapterType';
    chapterNumber: Scalars['Float']['output'];
    fetchedAt: Scalars['LongString']['output'];
    id: Scalars['Int']['output'];
    isBookmarked: Scalars['Boolean']['output'];
    isDownloaded: Scalars['Boolean']['output'];
    isRead: Scalars['Boolean']['output'];
    lastPageRead: Scalars['Int']['output'];
    lastReadAt: Scalars['LongString']['output'];
    manga: MangaType;
    mangaId: Scalars['Int']['output'];
    meta: Array<ChapterMetaType>;
    name: Scalars['String']['output'];
    pageCount: Scalars['Int']['output'];
    realUrl?: Maybe<Scalars['String']['output']>;
    scanlator?: Maybe<Scalars['String']['output']>;
    sourceOrder: Scalars['Int']['output'];
    uploadDate: Scalars['LongString']['output'];
    url: Scalars['String']['output'];
};

export enum ChapterVisualAnalysisState {
    Analyzing = 'ANALYZING',
    Complete = 'COMPLETE',
    CompleteWithLimitations = 'COMPLETE_WITH_LIMITATIONS',
    Failed = 'FAILED',
    NotRequired = 'NOT_REQUIRED',
    Queued = 'QUEUED',
}

export type CheckBoxFilter = {
    __typename?: 'CheckBoxFilter';
    default: Scalars['Boolean']['output'];
    name: Scalars['String']['output'];
};

export type CheckBoxPreference = {
    __typename?: 'CheckBoxPreference';
    currentValue?: Maybe<Scalars['Boolean']['output']>;
    default: Scalars['Boolean']['output'];
    enabled: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    visible: Scalars['Boolean']['output'];
};

export type CheckForServerUpdatesPayload = {
    __typename?: 'CheckForServerUpdatesPayload';
    channel: Scalars['String']['output'];
    tag: Scalars['String']['output'];
    url: Scalars['String']['output'];
};

export type ClearCachedImagesInput = {
    cachedPages?: InputMaybe<Scalars['Boolean']['input']>;
    cachedThumbnails?: InputMaybe<Scalars['Boolean']['input']>;
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    downloadedThumbnails?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearCachedImagesPayload = {
    __typename?: 'ClearCachedImagesPayload';
    cachedPages?: Maybe<Scalars['Boolean']['output']>;
    cachedThumbnails?: Maybe<Scalars['Boolean']['output']>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadedThumbnails?: Maybe<Scalars['Boolean']['output']>;
};

export type ClearCookiesAndCacheInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClearCookiesAndCachePayload = {
    __typename?: 'ClearCookiesAndCachePayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ClearDownloaderInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClearDownloaderPayload = {
    __typename?: 'ClearDownloaderPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type ConnectKoSyncAccountInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    password: Scalars['String']['input'];
    serverAddress: Scalars['String']['input'];
    username: Scalars['String']['input'];
};

export enum ContentWarning {
    Mixed = 'MIXED',
    Nsfw = 'NSFW',
    Safe = 'SAFE',
}

export type ContentWarningFilterInput = {
    distinctFrom?: InputMaybe<ContentWarning>;
    distinctFromAll?: InputMaybe<Array<ContentWarning>>;
    distinctFromAny?: InputMaybe<Array<ContentWarning>>;
    equalTo?: InputMaybe<ContentWarning>;
    greaterThan?: InputMaybe<ContentWarning>;
    greaterThanOrEqualTo?: InputMaybe<ContentWarning>;
    in?: InputMaybe<Array<ContentWarning>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<ContentWarning>;
    lessThanOrEqualTo?: InputMaybe<ContentWarning>;
    notDistinctFrom?: InputMaybe<ContentWarning>;
    notEqualTo?: InputMaybe<ContentWarning>;
    notEqualToAll?: InputMaybe<Array<ContentWarning>>;
    notEqualToAny?: InputMaybe<Array<ContentWarning>>;
    notIn?: InputMaybe<Array<ContentWarning>>;
};

export type CreateBackupInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    flags?: InputMaybe<PartialBackupFlagsInput>;
};

export type CreateBackupPayload = {
    __typename?: 'CreateBackupPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    url: Scalars['String']['output'];
};

export type CreateCanonicalWorkInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    duplicateStrategy: CanonicalDuplicateStrategy;
    preferredScanlator?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};

export type CreateCanonicalWorkPayload = {
    __typename?: 'CreateCanonicalWorkPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
    work?: Maybe<CanonicalWorkType>;
};

export type CreateCategoryInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    default?: InputMaybe<Scalars['Boolean']['input']>;
    includeInDownload?: InputMaybe<IncludeOrExclude>;
    includeInUpdate?: InputMaybe<IncludeOrExclude>;
    name: Scalars['String']['input'];
    order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCategoryPayload = {
    __typename?: 'CreateCategoryPayload';
    category: CategoryType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export enum DatabaseType {
    H2 = 'H2',
    Postgresql = 'POSTGRESQL',
}

export type DeleteCanonicalWorkInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    workKey: Scalars['String']['input'];
};

export type DeleteCanonicalWorkPayload = {
    __typename?: 'DeleteCanonicalWorkPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
};

export type DeleteCategoryInput = {
    categoryId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteCategoryMetaInput = {
    categoryId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    key: Scalars['String']['input'];
};

export type DeleteCategoryMetaPayload = {
    __typename?: 'DeleteCategoryMetaPayload';
    category: CategoryType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<CategoryMetaType>;
};

export type DeleteCategoryMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<DeleteCategoryMetasItemInput>;
};

export type DeleteCategoryMetasItemInput = {
    categoryIds: Array<Scalars['Int']['input']>;
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    prefixes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DeleteCategoryMetasPayload = {
    __typename?: 'DeleteCategoryMetasPayload';
    categories: Array<CategoryType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<CategoryMetaType>;
};

export type DeleteCategoryPayload = {
    __typename?: 'DeleteCategoryPayload';
    category?: Maybe<CategoryType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    mangas: Array<MangaType>;
};

export type DeleteChapterMetaInput = {
    chapterId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    key: Scalars['String']['input'];
};

export type DeleteChapterMetaPayload = {
    __typename?: 'DeleteChapterMetaPayload';
    chapter: ChapterType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<ChapterMetaType>;
};

export type DeleteChapterMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<DeleteChapterMetasItemInput>;
};

export type DeleteChapterMetasItemInput = {
    chapterIds: Array<Scalars['Int']['input']>;
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    prefixes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DeleteChapterMetasPayload = {
    __typename?: 'DeleteChapterMetasPayload';
    chapters: Array<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<ChapterMetaType>;
};

export type DeleteDownloadedChapterInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
};

export type DeleteDownloadedChapterPayload = {
    __typename?: 'DeleteDownloadedChapterPayload';
    chapters: ChapterType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteDownloadedChaptersInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type DeleteDownloadedChaptersPayload = {
    __typename?: 'DeleteDownloadedChaptersPayload';
    chapters: Array<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteGlobalMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    key: Scalars['String']['input'];
};

export type DeleteGlobalMetaPayload = {
    __typename?: 'DeleteGlobalMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<GlobalMetaType>;
};

export type DeleteGlobalMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    prefixes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DeleteGlobalMetasPayload = {
    __typename?: 'DeleteGlobalMetasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<GlobalMetaType>;
};

export type DeleteMangaMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    key: Scalars['String']['input'];
    mangaId: Scalars['Int']['input'];
};

export type DeleteMangaMetaPayload = {
    __typename?: 'DeleteMangaMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    manga: MangaType;
    meta?: Maybe<MangaMetaType>;
};

export type DeleteMangaMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<DeleteMangaMetasItemInput>;
};

export type DeleteMangaMetasItemInput = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    mangaIds: Array<Scalars['Int']['input']>;
    prefixes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DeleteMangaMetasPayload = {
    __typename?: 'DeleteMangaMetasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    mangas: Array<MangaType>;
    metas: Array<MangaMetaType>;
};

export type DeleteSourceMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    key: Scalars['String']['input'];
    sourceId: Scalars['LongString']['input'];
};

export type DeleteSourceMetaPayload = {
    __typename?: 'DeleteSourceMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<SourceMetaType>;
    source?: Maybe<SourceType>;
};

export type DeleteSourceMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<DeleteSourceMetasItemInput>;
};

export type DeleteSourceMetasItemInput = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    prefixes?: InputMaybe<Array<Scalars['String']['input']>>;
    sourceIds: Array<Scalars['LongString']['input']>;
};

export type DeleteSourceMetasPayload = {
    __typename?: 'DeleteSourceMetasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<SourceMetaType>;
    sources: Array<SourceType>;
};

export type DequeueChapterDownloadInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
};

export type DequeueChapterDownloadPayload = {
    __typename?: 'DequeueChapterDownloadPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type DequeueChapterDownloadsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type DequeueChapterDownloadsPayload = {
    __typename?: 'DequeueChapterDownloadsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type DetachCanonicalBindingInput = {
    bindingId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DetachCanonicalBindingPayload = {
    __typename?: 'DetachCanonicalBindingPayload';
    binding?: Maybe<CanonicalSourceBindingType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
};

export type DoubleFilterInput = {
    distinctFrom?: InputMaybe<Scalars['Float']['input']>;
    distinctFromAll?: InputMaybe<Array<Scalars['Float']['input']>>;
    distinctFromAny?: InputMaybe<Array<Scalars['Float']['input']>>;
    equalTo?: InputMaybe<Scalars['Float']['input']>;
    greaterThan?: InputMaybe<Scalars['Float']['input']>;
    greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
    in?: InputMaybe<Array<Scalars['Float']['input']>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<Scalars['Float']['input']>;
    lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
    notDistinctFrom?: InputMaybe<Scalars['Float']['input']>;
    notEqualTo?: InputMaybe<Scalars['Float']['input']>;
    notEqualToAll?: InputMaybe<Array<Scalars['Float']['input']>>;
    notEqualToAny?: InputMaybe<Array<Scalars['Float']['input']>>;
    notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type DownloadChangedInput = {
    /** Sets a max number of updates that can be contained in a download update message.Everything above this limit will be omitted and the "downloadStatus" should be re-fetched via the corresponding query. Due to the graphql subscription execution strategy not supporting batching for data loaders, the data loaders run into the n+1 problem, which can cause the server to get unresponsive until the status update has been handled. This is an issue e.g. when mass en- or dequeuing downloads. */
    maxUpdates?: InputMaybe<Scalars['Int']['input']>;
};

export type DownloadEdge = Edge & {
    __typename?: 'DownloadEdge';
    cursor: Scalars['Cursor']['output'];
    node: DownloadType;
};

export type DownloadNodeList = NodeList & {
    __typename?: 'DownloadNodeList';
    edges: Array<DownloadEdge>;
    nodes: Array<DownloadType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum DownloadState {
    Downloading = 'DOWNLOADING',
    Error = 'ERROR',
    Finished = 'FINISHED',
    Queued = 'QUEUED',
}

export type DownloadStatus = {
    __typename?: 'DownloadStatus';
    queue: Array<DownloadType>;
    state: DownloaderState;
};

export type DownloadType = {
    __typename?: 'DownloadType';
    chapter: ChapterType;
    manga: MangaType;
    position: Scalars['Int']['output'];
    progress: Scalars['Float']['output'];
    state: DownloadState;
    tries: Scalars['Int']['output'];
};

export type DownloadUpdate = {
    __typename?: 'DownloadUpdate';
    download: DownloadType;
    type: DownloadUpdateType;
};

export enum DownloadUpdateType {
    Dequeued = 'DEQUEUED',
    Error = 'ERROR',
    Finished = 'FINISHED',
    Paused = 'PAUSED',
    Position = 'POSITION',
    Progress = 'PROGRESS',
    Queued = 'QUEUED',
    Stopped = 'STOPPED',
}

export type DownloadUpdates = {
    __typename?: 'DownloadUpdates';
    /** The current download queue at the time of sending initial message. Is null for all following messages */
    initial?: Maybe<Array<DownloadType>>;
    /** Indicates whether updates have been omitted based on the "maxUpdates" subscription variable. In case updates have been omitted, the "downloadStatus" query should be re-fetched. */
    omittedUpdates: Scalars['Boolean']['output'];
    state: DownloaderState;
    updates: Array<DownloadUpdate>;
};

export enum DownloaderState {
    Started = 'STARTED',
    Stopped = 'STOPPED',
}

export type Edge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['Cursor']['output'];
    /** The [T] at the end of the edge. */
    node: Node;
};

export type EditTextPreference = {
    __typename?: 'EditTextPreference';
    currentValue?: Maybe<Scalars['String']['output']>;
    default?: Maybe<Scalars['String']['output']>;
    dialogMessage?: Maybe<Scalars['String']['output']>;
    dialogTitle?: Maybe<Scalars['String']['output']>;
    enabled: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    text?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    visible: Scalars['Boolean']['output'];
};

export type EnqueueChapterDownloadInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
};

export type EnqueueChapterDownloadPayload = {
    __typename?: 'EnqueueChapterDownloadPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type EnqueueChapterDownloadsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type EnqueueChapterDownloadsPayload = {
    __typename?: 'EnqueueChapterDownloadsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type ExportCanonicalIdentityPayload = {
    __typename?: 'ExportCanonicalIdentityPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    export: CanonicalIdentityExportType;
};

export type ExtensionConditionInput = {
    apkName?: InputMaybe<Scalars['String']['input']>;
    apkUrl?: InputMaybe<Scalars['String']['input']>;
    contentWarning?: InputMaybe<ContentWarning>;
    extensionLib?: InputMaybe<Scalars['String']['input']>;
    hasUpdate?: InputMaybe<Scalars['Boolean']['input']>;
    iconUrl?: InputMaybe<Scalars['String']['input']>;
    isInstalled?: InputMaybe<Scalars['Boolean']['input']>;
    isObsolete?: InputMaybe<Scalars['Boolean']['input']>;
    jarUrl?: InputMaybe<Scalars['String']['input']>;
    lang?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    pkgName?: InputMaybe<Scalars['String']['input']>;
    storeIndexUrl?: InputMaybe<Scalars['String']['input']>;
    versionCode?: InputMaybe<Scalars['Int']['input']>;
    versionCodeLong?: InputMaybe<Scalars['LongString']['input']>;
    versionName?: InputMaybe<Scalars['String']['input']>;
};

export type ExtensionEdge = Edge & {
    __typename?: 'ExtensionEdge';
    cursor: Scalars['Cursor']['output'];
    node: ExtensionType;
};

export type ExtensionFilterInput = {
    and?: InputMaybe<Array<ExtensionFilterInput>>;
    apkName?: InputMaybe<StringFilterInput>;
    apkUrl?: InputMaybe<StringFilterInput>;
    contentWarning?: InputMaybe<ContentWarningFilterInput>;
    extensionLib?: InputMaybe<StringFilterInput>;
    hasUpdate?: InputMaybe<BooleanFilterInput>;
    iconUrl?: InputMaybe<StringFilterInput>;
    isInstalled?: InputMaybe<BooleanFilterInput>;
    isObsolete?: InputMaybe<BooleanFilterInput>;
    jarUrl?: InputMaybe<StringFilterInput>;
    lang?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ExtensionFilterInput>;
    or?: InputMaybe<Array<ExtensionFilterInput>>;
    pkgName?: InputMaybe<StringFilterInput>;
    storeIndexUrl?: InputMaybe<StringFilterInput>;
    versionCodeLong?: InputMaybe<LongFilterInput>;
    versionName?: InputMaybe<StringFilterInput>;
};

export type ExtensionNodeList = NodeList & {
    __typename?: 'ExtensionNodeList';
    edges: Array<ExtensionEdge>;
    nodes: Array<ExtensionType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ExtensionOrderBy {
    /** @deprecated  */
    ApkName = 'APK_NAME',
    Name = 'NAME',
    PkgName = 'PKG_NAME',
}

export type ExtensionOrderInput = {
    by: ExtensionOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type ExtensionStoreConditionInput = {
    id?: InputMaybe<Scalars['Int']['input']>;
    indexUrl?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};

export type ExtensionStoreEdge = Edge & {
    __typename?: 'ExtensionStoreEdge';
    cursor: Scalars['Cursor']['output'];
    node: ExtensionStoreType;
};

export type ExtensionStoreFilterInput = {
    and?: InputMaybe<Array<ExtensionStoreFilterInput>>;
    indexUrl?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ExtensionStoreFilterInput>;
    or?: InputMaybe<Array<ExtensionStoreFilterInput>>;
};

export type ExtensionStoreNodeList = NodeList & {
    __typename?: 'ExtensionStoreNodeList';
    edges: Array<ExtensionStoreEdge>;
    nodes: Array<ExtensionStoreType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum ExtensionStoreOrderBy {
    IndexUrl = 'INDEX_URL',
    Name = 'NAME',
}

export type ExtensionStoreOrderInput = {
    by: ExtensionStoreOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type ExtensionStoreType = {
    __typename?: 'ExtensionStoreType';
    badgeLabel: Scalars['String']['output'];
    contactDiscord?: Maybe<Scalars['String']['output']>;
    contactWebsite: Scalars['String']['output'];
    extensionListUrl?: Maybe<Scalars['String']['output']>;
    extensions: ExtensionNodeList;
    indexUrl: Scalars['String']['output'];
    isLegacy: Scalars['Boolean']['output'];
    name: Scalars['String']['output'];
    signingKey: Scalars['String']['output'];
};

export type ExtensionType = {
    __typename?: 'ExtensionType';
    /** This will be nullable in the future */
    apkName?: Maybe<Scalars['String']['output']>;
    apkUrl?: Maybe<Scalars['String']['output']>;
    contentWarning: ContentWarning;
    extensionLib?: Maybe<Scalars['String']['output']>;
    extensionStore?: Maybe<ExtensionStoreType>;
    hasUpdate: Scalars['Boolean']['output'];
    iconUrl: Scalars['String']['output'];
    isInstalled: Scalars['Boolean']['output'];
    /** @deprecated Removed in extension api v1.6, replace with contentWarning */
    isNsfw: Scalars['Boolean']['output'];
    isObsolete: Scalars['Boolean']['output'];
    jarUrl?: Maybe<Scalars['String']['output']>;
    lang: Scalars['String']['output'];
    name: Scalars['String']['output'];
    pkgName: Scalars['String']['output'];
    /** @deprecated Removed in extension api v1.6, replace with storeIndexUrl */
    repo?: Maybe<Scalars['String']['output']>;
    source: SourceNodeList;
    storeIndexUrl?: Maybe<Scalars['String']['output']>;
    /** @deprecated Type was changed to Long, will be switched back to this variable name in the future., replace with versionCodeLong */
    versionCode: Scalars['Int']['output'];
    versionCodeLong: Scalars['LongString']['output'];
    versionName: Scalars['String']['output'];
};

export type FailoverCanonicalWorkInput = {
    bindingId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    workKey: Scalars['String']['input'];
};

export type FailoverCanonicalWorkPayload = {
    __typename?: 'FailoverCanonicalWorkPayload';
    binding?: Maybe<CanonicalSourceBindingType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
};

export type FetchChapterPagesInput = {
    chapterId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    format?: InputMaybe<Scalars['String']['input']>;
};

export type FetchChapterPagesPayload = {
    __typename?: 'FetchChapterPagesPayload';
    chapter: ChapterType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    pages: Array<Scalars['String']['output']>;
    syncConflict?: Maybe<SyncConflictInfoType>;
};

export type FetchChaptersInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    mangaId: Scalars['Int']['input'];
};

export type FetchChaptersPayload = {
    __typename?: 'FetchChaptersPayload';
    chapters: Array<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type FetchExtensionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type FetchExtensionsPayload = {
    __typename?: 'FetchExtensionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    extensionStores: Array<ExtensionStoreType>;
    extensions: Array<ExtensionType>;
};

export type FetchMangaAndChaptersInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    fetchChapters: Scalars['Boolean']['input'];
    fetchManga: Scalars['Boolean']['input'];
    id: Scalars['Int']['input'];
};

export type FetchMangaAndChaptersPayload = {
    __typename?: 'FetchMangaAndChaptersPayload';
    chapters: Array<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    manga: MangaType;
};

export type FetchMangaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
};

export type FetchMangaPayload = {
    __typename?: 'FetchMangaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    manga: MangaType;
};

export type FetchSourceMangaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Array<FilterChangeInput>>;
    page: Scalars['Int']['input'];
    query?: InputMaybe<Scalars['String']['input']>;
    source: Scalars['LongString']['input'];
    type: FetchSourceMangaType;
};

export type FetchSourceMangaPayload = {
    __typename?: 'FetchSourceMangaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    hasNextPage: Scalars['Boolean']['output'];
    mangas: Array<MangaType>;
};

export enum FetchSourceMangaType {
    Latest = 'LATEST',
    Popular = 'POPULAR',
    Search = 'SEARCH',
}

export type FetchTrackInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    recordId: Scalars['Int']['input'];
};

export type FetchTrackPayload = {
    __typename?: 'FetchTrackPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    trackRecord: TrackRecordType;
};

export type Filter =
    | CheckBoxFilter
    | GroupFilter
    | HeaderFilter
    | SelectFilter
    | SeparatorFilter
    | SortFilter
    | TextFilter
    | TriStateFilter;

export type FilterChangeInput = {
    checkBoxState?: InputMaybe<Scalars['Boolean']['input']>;
    groupChange?: InputMaybe<FilterChangeInput>;
    position: Scalars['Int']['input'];
    selectState?: InputMaybe<Scalars['Int']['input']>;
    sortState?: InputMaybe<SortSelectionInput>;
    textState?: InputMaybe<Scalars['String']['input']>;
    triState?: InputMaybe<TriState>;
};

export type GlobalMetaNodeList = NodeList & {
    __typename?: 'GlobalMetaNodeList';
    edges: Array<MetaEdge>;
    nodes: Array<GlobalMetaType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type GlobalMetaType = MetaType & {
    __typename?: 'GlobalMetaType';
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type GlobalMetaTypeInput = {
    key: Scalars['String']['input'];
    value: Scalars['String']['input'];
};

export type GroupFilter = {
    __typename?: 'GroupFilter';
    filters: Array<Filter>;
    name: Scalars['String']['output'];
};

export type HeaderFilter = {
    __typename?: 'HeaderFilter';
    name: Scalars['String']['output'];
};

export type ImportCanonicalIdentityInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    payload: Scalars['String']['input'];
};

export type ImportCanonicalIdentityPayload = {
    __typename?: 'ImportCanonicalIdentityPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    import: CanonicalIdentityImportType;
};

export enum IncludeOrExclude {
    Exclude = 'EXCLUDE',
    Include = 'INCLUDE',
    Unset = 'UNSET',
}

export type InstallExternalExtensionInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    extensionFile: Scalars['Upload']['input'];
};

export type InstallExternalExtensionPayload = {
    __typename?: 'InstallExternalExtensionPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    extension: ExtensionType;
};

export type IntFilterInput = {
    distinctFrom?: InputMaybe<Scalars['Int']['input']>;
    distinctFromAll?: InputMaybe<Array<Scalars['Int']['input']>>;
    distinctFromAny?: InputMaybe<Array<Scalars['Int']['input']>>;
    equalTo?: InputMaybe<Scalars['Int']['input']>;
    greaterThan?: InputMaybe<Scalars['Int']['input']>;
    greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
    in?: InputMaybe<Array<Scalars['Int']['input']>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<Scalars['Int']['input']>;
    lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
    notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
    notEqualTo?: InputMaybe<Scalars['Int']['input']>;
    notEqualToAll?: InputMaybe<Array<Scalars['Int']['input']>>;
    notEqualToAny?: InputMaybe<Array<Scalars['Int']['input']>>;
    notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JvmInfo = {
    __typename?: 'JvmInfo';
    javaVersion: Scalars['String']['output'];
    vmName: Scalars['String']['output'];
    vmVendor: Scalars['String']['output'];
    vmVersion: Scalars['String']['output'];
};

export type KeepBothChapterRevisionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type KeepBothChapterRevisionsPayload = {
    __typename?: 'KeepBothChapterRevisionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type KeepCurrentChapterRevisionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type KeepCurrentChapterRevisionsPayload = {
    __typename?: 'KeepCurrentChapterRevisionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type KoSyncConnectPayload = {
    __typename?: 'KoSyncConnectPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    status: KoSyncStatusPayload;
};

export type KoSyncStatusPayload = {
    __typename?: 'KoSyncStatusPayload';
    isLoggedIn: Scalars['Boolean']['output'];
    serverAddress?: Maybe<Scalars['String']['output']>;
    username?: Maybe<Scalars['String']['output']>;
};

export type KomgaRescanStatusType = {
    __typename?: 'KomgaRescanStatusType';
    attempts?: Maybe<Scalars['Int']['output']>;
    configurationError?: Maybe<Scalars['String']['output']>;
    configured: Scalars['Boolean']['output'];
    generation?: Maybe<Scalars['LongString']['output']>;
    lastAttemptAt?: Maybe<Scalars['LongString']['output']>;
    lastCompletedAt?: Maybe<Scalars['LongString']['output']>;
    lastError?: Maybe<Scalars['String']['output']>;
    notBeforeAt?: Maybe<Scalars['LongString']['output']>;
    requestedAt?: Maybe<Scalars['LongString']['output']>;
    state?: Maybe<KomgaScanState>;
};

export enum KomgaScanState {
    Complete = 'COMPLETE',
    Failed = 'FAILED',
    Pending = 'PENDING',
    Running = 'RUNNING',
}

export enum KoreaderSyncChecksumMethod {
    Binary = 'BINARY',
    Filename = 'FILENAME',
}

export enum KoreaderSyncConflictStrategy {
    Disabled = 'DISABLED',
    KeepLocal = 'KEEP_LOCAL',
    KeepRemote = 'KEEP_REMOTE',
    Prompt = 'PROMPT',
}

export enum KoreaderSyncLegacyStrategy {
    Disabled = 'DISABLED',
    Prompt = 'PROMPT',
    Receive = 'RECEIVE',
    Send = 'SEND',
    Silent = 'SILENT',
}

export type LastUpdateTimestampPayload = {
    __typename?: 'LastUpdateTimestampPayload';
    timestamp: Scalars['LongString']['output'];
};

export type LibraryUpdateStatus = {
    __typename?: 'LibraryUpdateStatus';
    categoryUpdates: Array<CategoryUpdateType>;
    jobsInfo: UpdaterJobsInfoType;
    mangaUpdates: Array<MangaUpdateType>;
};

export type LibraryUpdateStatusChangedInput = {
    /** Sets a max number of updates that can be contained in a updater update message.Everything above this limit will be omitted and the "updateStatus" should be re-fetched via the corresponding query. Due to the graphql subscription execution strategy not supporting batching for data loaders, the data loaders run into the n+1 problem, which can cause the server to get unresponsive until the status update has been handled. This is an issue e.g. when starting an update. */
    maxUpdates?: InputMaybe<Scalars['Int']['input']>;
};

export type ListPreference = {
    __typename?: 'ListPreference';
    currentValue?: Maybe<Scalars['String']['output']>;
    default?: Maybe<Scalars['String']['output']>;
    enabled: Scalars['Boolean']['output'];
    entries: Array<Scalars['String']['output']>;
    entryValues: Array<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    visible: Scalars['Boolean']['output'];
};

export type LoginInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    password: Scalars['String']['input'];
    username: Scalars['String']['input'];
};

export type LoginPayload = {
    __typename?: 'LoginPayload';
    accessToken: Scalars['String']['output'];
    clientMutationId?: Maybe<Scalars['String']['output']>;
    refreshToken: Scalars['String']['output'];
};

export type LoginTrackerCredentialsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    password: Scalars['String']['input'];
    trackerId: Scalars['Int']['input'];
    username: Scalars['String']['input'];
};

export type LoginTrackerCredentialsPayload = {
    __typename?: 'LoginTrackerCredentialsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    isLoggedIn: Scalars['Boolean']['output'];
    tracker: TrackerType;
};

export type LoginTrackerOAuthInput = {
    callbackUrl: Scalars['String']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    trackerId: Scalars['Int']['input'];
};

export type LoginTrackerOAuthPayload = {
    __typename?: 'LoginTrackerOAuthPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    isLoggedIn: Scalars['Boolean']['output'];
    tracker: TrackerType;
};

export type LogoutKoSyncAccountInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LogoutKoSyncAccountPayload = {
    __typename?: 'LogoutKoSyncAccountPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    status: KoSyncStatusPayload;
};

export type LogoutTrackerInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    trackerId: Scalars['Int']['input'];
};

export type LogoutTrackerPayload = {
    __typename?: 'LogoutTrackerPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    isLoggedIn: Scalars['Boolean']['output'];
    tracker: TrackerType;
};

export type LongFilterInput = {
    distinctFrom?: InputMaybe<Scalars['LongString']['input']>;
    distinctFromAll?: InputMaybe<Array<Scalars['LongString']['input']>>;
    distinctFromAny?: InputMaybe<Array<Scalars['LongString']['input']>>;
    equalTo?: InputMaybe<Scalars['LongString']['input']>;
    greaterThan?: InputMaybe<Scalars['LongString']['input']>;
    greaterThanOrEqualTo?: InputMaybe<Scalars['LongString']['input']>;
    in?: InputMaybe<Array<Scalars['LongString']['input']>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<Scalars['LongString']['input']>;
    lessThanOrEqualTo?: InputMaybe<Scalars['LongString']['input']>;
    notDistinctFrom?: InputMaybe<Scalars['LongString']['input']>;
    notEqualTo?: InputMaybe<Scalars['LongString']['input']>;
    notEqualToAll?: InputMaybe<Array<Scalars['LongString']['input']>>;
    notEqualToAny?: InputMaybe<Array<Scalars['LongString']['input']>>;
    notIn?: InputMaybe<Array<Scalars['LongString']['input']>>;
};

export enum MangaAcquisitionPolicy {
    Auto = 'AUTO',
    Manual = 'MANUAL',
    Paused = 'PAUSED',
}

export type MangaConditionInput = {
    artist?: InputMaybe<Scalars['String']['input']>;
    author?: InputMaybe<Scalars['String']['input']>;
    categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
    chaptersLastFetchedAt?: InputMaybe<Scalars['LongString']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    genre?: InputMaybe<Array<Scalars['String']['input']>>;
    id?: InputMaybe<Scalars['Int']['input']>;
    inLibrary?: InputMaybe<Scalars['Boolean']['input']>;
    inLibraryAt?: InputMaybe<Scalars['LongString']['input']>;
    initialized?: InputMaybe<Scalars['Boolean']['input']>;
    lastFetchedAt?: InputMaybe<Scalars['LongString']['input']>;
    realUrl?: InputMaybe<Scalars['String']['input']>;
    sourceId?: InputMaybe<Scalars['LongString']['input']>;
    status?: InputMaybe<MangaStatus>;
    thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type MangaEdge = Edge & {
    __typename?: 'MangaEdge';
    cursor: Scalars['Cursor']['output'];
    node: MangaType;
};

export type MangaFilterInput = {
    and?: InputMaybe<Array<MangaFilterInput>>;
    artist?: InputMaybe<StringFilterInput>;
    author?: InputMaybe<StringFilterInput>;
    categoryId?: InputMaybe<IntFilterInput>;
    chaptersLastFetchedAt?: InputMaybe<LongFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    genre?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IntFilterInput>;
    inLibrary?: InputMaybe<BooleanFilterInput>;
    inLibraryAt?: InputMaybe<LongFilterInput>;
    initialized?: InputMaybe<BooleanFilterInput>;
    lastFetchedAt?: InputMaybe<LongFilterInput>;
    not?: InputMaybe<MangaFilterInput>;
    or?: InputMaybe<Array<MangaFilterInput>>;
    realUrl?: InputMaybe<StringFilterInput>;
    sourceId?: InputMaybe<LongFilterInput>;
    status?: InputMaybe<MangaStatusFilterInput>;
    thumbnailUrl?: InputMaybe<StringFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    url?: InputMaybe<StringFilterInput>;
};

export enum MangaJobStatus {
    Complete = 'COMPLETE',
    Failed = 'FAILED',
    Pending = 'PENDING',
    Running = 'RUNNING',
    Skipped = 'SKIPPED',
}

export type MangaMetaType = MetaType & {
    __typename?: 'MangaMetaType';
    key: Scalars['String']['output'];
    manga: MangaType;
    mangaId: Scalars['Int']['output'];
    value: Scalars['String']['output'];
};

export type MangaMetaTypeInput = {
    key: Scalars['String']['input'];
    mangaId: Scalars['Int']['input'];
    value: Scalars['String']['input'];
};

export type MangaNodeList = NodeList & {
    __typename?: 'MangaNodeList';
    edges: Array<MangaEdge>;
    nodes: Array<MangaType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum MangaOrderBy {
    Id = 'ID',
    InLibraryAt = 'IN_LIBRARY_AT',
    LastFetchedAt = 'LAST_FETCHED_AT',
    Title = 'TITLE',
}

export type MangaOrderInput = {
    by: MangaOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export enum MangaStatus {
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    Licensed = 'LICENSED',
    Ongoing = 'ONGOING',
    OnHiatus = 'ON_HIATUS',
    PublishingFinished = 'PUBLISHING_FINISHED',
    Unknown = 'UNKNOWN',
}

export type MangaStatusFilterInput = {
    distinctFrom?: InputMaybe<MangaStatus>;
    distinctFromAll?: InputMaybe<Array<MangaStatus>>;
    distinctFromAny?: InputMaybe<Array<MangaStatus>>;
    equalTo?: InputMaybe<MangaStatus>;
    greaterThan?: InputMaybe<MangaStatus>;
    greaterThanOrEqualTo?: InputMaybe<MangaStatus>;
    in?: InputMaybe<Array<MangaStatus>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<MangaStatus>;
    lessThanOrEqualTo?: InputMaybe<MangaStatus>;
    notDistinctFrom?: InputMaybe<MangaStatus>;
    notEqualTo?: InputMaybe<MangaStatus>;
    notEqualToAll?: InputMaybe<Array<MangaStatus>>;
    notEqualToAny?: InputMaybe<Array<MangaStatus>>;
    notIn?: InputMaybe<Array<MangaStatus>>;
};

export type MangaType = {
    __typename?: 'MangaType';
    acceptedRevisionRetention?: Maybe<Scalars['Int']['output']>;
    acquisitionPolicy: MangaAcquisitionPolicy;
    age?: Maybe<Scalars['LongString']['output']>;
    artist?: Maybe<Scalars['String']['output']>;
    author?: Maybe<Scalars['String']['output']>;
    bookmarkCount: Scalars['Int']['output'];
    canonicalAcquisitionEligible: Scalars['Boolean']['output'];
    canonicalBinding?: Maybe<CanonicalSourceBindingType>;
    categories: CategoryNodeList;
    chapters: ChapterNodeList;
    chaptersAge?: Maybe<Scalars['LongString']['output']>;
    chaptersLastFetchedAt?: Maybe<Scalars['LongString']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    downloadCount: Scalars['Int']['output'];
    effectiveAcceptedRevisionRetention: Scalars['Int']['output'];
    firstUnreadChapter?: Maybe<ChapterType>;
    genre: Array<Scalars['String']['output']>;
    hasDuplicateChapters: Scalars['Boolean']['output'];
    highestNumberedChapter?: Maybe<ChapterType>;
    id: Scalars['Int']['output'];
    inLibrary: Scalars['Boolean']['output'];
    inLibraryAt: Scalars['LongString']['output'];
    initialized: Scalars['Boolean']['output'];
    lastFetchedAt?: Maybe<Scalars['LongString']['output']>;
    lastReadChapter?: Maybe<ChapterType>;
    latestFetchedChapter?: Maybe<ChapterType>;
    latestReadChapter?: Maybe<ChapterType>;
    latestUploadedChapter?: Maybe<ChapterType>;
    meta: Array<MangaMetaType>;
    realUrl?: Maybe<Scalars['String']['output']>;
    source?: Maybe<SourceType>;
    sourceId: Scalars['LongString']['output'];
    status: MangaStatus;
    thumbnailUrl?: Maybe<Scalars['String']['output']>;
    thumbnailUrlLastFetched?: Maybe<Scalars['LongString']['output']>;
    title: Scalars['String']['output'];
    trackRecords: TrackRecordNodeList;
    unreadCount: Scalars['Int']['output'];
    updateStrategy: UpdateStrategy;
    url: Scalars['String']['output'];
};

export type MangaUpdateType = {
    __typename?: 'MangaUpdateType';
    manga: MangaType;
    status: MangaJobStatus;
};

export type MetaConditionInput = {
    key?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type MetaEdge = Edge & {
    __typename?: 'MetaEdge';
    cursor: Scalars['Cursor']['output'];
    node: GlobalMetaType;
};

export type MetaFilterInput = {
    and?: InputMaybe<Array<MetaFilterInput>>;
    key?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<MetaFilterInput>;
    or?: InputMaybe<Array<MetaFilterInput>>;
    value?: InputMaybe<StringFilterInput>;
};

export type MetaInput = {
    key: Scalars['String']['input'];
    value: Scalars['String']['input'];
};

export enum MetaOrderBy {
    Key = 'KEY',
    Value = 'VALUE',
}

export type MetaOrderInput = {
    by: MetaOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type MetaType = {
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type MultiSelectListPreference = {
    __typename?: 'MultiSelectListPreference';
    currentValue?: Maybe<Array<Scalars['String']['output']>>;
    default?: Maybe<Array<Scalars['String']['output']>>;
    dialogMessage?: Maybe<Scalars['String']['output']>;
    dialogTitle?: Maybe<Scalars['String']['output']>;
    enabled: Scalars['Boolean']['output'];
    entries: Array<Scalars['String']['output']>;
    entryValues: Array<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    visible: Scalars['Boolean']['output'];
};

export type Mutation = {
    __typename?: 'Mutation';
    acceptChapterRevisionCandidates: AcceptChapterRevisionCandidatesPayload;
    addExtensionStore?: Maybe<AddExtensionStorePayload>;
    approveChapterRevisions: ApproveChapterRevisionsPayload;
    attachMangaToCanonicalWork: AttachMangaToCanonicalWorkPayload;
    bindTrack: BindTrackPayload;
    bindTrackRecord?: Maybe<BindTrackRecordPayload>;
    cancelArchiveBootstrap: ArchiveBootstrapSessionPayload;
    cancelBackupRestore: BackupRestoreJobPayload;
    cancelChapterIntegrityAudit: ChapterIntegrityAuditSessionPayload;
    cancelChapterRevisionSweep: ChapterRevisionSweepSessionPayload;
    changeCanonicalBinding: ChangeCanonicalBindingPayload;
    cleanupBackupRestore: BackupRestoreJobPayload;
    clearCachedImages: ClearCachedImagesPayload;
    clearCookiesAndCache: ClearCookiesAndCachePayload;
    clearDownloader?: Maybe<ClearDownloaderPayload>;
    connectKoSyncAccount: KoSyncConnectPayload;
    createBackup: CreateBackupPayload;
    createCanonicalWork: CreateCanonicalWorkPayload;
    createCategory?: Maybe<CreateCategoryPayload>;
    deleteCanonicalWork: DeleteCanonicalWorkPayload;
    deleteCategory?: Maybe<DeleteCategoryPayload>;
    deleteCategoryMeta?: Maybe<DeleteCategoryMetaPayload>;
    deleteCategoryMetas?: Maybe<DeleteCategoryMetasPayload>;
    deleteChapterMeta?: Maybe<DeleteChapterMetaPayload>;
    deleteChapterMetas?: Maybe<DeleteChapterMetasPayload>;
    deleteDownloadedChapter?: Maybe<DeleteDownloadedChapterPayload>;
    deleteDownloadedChapters?: Maybe<DeleteDownloadedChaptersPayload>;
    deleteGlobalMeta?: Maybe<DeleteGlobalMetaPayload>;
    deleteGlobalMetas?: Maybe<DeleteGlobalMetasPayload>;
    deleteMangaMeta?: Maybe<DeleteMangaMetaPayload>;
    deleteMangaMetas?: Maybe<DeleteMangaMetasPayload>;
    deleteSourceMeta?: Maybe<DeleteSourceMetaPayload>;
    deleteSourceMetas?: Maybe<DeleteSourceMetasPayload>;
    dequeueChapterDownload?: Maybe<DequeueChapterDownloadPayload>;
    dequeueChapterDownloads?: Maybe<DequeueChapterDownloadsPayload>;
    detachCanonicalBinding: DetachCanonicalBindingPayload;
    enqueueChapterDownload?: Maybe<EnqueueChapterDownloadPayload>;
    enqueueChapterDownloads?: Maybe<EnqueueChapterDownloadsPayload>;
    exportCanonicalIdentity: ExportCanonicalIdentityPayload;
    failoverCanonicalWork: FailoverCanonicalWorkPayload;
    fetchChapterPages?: Maybe<FetchChapterPagesPayload>;
    /** @deprecated Deprecated in Tachiyomix 1.6, replace with fetchMangaAndChapters */
    fetchChapters?: Maybe<FetchChaptersPayload>;
    fetchExtensions?: Maybe<FetchExtensionsPayload>;
    /** @deprecated Deprecated in Tachiyomix 1.6, replace with fetchMangaAndChapters */
    fetchManga?: Maybe<FetchMangaPayload>;
    fetchMangaAndChapters?: Maybe<FetchMangaAndChaptersPayload>;
    fetchSourceManga?: Maybe<FetchSourceMangaPayload>;
    fetchTrack: FetchTrackPayload;
    importCanonicalIdentity: ImportCanonicalIdentityPayload;
    installExternalExtension?: Maybe<InstallExternalExtensionPayload>;
    keepBothChapterRevisions: KeepBothChapterRevisionsPayload;
    keepCurrentChapterRevisions: KeepCurrentChapterRevisionsPayload;
    login: LoginPayload;
    loginTrackerCredentials: LoginTrackerCredentialsPayload;
    loginTrackerOAuth: LoginTrackerOAuthPayload;
    logoutKoSyncAccount: LogoutKoSyncAccountPayload;
    logoutTracker: LogoutTrackerPayload;
    pauseArchiveBootstrap: ArchiveBootstrapSessionPayload;
    pauseChapterIntegrityAudit: ChapterIntegrityAuditSessionPayload;
    pauseChapterRevisionSweep: ChapterRevisionSweepSessionPayload;
    promoteCanonicalBinding: PromoteCanonicalBindingPayload;
    pullKoSyncProgress?: Maybe<PullKoSyncProgressPayload>;
    pushKoSyncProgress?: Maybe<PushKoSyncProgressPayload>;
    refreshToken: RefreshTokenPayload;
    rejectChapterRevisionCandidates: RejectChapterRevisionCandidatesPayload;
    rejectChapterRevisions: RejectChapterRevisionsPayload;
    removeExtensionStore?: Maybe<RemoveExtensionStorePayload>;
    reorderChapterDownload?: Maybe<ReorderChapterDownloadPayload>;
    reorderChapterDownloads?: Maybe<ReorderChapterDownloadPayload>;
    requestKomgaRescan: RequestKomgaRescanPayload;
    resetSettings: ResetSettingsPayload;
    resetWebUIUpdateStatus?: Maybe<WebUiUpdateStatus>;
    restoreBackup: RestoreBackupPayload;
    resumeArchiveBootstrap: ArchiveBootstrapSessionPayload;
    resumeChapterIntegrityAudit: ChapterIntegrityAuditSessionPayload;
    resumeChapterRevisionSweep: ChapterRevisionSweepSessionPayload;
    retryArchiveBootstrapItems: RetryArchiveBootstrapItemsPayload;
    retryBackupRestore: BackupRestoreJobPayload;
    retryBackupRestoreHandoff: BackupRestoreJobPayload;
    retryChapterIntegrityAuditItems: RetryChapterIntegrityAuditItemsPayload;
    retryChapterRevisionArchives: RetryChapterRevisionArchivesPayload;
    retryChapterRevisionPrunings: RetryChapterRevisionPruningsPayload;
    retryChapterRevisionPublications: RetryChapterRevisionPublicationsPayload;
    retryChapterRevisionSweepItems: RetryChapterRevisionSweepItemsPayload;
    retryChapterRevisionVisualAnalyses: RetryChapterRevisionVisualAnalysesPayload;
    retryChapterRevisions: RetryChapterRevisionsPayload;
    retryKomgaRescan: RetryKomgaRescanPayload;
    rollbackChapterRevision: RollbackChapterRevisionPayload;
    setCategoryMeta?: Maybe<SetCategoryMetaPayload>;
    setCategoryMetas?: Maybe<SetCategoryMetasPayload>;
    setChapterMeta?: Maybe<SetChapterMetaPayload>;
    setChapterMetas?: Maybe<SetChapterMetasPayload>;
    setGlobalMeta?: Maybe<SetGlobalMetaPayload>;
    setGlobalMetas?: Maybe<SetGlobalMetasPayload>;
    setMangaMeta?: Maybe<SetMangaMetaPayload>;
    setMangaMetas?: Maybe<SetMangaMetasPayload>;
    setSettings: SetSettingsPayload;
    setSourceMeta?: Maybe<SetSourceMetaPayload>;
    setSourceMetas?: Maybe<SetSourceMetasPayload>;
    startArchiveBootstrap: StartArchiveBootstrapPayload;
    startChapterIntegrityAudit: StartChapterIntegrityAuditPayload;
    startChapterRevisionSweep: StartChapterRevisionSweepPayload;
    startDownloader?: Maybe<StartDownloaderPayload>;
    startSync: StartSyncPayload;
    stopDownloader?: Maybe<StopDownloaderPayload>;
    trackProgress?: Maybe<TrackProgressPayload>;
    unbindTrack: UnbindTrackPayload;
    updateCanonicalWork: UpdateCanonicalWorkPayload;
    updateCategories?: Maybe<UpdateCategoriesPayload>;
    updateCategory?: Maybe<UpdateCategoryPayload>;
    updateCategoryManga?: Maybe<UpdateCategoryMangaPayload>;
    updateCategoryOrder?: Maybe<UpdateCategoryOrderPayload>;
    updateChapter?: Maybe<UpdateChapterPayload>;
    updateChapters?: Maybe<UpdateChaptersPayload>;
    updateExtension?: Maybe<UpdateExtensionPayload>;
    updateExtensions?: Maybe<UpdateExtensionsPayload>;
    updateLibrary?: Maybe<UpdateLibraryPayload>;
    updateLibraryManga?: Maybe<UpdateLibraryMangaPayload>;
    updateManga?: Maybe<UpdateMangaPayload>;
    updateMangaCategories?: Maybe<UpdateMangaCategoriesPayload>;
    updateMangas?: Maybe<UpdateMangasPayload>;
    updateMangasCategories?: Maybe<UpdateMangasCategoriesPayload>;
    updateSourcePreference?: Maybe<UpdateSourcePreferencePayload>;
    updateStop: UpdateStopPayload;
    updateTrack: UpdateTrackPayload;
    updateWebUI?: Maybe<WebUiUpdatePayload>;
};

export type MutationAcceptChapterRevisionCandidatesArgs = {
    input: AcceptChapterRevisionCandidatesInput;
};

export type MutationAddExtensionStoreArgs = {
    input: AddExtensionStoreInput;
};

export type MutationApproveChapterRevisionsArgs = {
    input: ApproveChapterRevisionsInput;
};

export type MutationAttachMangaToCanonicalWorkArgs = {
    input: AttachMangaToCanonicalWorkInput;
};

export type MutationBindTrackArgs = {
    input: BindTrackInput;
};

export type MutationBindTrackRecordArgs = {
    input: BindTrackRecordInput;
};

export type MutationCancelArchiveBootstrapArgs = {
    input: ArchiveBootstrapSessionInput;
};

export type MutationCancelBackupRestoreArgs = {
    input: BackupRestoreJobInput;
};

export type MutationCancelChapterIntegrityAuditArgs = {
    input: ChapterIntegrityAuditSessionInput;
};

export type MutationCancelChapterRevisionSweepArgs = {
    input: ChapterRevisionSweepSessionInput;
};

export type MutationChangeCanonicalBindingArgs = {
    input: ChangeCanonicalBindingInput;
};

export type MutationCleanupBackupRestoreArgs = {
    input: BackupRestoreJobInput;
};

export type MutationClearCachedImagesArgs = {
    input: ClearCachedImagesInput;
};

export type MutationClearCookiesAndCacheArgs = {
    input?: InputMaybe<ClearCookiesAndCacheInput>;
};

export type MutationClearDownloaderArgs = {
    input: ClearDownloaderInput;
};

export type MutationConnectKoSyncAccountArgs = {
    input: ConnectKoSyncAccountInput;
};

export type MutationCreateBackupArgs = {
    input?: InputMaybe<CreateBackupInput>;
};

export type MutationCreateCanonicalWorkArgs = {
    input: CreateCanonicalWorkInput;
};

export type MutationCreateCategoryArgs = {
    input: CreateCategoryInput;
};

export type MutationDeleteCanonicalWorkArgs = {
    input: DeleteCanonicalWorkInput;
};

export type MutationDeleteCategoryArgs = {
    input: DeleteCategoryInput;
};

export type MutationDeleteCategoryMetaArgs = {
    input: DeleteCategoryMetaInput;
};

export type MutationDeleteCategoryMetasArgs = {
    input: DeleteCategoryMetasInput;
};

export type MutationDeleteChapterMetaArgs = {
    input: DeleteChapterMetaInput;
};

export type MutationDeleteChapterMetasArgs = {
    input: DeleteChapterMetasInput;
};

export type MutationDeleteDownloadedChapterArgs = {
    input: DeleteDownloadedChapterInput;
};

export type MutationDeleteDownloadedChaptersArgs = {
    input: DeleteDownloadedChaptersInput;
};

export type MutationDeleteGlobalMetaArgs = {
    input: DeleteGlobalMetaInput;
};

export type MutationDeleteGlobalMetasArgs = {
    input: DeleteGlobalMetasInput;
};

export type MutationDeleteMangaMetaArgs = {
    input: DeleteMangaMetaInput;
};

export type MutationDeleteMangaMetasArgs = {
    input: DeleteMangaMetasInput;
};

export type MutationDeleteSourceMetaArgs = {
    input: DeleteSourceMetaInput;
};

export type MutationDeleteSourceMetasArgs = {
    input: DeleteSourceMetasInput;
};

export type MutationDequeueChapterDownloadArgs = {
    input: DequeueChapterDownloadInput;
};

export type MutationDequeueChapterDownloadsArgs = {
    input: DequeueChapterDownloadsInput;
};

export type MutationDetachCanonicalBindingArgs = {
    input: DetachCanonicalBindingInput;
};

export type MutationEnqueueChapterDownloadArgs = {
    input: EnqueueChapterDownloadInput;
};

export type MutationEnqueueChapterDownloadsArgs = {
    input: EnqueueChapterDownloadsInput;
};

export type MutationExportCanonicalIdentityArgs = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFailoverCanonicalWorkArgs = {
    input: FailoverCanonicalWorkInput;
};

export type MutationFetchChapterPagesArgs = {
    input: FetchChapterPagesInput;
};

export type MutationFetchChaptersArgs = {
    input: FetchChaptersInput;
};

export type MutationFetchExtensionsArgs = {
    input: FetchExtensionsInput;
};

export type MutationFetchMangaArgs = {
    input: FetchMangaInput;
};

export type MutationFetchMangaAndChaptersArgs = {
    input: FetchMangaAndChaptersInput;
};

export type MutationFetchSourceMangaArgs = {
    input: FetchSourceMangaInput;
};

export type MutationFetchTrackArgs = {
    input: FetchTrackInput;
};

export type MutationImportCanonicalIdentityArgs = {
    input: ImportCanonicalIdentityInput;
};

export type MutationInstallExternalExtensionArgs = {
    input: InstallExternalExtensionInput;
};

export type MutationKeepBothChapterRevisionsArgs = {
    input: KeepBothChapterRevisionsInput;
};

export type MutationKeepCurrentChapterRevisionsArgs = {
    input: KeepCurrentChapterRevisionsInput;
};

export type MutationLoginArgs = {
    input: LoginInput;
};

export type MutationLoginTrackerCredentialsArgs = {
    input: LoginTrackerCredentialsInput;
};

export type MutationLoginTrackerOAuthArgs = {
    input: LoginTrackerOAuthInput;
};

export type MutationLogoutKoSyncAccountArgs = {
    input: LogoutKoSyncAccountInput;
};

export type MutationLogoutTrackerArgs = {
    input: LogoutTrackerInput;
};

export type MutationPauseArchiveBootstrapArgs = {
    input: ArchiveBootstrapSessionInput;
};

export type MutationPauseChapterIntegrityAuditArgs = {
    input: ChapterIntegrityAuditSessionInput;
};

export type MutationPauseChapterRevisionSweepArgs = {
    input: ChapterRevisionSweepSessionInput;
};

export type MutationPromoteCanonicalBindingArgs = {
    input: PromoteCanonicalBindingInput;
};

export type MutationPullKoSyncProgressArgs = {
    input: PullKoSyncProgressInput;
};

export type MutationPushKoSyncProgressArgs = {
    input: PushKoSyncProgressInput;
};

export type MutationRefreshTokenArgs = {
    input: RefreshTokenInput;
};

export type MutationRejectChapterRevisionCandidatesArgs = {
    input: RejectChapterRevisionCandidatesInput;
};

export type MutationRejectChapterRevisionsArgs = {
    input: RejectChapterRevisionsInput;
};

export type MutationRemoveExtensionStoreArgs = {
    input: RemoveExtensionStoreInput;
};

export type MutationReorderChapterDownloadArgs = {
    input: ReorderChapterDownloadInput;
};

export type MutationReorderChapterDownloadsArgs = {
    input: ReorderChapterDownloadsInput;
};

export type MutationRequestKomgaRescanArgs = {
    input: RequestKomgaRescanInput;
};

export type MutationResetSettingsArgs = {
    input: ResetSettingsInput;
};

export type MutationRestoreBackupArgs = {
    input: RestoreBackupInput;
};

export type MutationResumeArchiveBootstrapArgs = {
    input: ArchiveBootstrapSessionInput;
};

export type MutationResumeChapterIntegrityAuditArgs = {
    input: ChapterIntegrityAuditSessionInput;
};

export type MutationResumeChapterRevisionSweepArgs = {
    input: ChapterRevisionSweepSessionInput;
};

export type MutationRetryArchiveBootstrapItemsArgs = {
    input: RetryArchiveBootstrapItemsInput;
};

export type MutationRetryBackupRestoreArgs = {
    input: BackupRestoreJobInput;
};

export type MutationRetryBackupRestoreHandoffArgs = {
    input: BackupRestoreJobInput;
};

export type MutationRetryChapterIntegrityAuditItemsArgs = {
    input: RetryChapterIntegrityAuditItemsInput;
};

export type MutationRetryChapterRevisionArchivesArgs = {
    input: RetryChapterRevisionArchivesInput;
};

export type MutationRetryChapterRevisionPruningsArgs = {
    input: RetryChapterRevisionPruningsInput;
};

export type MutationRetryChapterRevisionPublicationsArgs = {
    input: RetryChapterRevisionPublicationsInput;
};

export type MutationRetryChapterRevisionSweepItemsArgs = {
    input: RetryChapterRevisionSweepItemsInput;
};

export type MutationRetryChapterRevisionVisualAnalysesArgs = {
    input: RetryChapterRevisionVisualAnalysesInput;
};

export type MutationRetryChapterRevisionsArgs = {
    input: RetryChapterRevisionsInput;
};

export type MutationRetryKomgaRescanArgs = {
    input: RetryKomgaRescanInput;
};

export type MutationRollbackChapterRevisionArgs = {
    input: RollbackChapterRevisionInput;
};

export type MutationSetCategoryMetaArgs = {
    input: SetCategoryMetaInput;
};

export type MutationSetCategoryMetasArgs = {
    input: SetCategoryMetasInput;
};

export type MutationSetChapterMetaArgs = {
    input: SetChapterMetaInput;
};

export type MutationSetChapterMetasArgs = {
    input: SetChapterMetasInput;
};

export type MutationSetGlobalMetaArgs = {
    input: SetGlobalMetaInput;
};

export type MutationSetGlobalMetasArgs = {
    input: SetGlobalMetasInput;
};

export type MutationSetMangaMetaArgs = {
    input: SetMangaMetaInput;
};

export type MutationSetMangaMetasArgs = {
    input: SetMangaMetasInput;
};

export type MutationSetSettingsArgs = {
    input: SetSettingsInput;
};

export type MutationSetSourceMetaArgs = {
    input: SetSourceMetaInput;
};

export type MutationSetSourceMetasArgs = {
    input: SetSourceMetasInput;
};

export type MutationStartArchiveBootstrapArgs = {
    input: StartArchiveBootstrapInput;
};

export type MutationStartChapterIntegrityAuditArgs = {
    input: StartChapterIntegrityAuditInput;
};

export type MutationStartChapterRevisionSweepArgs = {
    input: StartChapterRevisionSweepInput;
};

export type MutationStartDownloaderArgs = {
    input: StartDownloaderInput;
};

export type MutationStartSyncArgs = {
    input: StartSyncInput;
};

export type MutationStopDownloaderArgs = {
    input: StopDownloaderInput;
};

export type MutationTrackProgressArgs = {
    input: TrackProgressInput;
};

export type MutationUnbindTrackArgs = {
    input: UnbindTrackInput;
};

export type MutationUpdateCanonicalWorkArgs = {
    input: UpdateCanonicalWorkInput;
};

export type MutationUpdateCategoriesArgs = {
    input: UpdateCategoriesInput;
};

export type MutationUpdateCategoryArgs = {
    input: UpdateCategoryInput;
};

export type MutationUpdateCategoryMangaArgs = {
    input: UpdateCategoryMangaInput;
};

export type MutationUpdateCategoryOrderArgs = {
    input: UpdateCategoryOrderInput;
};

export type MutationUpdateChapterArgs = {
    input: UpdateChapterInput;
};

export type MutationUpdateChaptersArgs = {
    input: UpdateChaptersInput;
};

export type MutationUpdateExtensionArgs = {
    input: UpdateExtensionInput;
};

export type MutationUpdateExtensionsArgs = {
    input: UpdateExtensionsInput;
};

export type MutationUpdateLibraryArgs = {
    input: UpdateLibraryInput;
};

export type MutationUpdateLibraryMangaArgs = {
    input: UpdateLibraryMangaInput;
};

export type MutationUpdateMangaArgs = {
    input: UpdateMangaInput;
};

export type MutationUpdateMangaCategoriesArgs = {
    input: UpdateMangaCategoriesInput;
};

export type MutationUpdateMangasArgs = {
    input: UpdateMangasInput;
};

export type MutationUpdateMangasCategoriesArgs = {
    input: UpdateMangasCategoriesInput;
};

export type MutationUpdateSourcePreferenceArgs = {
    input: UpdateSourcePreferenceInput;
};

export type MutationUpdateStopArgs = {
    input: UpdateStopInput;
};

export type MutationUpdateTrackArgs = {
    input: UpdateTrackInput;
};

export type MutationUpdateWebUiArgs = {
    input: WebUiUpdateInput;
};

export type Node =
    | CanonicalSourceBindingType
    | CanonicalWorkType
    | CategoryMetaType
    | CategoryType
    | ChapterMetaType
    | ChapterRevisionComparisonPageType
    | ChapterRevisionType
    | ChapterType
    | DownloadType
    | DownloadUpdate
    | ExtensionStoreType
    | ExtensionType
    | GlobalMetaType
    | MangaMetaType
    | MangaType
    | PartialSettingsType
    | SettingsType
    | SourceMetaType
    | SourceType
    | TrackRecordType
    | TrackerType;

export type NodeList = {
    /** A list of edges which contains the [T] and cursor to aid in pagination. */
    edges: Array<Edge>;
    /** A list of [T] objects. */
    nodes: Array<Node>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of all nodes you could get from the connection. */
    totalCount: Scalars['Int']['output'];
};

export type OsInfo = {
    __typename?: 'OSInfo';
    build?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    version: Scalars['String']['output'];
};

export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['Cursor']['output']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type PartialBackupFlagsInput = {
    includeCategories?: InputMaybe<Scalars['Boolean']['input']>;
    includeChapters?: InputMaybe<Scalars['Boolean']['input']>;
    includeClientData?: InputMaybe<Scalars['Boolean']['input']>;
    includeHistory?: InputMaybe<Scalars['Boolean']['input']>;
    includeManga?: InputMaybe<Scalars['Boolean']['input']>;
    includeServerSettings?: InputMaybe<Scalars['Boolean']['input']>;
    includeTracking?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PartialSettingsType = Settings & {
    __typename?: 'PartialSettingsType';
    acceptedRevisionRetention?: Maybe<Scalars['Int']['output']>;
    archiveBootstrapInterItemDelaySeconds?: Maybe<Scalars['Int']['output']>;
    archiveBootstrapMaxAttempts?: Maybe<Scalars['Int']['output']>;
    archiveBootstrapRetrySeconds?: Maybe<Scalars['Int']['output']>;
    archiveDirectDeliveryEnabled?: Maybe<Scalars['Boolean']['output']>;
    archiveDirectDeliveryExpirySeconds?: Maybe<Scalars['Int']['output']>;
    archiveDirectDeliveryFallbackToLocal?: Maybe<Scalars['Boolean']['output']>;
    archiveDirectDeliveryRequireExpiryEvidence?: Maybe<Scalars['Boolean']['output']>;
    archiveVerificationRetrySeconds?: Maybe<Scalars['Int']['output']>;
    archiveVerificationTimeoutSeconds?: Maybe<Scalars['Int']['output']>;
    authMode?: Maybe<AuthMode>;
    authPassword?: Maybe<Scalars['String']['output']>;
    authUsername?: Maybe<Scalars['String']['output']>;
    autoBackupIncludeCategories?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeChapters?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeClientData?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeHistory?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeManga?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeServerSettings?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeTracking?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Replaced with autoDownloadNewChaptersLimit, replace with autoDownloadNewChaptersLimit */
    autoDownloadAheadLimit?: Maybe<Scalars['Int']['output']>;
    autoDownloadIgnoreReUploads?: Maybe<Scalars['Boolean']['output']>;
    autoDownloadNewChapters?: Maybe<Scalars['Boolean']['output']>;
    autoDownloadNewChaptersLimit?: Maybe<Scalars['Int']['output']>;
    backupInterval?: Maybe<Scalars['Int']['output']>;
    backupPath?: Maybe<Scalars['String']['output']>;
    backupTTL?: Maybe<Scalars['Int']['output']>;
    backupTime?: Maybe<Scalars['String']['output']>;
    /** @deprecated Removed - prefer authMode, replace with authMode */
    basicAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Removed - prefer authPassword, replace with authPassword */
    basicAuthPassword?: Maybe<Scalars['String']['output']>;
    /** @deprecated Removed - prefer authUsername, replace with authUsername */
    basicAuthUsername?: Maybe<Scalars['String']['output']>;
    chapterIntegrityAuditEnabled?: Maybe<Scalars['Boolean']['output']>;
    chapterIntegrityAuditIntervalDays?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditItemDelaySeconds?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditMaxAttempts?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditRecentRevisions?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditRetrySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionAutoDismissVisuallyEquivalent?: Maybe<Scalars['Boolean']['output']>;
    chapterRevisionSweepEnabled?: Maybe<Scalars['Boolean']['output']>;
    chapterRevisionSweepIntervalDays?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepItemDelaySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepMaxAttempts?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepNewestChapters?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepRetrySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionThumbnailMaxDimension?: Maybe<Scalars['Int']['output']>;
    chapterRevisionVisualAnalysisMaxAttempts?: Maybe<Scalars['Int']['output']>;
    chapterRevisionVisualAnalysisRetrySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionVisualHashThreshold?: Maybe<Scalars['Int']['output']>;
    databasePassword?: Maybe<Scalars['String']['output']>;
    databaseType?: Maybe<DatabaseType>;
    databaseUrl?: Maybe<Scalars['String']['output']>;
    databaseUsername?: Maybe<Scalars['String']['output']>;
    debugLogsEnabled?: Maybe<Scalars['Boolean']['output']>;
    downloadAsCbz?: Maybe<Scalars['Boolean']['output']>;
    downloadConversions?: Maybe<Array<SettingsDownloadConversionType>>;
    downloadsPath?: Maybe<Scalars['String']['output']>;
    electronPath?: Maybe<Scalars['String']['output']>;
    excludeCompleted?: Maybe<Scalars['Boolean']['output']>;
    excludeEntryWithUnreadChapters?: Maybe<Scalars['Boolean']['output']>;
    excludeNotStarted?: Maybe<Scalars['Boolean']['output']>;
    excludeUnreadChapters?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Replaced with addExtensionStore and removeExtensionStore mutations, replace with extensionStores */
    extensionRepos?: Maybe<Array<Scalars['String']['output']>>;
    flareSolverrAsResponseFallback?: Maybe<Scalars['Boolean']['output']>;
    flareSolverrEnabled?: Maybe<Scalars['Boolean']['output']>;
    flareSolverrSessionName?: Maybe<Scalars['String']['output']>;
    flareSolverrSessionTtl?: Maybe<Scalars['Int']['output']>;
    flareSolverrTimeout?: Maybe<Scalars['Int']['output']>;
    flareSolverrUrl?: Maybe<Scalars['String']['output']>;
    globalUpdateInterval?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Removed - does not do anything */
    gqlDebugLogsEnabled?: Maybe<Scalars['Boolean']['output']>;
    initialOpenInBrowserEnabled?: Maybe<Scalars['Boolean']['output']>;
    ip?: Maybe<Scalars['String']['output']>;
    jwtAudience?: Maybe<Scalars['String']['output']>;
    jwtRefreshExpiry?: Maybe<Scalars['Duration']['output']>;
    jwtTokenExpiry?: Maybe<Scalars['Duration']['output']>;
    kcefEnabled?: Maybe<Scalars['Boolean']['output']>;
    komgaApiKey?: Maybe<Scalars['String']['output']>;
    komgaBaseUrl?: Maybe<Scalars['String']['output']>;
    komgaLibraryId?: Maybe<Scalars['String']['output']>;
    komgaRequestTimeoutSeconds?: Maybe<Scalars['Int']['output']>;
    komgaRescanDebounceSeconds?: Maybe<Scalars['Int']['output']>;
    komgaRescanRetrySeconds?: Maybe<Scalars['Int']['output']>;
    koreaderSyncChecksumMethod?: Maybe<KoreaderSyncChecksumMethod>;
    /** @deprecated Moved to preference store. Is supposed to be random and gets auto generated, replace with MOVE TO PREFERENCES */
    koreaderSyncDeviceId?: Maybe<Scalars['String']['output']>;
    koreaderSyncPercentageTolerance?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncServerUrl?: Maybe<Scalars['String']['output']>;
    /** @deprecated Replaced with koreaderSyncStrategyForward and koreaderSyncStrategyBackward, replace with koreaderSyncStrategyForward, koreaderSyncStrategyBackward */
    koreaderSyncStrategy?: Maybe<KoreaderSyncLegacyStrategy>;
    koreaderSyncStrategyBackward?: Maybe<KoreaderSyncConflictStrategy>;
    koreaderSyncStrategyForward?: Maybe<KoreaderSyncConflictStrategy>;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncUserkey?: Maybe<Scalars['String']['output']>;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncUsername?: Maybe<Scalars['String']['output']>;
    localSourcePath?: Maybe<Scalars['String']['output']>;
    maxLogFileSize?: Maybe<Scalars['String']['output']>;
    maxLogFiles?: Maybe<Scalars['Int']['output']>;
    maxLogFolderSize?: Maybe<Scalars['String']['output']>;
    maxSourcesInParallel?: Maybe<Scalars['Int']['output']>;
    opdsCbzMimetype?: Maybe<CbzMediaType>;
    opdsChapterSortOrder?: Maybe<SortOrder>;
    opdsEnablePageReadProgress?: Maybe<Scalars['Boolean']['output']>;
    opdsItemsPerPage?: Maybe<Scalars['Int']['output']>;
    opdsMarkAsReadOnDownload?: Maybe<Scalars['Boolean']['output']>;
    opdsShowOnlyDownloadedChapters?: Maybe<Scalars['Boolean']['output']>;
    opdsShowOnlyUnreadChapters?: Maybe<Scalars['Boolean']['output']>;
    opdsSkipChapterMetadataFeed?: Maybe<Scalars['Boolean']['output']>;
    opdsUseBinaryFileSizes?: Maybe<Scalars['Boolean']['output']>;
    port?: Maybe<Scalars['Int']['output']>;
    serveConversions?: Maybe<Array<SettingsDownloadConversionType>>;
    socksProxyEnabled?: Maybe<Scalars['Boolean']['output']>;
    socksProxyHost?: Maybe<Scalars['String']['output']>;
    socksProxyPassword?: Maybe<Scalars['String']['output']>;
    socksProxyPort?: Maybe<Scalars['String']['output']>;
    socksProxyUsername?: Maybe<Scalars['String']['output']>;
    socksProxyVersion?: Maybe<Scalars['Int']['output']>;
    syncDataCategories?: Maybe<Scalars['Boolean']['output']>;
    syncDataChapters?: Maybe<Scalars['Boolean']['output']>;
    syncDataHistory?: Maybe<Scalars['Boolean']['output']>;
    syncDataManga?: Maybe<Scalars['Boolean']['output']>;
    syncDataTracking?: Maybe<Scalars['Boolean']['output']>;
    syncInterval?: Maybe<Scalars['Duration']['output']>;
    syncYomiApiKey?: Maybe<Scalars['String']['output']>;
    syncYomiEnabled?: Maybe<Scalars['Boolean']['output']>;
    syncYomiHost?: Maybe<Scalars['String']['output']>;
    systemTrayEnabled?: Maybe<Scalars['Boolean']['output']>;
    updateMangas?: Maybe<Scalars['Boolean']['output']>;
    useHikariConnectionPool?: Maybe<Scalars['Boolean']['output']>;
    webUIChannel?: Maybe<WebUiChannel>;
    webUIFlavor?: Maybe<WebUiFlavor>;
    webUIInterface?: Maybe<WebUiInterface>;
    webUIUpdateCheckInterval?: Maybe<Scalars['Float']['output']>;
};

export type PartialSettingsTypeInput = {
    acceptedRevisionRetention?: InputMaybe<Scalars['Int']['input']>;
    archiveBootstrapInterItemDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
    archiveBootstrapMaxAttempts?: InputMaybe<Scalars['Int']['input']>;
    archiveBootstrapRetrySeconds?: InputMaybe<Scalars['Int']['input']>;
    archiveDirectDeliveryEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    archiveDirectDeliveryExpirySeconds?: InputMaybe<Scalars['Int']['input']>;
    archiveDirectDeliveryFallbackToLocal?: InputMaybe<Scalars['Boolean']['input']>;
    archiveDirectDeliveryRequireExpiryEvidence?: InputMaybe<Scalars['Boolean']['input']>;
    archiveVerificationRetrySeconds?: InputMaybe<Scalars['Int']['input']>;
    archiveVerificationTimeoutSeconds?: InputMaybe<Scalars['Int']['input']>;
    authMode?: InputMaybe<AuthMode>;
    authPassword?: InputMaybe<Scalars['String']['input']>;
    authUsername?: InputMaybe<Scalars['String']['input']>;
    autoBackupIncludeCategories?: InputMaybe<Scalars['Boolean']['input']>;
    autoBackupIncludeChapters?: InputMaybe<Scalars['Boolean']['input']>;
    autoBackupIncludeClientData?: InputMaybe<Scalars['Boolean']['input']>;
    autoBackupIncludeHistory?: InputMaybe<Scalars['Boolean']['input']>;
    autoBackupIncludeManga?: InputMaybe<Scalars['Boolean']['input']>;
    autoBackupIncludeServerSettings?: InputMaybe<Scalars['Boolean']['input']>;
    autoBackupIncludeTracking?: InputMaybe<Scalars['Boolean']['input']>;
    autoDownloadIgnoreReUploads?: InputMaybe<Scalars['Boolean']['input']>;
    autoDownloadNewChapters?: InputMaybe<Scalars['Boolean']['input']>;
    autoDownloadNewChaptersLimit?: InputMaybe<Scalars['Int']['input']>;
    backupInterval?: InputMaybe<Scalars['Int']['input']>;
    backupPath?: InputMaybe<Scalars['String']['input']>;
    backupTTL?: InputMaybe<Scalars['Int']['input']>;
    backupTime?: InputMaybe<Scalars['String']['input']>;
    chapterIntegrityAuditEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    chapterIntegrityAuditIntervalDays?: InputMaybe<Scalars['Int']['input']>;
    chapterIntegrityAuditItemDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
    chapterIntegrityAuditMaxAttempts?: InputMaybe<Scalars['Int']['input']>;
    chapterIntegrityAuditRecentRevisions?: InputMaybe<Scalars['Int']['input']>;
    chapterIntegrityAuditRetrySeconds?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionAutoDismissVisuallyEquivalent?: InputMaybe<Scalars['Boolean']['input']>;
    chapterRevisionSweepEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    chapterRevisionSweepIntervalDays?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionSweepItemDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionSweepMaxAttempts?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionSweepNewestChapters?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionSweepRetrySeconds?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionThumbnailMaxDimension?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionVisualAnalysisMaxAttempts?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionVisualAnalysisRetrySeconds?: InputMaybe<Scalars['Int']['input']>;
    chapterRevisionVisualHashThreshold?: InputMaybe<Scalars['Int']['input']>;
    databasePassword?: InputMaybe<Scalars['String']['input']>;
    databaseType?: InputMaybe<DatabaseType>;
    databaseUrl?: InputMaybe<Scalars['String']['input']>;
    databaseUsername?: InputMaybe<Scalars['String']['input']>;
    debugLogsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    downloadAsCbz?: InputMaybe<Scalars['Boolean']['input']>;
    downloadConversions?: InputMaybe<Array<SettingsDownloadConversionTypeInput>>;
    downloadsPath?: InputMaybe<Scalars['String']['input']>;
    electronPath?: InputMaybe<Scalars['String']['input']>;
    excludeCompleted?: InputMaybe<Scalars['Boolean']['input']>;
    excludeEntryWithUnreadChapters?: InputMaybe<Scalars['Boolean']['input']>;
    excludeNotStarted?: InputMaybe<Scalars['Boolean']['input']>;
    excludeUnreadChapters?: InputMaybe<Scalars['Boolean']['input']>;
    flareSolverrAsResponseFallback?: InputMaybe<Scalars['Boolean']['input']>;
    flareSolverrEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    flareSolverrSessionName?: InputMaybe<Scalars['String']['input']>;
    flareSolverrSessionTtl?: InputMaybe<Scalars['Int']['input']>;
    flareSolverrTimeout?: InputMaybe<Scalars['Int']['input']>;
    flareSolverrUrl?: InputMaybe<Scalars['String']['input']>;
    globalUpdateInterval?: InputMaybe<Scalars['Float']['input']>;
    initialOpenInBrowserEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    ip?: InputMaybe<Scalars['String']['input']>;
    jwtAudience?: InputMaybe<Scalars['String']['input']>;
    jwtRefreshExpiry?: InputMaybe<Scalars['Duration']['input']>;
    jwtTokenExpiry?: InputMaybe<Scalars['Duration']['input']>;
    kcefEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    komgaApiKey?: InputMaybe<Scalars['String']['input']>;
    komgaBaseUrl?: InputMaybe<Scalars['String']['input']>;
    komgaLibraryId?: InputMaybe<Scalars['String']['input']>;
    komgaRequestTimeoutSeconds?: InputMaybe<Scalars['Int']['input']>;
    komgaRescanDebounceSeconds?: InputMaybe<Scalars['Int']['input']>;
    komgaRescanRetrySeconds?: InputMaybe<Scalars['Int']['input']>;
    koreaderSyncChecksumMethod?: InputMaybe<KoreaderSyncChecksumMethod>;
    koreaderSyncPercentageTolerance?: InputMaybe<Scalars['Float']['input']>;
    koreaderSyncStrategyBackward?: InputMaybe<KoreaderSyncConflictStrategy>;
    koreaderSyncStrategyForward?: InputMaybe<KoreaderSyncConflictStrategy>;
    localSourcePath?: InputMaybe<Scalars['String']['input']>;
    maxLogFileSize?: InputMaybe<Scalars['String']['input']>;
    maxLogFiles?: InputMaybe<Scalars['Int']['input']>;
    maxLogFolderSize?: InputMaybe<Scalars['String']['input']>;
    maxSourcesInParallel?: InputMaybe<Scalars['Int']['input']>;
    opdsCbzMimetype?: InputMaybe<CbzMediaType>;
    opdsChapterSortOrder?: InputMaybe<SortOrder>;
    opdsEnablePageReadProgress?: InputMaybe<Scalars['Boolean']['input']>;
    opdsItemsPerPage?: InputMaybe<Scalars['Int']['input']>;
    opdsMarkAsReadOnDownload?: InputMaybe<Scalars['Boolean']['input']>;
    opdsShowOnlyDownloadedChapters?: InputMaybe<Scalars['Boolean']['input']>;
    opdsShowOnlyUnreadChapters?: InputMaybe<Scalars['Boolean']['input']>;
    opdsSkipChapterMetadataFeed?: InputMaybe<Scalars['Boolean']['input']>;
    opdsUseBinaryFileSizes?: InputMaybe<Scalars['Boolean']['input']>;
    port?: InputMaybe<Scalars['Int']['input']>;
    serveConversions?: InputMaybe<Array<SettingsDownloadConversionTypeInput>>;
    socksProxyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    socksProxyHost?: InputMaybe<Scalars['String']['input']>;
    socksProxyPassword?: InputMaybe<Scalars['String']['input']>;
    socksProxyPort?: InputMaybe<Scalars['String']['input']>;
    socksProxyUsername?: InputMaybe<Scalars['String']['input']>;
    socksProxyVersion?: InputMaybe<Scalars['Int']['input']>;
    syncDataCategories?: InputMaybe<Scalars['Boolean']['input']>;
    syncDataChapters?: InputMaybe<Scalars['Boolean']['input']>;
    syncDataHistory?: InputMaybe<Scalars['Boolean']['input']>;
    syncDataManga?: InputMaybe<Scalars['Boolean']['input']>;
    syncDataTracking?: InputMaybe<Scalars['Boolean']['input']>;
    syncInterval?: InputMaybe<Scalars['Duration']['input']>;
    syncYomiApiKey?: InputMaybe<Scalars['String']['input']>;
    syncYomiEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    syncYomiHost?: InputMaybe<Scalars['String']['input']>;
    systemTrayEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    updateMangas?: InputMaybe<Scalars['Boolean']['input']>;
    useHikariConnectionPool?: InputMaybe<Scalars['Boolean']['input']>;
    webUIChannel?: InputMaybe<WebUiChannel>;
    webUIFlavor?: InputMaybe<WebUiFlavor>;
    webUIInterface?: InputMaybe<WebUiInterface>;
    webUIUpdateCheckInterval?: InputMaybe<Scalars['Float']['input']>;
};

export type PlatformInfo = {
    __typename?: 'PlatformInfo';
    arch: Scalars['String']['output'];
    headless: Scalars['Boolean']['output'];
    jvm: JvmInfo;
    os: OsInfo;
};

export type Preference =
    | CheckBoxPreference
    | EditTextPreference
    | ListPreference
    | MultiSelectListPreference
    | SwitchPreference;

export type PromoteCanonicalBindingInput = {
    bindingId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type PromoteCanonicalBindingPayload = {
    __typename?: 'PromoteCanonicalBindingPayload';
    binding?: Maybe<CanonicalSourceBindingType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
};

export type PullKoSyncProgressInput = {
    chapterId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type PullKoSyncProgressPayload = {
    __typename?: 'PullKoSyncProgressPayload';
    chapter?: Maybe<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    syncConflict?: Maybe<SyncConflictInfoType>;
};

export type PushKoSyncProgressInput = {
    chapterId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type PushKoSyncProgressPayload = {
    __typename?: 'PushKoSyncProgressPayload';
    chapter?: Maybe<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
};

export type Query = {
    __typename?: 'Query';
    aboutServer: AboutServerPayload;
    aboutWebUI: AboutWebUi;
    activeChapterRevision?: Maybe<ChapterRevisionType>;
    approvalBacklog: ChapterRevisionNodeList;
    archiveBootstrapActiveSession?: Maybe<ArchiveBootstrapSessionType>;
    archiveBootstrapEffectivePolicy?: Maybe<ArchiveBootstrapItemType>;
    archiveBootstrapItems: ArchiveBootstrapItemNodeList;
    archiveBootstrapLatestSession?: Maybe<ArchiveBootstrapSessionType>;
    archiveBootstrapProgress: ArchiveBootstrapProgressType;
    archiveBootstrapSession?: Maybe<ArchiveBootstrapSessionType>;
    archiveBootstrapSessions: ArchiveBootstrapSessionNodeList;
    archiveBootstrapUnresolvedSources: Array<ArchiveBootstrapUnresolvedSourceType>;
    backupRestoreAudits: Array<BackupRestoreAuditType>;
    backupRestoreErrorCounts?: Maybe<BackupRestoreErrorCountsType>;
    backupRestoreJob?: Maybe<BackupRestoreJobType>;
    backupRestoreJobs: Array<BackupRestoreJobType>;
    canonicalBindingForManga?: Maybe<CanonicalSourceBindingType>;
    canonicalBindingsForWork: CanonicalSourceBindingNodeList;
    canonicalIdentityStatus: CanonicalIdentityStatusType;
    canonicalWork?: Maybe<CanonicalWorkType>;
    canonicalWorkForManga?: Maybe<CanonicalWorkType>;
    canonicalWorks: CanonicalWorkNodeList;
    categories: CategoryNodeList;
    category: CategoryType;
    chapter: ChapterType;
    chapterIntegrityAuditActiveSession?: Maybe<ChapterIntegrityAuditSessionType>;
    chapterIntegrityAuditItems: ChapterIntegrityAuditItemNodeList;
    chapterIntegrityAuditLatestSession?: Maybe<ChapterIntegrityAuditSessionType>;
    chapterIntegrityAuditProgress: ChapterIntegrityAuditProgressType;
    chapterIntegrityAuditSchedule?: Maybe<ChapterIntegrityAuditScheduleType>;
    chapterIntegrityAuditSession?: Maybe<ChapterIntegrityAuditSessionType>;
    chapterIntegrityAuditSessions: ChapterIntegrityAuditSessionNodeList;
    chapterRevision?: Maybe<ChapterRevisionType>;
    chapterRevisionComparison?: Maybe<ChapterRevisionComparisonType>;
    chapterRevisionComparisonPages: ChapterRevisionComparisonPageNodeList;
    chapterRevisionHistory: ChapterRevisionNodeList;
    chapterRevisionRollbacks: ChapterRevisionRollbackNodeList;
    chapterRevisionSweepActiveSession?: Maybe<ChapterRevisionSweepSessionType>;
    chapterRevisionSweepItems: ChapterRevisionSweepItemNodeList;
    chapterRevisionSweepLatestSession?: Maybe<ChapterRevisionSweepSessionType>;
    chapterRevisionSweepProgress: ChapterRevisionSweepProgressType;
    chapterRevisionSweepSchedule?: Maybe<ChapterRevisionSweepScheduleType>;
    chapterRevisionSweepSession?: Maybe<ChapterRevisionSweepSessionType>;
    chapterRevisionSweepSessions: ChapterRevisionSweepSessionNodeList;
    chapterRevisionVisualAnalysisStatus: ChapterRevisionVisualAnalysisStatus;
    chapterRevisions: ChapterRevisionNodeList;
    chapters: ChapterNodeList;
    checkForServerUpdates: Array<CheckForServerUpdatesPayload>;
    checkForWebUIUpdate: WebUiUpdateCheck;
    downloadStatus: DownloadStatus;
    extension: ExtensionType;
    extensionStore: ExtensionStoreType;
    extensionStores: ExtensionStoreNodeList;
    extensions: ExtensionNodeList;
    getWebUIUpdateStatus: WebUiUpdateStatus;
    koSyncStatus: KoSyncStatusPayload;
    komgaRescanStatus: KomgaRescanStatusType;
    lastSyncStatus?: Maybe<SyncStatus>;
    lastUpdateTimestamp: LastUpdateTimestampPayload;
    libraryUpdateStatus: LibraryUpdateStatus;
    manga: MangaType;
    mangas: MangaNodeList;
    meta: GlobalMetaType;
    metas: GlobalMetaNodeList;
    pruningBacklog: ChapterRevisionNodeList;
    publicationBacklog: ChapterRevisionNodeList;
    queuedBacklog: ChapterRevisionNodeList;
    restoreStatus?: Maybe<BackupRestoreStatus>;
    searchTracker: SearchTrackerPayload;
    settings: SettingsType;
    source: SourceType;
    sources: SourceNodeList;
    trackRecord: TrackRecordType;
    trackRecords: TrackRecordNodeList;
    tracker: TrackerType;
    trackers: TrackerNodeList;
    /** @deprecated Replaced with libraryUpdateStatus, replace with libraryUpdateStatus */
    updateStatus: UpdateStatus;
    validateBackup: ValidateBackupResult;
    visualAnalysisBacklog: ChapterRevisionNodeList;
};

export type QueryActiveChapterRevisionArgs = {
    chapterKey: Scalars['String']['input'];
};

export type QueryApprovalBacklogArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
};

export type QueryArchiveBootstrapEffectivePolicyArgs = {
    mangaId: Scalars['Int']['input'];
    sessionId: Scalars['Int']['input'];
};

export type QueryArchiveBootstrapItemsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    mangaId?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ArchiveBootstrapItemOrderInput>>;
    sessionId: Scalars['Int']['input'];
    state?: InputMaybe<ArchiveBootstrapItemState>;
};

export type QueryArchiveBootstrapProgressArgs = {
    sessionId: Scalars['Int']['input'];
};

export type QueryArchiveBootstrapSessionArgs = {
    id: Scalars['Int']['input'];
};

export type QueryArchiveBootstrapSessionsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ArchiveBootstrapSessionOrderInput>>;
    state?: InputMaybe<ArchiveBootstrapState>;
};

export type QueryArchiveBootstrapUnresolvedSourcesArgs = {
    sampleSize: Scalars['Int']['input'];
    sessionId: Scalars['Int']['input'];
};

export type QueryBackupRestoreAuditsArgs = {
    level?: InputMaybe<BackupRestoreAuditLevel>;
    limit: Scalars['Int']['input'];
    restoreId: Scalars['String']['input'];
};

export type QueryBackupRestoreErrorCountsArgs = {
    restoreId: Scalars['String']['input'];
};

export type QueryBackupRestoreJobArgs = {
    restoreId: Scalars['String']['input'];
};

export type QueryBackupRestoreJobsArgs = {
    limit: Scalars['Int']['input'];
    state?: InputMaybe<BackupRestoreJobState>;
};

export type QueryCanonicalBindingForMangaArgs = {
    mangaId: Scalars['Int']['input'];
};

export type QueryCanonicalBindingsForWorkArgs = {
    workId: Scalars['Int']['input'];
};

export type QueryCanonicalWorkArgs = {
    workKey: Scalars['String']['input'];
};

export type QueryCanonicalWorkForMangaArgs = {
    mangaId: Scalars['Int']['input'];
};

export type QueryCanonicalWorksArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<CanonicalWorkOrderInput>>;
    titleContains?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCategoriesArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<CategoryConditionInput>;
    filter?: InputMaybe<CategoryFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<CategoryOrderInput>>;
};

export type QueryCategoryArgs = {
    id: Scalars['Int']['input'];
};

export type QueryChapterArgs = {
    id: Scalars['Int']['input'];
};

export type QueryChapterIntegrityAuditItemsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    mangaId?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterIntegrityAuditItemOrderInput>>;
    sessionId: Scalars['Int']['input'];
    state?: InputMaybe<ChapterIntegrityAuditItemState>;
};

export type QueryChapterIntegrityAuditProgressArgs = {
    sessionId: Scalars['Int']['input'];
};

export type QueryChapterIntegrityAuditSessionArgs = {
    id: Scalars['Int']['input'];
};

export type QueryChapterIntegrityAuditSessionsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterIntegrityAuditSessionOrderInput>>;
    state?: InputMaybe<ChapterIntegrityAuditSessionState>;
};

export type QueryChapterRevisionArgs = {
    id: Scalars['Int']['input'];
};

export type QueryChapterRevisionComparisonArgs = {
    revisionId: Scalars['Int']['input'];
};

export type QueryChapterRevisionComparisonPagesArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    revisionId: Scalars['Int']['input'];
};

export type QueryChapterRevisionHistoryArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    chapterKey: Scalars['String']['input'];
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
};

export type QueryChapterRevisionRollbacksArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    chapterKey?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionRollbackOrderInput>>;
};

export type QueryChapterRevisionSweepItemsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    mangaId?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionSweepItemOrderInput>>;
    sessionId: Scalars['Int']['input'];
    state?: InputMaybe<ChapterRevisionSweepItemState>;
};

export type QueryChapterRevisionSweepProgressArgs = {
    sessionId: Scalars['Int']['input'];
};

export type QueryChapterRevisionSweepSessionArgs = {
    id: Scalars['Int']['input'];
};

export type QueryChapterRevisionSweepSessionsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionSweepSessionOrderInput>>;
    state?: InputMaybe<ChapterRevisionSweepSessionState>;
};

export type QueryChapterRevisionsArgs = {
    acquisitionState?: InputMaybe<ChapterAcquisitionState>;
    after?: InputMaybe<Scalars['Cursor']['input']>;
    archiveState?: InputMaybe<ChapterArchiveState>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    chapterId?: InputMaybe<Scalars['Int']['input']>;
    chapterKey?: InputMaybe<Scalars['String']['input']>;
    discoveryReason?: InputMaybe<ChapterRevisionDiscoveryReason>;
    disposition?: InputMaybe<ChapterRevisionDisposition>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
    publicationState?: InputMaybe<ChapterPublicationState>;
    retentionState?: InputMaybe<ChapterRetentionState>;
    signalConfidence?: InputMaybe<ChapterRevisionSignalConfidence>;
};

export type QueryChaptersArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ChapterConditionInput>;
    filter?: InputMaybe<ChapterFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterOrderInput>>;
};

export type QueryExtensionArgs = {
    pkgName: Scalars['String']['input'];
};

export type QueryExtensionStoreArgs = {
    indexUrl: Scalars['String']['input'];
};

export type QueryExtensionStoresArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ExtensionStoreConditionInput>;
    filter?: InputMaybe<ExtensionStoreFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ExtensionStoreOrderInput>>;
};

export type QueryExtensionsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ExtensionConditionInput>;
    filter?: InputMaybe<ExtensionFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ExtensionOrderInput>>;
};

export type QueryMangaArgs = {
    id: Scalars['Int']['input'];
};

export type QueryMangasArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<MangaConditionInput>;
    filter?: InputMaybe<MangaFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<MangaOrderInput>>;
};

export type QueryMetaArgs = {
    key: Scalars['String']['input'];
};

export type QueryMetasArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<MetaConditionInput>;
    filter?: InputMaybe<MetaFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<MetaOrderInput>>;
};

export type QueryPruningBacklogArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
};

export type QueryPublicationBacklogArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
};

export type QueryQueuedBacklogArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
};

export type QueryRestoreStatusArgs = {
    id: Scalars['String']['input'];
};

export type QuerySearchTrackerArgs = {
    input: SearchTrackerInput;
};

export type QuerySourceArgs = {
    id: Scalars['LongString']['input'];
};

export type QuerySourcesArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<SourceConditionInput>;
    filter?: InputMaybe<SourceFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<SourceOrderInput>>;
};

export type QueryTrackRecordArgs = {
    id: Scalars['Int']['input'];
};

export type QueryTrackRecordsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<TrackRecordConditionInput>;
    filter?: InputMaybe<TrackRecordFilterInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<TrackRecordOrderInput>>;
};

export type QueryTrackerArgs = {
    id: Scalars['Int']['input'];
};

export type QueryTrackersArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<TrackerConditionInput>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<TrackerOrderInput>>;
};

export type QueryValidateBackupArgs = {
    input: ValidateBackupInput;
};

export type QueryVisualAnalysisBacklogArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<Array<ChapterRevisionOrderInput>>;
};

export type RefreshTokenInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    refreshToken: Scalars['String']['input'];
};

export type RefreshTokenPayload = {
    __typename?: 'RefreshTokenPayload';
    accessToken: Scalars['String']['output'];
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RejectChapterRevisionCandidatesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RejectChapterRevisionCandidatesPayload = {
    __typename?: 'RejectChapterRevisionCandidatesPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RejectChapterRevisionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RejectChapterRevisionsPayload = {
    __typename?: 'RejectChapterRevisionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RemoveExtensionStoreInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    indexUrl: Scalars['String']['input'];
};

export type RemoveExtensionStorePayload = {
    __typename?: 'RemoveExtensionStorePayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    extensionStore?: Maybe<ExtensionStoreType>;
};

export type ReorderChapterDownloadInput = {
    chapterId: Scalars['Int']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    to: Scalars['Int']['input'];
};

export type ReorderChapterDownloadPayload = {
    __typename?: 'ReorderChapterDownloadPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type ReorderChapterDownloadsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    reorders: Array<ChapterDownloadReorderInput>;
};

export type RequestKomgaRescanInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RequestKomgaRescanPayload = {
    __typename?: 'RequestKomgaRescanPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    rescan: KomgaRescanStatusType;
};

export type ResetSettingsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetSettingsPayload = {
    __typename?: 'ResetSettingsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    settings: SettingsType;
};

export type RestoreBackupInput = {
    backup: Scalars['Upload']['input'];
    bootstrapCategoryOverrides?: InputMaybe<Array<BootstrapCategoryPolicyInput>>;
    bootstrapDefaultPolicy?: InputMaybe<MangaAcquisitionPolicy>;
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    flags?: InputMaybe<PartialBackupFlagsInput>;
};

export type RestoreBackupPayload = {
    __typename?: 'RestoreBackupPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    status?: Maybe<BackupRestoreStatus>;
};

export type RetryArchiveBootstrapItemsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    itemIds?: InputMaybe<Array<Scalars['Int']['input']>>;
    sessionId: Scalars['Int']['input'];
};

export type RetryArchiveBootstrapItemsPayload = {
    __typename?: 'RetryArchiveBootstrapItemsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ArchiveBootstrapSessionType>;
};

export type RetryChapterIntegrityAuditItemsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    itemIds?: InputMaybe<Array<Scalars['Int']['input']>>;
    sessionId: Scalars['Int']['input'];
};

export type RetryChapterIntegrityAuditItemsPayload = {
    __typename?: 'RetryChapterIntegrityAuditItemsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ChapterIntegrityAuditSessionType>;
};

export type RetryChapterRevisionArchivesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RetryChapterRevisionArchivesPayload = {
    __typename?: 'RetryChapterRevisionArchivesPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RetryChapterRevisionPruningsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RetryChapterRevisionPruningsPayload = {
    __typename?: 'RetryChapterRevisionPruningsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RetryChapterRevisionPublicationsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RetryChapterRevisionPublicationsPayload = {
    __typename?: 'RetryChapterRevisionPublicationsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RetryChapterRevisionSweepItemsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    itemIds?: InputMaybe<Array<Scalars['Int']['input']>>;
    sessionId: Scalars['Int']['input'];
};

export type RetryChapterRevisionSweepItemsPayload = {
    __typename?: 'RetryChapterRevisionSweepItemsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ChapterRevisionSweepSessionType>;
};

export type RetryChapterRevisionVisualAnalysesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RetryChapterRevisionVisualAnalysesPayload = {
    __typename?: 'RetryChapterRevisionVisualAnalysesPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RetryChapterRevisionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
};

export type RetryChapterRevisionsPayload = {
    __typename?: 'RetryChapterRevisionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    revisions: Array<ChapterRevisionType>;
};

export type RetryKomgaRescanInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RetryKomgaRescanPayload = {
    __typename?: 'RetryKomgaRescanPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    rescan: KomgaRescanStatusType;
    retried: Scalars['Boolean']['output'];
};

export type RollbackChapterRevisionInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    revisionId: Scalars['Int']['input'];
};

export type RollbackChapterRevisionPayload = {
    __typename?: 'RollbackChapterRevisionPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    replacedRevisionId?: Maybe<Scalars['Int']['output']>;
    revision?: Maybe<ChapterRevisionType>;
};

export type SearchTrackerInput = {
    query: Scalars['String']['input'];
    trackerId: Scalars['Int']['input'];
};

export type SearchTrackerPayload = {
    __typename?: 'SearchTrackerPayload';
    trackSearches: Array<TrackSearchType>;
};

export type SelectFilter = {
    __typename?: 'SelectFilter';
    default: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    values: Array<Scalars['String']['output']>;
};

export type SeparatorFilter = {
    __typename?: 'SeparatorFilter';
    name: Scalars['String']['output'];
};

export type SetCategoryMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    meta: CategoryMetaTypeInput;
};

export type SetCategoryMetaPayload = {
    __typename?: 'SetCategoryMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta: CategoryMetaType;
};

export type SetCategoryMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<SetCategoryMetasItemInput>;
};

export type SetCategoryMetasItemInput = {
    categoryIds: Array<Scalars['Int']['input']>;
    metas: Array<MetaInput>;
};

export type SetCategoryMetasPayload = {
    __typename?: 'SetCategoryMetasPayload';
    categories: Array<CategoryType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<CategoryMetaType>;
};

export type SetChapterMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    meta: ChapterMetaTypeInput;
};

export type SetChapterMetaPayload = {
    __typename?: 'SetChapterMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta: ChapterMetaType;
};

export type SetChapterMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<SetChapterMetasItemInput>;
};

export type SetChapterMetasItemInput = {
    chapterIds: Array<Scalars['Int']['input']>;
    metas: Array<MetaInput>;
};

export type SetChapterMetasPayload = {
    __typename?: 'SetChapterMetasPayload';
    chapters: Array<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<ChapterMetaType>;
};

export type SetGlobalMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    meta: GlobalMetaTypeInput;
};

export type SetGlobalMetaPayload = {
    __typename?: 'SetGlobalMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta: GlobalMetaType;
};

export type SetGlobalMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    metas: Array<MetaInput>;
};

export type SetGlobalMetasPayload = {
    __typename?: 'SetGlobalMetasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<GlobalMetaType>;
};

export type SetMangaMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    meta: MangaMetaTypeInput;
};

export type SetMangaMetaPayload = {
    __typename?: 'SetMangaMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta: MangaMetaType;
};

export type SetMangaMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<SetMangaMetasItemInput>;
};

export type SetMangaMetasItemInput = {
    mangaIds: Array<Scalars['Int']['input']>;
    metas: Array<MetaInput>;
};

export type SetMangaMetasPayload = {
    __typename?: 'SetMangaMetasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    mangas: Array<MangaType>;
    metas: Array<MangaMetaType>;
};

export type SetSettingsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    settings: PartialSettingsTypeInput;
};

export type SetSettingsPayload = {
    __typename?: 'SetSettingsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    settings: SettingsType;
};

export type SetSourceMetaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    meta: SourceMetaTypeInput;
};

export type SetSourceMetaPayload = {
    __typename?: 'SetSourceMetaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    meta: SourceMetaType;
};

export type SetSourceMetasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    items: Array<SetSourceMetasItemInput>;
};

export type SetSourceMetasItemInput = {
    metas: Array<MetaInput>;
    sourceIds: Array<Scalars['LongString']['input']>;
};

export type SetSourceMetasPayload = {
    __typename?: 'SetSourceMetasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    metas: Array<SourceMetaType>;
    sources: Array<SourceType>;
};

export type Settings = {
    acceptedRevisionRetention?: Maybe<Scalars['Int']['output']>;
    archiveBootstrapInterItemDelaySeconds?: Maybe<Scalars['Int']['output']>;
    archiveBootstrapMaxAttempts?: Maybe<Scalars['Int']['output']>;
    archiveBootstrapRetrySeconds?: Maybe<Scalars['Int']['output']>;
    archiveDirectDeliveryEnabled?: Maybe<Scalars['Boolean']['output']>;
    archiveDirectDeliveryExpirySeconds?: Maybe<Scalars['Int']['output']>;
    archiveDirectDeliveryFallbackToLocal?: Maybe<Scalars['Boolean']['output']>;
    archiveDirectDeliveryRequireExpiryEvidence?: Maybe<Scalars['Boolean']['output']>;
    archiveVerificationRetrySeconds?: Maybe<Scalars['Int']['output']>;
    archiveVerificationTimeoutSeconds?: Maybe<Scalars['Int']['output']>;
    authMode?: Maybe<AuthMode>;
    authPassword?: Maybe<Scalars['String']['output']>;
    authUsername?: Maybe<Scalars['String']['output']>;
    autoBackupIncludeCategories?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeChapters?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeClientData?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeHistory?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeManga?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeServerSettings?: Maybe<Scalars['Boolean']['output']>;
    autoBackupIncludeTracking?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Replaced with autoDownloadNewChaptersLimit, replace with autoDownloadNewChaptersLimit */
    autoDownloadAheadLimit?: Maybe<Scalars['Int']['output']>;
    autoDownloadIgnoreReUploads?: Maybe<Scalars['Boolean']['output']>;
    autoDownloadNewChapters?: Maybe<Scalars['Boolean']['output']>;
    autoDownloadNewChaptersLimit?: Maybe<Scalars['Int']['output']>;
    backupInterval?: Maybe<Scalars['Int']['output']>;
    backupPath?: Maybe<Scalars['String']['output']>;
    backupTTL?: Maybe<Scalars['Int']['output']>;
    backupTime?: Maybe<Scalars['String']['output']>;
    /** @deprecated Removed - prefer authMode, replace with authMode */
    basicAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Removed - prefer authPassword, replace with authPassword */
    basicAuthPassword?: Maybe<Scalars['String']['output']>;
    /** @deprecated Removed - prefer authUsername, replace with authUsername */
    basicAuthUsername?: Maybe<Scalars['String']['output']>;
    chapterIntegrityAuditEnabled?: Maybe<Scalars['Boolean']['output']>;
    chapterIntegrityAuditIntervalDays?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditItemDelaySeconds?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditMaxAttempts?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditRecentRevisions?: Maybe<Scalars['Int']['output']>;
    chapterIntegrityAuditRetrySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionAutoDismissVisuallyEquivalent?: Maybe<Scalars['Boolean']['output']>;
    chapterRevisionSweepEnabled?: Maybe<Scalars['Boolean']['output']>;
    chapterRevisionSweepIntervalDays?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepItemDelaySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepMaxAttempts?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepNewestChapters?: Maybe<Scalars['Int']['output']>;
    chapterRevisionSweepRetrySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionThumbnailMaxDimension?: Maybe<Scalars['Int']['output']>;
    chapterRevisionVisualAnalysisMaxAttempts?: Maybe<Scalars['Int']['output']>;
    chapterRevisionVisualAnalysisRetrySeconds?: Maybe<Scalars['Int']['output']>;
    chapterRevisionVisualHashThreshold?: Maybe<Scalars['Int']['output']>;
    databasePassword?: Maybe<Scalars['String']['output']>;
    databaseType?: Maybe<DatabaseType>;
    databaseUrl?: Maybe<Scalars['String']['output']>;
    databaseUsername?: Maybe<Scalars['String']['output']>;
    debugLogsEnabled?: Maybe<Scalars['Boolean']['output']>;
    downloadAsCbz?: Maybe<Scalars['Boolean']['output']>;
    downloadConversions?: Maybe<Array<SettingsDownloadConversion>>;
    downloadsPath?: Maybe<Scalars['String']['output']>;
    electronPath?: Maybe<Scalars['String']['output']>;
    excludeCompleted?: Maybe<Scalars['Boolean']['output']>;
    excludeEntryWithUnreadChapters?: Maybe<Scalars['Boolean']['output']>;
    excludeNotStarted?: Maybe<Scalars['Boolean']['output']>;
    excludeUnreadChapters?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Replaced with addExtensionStore and removeExtensionStore mutations, replace with extensionStores */
    extensionRepos?: Maybe<Array<Scalars['String']['output']>>;
    flareSolverrAsResponseFallback?: Maybe<Scalars['Boolean']['output']>;
    flareSolverrEnabled?: Maybe<Scalars['Boolean']['output']>;
    flareSolverrSessionName?: Maybe<Scalars['String']['output']>;
    flareSolverrSessionTtl?: Maybe<Scalars['Int']['output']>;
    flareSolverrTimeout?: Maybe<Scalars['Int']['output']>;
    flareSolverrUrl?: Maybe<Scalars['String']['output']>;
    globalUpdateInterval?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Removed - does not do anything */
    gqlDebugLogsEnabled?: Maybe<Scalars['Boolean']['output']>;
    initialOpenInBrowserEnabled?: Maybe<Scalars['Boolean']['output']>;
    ip?: Maybe<Scalars['String']['output']>;
    jwtAudience?: Maybe<Scalars['String']['output']>;
    jwtRefreshExpiry?: Maybe<Scalars['Duration']['output']>;
    jwtTokenExpiry?: Maybe<Scalars['Duration']['output']>;
    kcefEnabled?: Maybe<Scalars['Boolean']['output']>;
    komgaApiKey?: Maybe<Scalars['String']['output']>;
    komgaBaseUrl?: Maybe<Scalars['String']['output']>;
    komgaLibraryId?: Maybe<Scalars['String']['output']>;
    komgaRequestTimeoutSeconds?: Maybe<Scalars['Int']['output']>;
    komgaRescanDebounceSeconds?: Maybe<Scalars['Int']['output']>;
    komgaRescanRetrySeconds?: Maybe<Scalars['Int']['output']>;
    koreaderSyncChecksumMethod?: Maybe<KoreaderSyncChecksumMethod>;
    /** @deprecated Moved to preference store. Is supposed to be random and gets auto generated, replace with MOVE TO PREFERENCES */
    koreaderSyncDeviceId?: Maybe<Scalars['String']['output']>;
    koreaderSyncPercentageTolerance?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncServerUrl?: Maybe<Scalars['String']['output']>;
    /** @deprecated Replaced with koreaderSyncStrategyForward and koreaderSyncStrategyBackward, replace with koreaderSyncStrategyForward, koreaderSyncStrategyBackward */
    koreaderSyncStrategy?: Maybe<KoreaderSyncLegacyStrategy>;
    koreaderSyncStrategyBackward?: Maybe<KoreaderSyncConflictStrategy>;
    koreaderSyncStrategyForward?: Maybe<KoreaderSyncConflictStrategy>;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncUserkey?: Maybe<Scalars['String']['output']>;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncUsername?: Maybe<Scalars['String']['output']>;
    localSourcePath?: Maybe<Scalars['String']['output']>;
    maxLogFileSize?: Maybe<Scalars['String']['output']>;
    maxLogFiles?: Maybe<Scalars['Int']['output']>;
    maxLogFolderSize?: Maybe<Scalars['String']['output']>;
    maxSourcesInParallel?: Maybe<Scalars['Int']['output']>;
    opdsCbzMimetype?: Maybe<CbzMediaType>;
    opdsChapterSortOrder?: Maybe<SortOrder>;
    opdsEnablePageReadProgress?: Maybe<Scalars['Boolean']['output']>;
    opdsItemsPerPage?: Maybe<Scalars['Int']['output']>;
    opdsMarkAsReadOnDownload?: Maybe<Scalars['Boolean']['output']>;
    opdsShowOnlyDownloadedChapters?: Maybe<Scalars['Boolean']['output']>;
    opdsShowOnlyUnreadChapters?: Maybe<Scalars['Boolean']['output']>;
    opdsSkipChapterMetadataFeed?: Maybe<Scalars['Boolean']['output']>;
    opdsUseBinaryFileSizes?: Maybe<Scalars['Boolean']['output']>;
    port?: Maybe<Scalars['Int']['output']>;
    serveConversions?: Maybe<Array<SettingsDownloadConversion>>;
    socksProxyEnabled?: Maybe<Scalars['Boolean']['output']>;
    socksProxyHost?: Maybe<Scalars['String']['output']>;
    socksProxyPassword?: Maybe<Scalars['String']['output']>;
    socksProxyPort?: Maybe<Scalars['String']['output']>;
    socksProxyUsername?: Maybe<Scalars['String']['output']>;
    socksProxyVersion?: Maybe<Scalars['Int']['output']>;
    syncDataCategories?: Maybe<Scalars['Boolean']['output']>;
    syncDataChapters?: Maybe<Scalars['Boolean']['output']>;
    syncDataHistory?: Maybe<Scalars['Boolean']['output']>;
    syncDataManga?: Maybe<Scalars['Boolean']['output']>;
    syncDataTracking?: Maybe<Scalars['Boolean']['output']>;
    syncInterval?: Maybe<Scalars['Duration']['output']>;
    syncYomiApiKey?: Maybe<Scalars['String']['output']>;
    syncYomiEnabled?: Maybe<Scalars['Boolean']['output']>;
    syncYomiHost?: Maybe<Scalars['String']['output']>;
    systemTrayEnabled?: Maybe<Scalars['Boolean']['output']>;
    updateMangas?: Maybe<Scalars['Boolean']['output']>;
    useHikariConnectionPool?: Maybe<Scalars['Boolean']['output']>;
    webUIChannel?: Maybe<WebUiChannel>;
    webUIFlavor?: Maybe<WebUiFlavor>;
    webUIInterface?: Maybe<WebUiInterface>;
    webUIUpdateCheckInterval?: Maybe<Scalars['Float']['output']>;
};

export type SettingsDownloadConversion = {
    callTimeout?: Maybe<Scalars['Duration']['output']>;
    compressionLevel?: Maybe<Scalars['Float']['output']>;
    connectTimeout?: Maybe<Scalars['Duration']['output']>;
    headers?: Maybe<Array<SettingsDownloadConversionHeader>>;
    mimeType: Scalars['String']['output'];
    target: Scalars['String']['output'];
};

export type SettingsDownloadConversionHeader = {
    name: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type SettingsDownloadConversionHeaderType = SettingsDownloadConversionHeader & {
    __typename?: 'SettingsDownloadConversionHeaderType';
    name: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type SettingsDownloadConversionHeaderTypeInput = {
    name: Scalars['String']['input'];
    value: Scalars['String']['input'];
};

export type SettingsDownloadConversionType = SettingsDownloadConversion & {
    __typename?: 'SettingsDownloadConversionType';
    callTimeout?: Maybe<Scalars['Duration']['output']>;
    compressionLevel?: Maybe<Scalars['Float']['output']>;
    connectTimeout?: Maybe<Scalars['Duration']['output']>;
    headers?: Maybe<Array<SettingsDownloadConversionHeaderType>>;
    mimeType: Scalars['String']['output'];
    target: Scalars['String']['output'];
};

export type SettingsDownloadConversionTypeInput = {
    callTimeout?: InputMaybe<Scalars['Duration']['input']>;
    compressionLevel?: InputMaybe<Scalars['Float']['input']>;
    connectTimeout?: InputMaybe<Scalars['Duration']['input']>;
    headers?: InputMaybe<Array<SettingsDownloadConversionHeaderTypeInput>>;
    mimeType: Scalars['String']['input'];
    target: Scalars['String']['input'];
};

export type SettingsType = Settings & {
    __typename?: 'SettingsType';
    acceptedRevisionRetention: Scalars['Int']['output'];
    archiveBootstrapInterItemDelaySeconds: Scalars['Int']['output'];
    archiveBootstrapMaxAttempts: Scalars['Int']['output'];
    archiveBootstrapRetrySeconds: Scalars['Int']['output'];
    archiveDirectDeliveryEnabled: Scalars['Boolean']['output'];
    archiveDirectDeliveryExpirySeconds: Scalars['Int']['output'];
    archiveDirectDeliveryFallbackToLocal: Scalars['Boolean']['output'];
    archiveDirectDeliveryRequireExpiryEvidence: Scalars['Boolean']['output'];
    archiveVerificationRetrySeconds: Scalars['Int']['output'];
    archiveVerificationTimeoutSeconds: Scalars['Int']['output'];
    authMode: AuthMode;
    authPassword: Scalars['String']['output'];
    authUsername: Scalars['String']['output'];
    autoBackupIncludeCategories: Scalars['Boolean']['output'];
    autoBackupIncludeChapters: Scalars['Boolean']['output'];
    autoBackupIncludeClientData: Scalars['Boolean']['output'];
    autoBackupIncludeHistory: Scalars['Boolean']['output'];
    autoBackupIncludeManga: Scalars['Boolean']['output'];
    autoBackupIncludeServerSettings: Scalars['Boolean']['output'];
    autoBackupIncludeTracking: Scalars['Boolean']['output'];
    /** @deprecated Replaced with autoDownloadNewChaptersLimit, replace with autoDownloadNewChaptersLimit */
    autoDownloadAheadLimit: Scalars['Int']['output'];
    autoDownloadIgnoreReUploads: Scalars['Boolean']['output'];
    autoDownloadNewChapters: Scalars['Boolean']['output'];
    autoDownloadNewChaptersLimit: Scalars['Int']['output'];
    backupInterval: Scalars['Int']['output'];
    backupPath: Scalars['String']['output'];
    backupTTL: Scalars['Int']['output'];
    backupTime: Scalars['String']['output'];
    /** @deprecated Removed - prefer authMode, replace with authMode */
    basicAuthEnabled: Scalars['Boolean']['output'];
    /** @deprecated Removed - prefer authPassword, replace with authPassword */
    basicAuthPassword: Scalars['String']['output'];
    /** @deprecated Removed - prefer authUsername, replace with authUsername */
    basicAuthUsername: Scalars['String']['output'];
    chapterIntegrityAuditEnabled: Scalars['Boolean']['output'];
    chapterIntegrityAuditIntervalDays: Scalars['Int']['output'];
    chapterIntegrityAuditItemDelaySeconds: Scalars['Int']['output'];
    chapterIntegrityAuditMaxAttempts: Scalars['Int']['output'];
    chapterIntegrityAuditRecentRevisions: Scalars['Int']['output'];
    chapterIntegrityAuditRetrySeconds: Scalars['Int']['output'];
    chapterRevisionAutoDismissVisuallyEquivalent: Scalars['Boolean']['output'];
    chapterRevisionSweepEnabled: Scalars['Boolean']['output'];
    chapterRevisionSweepIntervalDays: Scalars['Int']['output'];
    chapterRevisionSweepItemDelaySeconds: Scalars['Int']['output'];
    chapterRevisionSweepMaxAttempts: Scalars['Int']['output'];
    chapterRevisionSweepNewestChapters: Scalars['Int']['output'];
    chapterRevisionSweepRetrySeconds: Scalars['Int']['output'];
    chapterRevisionThumbnailMaxDimension: Scalars['Int']['output'];
    chapterRevisionVisualAnalysisMaxAttempts: Scalars['Int']['output'];
    chapterRevisionVisualAnalysisRetrySeconds: Scalars['Int']['output'];
    chapterRevisionVisualHashThreshold: Scalars['Int']['output'];
    databasePassword: Scalars['String']['output'];
    databaseType: DatabaseType;
    databaseUrl: Scalars['String']['output'];
    databaseUsername: Scalars['String']['output'];
    debugLogsEnabled: Scalars['Boolean']['output'];
    downloadAsCbz: Scalars['Boolean']['output'];
    downloadConversions: Array<SettingsDownloadConversionType>;
    downloadsPath: Scalars['String']['output'];
    electronPath: Scalars['String']['output'];
    excludeCompleted: Scalars['Boolean']['output'];
    excludeEntryWithUnreadChapters: Scalars['Boolean']['output'];
    excludeNotStarted: Scalars['Boolean']['output'];
    excludeUnreadChapters: Scalars['Boolean']['output'];
    /** @deprecated Replaced with addExtensionStore and removeExtensionStore mutations, replace with extensionStores */
    extensionRepos: Array<Scalars['String']['output']>;
    flareSolverrAsResponseFallback: Scalars['Boolean']['output'];
    flareSolverrEnabled: Scalars['Boolean']['output'];
    flareSolverrSessionName: Scalars['String']['output'];
    flareSolverrSessionTtl: Scalars['Int']['output'];
    flareSolverrTimeout: Scalars['Int']['output'];
    flareSolverrUrl: Scalars['String']['output'];
    globalUpdateInterval: Scalars['Float']['output'];
    /** @deprecated Removed - does not do anything */
    gqlDebugLogsEnabled: Scalars['Boolean']['output'];
    initialOpenInBrowserEnabled: Scalars['Boolean']['output'];
    ip: Scalars['String']['output'];
    jwtAudience: Scalars['String']['output'];
    jwtRefreshExpiry: Scalars['Duration']['output'];
    jwtTokenExpiry: Scalars['Duration']['output'];
    kcefEnabled: Scalars['Boolean']['output'];
    komgaApiKey?: Maybe<Scalars['String']['output']>;
    komgaBaseUrl: Scalars['String']['output'];
    komgaLibraryId: Scalars['String']['output'];
    komgaRequestTimeoutSeconds: Scalars['Int']['output'];
    komgaRescanDebounceSeconds: Scalars['Int']['output'];
    komgaRescanRetrySeconds: Scalars['Int']['output'];
    koreaderSyncChecksumMethod: KoreaderSyncChecksumMethod;
    /** @deprecated Moved to preference store. Is supposed to be random and gets auto generated, replace with MOVE TO PREFERENCES */
    koreaderSyncDeviceId: Scalars['String']['output'];
    koreaderSyncPercentageTolerance: Scalars['Float']['output'];
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncServerUrl: Scalars['String']['output'];
    /** @deprecated Replaced with koreaderSyncStrategyForward and koreaderSyncStrategyBackward, replace with koreaderSyncStrategyForward, koreaderSyncStrategyBackward */
    koreaderSyncStrategy: KoreaderSyncLegacyStrategy;
    koreaderSyncStrategyBackward: KoreaderSyncConflictStrategy;
    koreaderSyncStrategyForward: KoreaderSyncConflictStrategy;
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncUserkey: Scalars['String']['output'];
    /** @deprecated Moved to preference store. User is supposed to use a login/logout mutation, replace with MOVE TO PREFERENCES */
    koreaderSyncUsername: Scalars['String']['output'];
    localSourcePath: Scalars['String']['output'];
    maxLogFileSize: Scalars['String']['output'];
    maxLogFiles: Scalars['Int']['output'];
    maxLogFolderSize: Scalars['String']['output'];
    maxSourcesInParallel: Scalars['Int']['output'];
    opdsCbzMimetype: CbzMediaType;
    opdsChapterSortOrder: SortOrder;
    opdsEnablePageReadProgress: Scalars['Boolean']['output'];
    opdsItemsPerPage: Scalars['Int']['output'];
    opdsMarkAsReadOnDownload: Scalars['Boolean']['output'];
    opdsShowOnlyDownloadedChapters: Scalars['Boolean']['output'];
    opdsShowOnlyUnreadChapters: Scalars['Boolean']['output'];
    opdsSkipChapterMetadataFeed: Scalars['Boolean']['output'];
    opdsUseBinaryFileSizes: Scalars['Boolean']['output'];
    port: Scalars['Int']['output'];
    serveConversions: Array<SettingsDownloadConversionType>;
    socksProxyEnabled: Scalars['Boolean']['output'];
    socksProxyHost: Scalars['String']['output'];
    socksProxyPassword: Scalars['String']['output'];
    socksProxyPort: Scalars['String']['output'];
    socksProxyUsername: Scalars['String']['output'];
    socksProxyVersion: Scalars['Int']['output'];
    syncDataCategories: Scalars['Boolean']['output'];
    syncDataChapters: Scalars['Boolean']['output'];
    syncDataHistory: Scalars['Boolean']['output'];
    syncDataManga: Scalars['Boolean']['output'];
    syncDataTracking: Scalars['Boolean']['output'];
    syncInterval: Scalars['Duration']['output'];
    syncYomiApiKey: Scalars['String']['output'];
    syncYomiEnabled: Scalars['Boolean']['output'];
    syncYomiHost: Scalars['String']['output'];
    systemTrayEnabled: Scalars['Boolean']['output'];
    updateMangas: Scalars['Boolean']['output'];
    useHikariConnectionPool: Scalars['Boolean']['output'];
    webUIChannel: WebUiChannel;
    webUIFlavor: WebUiFlavor;
    webUIInterface: WebUiInterface;
    webUIUpdateCheckInterval: Scalars['Float']['output'];
};

export type SortFilter = {
    __typename?: 'SortFilter';
    default?: Maybe<SortSelection>;
    name: Scalars['String']['output'];
    values: Array<Scalars['String']['output']>;
};

export enum SortOrder {
    Asc = 'ASC',
    AscNullsFirst = 'ASC_NULLS_FIRST',
    AscNullsLast = 'ASC_NULLS_LAST',
    Desc = 'DESC',
    DescNullsFirst = 'DESC_NULLS_FIRST',
    DescNullsLast = 'DESC_NULLS_LAST',
}

export type SortSelection = {
    __typename?: 'SortSelection';
    ascending: Scalars['Boolean']['output'];
    index: Scalars['Int']['output'];
};

export type SortSelectionInput = {
    ascending: Scalars['Boolean']['input'];
    index: Scalars['Int']['input'];
};

export type SourceConditionInput = {
    contentWarning?: InputMaybe<ContentWarning>;
    id?: InputMaybe<Scalars['LongString']['input']>;
    lang?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};

export type SourceEdge = Edge & {
    __typename?: 'SourceEdge';
    cursor: Scalars['Cursor']['output'];
    node: SourceType;
};

export type SourceFilterInput = {
    and?: InputMaybe<Array<SourceFilterInput>>;
    contentWarning?: InputMaybe<ContentWarningFilterInput>;
    id?: InputMaybe<LongFilterInput>;
    lang?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<SourceFilterInput>;
    or?: InputMaybe<Array<SourceFilterInput>>;
};

export type SourceMetaType = MetaType & {
    __typename?: 'SourceMetaType';
    key: Scalars['String']['output'];
    source: SourceType;
    sourceId: Scalars['LongString']['output'];
    value: Scalars['String']['output'];
};

export type SourceMetaTypeInput = {
    key: Scalars['String']['input'];
    sourceId: Scalars['LongString']['input'];
    value: Scalars['String']['input'];
};

export type SourceNodeList = NodeList & {
    __typename?: 'SourceNodeList';
    edges: Array<SourceEdge>;
    nodes: Array<SourceType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum SourceOrderBy {
    Id = 'ID',
    Lang = 'LANG',
    Name = 'NAME',
}

export type SourceOrderInput = {
    by: SourceOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type SourcePreferenceChangeInput = {
    checkBoxState?: InputMaybe<Scalars['Boolean']['input']>;
    editTextState?: InputMaybe<Scalars['String']['input']>;
    listState?: InputMaybe<Scalars['String']['input']>;
    multiSelectState?: InputMaybe<Array<Scalars['String']['input']>>;
    position: Scalars['Int']['input'];
    switchState?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SourceType = {
    __typename?: 'SourceType';
    /** @deprecated , replace with homeUrl */
    baseUrl?: Maybe<Scalars['String']['output']>;
    contentWarning: ContentWarning;
    displayName: Scalars['String']['output'];
    extension: ExtensionType;
    filters: Array<Filter>;
    homeUrl?: Maybe<Scalars['String']['output']>;
    iconUrl: Scalars['String']['output'];
    id: Scalars['LongString']['output'];
    isConfigurable: Scalars['Boolean']['output'];
    /** @deprecated , replace with contentWarning */
    isNsfw: Scalars['Boolean']['output'];
    lang: Scalars['String']['output'];
    manga: MangaNodeList;
    meta: Array<SourceMetaType>;
    name: Scalars['String']['output'];
    preferences: Array<Preference>;
    supportsLatest: Scalars['Boolean']['output'];
};

export type StartArchiveBootstrapInput = {
    categoryPolicies?: InputMaybe<Array<ArchiveBootstrapCategoryPolicyInput>>;
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    defaultPolicy: MangaAcquisitionPolicy;
    mangaIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type StartArchiveBootstrapPayload = {
    __typename?: 'StartArchiveBootstrapPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ArchiveBootstrapSessionType>;
};

export type StartChapterIntegrityAuditInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    kind: ChapterIntegrityAuditKind;
    mangaIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type StartChapterIntegrityAuditPayload = {
    __typename?: 'StartChapterIntegrityAuditPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ChapterIntegrityAuditSessionType>;
};

export type StartChapterRevisionSweepInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    kind: ChapterRevisionSweepKind;
    mangaIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type StartChapterRevisionSweepPayload = {
    __typename?: 'StartChapterRevisionSweepPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    error?: Maybe<Scalars['String']['output']>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    session?: Maybe<ChapterRevisionSweepSessionType>;
};

export type StartDownloaderInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type StartDownloaderPayload = {
    __typename?: 'StartDownloaderPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type StartSyncInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type StartSyncPayload = {
    __typename?: 'StartSyncPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    result: StartSyncResult;
};

export enum StartSyncResult {
    Success = 'SUCCESS',
    SyncDisabled = 'SYNC_DISABLED',
    SyncInProgress = 'SYNC_IN_PROGRESS',
}

export type StopDownloaderInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type StopDownloaderPayload = {
    __typename?: 'StopDownloaderPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    downloadStatus: DownloadStatus;
};

export type StringFilterInput = {
    distinctFrom?: InputMaybe<Scalars['String']['input']>;
    distinctFromAll?: InputMaybe<Array<Scalars['String']['input']>>;
    distinctFromAny?: InputMaybe<Array<Scalars['String']['input']>>;
    distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
    distinctFromInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    distinctFromInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    endsWith?: InputMaybe<Scalars['String']['input']>;
    endsWithAll?: InputMaybe<Array<Scalars['String']['input']>>;
    endsWithAny?: InputMaybe<Array<Scalars['String']['input']>>;
    endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
    endsWithInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    endsWithInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    equalTo?: InputMaybe<Scalars['String']['input']>;
    greaterThan?: InputMaybe<Scalars['String']['input']>;
    greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
    greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
    greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<Scalars['String']['input']>>;
    inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
    includes?: InputMaybe<Scalars['String']['input']>;
    includesAll?: InputMaybe<Array<Scalars['String']['input']>>;
    includesAny?: InputMaybe<Array<Scalars['String']['input']>>;
    includesInsensitive?: InputMaybe<Scalars['String']['input']>;
    includesInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    includesInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    isNull?: InputMaybe<Scalars['Boolean']['input']>;
    lessThan?: InputMaybe<Scalars['String']['input']>;
    lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
    lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
    lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    likeAll?: InputMaybe<Array<Scalars['String']['input']>>;
    likeAny?: InputMaybe<Array<Scalars['String']['input']>>;
    likeInsensitive?: InputMaybe<Scalars['String']['input']>;
    likeInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    likeInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
    notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
    notEndsWith?: InputMaybe<Scalars['String']['input']>;
    notEndsWithAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notEndsWithAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
    notEndsWithInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notEndsWithInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notEqualTo?: InputMaybe<Scalars['String']['input']>;
    notEqualToAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notEqualToAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notIn?: InputMaybe<Array<Scalars['String']['input']>>;
    notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
    notIncludes?: InputMaybe<Scalars['String']['input']>;
    notIncludesAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notIncludesAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
    notIncludesInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notIncludesInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notLike?: InputMaybe<Scalars['String']['input']>;
    notLikeAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notLikeAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
    notLikeInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notLikeInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notStartsWith?: InputMaybe<Scalars['String']['input']>;
    notStartsWithAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notStartsWithAny?: InputMaybe<Array<Scalars['String']['input']>>;
    notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
    notStartsWithInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    notStartsWithInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWith?: InputMaybe<Scalars['String']['input']>;
    startsWithAll?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWithAny?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
    startsWithInsensitiveAll?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWithInsensitiveAny?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Subscription = {
    __typename?: 'Subscription';
    /** @deprecated Replaced with downloadStatusChanged, replace with downloadStatusChanged(input) */
    downloadChanged: DownloadStatus;
    downloadStatusChanged: DownloadUpdates;
    libraryUpdateStatusChanged: UpdaterUpdates;
    syncStatusChanged: SyncStatus;
    /** @deprecated Replaced with updates, replace with updates(input) */
    updateStatusChanged: UpdateStatus;
    webUIUpdateStatusChange: WebUiUpdateStatus;
};

export type SubscriptionDownloadStatusChangedArgs = {
    input: DownloadChangedInput;
};

export type SubscriptionLibraryUpdateStatusChangedArgs = {
    input: LibraryUpdateStatusChangedInput;
};

export type SwitchPreference = {
    __typename?: 'SwitchPreference';
    currentValue?: Maybe<Scalars['Boolean']['output']>;
    default: Scalars['Boolean']['output'];
    enabled: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    visible: Scalars['Boolean']['output'];
};

export type SyncConflictInfoType = {
    __typename?: 'SyncConflictInfoType';
    deviceName: Scalars['String']['output'];
    remotePage: Scalars['Int']['output'];
};

export enum SyncState {
    CreatingBackup = 'CREATING_BACKUP',
    Downloading = 'DOWNLOADING',
    Error = 'ERROR',
    Merging = 'MERGING',
    Restoring = 'RESTORING',
    Started = 'STARTED',
    Success = 'SUCCESS',
    Uploading = 'UPLOADING',
}

export type SyncStatus = {
    __typename?: 'SyncStatus';
    backupRestoreId?: Maybe<Scalars['String']['output']>;
    endDate?: Maybe<Scalars['LongString']['output']>;
    errorMessage?: Maybe<Scalars['String']['output']>;
    startDate: Scalars['LongString']['output'];
    state: SyncState;
};

export type TextFilter = {
    __typename?: 'TextFilter';
    default: Scalars['String']['output'];
    name: Scalars['String']['output'];
};

export type TrackProgressInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    mangaId: Scalars['Int']['input'];
};

export type TrackProgressPayload = {
    __typename?: 'TrackProgressPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    trackRecords: Array<TrackRecordType>;
};

export type TrackRecordConditionInput = {
    finishDate?: InputMaybe<Scalars['LongString']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    lastChapterRead?: InputMaybe<Scalars['Float']['input']>;
    libraryId?: InputMaybe<Scalars['LongString']['input']>;
    mangaId?: InputMaybe<Scalars['Int']['input']>;
    private?: InputMaybe<Scalars['Boolean']['input']>;
    remoteId?: InputMaybe<Scalars['LongString']['input']>;
    remoteUrl?: InputMaybe<Scalars['String']['input']>;
    score?: InputMaybe<Scalars['Float']['input']>;
    startDate?: InputMaybe<Scalars['LongString']['input']>;
    status?: InputMaybe<Scalars['Int']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    totalChapters?: InputMaybe<Scalars['Int']['input']>;
    trackerId?: InputMaybe<Scalars['Int']['input']>;
};

export type TrackRecordEdge = Edge & {
    __typename?: 'TrackRecordEdge';
    cursor: Scalars['Cursor']['output'];
    node: TrackRecordType;
};

export type TrackRecordFilterInput = {
    and?: InputMaybe<Array<TrackRecordFilterInput>>;
    finishDate?: InputMaybe<LongFilterInput>;
    id?: InputMaybe<IntFilterInput>;
    lastChapterRead?: InputMaybe<DoubleFilterInput>;
    libraryId?: InputMaybe<LongFilterInput>;
    mangaId?: InputMaybe<IntFilterInput>;
    not?: InputMaybe<TrackRecordFilterInput>;
    or?: InputMaybe<Array<TrackRecordFilterInput>>;
    private?: InputMaybe<BooleanFilterInput>;
    remoteId?: InputMaybe<LongFilterInput>;
    remoteUrl?: InputMaybe<StringFilterInput>;
    score?: InputMaybe<DoubleFilterInput>;
    startDate?: InputMaybe<LongFilterInput>;
    status?: InputMaybe<IntFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    totalChapters?: InputMaybe<IntFilterInput>;
    trackerId?: InputMaybe<IntFilterInput>;
};

export type TrackRecordNodeList = NodeList & {
    __typename?: 'TrackRecordNodeList';
    edges: Array<TrackRecordEdge>;
    nodes: Array<TrackRecordType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum TrackRecordOrderBy {
    FinishDate = 'FINISH_DATE',
    Id = 'ID',
    LastChapterRead = 'LAST_CHAPTER_READ',
    MangaId = 'MANGA_ID',
    Private = 'PRIVATE',
    RemoteId = 'REMOTE_ID',
    Score = 'SCORE',
    StartDate = 'START_DATE',
    Title = 'TITLE',
    TotalChapters = 'TOTAL_CHAPTERS',
    TrackerId = 'TRACKER_ID',
}

export type TrackRecordOrderInput = {
    by: TrackRecordOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type TrackRecordType = {
    __typename?: 'TrackRecordType';
    displayScore: Scalars['String']['output'];
    finishDate: Scalars['LongString']['output'];
    id: Scalars['Int']['output'];
    lastChapterRead: Scalars['Float']['output'];
    libraryId?: Maybe<Scalars['LongString']['output']>;
    manga: MangaType;
    mangaId: Scalars['Int']['output'];
    private: Scalars['Boolean']['output'];
    remoteId: Scalars['LongString']['output'];
    remoteUrl: Scalars['String']['output'];
    score: Scalars['Float']['output'];
    startDate: Scalars['LongString']['output'];
    status: Scalars['Int']['output'];
    title: Scalars['String']['output'];
    totalChapters: Scalars['Int']['output'];
    tracker: TrackerType;
    trackerId: Scalars['Int']['output'];
};

export type TrackSearchType = {
    __typename?: 'TrackSearchType';
    coverUrl: Scalars['String']['output'];
    displayScore: Scalars['String']['output'];
    finishedReadingDate: Scalars['LongString']['output'];
    id: Scalars['Int']['output'];
    lastChapterRead: Scalars['Float']['output'];
    libraryId?: Maybe<Scalars['LongString']['output']>;
    private: Scalars['Boolean']['output'];
    publishingStatus: Scalars['String']['output'];
    publishingType: Scalars['String']['output'];
    remoteId: Scalars['LongString']['output'];
    score: Scalars['Float']['output'];
    startDate: Scalars['String']['output'];
    startedReadingDate: Scalars['LongString']['output'];
    status: Scalars['Int']['output'];
    summary: Scalars['String']['output'];
    title: Scalars['String']['output'];
    totalChapters: Scalars['Int']['output'];
    tracker: TrackerType;
    trackerId: Scalars['Int']['output'];
    trackingUrl: Scalars['String']['output'];
};

export type TrackStatusType = {
    __typename?: 'TrackStatusType';
    name: Scalars['String']['output'];
    value: Scalars['Int']['output'];
};

export type TrackerConditionInput = {
    icon?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    isLoggedIn?: InputMaybe<Scalars['Boolean']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};

export type TrackerEdge = Edge & {
    __typename?: 'TrackerEdge';
    cursor: Scalars['Cursor']['output'];
    node: TrackerType;
};

export type TrackerNodeList = NodeList & {
    __typename?: 'TrackerNodeList';
    edges: Array<TrackerEdge>;
    nodes: Array<TrackerType>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int']['output'];
};

export enum TrackerOrderBy {
    Id = 'ID',
    IsLoggedIn = 'IS_LOGGED_IN',
    Name = 'NAME',
}

export type TrackerOrderInput = {
    by: TrackerOrderBy;
    byType?: InputMaybe<SortOrder>;
};

export type TrackerType = {
    __typename?: 'TrackerType';
    authUrl?: Maybe<Scalars['String']['output']>;
    icon: Scalars['String']['output'];
    id: Scalars['Int']['output'];
    isLoggedIn: Scalars['Boolean']['output'];
    isTokenExpired: Scalars['Boolean']['output'];
    name: Scalars['String']['output'];
    scores: Array<Scalars['String']['output']>;
    statuses: Array<TrackStatusType>;
    supportsPrivateTracking: Scalars['Boolean']['output'];
    supportsReadingDates: Scalars['Boolean']['output'];
    supportsTrackDeletion: Scalars['Boolean']['output'];
    trackRecords: TrackRecordNodeList;
};

export enum TriState {
    Exclude = 'EXCLUDE',
    Ignore = 'IGNORE',
    Include = 'INCLUDE',
}

export type TriStateFilter = {
    __typename?: 'TriStateFilter';
    default: TriState;
    name: Scalars['String']['output'];
};

export type UnbindTrackInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    /** This will only work if the tracker of the track record supports deleting tracks */
    deleteRemoteTrack?: InputMaybe<Scalars['Boolean']['input']>;
    recordId: Scalars['Int']['input'];
};

export type UnbindTrackPayload = {
    __typename?: 'UnbindTrackPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    trackRecord?: Maybe<TrackRecordType>;
};

export type UpdateCanonicalWorkInput = {
    clearPreferredScanlator: Scalars['Boolean']['input'];
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    duplicateStrategy?: InputMaybe<CanonicalDuplicateStrategy>;
    preferredScanlator?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    workKey: Scalars['String']['input'];
};

export type UpdateCanonicalWorkPayload = {
    __typename?: 'UpdateCanonicalWorkPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    outcome: CanonicalWriteOutcome;
    work?: Maybe<CanonicalWorkType>;
};

export type UpdateCategoriesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
    patch: UpdateCategoryPatchInput;
};

export type UpdateCategoriesPayload = {
    __typename?: 'UpdateCategoriesPayload';
    categories: Array<CategoryType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCategoryInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    patch: UpdateCategoryPatchInput;
};

export type UpdateCategoryMangaInput = {
    categories: Array<Scalars['Int']['input']>;
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryMangaPayload = {
    __typename?: 'UpdateCategoryMangaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    updateStatus: UpdateStatus;
};

export type UpdateCategoryOrderInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    position: Scalars['Int']['input'];
};

export type UpdateCategoryOrderPayload = {
    __typename?: 'UpdateCategoryOrderPayload';
    categories: Array<CategoryType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCategoryPatchInput = {
    default?: InputMaybe<Scalars['Boolean']['input']>;
    includeInDownload?: InputMaybe<IncludeOrExclude>;
    includeInUpdate?: InputMaybe<IncludeOrExclude>;
    name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryPayload = {
    __typename?: 'UpdateCategoryPayload';
    category: CategoryType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateChapterInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    patch: UpdateChapterPatchInput;
};

export type UpdateChapterPatchInput = {
    isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
    isRead?: InputMaybe<Scalars['Boolean']['input']>;
    lastPageRead?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateChapterPayload = {
    __typename?: 'UpdateChapterPayload';
    chapter: ChapterType;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateChaptersInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
    patch: UpdateChapterPatchInput;
};

export type UpdateChaptersPayload = {
    __typename?: 'UpdateChaptersPayload';
    chapters: Array<ChapterType>;
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateExtensionInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['String']['input'];
    patch: UpdateExtensionPatchInput;
};

export type UpdateExtensionPatchInput = {
    install?: InputMaybe<Scalars['Boolean']['input']>;
    uninstall?: InputMaybe<Scalars['Boolean']['input']>;
    update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateExtensionPayload = {
    __typename?: 'UpdateExtensionPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    extension?: Maybe<ExtensionType>;
};

export type UpdateExtensionsInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['String']['input']>;
    patch: UpdateExtensionPatchInput;
};

export type UpdateExtensionsPayload = {
    __typename?: 'UpdateExtensionsPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    extensions: Array<ExtensionType>;
};

export type UpdateLibraryInput = {
    categories?: InputMaybe<Array<Scalars['Int']['input']>>;
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLibraryMangaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLibraryMangaPayload = {
    __typename?: 'UpdateLibraryMangaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    updateStatus: UpdateStatus;
};

export type UpdateLibraryPayload = {
    __typename?: 'UpdateLibraryPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    updateStatus: LibraryUpdateStatus;
};

export type UpdateMangaCategoriesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    patch: UpdateMangaCategoriesPatchInput;
};

export type UpdateMangaCategoriesPatchInput = {
    addToCategories?: InputMaybe<Array<Scalars['Int']['input']>>;
    clearCategories?: InputMaybe<Scalars['Boolean']['input']>;
    removeFromCategories?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type UpdateMangaCategoriesPayload = {
    __typename?: 'UpdateMangaCategoriesPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    manga: MangaType;
};

export type UpdateMangaInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    patch: UpdateMangaPatchInput;
};

export type UpdateMangaPatchInput = {
    acceptedRevisionRetention?: InputMaybe<Scalars['Int']['input']>;
    acquisitionPolicy?: InputMaybe<MangaAcquisitionPolicy>;
    inLibrary?: InputMaybe<Scalars['Boolean']['input']>;
    inheritAcceptedRevisionRetention: Scalars['Boolean']['input'];
};

export type UpdateMangaPayload = {
    __typename?: 'UpdateMangaPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    manga: MangaType;
};

export type UpdateMangasCategoriesInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
    patch: UpdateMangaCategoriesPatchInput;
};

export type UpdateMangasCategoriesPayload = {
    __typename?: 'UpdateMangasCategoriesPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    mangas: Array<MangaType>;
};

export type UpdateMangasInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    ids: Array<Scalars['Int']['input']>;
    patch: UpdateMangaPatchInput;
};

export type UpdateMangasPayload = {
    __typename?: 'UpdateMangasPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    mangas: Array<MangaType>;
};

export type UpdateSourcePreferenceInput = {
    change: SourcePreferenceChangeInput;
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    source: Scalars['LongString']['input'];
};

export type UpdateSourcePreferencePayload = {
    __typename?: 'UpdateSourcePreferencePayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    preferences: Array<Preference>;
    source: SourceType;
};

export enum UpdateState {
    Downloading = 'DOWNLOADING',
    Error = 'ERROR',
    Finished = 'FINISHED',
    Idle = 'IDLE',
}

export type UpdateStatus = {
    __typename?: 'UpdateStatus';
    completeJobs: UpdateStatusType;
    failedJobs: UpdateStatusType;
    isRunning: Scalars['Boolean']['output'];
    pendingJobs: UpdateStatusType;
    runningJobs: UpdateStatusType;
    skippedCategories: UpdateStatusCategoryType;
    skippedJobs: UpdateStatusType;
    updatingCategories: UpdateStatusCategoryType;
};

export type UpdateStatusCategoryType = {
    __typename?: 'UpdateStatusCategoryType';
    categories: CategoryNodeList;
};

export type UpdateStatusType = {
    __typename?: 'UpdateStatusType';
    mangas: MangaNodeList;
};

export type UpdateStopInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStopPayload = {
    __typename?: 'UpdateStopPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
};

export enum UpdateStrategy {
    AlwaysUpdate = 'ALWAYS_UPDATE',
    OnlyFetchOnce = 'ONLY_FETCH_ONCE',
}

export type UpdateTrackInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
    /** This will only work if the tracker of the track record supports reading dates */
    finishDate?: InputMaybe<Scalars['LongString']['input']>;
    lastChapterRead?: InputMaybe<Scalars['Float']['input']>;
    /** This will only work if the tracker of the track record supports private tracking */
    private?: InputMaybe<Scalars['Boolean']['input']>;
    recordId: Scalars['Int']['input'];
    scoreString?: InputMaybe<Scalars['String']['input']>;
    /** This will only work if the tracker of the track record supports reading dates */
    startDate?: InputMaybe<Scalars['LongString']['input']>;
    status?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTrackPayload = {
    __typename?: 'UpdateTrackPayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    trackRecord?: Maybe<TrackRecordType>;
};

export type UpdaterJobsInfoType = {
    __typename?: 'UpdaterJobsInfoType';
    finishedJobs: Scalars['Int']['output'];
    isRunning: Scalars['Boolean']['output'];
    skippedCategoriesCount: Scalars['Int']['output'];
    skippedMangasCount: Scalars['Int']['output'];
    totalJobs: Scalars['Int']['output'];
};

export type UpdaterUpdates = {
    __typename?: 'UpdaterUpdates';
    categoryUpdates: Array<CategoryUpdateType>;
    /** The current update status at the time of sending the initial message. Is null for all following messages */
    initial?: Maybe<LibraryUpdateStatus>;
    jobsInfo: UpdaterJobsInfoType;
    mangaUpdates: Array<MangaUpdateType>;
    /** Indicates whether updates have been omitted based on the "maxUpdates" subscription variable. In case updates have been omitted, the "updateStatus" query should be re-fetched. */
    omittedUpdates: Scalars['Boolean']['output'];
};

export type ValidateBackupInput = {
    backup: Scalars['Upload']['input'];
};

export type ValidateBackupResult = {
    __typename?: 'ValidateBackupResult';
    missingSources: Array<ValidateBackupSource>;
    missingTrackers: Array<ValidateBackupTracker>;
};

export type ValidateBackupSource = {
    __typename?: 'ValidateBackupSource';
    id: Scalars['LongString']['output'];
    name: Scalars['String']['output'];
};

export type ValidateBackupTracker = {
    __typename?: 'ValidateBackupTracker';
    name: Scalars['String']['output'];
};

export enum WebUiChannel {
    Bundled = 'BUNDLED',
    Preview = 'PREVIEW',
    Stable = 'STABLE',
}

export enum WebUiFlavor {
    Custom = 'CUSTOM',
    Vui = 'VUI',
    Webui = 'WEBUI',
}

export enum WebUiInterface {
    Browser = 'BROWSER',
    Electron = 'ELECTRON',
}

export type WebUiUpdateCheck = {
    __typename?: 'WebUIUpdateCheck';
    channel: WebUiChannel;
    tag: Scalars['String']['output'];
    updateAvailable: Scalars['Boolean']['output'];
};

export type WebUiUpdateInfo = {
    __typename?: 'WebUIUpdateInfo';
    channel: WebUiChannel;
    tag: Scalars['String']['output'];
};

export type WebUiUpdateInput = {
    clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type WebUiUpdatePayload = {
    __typename?: 'WebUIUpdatePayload';
    clientMutationId?: Maybe<Scalars['String']['output']>;
    updateStatus: WebUiUpdateStatus;
};

export type WebUiUpdateStatus = {
    __typename?: 'WebUIUpdateStatus';
    info: WebUiUpdateInfo;
    progress: Scalars['Int']['output'];
    state: UpdateState;
};
