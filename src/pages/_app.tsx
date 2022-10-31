import "../common/styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { findTheme, ThemeTypes } from "@/common/themes/CustomThemes";
import { useEffect } from "react";
import Aos from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
