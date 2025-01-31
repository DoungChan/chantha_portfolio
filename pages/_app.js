import { Fragment, useEffect } from "react";
import PreLoader from "../src/layout/PreLoader";
import { aTagClick, chantha_tm_my_load, wowJsAnimation } from "../src/utilits";
import { MantineProvider } from '@mantine/core';
import "../styles/globalstyle.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    chantha_tm_my_load();
    wowJsAnimation();
    aTagClick();
  });
  return (
    <MantineProvider >
      <PreLoader />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
