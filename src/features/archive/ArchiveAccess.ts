import { AuthManager } from '@/features/authentication/AuthManager.ts';

const ARCHIVE_OWNER_ID = 1;

export const useIsArchiveOwner = (): boolean => {
    const { accessToken, isAuthRequired } = AuthManager.useSession();

    return isAuthRequired === false || accessToken?.userId === ARCHIVE_OWNER_ID;
};
