import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { SignInForm } from "./components";

import MarvelIcon from "@/assets/svg/marvel.svg";
import { useDispatch } from "react-redux";
import { authLoginThunkAction } from "@/store/auth/thunk/login_thunk";
import { AppDispatch } from "@/store";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignIn = () => {
    dispatch(authLoginThunkAction());
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" py={8}>
      <Card sx={{ width: 400, borderRadius: 6 }}>
        <CardContent
          sx={{
            backgroundColor: "rgba(22,55,104,0.53)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Stack>
            <MarvelIcon
              sx={{
                width: "100",
                height: "50",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="h4"
              mb={3}
              mt={3}
              sx={{
                color: "#f2f2f2",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Modern No. 20",
              }}
            >
              Login
            </Typography>
            <Typography variant="body1" mb={3} textAlign="center">
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
