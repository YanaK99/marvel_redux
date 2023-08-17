import { useRouter } from 'next/router';
import { NextShield, NextShieldProps } from 'next-shield';

interface Props {
  children: React.ReactNode;
}

export function Shield({ children }: Props) {
  const router = useRouter();

  const shieldConfig: NextShieldProps<
    ['/logout', '/favourite'],
    ['/home', '/login', '/characters', '/register']
  > = {
    router,
    isAuth: false,
    isLoading: false,
    LoadingComponent: <p>Loading...</p>,
    privateRoutes: ['/logout', '/favourite'],
    publicRoutes: ['/home', '/login', '/characters', '/register'],
    accessRoute: '/favourite',
    loginRoute: '/login',
  };

  return <NextShield {...shieldConfig}>{children}</NextShield>;
}
