import { Fragment, useEffect } from "react";
import Audio from "../src/components/Audio";
import Contact from "../src/components/Contact";
import Cursor from "../src/components/Cursor";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Price from "../src/components/Price";
import Skills from "../src/components/Skills";
import Timeline from "../src/components/Timeline";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";
import Settings from "../src/layout/Settings";
import PageHead from "../src/PageHead";

const IndexDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  return (
    <Fragment>
      <PageHead page="Home" />
      <div id="opened">
        <div className="chantha_tm_all_wrap" data-color="orange">
          <Settings />
          <Header dark />
          <Home />
          <Portfolio />
          <Skills />
          <Timeline />
          <Price />
          <News />
          <Contact />
          <Footer />
          <Audio />
          <Cursor />
        </div>
      </div>
    </Fragment>
  );
};

export default IndexDark;
