import { useRouter } from 'next/router';
import { NextShield, NextShieldProps } from 'next-shield';
import { useContext } from 'react';
import ModalContext from '@/context/ModalContext';

interface Props {
  children: React.ReactNode;
}

export function Shield({ children }: Props) {
  const router = useRouter();
  const { isAuthorized } = useContext(ModalContext);

  const shieldConfig: NextShieldProps<
    ['/logout', '/favourites'],
    ['/', '/login', '/register']
  > = {
    router,
    isAuth: isAuthorized,
    isLoading: false,
    LoadingComponent: <p>Loading...</p>,
    privateRoutes: ['/logout', '/favourites'],
    publicRoutes: ['/', '/login', '/register'],
    accessRoute: '/favourites',
    loginRoute: '/login',
  };

  return <NextShield {...shieldConfig}>{children}</NextShield>;
}
