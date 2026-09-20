/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { AwaitableComponentProps } from 'awaitable-component';
import { useLingui } from '@lingui/react/macro';
import { CheckboxInput } from '@/base/components/inputs/CheckboxInput.tsx';
import { MangaAcquisitionPolicy } from '@/lib/graphql/generated/graphql-base.types.ts';

export type BackupBootstrapCategoryOverride = {
    categoryName: string;
    policy: MangaAcquisitionPolicy;
};

export type BackupBootstrapOptions = {
    enabled: boolean;
    defaultPolicy: MangaAcquisitionPolicy;
    categoryOverrides: BackupBootstrapCategoryOverride[];
};

/** An override row is positional while it is edited, so it needs its own stable identity. */
type OverrideRow = BackupBootstrapCategoryOverride & { key: string };

let overrideKeySeed = 0;

const createOverrideRow = (policy: MangaAcquisitionPolicy): OverrideRow => {
    overrideKeySeed += 1;
    return { key: `backup-bootstrap-override-${overrideKeySeed}`, categoryName: '', policy };
};

/**
 * A policy select.
 *
 * The element id is supplied by the caller: the override rows repeat the same visible label, so an id
 * derived from that label would produce duplicate accessible label ids and mis-associate each select.
 */
const PolicySelect = ({
    id,
    value,
    label,
    policyLabels,
    onChange,
}: {
    id: string;
    value: MangaAcquisitionPolicy;
    label: string;
    policyLabels: Record<MangaAcquisitionPolicy, string>;
    onChange: (policy: MangaAcquisitionPolicy) => void;
}) => (
    <FormControl size="small" fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
            id={id}
            labelId={`${id}-label`}
            label={label}
            value={value}
            onChange={(event) => onChange(event.target.value as MangaAcquisitionPolicy)}
        >
            {Object.values(MangaAcquisitionPolicy).map((policy) => (
                <MenuItem key={policy} value={policy}>
                    {policyLabels[policy]}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

/**
 * The bootstrap intent of a restore.
 *
 * The overrides are matched by category name, because the backup carries category names and the local
 * categories may not exist yet; the list order is the order the server applies them in.
 */
export const BackupBootstrapOptionsDialog = ({
    onDismiss,
    onSubmit,
    isVisible,
    onExitComplete,
}: AwaitableComponentProps<BackupBootstrapOptions>) => {
    const { t } = useLingui();

    const [enabled, setEnabled] = useState(false);
    const [defaultPolicy, setDefaultPolicy] = useState<MangaAcquisitionPolicy>(MangaAcquisitionPolicy.Manual);
    const [overrides, setOverrides] = useState<OverrideRow[]>([]);

    const updateOverride = (index: number, patch: Partial<BackupBootstrapCategoryOverride>) =>
        setOverrides((current) => current.map((entry, i) => (i === index ? { ...entry, ...patch } : entry)));

    const moveOverride = (index: number, offset: number) =>
        setOverrides((current) => {
            const target = index + offset;
            if (target < 0 || target >= current.length) {
                return current;
            }

            const reordered = [...current];
            const [moved] = reordered.splice(index, 1);
            reordered.splice(target, 0, moved);
            return reordered;
        });

    const missingNames = overrides.filter((override) => !override.categoryName.trim()).length;

    // The server applies the first matching override, so a later row with an already used name would
    // silently never apply; the comparison is case-insensitive because category names are matched that way.
    const usedNames = overrides
        .map((override) => override.categoryName.trim().toLowerCase())
        .filter((name) => name.length > 0);
    const hasDuplicateNames = new Set(usedNames).size !== usedNames.length;

    // localized here rather than at module scope, so the policy names go through Lingui
    const policyLabels: Record<MangaAcquisitionPolicy, string> = {
        [MangaAcquisitionPolicy.Auto]: t`Automatic`,
        [MangaAcquisitionPolicy.Manual]: t`Wait for approval`,
        [MangaAcquisitionPolicy.Paused]: t`Paused`,
    };

    const submit = () =>
        onSubmit({
            enabled,
            defaultPolicy,
            categoryOverrides: overrides
                .filter((override) => override.categoryName.trim())
                .map((override) => ({ categoryName: override.categoryName.trim(), policy: override.policy })),
        });

    return (
        <Dialog open={isVisible} onTransitionExited={onExitComplete} onClose={onDismiss} maxWidth="sm" fullWidth>
            <DialogTitle>{t`Archive bootstrap`}</DialogTitle>
            <DialogContent>
                <Stack sx={{ gap: 2, pt: 1 }}>
                    <CheckboxInput
                        label={t`Start the archive bootstrap after this restore`}
                        checked={enabled}
                        onChange={(_, checked) => setEnabled(checked)}
                    />
                    {!enabled && (
                        <Typography variant="caption" color="text.secondary">
                            {t`The library is imported as usual and nothing is acquired.`}
                        </Typography>
                    )}
                    {enabled && (
                        <>
                            <Typography variant="caption" color="text.secondary">
                                {t`Each imported series is refreshed once and its newly discovered revisions are queued according to this policy.`}
                            </Typography>
                            <PolicySelect
                                id="backup-bootstrap-default-policy"
                                label={t`Default policy`}
                                value={defaultPolicy}
                                policyLabels={policyLabels}
                                onChange={setDefaultPolicy}
                            />
                            <Stack sx={{ gap: 1 }}>
                                <Typography variant="subtitle2">{t`Category overrides`}</Typography>
                                {!overrides.length && (
                                    <Typography variant="caption" color="text.secondary">
                                        {t`No category override: every series uses the default policy.`}
                                    </Typography>
                                )}
                                {overrides.map((override, index) => (
                                    <Stack
                                        key={override.key}
                                        sx={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}
                                    >
                                        <TextField
                                            size="small"
                                            label={t`Category name`}
                                            value={override.categoryName}
                                            onChange={(event) =>
                                                updateOverride(index, { categoryName: event.target.value })
                                            }
                                        />
                                        <PolicySelect
                                            id={`backup-bootstrap-policy-${override.key}`}
                                            label={t`Policy`}
                                            value={override.policy}
                                            policyLabels={policyLabels}
                                            onChange={(policy) => updateOverride(index, { policy })}
                                        />
                                        <IconButton
                                            aria-label={t`Move override up`}
                                            disabled={index === 0}
                                            onClick={() => moveOverride(index, -1)}
                                        >
                                            <ArrowUpwardIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            aria-label={t`Move override down`}
                                            disabled={index === overrides.length - 1}
                                            onClick={() => moveOverride(index, 1)}
                                        >
                                            <ArrowDownwardIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            aria-label={t`Remove override`}
                                            onClick={() =>
                                                setOverrides((current) => current.filter((_, i) => i !== index))
                                            }
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>
                                ))}
                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        setOverrides((current) => [...current, createOverrideRow(defaultPolicy)])
                                    }
                                >{t`Add category override`}</Button>
                                {missingNames > 0 && (
                                    <Typography variant="caption" color="error">
                                        {t`Every category override needs a category name.`}
                                    </Typography>
                                )}
                                {hasDuplicateNames && (
                                    <Typography variant="caption" color="error">
                                        {t`Category names must be unique: the first matching override wins, so a later duplicate would never apply.`}
                                    </Typography>
                                )}
                            </Stack>
                            <Typography variant="body2">
                                {t`Summary: the default policy is "${policyLabels[defaultPolicy]}" with ${overrides.length} category overrides.`}
                            </Typography>
                        </>
                    )}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onDismiss}>{t`Cancel`}</Button>
                <Button
                    onClick={submit}
                    variant="contained"
                    disabled={enabled && (missingNames > 0 || hasDuplicateNames)}
                >{t`Ok`}</Button>
            </DialogActions>
        </Dialog>
    );
};
