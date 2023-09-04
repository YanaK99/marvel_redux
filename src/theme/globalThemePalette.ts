import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8a1212",
      dark: "rgba(108,25,25,0.86)",
      light: "rgba(255,0,0,0.56)",
    },
    secondary: {
      main: "#0b2154",
      dark: "rgba(22,55,104,0.53)",
      light: "rgba(22,55,104,0.26)",
    },
    info: {
      main: "#3f4348",
      light: "#f2f2f2",
      dark: "rgba(0,0,0,0.8)",
    },
  },
});
