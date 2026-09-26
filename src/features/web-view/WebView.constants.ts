/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * The timing bounds the external browser panel uses.
 *
 * A plain constant object rather than an enum, following the other feature constants.
 */
export const WebViewConstants = {
    /**
     * How long the panel waits for the browser to open and navigate before giving up on the request.
     *
     * The server bounds the same call with `server.webViewOpenTimeout`, which defaults to 180
     * seconds, so this has to be longer than that. Otherwise the client would give up first and the
     * user would see a generic failure instead of the server's message, which names the setting and
     * the value it used. Opening is not a quick call in any case: the browser service starts a
     * browser if it is not running, unpacks its profile, and then navigates and solves whatever
     * challenge the site presents.
     */
    OPEN_TIMEOUT_MILLISECONDS: 240000,
    /**
     * How often the panel asks which tabs the browser service has open.
     *
     * A read of that list is also the liveness signal for an interactive tab, so this has to stay
     * well under whatever idle timeout the service is configured with, and that is measured in
     * minutes. Five seconds matches the cadence the archive dashboard polls its progress at, and is
     * quick enough that a page opened in the browser shows up in the panel header without a
     * noticeable delay.
     */
    TABS_POLL_INTERVAL_MILLISECONDS: 5000,
};
