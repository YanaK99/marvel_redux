import HubIcon from '@mui/icons-material/Hub';
import { Box, keyframes } from '@mui/material';
const Loader = () => {
  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  return (
    <Box
      sx={{
        width: '100%',
        left: 0,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 1,
      }}
    >
      <HubIcon
        sx={{
          width: '200px',
          height: '200px',
          animation: `${spin} 3s linear infinite`,
          color: 'darkgrey',
        }}
      />
    </Box>
  );
};

export default Loader;
