/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
    type ArchiveQueueDimension,
    ARCHIVE_QUEUE_DIMENSION_RETRYABLE_STATES,
} from '@/features/archive/Archive.constants.ts';

export class ArchiveStateUtil {
    /** The archive states are server enums; comparing their wire names keeps the UI independent of the generated enums. */
    static isActive(state: unknown, activeStates: readonly string[]): boolean {
        return state != null && activeStates.includes(String(state));
    }

    /** `PENDING_APPROVAL` becomes `pending approval`; a missing state is rendered as a dash. */
    static prettify(state: unknown): string {
        if (state == null || String(state) === '') {
            return '-';
        }

        return String(state).split('_').join(' ').toLowerCase();
    }

    static formatCount(count: number | null | undefined): string {
        return (count ?? 0).toLocaleString();
    }

    static formatProgress(progress: number, total: number): string {
        return `${ArchiveStateUtil.formatCount(progress)} / ${ArchiveStateUtil.formatCount(total)}`;
    }

    /** Server timestamps are epoch seconds; a missing one is rendered as a dash instead of the epoch date. */
    static formatTimestamp(epoch: string | null | undefined): string {
        if (epoch == null || String(epoch) === '') {
            return '-';
        }

        return new Date(Number(epoch) * 1000).toLocaleString();
    }

    /** True when the server retry mutation of that dimension would requeue the given state. */
    static isRetryable(dimension: ArchiveQueueDimension, state: unknown): boolean {
        return state != null && ARCHIVE_QUEUE_DIMENSION_RETRYABLE_STATES[dimension].includes(String(state) as never);
    }
}
