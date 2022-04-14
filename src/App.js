import React from "react";

import { useSelector } from "react-redux";

import {
  Header,
  Footer,
  About,
  ServicesBlock,
  NoveltyBlock,
} from "../src/components";

import { selectSettings } from "../src/redux/state/selectors";

import { Wrapper, Container } from "./App.style";

const App = () => {
  const {
    color,
    backgroundColor,
    showHeader,
    showAbout,
    showServices,
    showNovelty,
    showFooter,
  } = useSelector(selectSettings);

  return (
    <Wrapper color={color} backgroundColor={backgroundColor}>
      <Container>
        {showHeader && <Header />}
        {showAbout && <About />}
        {showNovelty && <NoveltyBlock />}
        {showServices && <ServicesBlock />}
        {showFooter && <Footer />}
      </Container>
    </Wrapper>
  );
};

export default App;
