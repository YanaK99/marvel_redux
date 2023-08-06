import { useContext } from 'react';

import { Card, CardContent, Typography, Stack } from '@mui/material';

import { SignInForm } from './components';

import { SignInFormFieldsType } from '@/types/models/forms';

import ModalContext from '@/context/ModalContext';

import MarvelIcon from '@/assets/svg/Marvel.svg';

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
const LoginPage = () => {
  const { login } = useContext(ModalContext);

  const handleSignIn = (data: SignInFormFieldsType) => {
    if (login) {
      login();
    }
    console.log('data', data);
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" py={8}>
      <Card sx={{ width: 400, borderRadius: 6 }}>
        <CardContent
          sx={{
            backgroundColor: 'rgba(189,229,190,0.53)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Stack>
            <MarvelIcon />
            <Typography
              variant="h4"
              mb={3}
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Modern No. 20',
              }}
            >
              Login
            </Typography>
            <Typography variant="body1" mb={3}>
              Welcome to your account!
            </Typography>
          </Stack>
          <Stack width="100%" maxWidth="90%">
            <SignInForm onFormSubmit={handleSignIn} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default LoginPage;
