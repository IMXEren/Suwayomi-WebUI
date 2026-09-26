/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLingui } from '@lingui/react/macro';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { AppRoutes } from '@/base/AppRoute.constants.ts';
import { AuthManager } from '@/features/authentication/AuthManager.ts';
import { WebViewConstants } from '@/features/web-view/WebView.constants.ts';
import { WebViewSearchParam } from '@/features/web-view/WebView.types.ts';
import { getVncClientUrl, isOpenableViewUrl, isVncClientReachable } from '@/features/web-view/WebView.utils.ts';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { defaultPromiseErrorHandler } from '@/lib/DefaultPromiseErrorHandler.ts';
import { requestManager } from '@/lib/requests/RequestManager.ts';

/** The panel gives up sooner than the server is allowed to take. */
const OPEN_TIMEOUT_SECONDS = WebViewConstants.OPEN_TIMEOUT_MILLISECONDS / 1000;

const WebViewMessage = ({
    message,
    actionLabel,
    onAction,
}: {
    message: ReactNode;
    actionLabel?: string;
    onAction?: () => void;
}) => {
    const { t } = useLingui();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, m: 'auto', p: 2 }}>
            {typeof message === 'string' ? <Typography align="center">{message}</Typography> : message}
            {!!onAction && (
                <Button variant="outlined" onClick={onAction}>
                    {actionLabel ?? t`Retry`}
                </Button>
            )}
        </Box>
    );
};

/**
 * Shows the browser the external browser service runs, through its web VNC endpoint.
 *
 * The service owns one real browser on a display that a VNC server exports, and this view drives
 * it. The browser is opened through the API before anything is shown, because the tab has to
 * exist for the VNC endpoint to have something to display, and it is closed again when this view
 * goes away, so a closed view does not leave a browser running. While the view is open, the tab it
 * shows is polled, which is both how the service is told that the tab is still in use and how this
 * view notices that the tab is no longer there.
 */
export const WebView = () => {
    const { t } = useLingui();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const url = searchParams.get(WebViewSearchParam.URL) ?? '';
    const { accessToken } = AuthManager.useSession();

    const [openWebView] = requestManager.useOpenWebView();
    const [closeWebView] = requestManager.useCloseWebView();

    const [isOpening, setIsOpening] = useState(false);
    const [openError, setOpenError] = useState<string | null>(null);
    const [canRetry, setCanRetry] = useState(false);
    const [tab, setTab] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [isTabGone, setIsTabGone] = useState(false);
    const [isVncReachable, setIsVncReachable] = useState<boolean | null>(null);
    const [attempt, setAttempt] = useState(0);

    const openTabRef = useRef<string | null>(null);

    // The effect that opens the browser performs a remote side effect, so it must not re-run just
    // because a hook handed back a new function. The mutation functions are stable today, but
    // holding them in refs makes that an implementation detail of the hook rather than something
    // this effect silently depends on, and it keeps the dependency list honest instead of
    // suppressing it.
    const openWebViewRef = useRef(openWebView);
    const closeWebViewRef = useRef(closeWebView);

    // Key of the url and attempt that has already been opened, or is opening right now. A second
    // run for the same key is a no-op, so no matter what re-runs the effect, a second browser
    // cannot be opened for the same view.
    const openedAttemptRef = useRef<string | null>(null);

    useEffect(() => {
        openWebViewRef.current = openWebView;
        closeWebViewRef.current = closeWebView;
    }, [openWebView, closeWebView]);

    // Messages are resolved during render rather than inside the effects, so an effect only
    // depends on the resulting string and cannot be re-run by a new translation object.
    const {
        openFailedMessage,
        openTimeoutMessage,
        invalidUrlMessage,
        unreachableMessage,
        goneMessage,
        openAgainLabel,
    }: {
        openFailedMessage: string;
        openTimeoutMessage: string;
        invalidUrlMessage: string;
        unreachableMessage: string;
        goneMessage: string;
        openAgainLabel: string;
    } = useMemo(
        () => ({
            openFailedMessage: t`Could not open the WebView`,
            // The server names the setting it gave up on, so this says what this side was waiting
            // for and for how long, which is what tells a slow start apart from a failure.
            openTimeoutMessage: t`The browser did not open within ${OPEN_TIMEOUT_SECONDS} seconds`,
            invalidUrlMessage: t`The WebView url is not valid`,
            unreachableMessage: t`The browser service is not reachable`,
            goneMessage: t`The browser is no longer open`,
            openAgainLabel: t`Open again`,
        }),
        [t],
    );

    // The socket URL must identify the opened tab for disconnect cleanup.
    const vncClientUrl = useMemo(() => (tab ? getVncClientUrl(accessToken, tab) : null), [accessToken, tab]);

    // Polling touches only the displayed tab; abandoned tabs must still time out.
    const { data: tabsData } = requestManager.useGetWebViewTabs({
        variables: { tab },
        skip: !tab || isTabGone,
        // The list is live state rather than something worth reading from the cache: a cached
        // answer describes an earlier view's tab, which would read as this tab having gone missing
        // the moment it opened.
        fetchPolicy: 'network-only',
        pollInterval: WebViewConstants.TABS_POLL_INTERVAL_MILLISECONDS,
    });

    const tabs = tabsData?.webViewTabs;
    const shownTab = tabs?.find((candidate) => candidate.id === tab);
    const isTabListed = !!shownTab;

    // Whether the list currently omits the tab. Recorded in state rather than derived, because the
    // query is skipped once the tab is gone and a skipped query is not a source of data. Only a
    // response that has arrived is allowed to say anything, so an unanswered poll is not mistaken
    // for a missing tab.
    useEffect(() => {
        if (!tab || !tabs) {
            return;
        }

        setIsTabGone(!isTabListed);
    }, [tab, tabs, isTabListed]);

    const closeOpenTab = useCallback(() => {
        const openTab = openTabRef.current;
        if (!openTab) {
            return;
        }

        openTabRef.current = null;
        // The server treats an unknown or already closed tab as a no-op, so this is safe to fire
        // even when the tab is gone.
        closeWebViewRef
            .current({ variables: { input: { tab: openTab } } })
            .catch(defaultPromiseErrorHandler('WebView::closeOpenTab'));
    }, []);

    useEffect(() => closeOpenTab, [closeOpenTab]);

    useEffect(() => {
        // React cleanup does not run when the page itself goes away, so a reload or a closed tab
        // would leave the browser this view opened still running, and the next visit would open a
        // second one for the same url. A keepalive request is delivered after the page is gone,
        // which is what makes the close land. A page restored from the back and forward cache is
        // left alone, because that view comes back and still needs its tab.
        const closeOnPageHide = (event: PageTransitionEvent) => {
            const openTab = openTabRef.current;
            if (event.persisted || !openTab) {
                return;
            }

            openTabRef.current = null;
            closeWebViewRef
                .current({
                    variables: { input: { tab: openTab } },
                    context: { fetchOptions: { keepalive: true } },
                })
                .catch(defaultPromiseErrorHandler('WebView::closeOnPageHide'));
        };

        window.addEventListener('pagehide', closeOnPageHide);
        return () => window.removeEventListener('pagehide', closeOnPageHide);
    }, []);

    useEffect(() => {
        if (!isOpenableViewUrl(url)) {
            setOpenError(invalidUrlMessage);
            // Nothing about the request would change, so the message is not offered a retry.
            setCanRetry(false);
            return undefined;
        }

        // One open per url and attempt. The effect can run again for reasons this screen does not
        // control, and each run would otherwise start another browser and leave the previous one
        // running with nothing showing it.
        const attemptKey = `${attempt}:${url}`;
        if (openedAttemptRef.current === attemptKey) {
            return undefined;
        }
        openedAttemptRef.current = attemptKey;

        let cancelled = false;
        setIsOpening(true);
        setOpenError(null);
        setCanRetry(true);
        setTab(null);
        // A new attempt is not looking at a tab yet, so any earlier verdict about the last one is
        // cleared here rather than at the point the retry button is pressed, which also covers the
        // url changing.
        setIsTabGone(false);

        // A lost response would otherwise leave the panel opening forever. Timing out marks the
        // attempt as superseded rather than abandoning it, so a tab that arrives late is still
        // closed by the cancelled branch below instead of being left behind.
        const timeoutId = setTimeout(() => {
            cancelled = true;
            setIsOpening(false);
            setOpenError(openTimeoutMessage);
        }, WebViewConstants.OPEN_TIMEOUT_MILLISECONDS);

        openWebViewRef
            .current({ variables: { input: { url } } })
            .then(({ data }) => {
                const opened = data?.openWebView;
                if (!opened?.tab) {
                    throw new Error(openFailedMessage);
                }

                if (cancelled) {
                    // The view went away while the browser was starting, so the tab it just
                    // opened is closed again instead of being left behind with nothing showing it.
                    closeWebViewRef
                        .current({ variables: { input: { tab: opened.tab } } })
                        .catch(defaultPromiseErrorHandler('WebView::closeOrphanTab'));
                    return;
                }

                openTabRef.current = opened.tab;
                setTab(opened.tab);
                setTitle(opened.title);
            })
            .catch((e) => {
                if (!cancelled) {
                    setOpenError(getErrorMessage(e));
                }
            })
            .finally(() => {
                clearTimeout(timeoutId);
                if (!cancelled) {
                    setIsOpening(false);
                }
            });

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
            // An attempt that a retry or a different url superseded has already opened a tab, and
            // this is where that tab is closed, so a superseded attempt cannot leave a browser
            // running with nothing showing it.
            closeOpenTab();
        };
    }, [url, attempt, openTimeoutMessage, openFailedMessage, invalidUrlMessage, closeOpenTab]);

    useEffect(() => {
        if (!tab || !vncClientUrl) {
            setIsVncReachable(null);
            return undefined;
        }

        // An iframe that fails to load stays blank without raising anything the page can catch,
        // so the client page is asked for directly before it is shown.
        let cancelled = false;
        setIsVncReachable(null);
        isVncClientReachable(vncClientUrl, accessToken)
            .then((reachable) => {
                if (!cancelled) {
                    setIsVncReachable(reachable);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setIsVncReachable(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [tab, vncClientUrl, accessToken]);

    const retry = () => {
        closeOpenTab();
        setTab(null);
        setTitle('');
        setIsTabGone(false);
        setIsVncReachable(null);
        setOpenError(null);
        setAttempt((previousAttempt) => previousAttempt + 1);
    };

    const close = () => {
        closeOpenTab();
        window.close();
        navigate(AppRoutes.library.path());
    };

    const panelSx = {
        position: 'fixed',
        inset: 0,
        zIndex: (theme: { zIndex: { modal: number } }) => theme.zIndex.modal,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
    } as const;
    // The tab list reports where the tab actually is, so a page the person navigated to in the
    // browser replaces the title the open reply carried.
    const displayedTitle = shownTab?.title || title;
    let content: ReactNode = <CircularProgress sx={{ m: 'auto' }} />;

    if (openError) {
        content = <WebViewMessage message={openError} onAction={canRetry ? retry : undefined} />;
    } else if (isOpening || !tab) {
        content = (
            <WebViewMessage
                message={
                    <>
                        <CircularProgress />
                        <Typography sx={{ mt: 2 }}>{t`Opening the browser`}</Typography>
                    </>
                }
            />
        );
    } else if (isTabGone) {
        // The tab can be closed by the browser service as well as by a person, so this is a state
        // to recover from rather than an error. Opening again is left to the user, because a tab
        // that keeps disappearing would otherwise be replaced without them asking.
        content = <WebViewMessage message={goneMessage} actionLabel={openAgainLabel} onAction={retry} />;
    } else if (isVncReachable === false) {
        content = <WebViewMessage message={unreachableMessage} onAction={retry} />;
    } else if (isVncReachable && vncClientUrl) {
        content = (
            <Box
                component="iframe"
                src={vncClientUrl}
                title={t`WebView`}
                sx={{ flex: 1, minHeight: 0, width: '100%', border: 0 }}
            />
        );
    }

    return (
        <Box sx={panelSx}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1, borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    variant="subtitle1"
                    sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                    {displayedTitle || t`WebView`}
                </Typography>
                <Button size="small" onClick={close}>
                    {t`Close`}
                </Button>
            </Box>
            {content}
        </Box>
    );
};
