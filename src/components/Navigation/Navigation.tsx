import { AppBar, ListItemButton, List } from '@mui/material';

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
  const { isAuthorized } = useContext(ModalContext);
  return (
    <AppBar sx={appBarStyle} position="fixed">
      <List sx={listStyle}>
        <ListItemButton sx={itemStyle} href="/home">
          MAIN
        </ListItemButton>
        <ListItemButton sx={itemStyle} href="/characters">
          CHARACTERS
        </ListItemButton>
        <ListItemButton sx={itemStyle} href="/register">
          REGISTER
        </ListItemButton>
        <ListItemButton sx={itemStyle} href="/login">
          LOGIN
        </ListItemButton>
        {isAuthorized && (
          <ListItemButton sx={itemStyle} href="/logout">
            LOGOUT
          </ListItemButton>
        )}
      </List>
    </AppBar>
  );
}

export default Navigation;
