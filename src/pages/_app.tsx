import "../common/styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { findTheme, ThemeTypes } from "@/common/themes/CustomThemes";
import { useEffect } from "react";
import Aos from "aos";
import { RecoilRoot } from "recoil";
import { Layout } from "@/common/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
