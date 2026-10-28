/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { type Settings, WebViewProvider } from '@/lib/graphql/generated/graphql-base.types.ts';
import type {
    CloseWebViewMutation,
    CloseWebViewMutationVariables,
    GetWebViewTabsQuery,
    GetWebViewTabsQueryVariables,
    OpenWebViewMutation,
    OpenWebViewMutationVariables,
} from '@/lib/graphql/generated/graphql.ts';

/**
 * Which browser backs the WebView, as the server defines it.
 *
 * `Cef` is the browser embedded in the server, which it streams as a canvas and is the default,
 * and `ProwlVnc` is a browser the external browser service runs, which that service's web VNC
 * endpoint shows. The enum, the mutations and the setting all come from the generated schema, so
 * a change on the server shows up here as a type error rather than as a value that quietly stops
 * matching.
 */
export { WebViewProvider };

export type {
    CloseWebViewMutation,
    CloseWebViewMutationVariables,
    GetWebViewTabsQuery,
    GetWebViewTabsQueryVariables,
    OpenWebViewMutation,
    OpenWebViewMutationVariables,
};

/** The page the external browser reports once it has opened, and navigated to, the url. */
export type WebViewTab = OpenWebViewMutation['openWebView'];

/** The part of the server settings that decides which browser backs the WebView. */
export type WebViewSettings = Pick<Settings, 'webViewProvider'>;

/** Query parameter the WebView route reads the url to open from. */
export enum WebViewSearchParam {
    URL = 'url',
}
