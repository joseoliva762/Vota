import { LoginButton } from 'components/LoginButton';
import { LoadingIcon } from 'components/LoadingIcon';
import { NavUserProfile } from 'components/NavUserProfile';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export function NavUserOutlet () {
    const { data: session, status } = useSession();
    if (status === 'loading') return <LoadingIcon />;
    if (status === 'authenticated') return <NavUserProfile user={session?.user} />;
    return <LoginButton />;
}
// ? 'Sign out' : session?.user?.name