/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useLingui } from '@lingui/react/macro';
import { useQueryParam, NumberParam } from 'use-query-params';
import { SearchParam } from '@/base/Base.types.ts';
import { TabPanel } from '@/base/components/tabs/TabPanel.tsx';
import { TabsMenu } from '@/base/components/tabs/TabsMenu.tsx';
import { TabsWrapper } from '@/base/components/tabs/TabsWrapper.tsx';
import { ArchiveTab } from '@/features/archive/Archive.constants.ts';
import { ArchiveOverview } from '@/features/archive/components/ArchiveOverview.tsx';
import { ArchiveApprovalQueue } from '@/features/archive/components/ArchiveApprovalQueue.tsx';
import { ArchiveReviewQueue } from '@/features/archive/components/ArchiveReviewQueue.tsx';
import { ArchiveQueueInspector } from '@/features/archive/components/ArchiveQueueInspector.tsx';
import { ArchiveSweepPanel } from '@/features/archive/components/ArchiveSweepPanel.tsx';
import { ArchiveIntegrityPanel } from '@/features/archive/components/ArchiveIntegrityPanel.tsx';
import { ArchiveCanonicalWorksPanel } from '@/features/archive/components/ArchiveCanonicalWorksPanel.tsx';

const ARCHIVE_TABS: ArchiveTab[] = [
    ArchiveTab.OVERVIEW,
    ArchiveTab.APPROVAL,
    ArchiveTab.REVIEW,
    ArchiveTab.QUEUE,
    ArchiveTab.SWEEPS,
    ArchiveTab.INTEGRITY,
    ArchiveTab.WORKS,
];

/**
 * The archival dashboard.
 *
 * The active tab lives in the URL so a reload keeps the place an operator worked in. Only the visible
 * panel is rendered, so switching a tab re-reads that panel from the server cache.
 */
export const ArchiveDashboard: React.FC = () => {
    const { t } = useLingui();

    const [tab, setTab] = useQueryParam(SearchParam.TAB, NumberParam);
    const activeTab = ARCHIVE_TABS.includes(tab as ArchiveTab) ? (tab as ArchiveTab) : ArchiveTab.OVERVIEW;

    return (
        <TabsWrapper>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <TabsMenu value={activeTab} onChange={(event, newTab) => setTab(newTab)}>
                    <Tab value={ArchiveTab.OVERVIEW} label={t`Overview`} />
                    <Tab value={ArchiveTab.APPROVAL} label={t`Approval queue`} />
                    <Tab value={ArchiveTab.REVIEW} label={t`Revision review`} />
                    <Tab value={ArchiveTab.QUEUE} label={t`Queue inspector`} />
                    <Tab value={ArchiveTab.SWEEPS} label={t`Revision sweeps`} />
                    <Tab value={ArchiveTab.INTEGRITY} label={t`Integrity audits`} />
                    <Tab value={ArchiveTab.WORKS} label={t`Canonical works`} />
                </TabsMenu>
                <Box sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
                    <TabPanel index={ArchiveTab.OVERVIEW} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveOverview onOpenApprovalQueue={() => setTab(ArchiveTab.APPROVAL)} />
                    </TabPanel>
                    <TabPanel index={ArchiveTab.APPROVAL} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveApprovalQueue />
                    </TabPanel>
                    <TabPanel index={ArchiveTab.REVIEW} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveReviewQueue />
                    </TabPanel>
                    <TabPanel index={ArchiveTab.QUEUE} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveQueueInspector />
                    </TabPanel>
                    <TabPanel index={ArchiveTab.SWEEPS} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveSweepPanel />
                    </TabPanel>
                    <TabPanel index={ArchiveTab.INTEGRITY} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveIntegrityPanel />
                    </TabPanel>
                    <TabPanel index={ArchiveTab.WORKS} currentIndex={activeTab} sx={{ p: 2 }}>
                        <ArchiveCanonicalWorksPanel />
                    </TabPanel>
                </Box>
            </Box>
        </TabsWrapper>
    );
};
