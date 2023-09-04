import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MarvelIcon from "@/assets/svg/marvel.svg";

import { RegisterForm } from "./components";

const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/login");
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
              Register
            </Typography>
            <Typography variant="body1" mb={3} textAlign="center">
              Welcome!
            </Typography>
          </Stack>
          <Stack width="100%" maxWidth="90%">
            <RegisterForm onFormSubmit={handleRegister} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default RegisterPage;
