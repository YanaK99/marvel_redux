import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "@/store";
import { Shield } from "@/components/Shield";

import { Navigation } from "../components";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/globalThemePalette";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Shield>
          <Navigation />
          <Container sx={{ margin: "0 auto", pt: 8 }}>
            <Component {...pageProps} />
          </Container>
        </Shield>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
