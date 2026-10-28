/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import { useLingui } from '@lingui/react/macro';
import { SpinnerImage } from '@/base/components/SpinnerImage.tsx';
import { requestManager } from '@/lib/requests/RequestManager.ts';

interface IProps {
    /**
     * The API-absolute address the server handed out for one side of an aligned row, or null when that
     * side has nothing to show.
     *
     * It is a route on this server and never a file location, so it is turned into an absolute URL here
     * instead of being used as a source directly.
     */
    url: string | null;
    /** The alternative text of the picture, e.g. "candidate page 12". */
    label: string;
    /** Preview images are only requested for what is actually on screen. */
    shouldLoad: boolean;
    /** Rendered in place of the picture when the server has nothing to show. */
    emptyMessage?: string;
    /**
     * Whether the picture fills its container and is scaled to fit inside it.
     *
     * Needed where two pictures have to line up on top of each other: both sides are then scaled to the
     * same box instead of each being sized by its own aspect ratio.
     */
    fill?: boolean;
    maxHeight?: number | string;
    sx?: SxProps<Theme>;
}

/**
 * One authenticated revision preview.
 *
 * The bytes are never requested with an `<img src>` of the raw address: the address is behind the same
 * authentication as the rest of the API, so the picture is rendered through `SpinnerImage`. That is also
 * where loading is owned - it asks the shared request manager for the picture, the manager fetches with
 * credentials and returns an object URL, and `SpinnerImage` calls the request's cleanup (which revokes
 * that object URL) when it unmounts or when the address changes. Nothing of that happens here: this
 * component only turns the server path into an absolute URL and decides what to show when there is none.
 *
 * The request manager also queues the requests, which is what keeps a chapter of previews from being
 * requested all at once.
 */
export const ArchiveRevisionPreview = ({
    url,
    label,
    shouldLoad,
    emptyMessage,
    fill = false,
    maxHeight = 240,
    sx,
}: IProps) => {
    const { t } = useLingui();

    const src = url ? requestManager.getValidImgUrlFor(url) : '';

    return (
        <Box
            sx={[
                {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(fill ? { width: '100%', height: '100%' } : { minHeight: 120, maxHeight }),
                    bgcolor: (theme) => theme.palette.background.default,
                    overflow: 'hidden',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {src.length ? (
                <SpinnerImage
                    src={src}
                    alt={label}
                    shouldLoad={shouldLoad}
                    imgStyle={
                        fill
                            ? { width: '100%', height: '100%', objectFit: 'contain', display: 'block' }
                            : {
                                  maxWidth: '100%',
                                  maxHeight: typeof maxHeight === 'number' ? maxHeight : undefined,
                              }
                    }
                    spinnerStyle={{ position: 'absolute', inset: 0, small: true }}
                />
            ) : (
                <Stack sx={{ p: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="caption" color="text.secondary" align="center">
                        {emptyMessage ?? t`No preview is available for this page`}
                    </Typography>
                </Stack>
            )}
        </Box>
    );
};
