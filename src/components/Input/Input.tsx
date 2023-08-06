import { Button, TextField, Box } from '@mui/material';
import { useContext } from 'react';

import ModalContext from '../../context/ModalContext';

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 */
function Input() {
  const { login: loginUser } = useContext(ModalContext);

  const login = () => {
    loginUser?.();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Name" variant="standard" id="name" name="name" />
      <TextField
        label="Password"
        variant="standard"
        type="password"
        id="password"
        name="password"
      />
      <Button
        variant="contained"
        onClick={login}
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          '&:hover': {
            backgroundColor: '#4caf50',
            color: '#fff',
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
}

export default Input;
