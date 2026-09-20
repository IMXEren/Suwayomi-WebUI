/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';

/**
 * How archived chapter files are handed to a client, as far as a dashboard may say.
 *
 * The remote specification and the rclone executable are deployment secrets that the server does not
 * expose as settings at all, so they cannot be shown here even by mistake; only the four switches that
 * decide the behaviour are read. The values are read-only: the server settings screen is where they are
 * edited, because they apply to the whole deployment rather than to one series.
 */
export const ArchiveDeliveryStatusCard = () => {
    const { t } = useLingui();

    const { data, error } = requestManager.useGetArchiveDeliverySettings({ fetchPolicy: 'cache-and-network' });
    const settings = data?.settings;

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                    {t`Archived file downloads`}
                </Typography>
                <Stack sx={{ gap: 1 }}>
                    {error && (
                        <Typography variant="body2" color="error">
                            {getErrorMessage(error)}
                        </Typography>
                    )}
                    {settings && (
                        <>
                            <Typography variant="body2">
                                {settings.archiveDirectDeliveryEnabled
                                    ? t`Served straight from the remote storage.`
                                    : t`Served from the local archive copy.`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {[
                                    settings.archiveDirectDeliveryEnabled
                                        ? `${t`Validity of a delivery`}: ${settings.archiveDirectDeliveryExpirySeconds}s`
                                        : null,
                                    settings.archiveDirectDeliveryRequireExpiryEvidence
                                        ? t`A remote that cannot confirm an expiring address is refused`
                                        : t`An unconfirmed expiring address is accepted`,
                                    settings.archiveDirectDeliveryFallbackToLocal
                                        ? t`Falls back to the local copy`
                                        : t`Never falls back to the local copy`,
                                ]
                                    .filter(Boolean)
                                    .join(' · ')}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {t`A download address is short-lived and is handed out per request: it is never stored by the server, never shown here, and a revision whose archived file is gone cannot be downloaded.`}
                            </Typography>
                        </>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};
