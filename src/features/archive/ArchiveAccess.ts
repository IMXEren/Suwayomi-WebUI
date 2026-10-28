/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { AuthManager } from '@/features/authentication/AuthManager.ts';

const ARCHIVE_OWNER_ID = 1;

export const useIsArchiveOwner = (): boolean => {
    const { accessToken, isAuthRequired } = AuthManager.useSession();

    return isAuthRequired === false || accessToken?.userId === ARCHIVE_OWNER_ID;
};
