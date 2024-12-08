import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "../styles/Nprogress.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout/Layout";
import { layoutRoutes } from "@/const/pages";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import chakraTheme from "../styles/themes";
import styledTheme from "@/styles/styledTheme";

export default function App({ Component, pageProps }: AppProps) {
  const [showLayout, setShowLayout] = useState<boolean>(false);
  const { asPath } = useRouter();

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  useEffect(() => {
    if (layoutRoutes.includes(asPath)) setShowLayout(true);
  }, []);

  return (
    <StyledThemeProvider theme={styledTheme}>
      <ChakraProvider theme={chakraTheme}>
        <Layout showLayout={showLayout}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StyledThemeProvider>
  );
}
