import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Shield } from '@/components/Shield';
import Navigation from '../components/Navigation/Navigation';
import { Container } from '@mui/material';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Shield>
      <Navigation />
      <Container sx={{ margin: '0 auto', pt: 8 }}>
        <Component {...pageProps} />
      </Container>
    </Shield>
  );
};

export default MyApp;
