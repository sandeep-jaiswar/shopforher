import theme from "@/lib/theme";
import { ThemeProvider } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}

export default App;