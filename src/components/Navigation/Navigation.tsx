import { AppBar, ListItemButton, List } from '@mui/material';
import NextLink from 'next/link';

import { useContext } from 'react';
import ModalContext from '@/context/ModalContext';

const listStyle = {
  height: '200',
  backgroundColor: 'rgba(0,0,0,0.8)',
  display: 'flex',
  justifyContent: 'space-between',
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgba(51,61,94,0.5)',
  borderRadius: '10px',
  maxWidth: '60%',
  margin: '30px 50px 10px 50px',
  border: '2px solid red',
};

const appBarStyle = {
  zIndex: '10',
};

function Navigation() {
  const { logout: logoutUser } = useContext(ModalContext);

  const logout = () => {
    logoutUser?.();
  };
  const { isAuthorized } = useContext(ModalContext);
  return (
    <AppBar sx={appBarStyle} position="fixed">
      <List sx={listStyle}>
        <ListItemButton sx={itemStyle} component={NextLink} href="/">
          MAIN
        </ListItemButton>
        <ListItemButton sx={itemStyle} component={NextLink} href="/characters">
          CHARACTERS
        </ListItemButton>
        {!isAuthorized && (
          <ListItemButton sx={itemStyle} component={NextLink} href="/register">
            REGISTER
          </ListItemButton>
        )}
        {!isAuthorized && (
          <ListItemButton sx={itemStyle} component={NextLink} href="/login">
            LOGIN
          </ListItemButton>
        )}
        {isAuthorized && (
          <ListItemButton
            sx={itemStyle}
            component={NextLink}
            href="/logout"
            onClick={logout}
          >
            LOGOUT
          </ListItemButton>
        )}
        {isAuthorized && (
          <ListItemButton
            sx={itemStyle}
            component={NextLink}
            href="/favourites"
          >
            FAVOURITE
          </ListItemButton>
        )}
      </List>
    </AppBar>
  );
}

export default Navigation;
