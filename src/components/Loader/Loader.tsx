import HubIcon from "@mui/icons-material/Hub";
import { keyframes } from "@mui/material";
import Stack from "@mui/material/Stack";
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
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      left="0"
      height="100vh"
      position="fixed"
      zIndex="1"
    >
      <HubIcon
        color="info"
        sx={{
          width: "200px",
          height: "200px",
          animation: `${spin} 3s linear infinite`,
        }}
      />
    </Stack>
  );
};

export default Loader;
