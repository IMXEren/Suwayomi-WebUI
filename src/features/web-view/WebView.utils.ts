/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { AppRoutes } from '@/base/AppRoute.constants.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';
import { SubpathUtil } from '@/lib/utils/SubpathUtil.ts';
import { UrlUtil } from '@/lib/UrlUtil.ts';
import { WebViewProvider, type WebViewSettings } from '@/features/web-view/WebView.types.ts';

/**
 * Which browser the WebView uses, defaulting to the embedded one.
 *
 * The value arrives with the server settings, and anything unrecognised (including the setting
 * being absent, which is what a server without the external browser reports) means the embedded
 * browser, so the default path stays the one that always worked.
 */
export const getWebViewProvider = (settings: unknown): WebViewProvider => {
    const provider = (settings as WebViewSettings | null | undefined)?.webViewProvider;

    return provider === WebViewProvider.ProwlVnc ? WebViewProvider.ProwlVnc : WebViewProvider.Cef;
};

/**
 * Url of the page that shows and drives the external browser.
 *
 * It is an in-app route rather than a server page, because the view has to open a tab through the
 * authenticated GraphQL API before it can show anything. It is absolute, so it can be opened in a
 * new tab the way the embedded WebView is, and the subpath is included, so it still resolves when
 * the WebUI is served below the server root.
 */
export const getWebViewTabUrl = (url: string): string =>
    new URL(`${SubpathUtil.getSubpath()}${AppRoutes.webView.path(url)}`, window.location.origin).href;

/**
 * Url of the noVNC client page, which the server forwards to the VNC endpoint.
 *
 * noVNC concatenates `path` after the host, so it must have no leading slash. The token and tab
 * must be inside that path for the socket handshake; the page token authenticates its assets.
 */
export const getVncClientUrl = (accessToken: string | null, tabId: string): string => {
    const clientUrl = requestManager.getValidUrlFor('webview/vnc/');
    const socketUrl = new URL(requestManager.getValidUrlFor('webview/vnc/socket'), window.location.origin);
    const socketPath = `${socketUrl.pathname}${socketUrl.search}`.replace(/^\//, '');
    const socketParams = new URLSearchParams({ tab: tabId });
    if (accessToken) {
        socketParams.set('token', accessToken);
    }

    const params = new URLSearchParams({
        path: `${socketPath}?${socketParams.toString()}`,
        // Without this the client sits on its own connect form instead of connecting.
        autoconnect: '1',
        // Fit the remote framebuffer to the panel instead of showing scrollbars.
        resize: 'scale',
        // quality 6 keeps text in the lossless palette mode, compression 9 is the protocol's strongest zlib.
        quality: '6',
        compression: '9',
    });

    if (accessToken) {
        params.set('token', accessToken);
    }

    return `${clientUrl}?${params.toString()}`;
};

/**
 * Whether the browser service is answering, which is what an iframe cannot report by itself.
 *
 * An iframe that fails to load stays blank without raising anything the surrounding page can
 * catch, so the client page is asked for directly instead, with the same credentials its own
 * requests carry.
 */
export const isVncClientReachable = async (clientUrl: string, accessToken: string | null): Promise<boolean> => {
    const response = await fetch(clientUrl, {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });

    return response.ok;
};

/**
 * Whether the url can be handed to a browser the server controls.
 *
 * The server refuses anything that is not an absolute http or https url, and the check is
 * repeated here so a bad value shows a message instead of a failed request.
 */
export const isOpenableViewUrl = (url: string | null | undefined): url is string => {
    const parsed = UrlUtil.asUrl(url ?? '');

    return !!parsed && (parsed.protocol === 'http:' || parsed.protocol === 'https:');
};
