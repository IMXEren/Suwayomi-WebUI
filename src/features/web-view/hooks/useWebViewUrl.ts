/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback } from 'react';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import { WebViewProvider } from '@/features/web-view/WebView.types.ts';
import { getWebViewProvider, getWebViewTabUrl } from '@/features/web-view/WebView.utils.ts';

/**
 * Resolves where "Open in WebView" points for the configured provider.
 *
 * The embedded browser is a server page, which stays exactly as it was, and the external browser
 * is a route of this app, because its view has to call the API before it can show anything. The
 * provider comes from the server settings, which are already loaded and cached by the time any of
 * the callers render.
 */
export const useWebViewUrl = (): ((url: string) => string) => {
    const { data } = requestManager.useGetServerSettings();
    const provider = getWebViewProvider(data?.settings);

    return useCallback(
        (url: string) =>
            provider === WebViewProvider.ProwlVnc ? getWebViewTabUrl(url) : requestManager.getWebviewUrl(url),
        [provider],
    );
};
