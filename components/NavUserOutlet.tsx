import { LoginButton } from 'components/LoginButton';
import { LoadingIcon } from 'components/LoadingIcon';
import { NavUserProfile } from 'components/NavUserProfile';
import { useSession } from 'next-auth/react';

export function NavUserOutlet () {
    const { data: session, status } = useSession();
    if (status === 'loading') return <LoadingIcon />;
    if (status === 'authenticated') return <NavUserProfile user={session?.user} />;
    return <LoginButton />;
}
// ? 'Sign out' : session?.user?.name