/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import gql from 'graphql-tag';

export const WEBVIEW_CLEAR_CACHE_COOKIES = gql`
    mutation WEBVIEW_CLEAR_CACHE_COOKIES {
        clearCookiesAndCache {
            clientMutationId
        }
    }
`;

export const OPEN_WEB_VIEW = gql`
    mutation OPEN_WEB_VIEW($input: OpenWebViewInput!) {
        openWebView(input: $input) {
            tab
            url
            title
            status
        }
    }
`;

export const CLOSE_WEB_VIEW = gql`
    mutation CLOSE_WEB_VIEW($input: CloseWebViewInput!) {
        closeWebView(input: $input) {
            closed
        }
    }
`;
