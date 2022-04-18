import React from "react";
import { useSelector } from "react-redux";

import {
  Header,
  Footer,
  About,
  ServicesBlock,
  NoveltyBlock,
  ReviewsBlock,
} from "../src/components";

import { selectSettings, selectState } from "../src/redux/state/selectors";

import { Wrapper } from "./App.style";

const App = () => {
  const { header, about, footer, review } = useSelector(selectState);

  const {
    color,
    backgroundColor,
    showHeader,
    showAbout,
    showServices,
    showNovelty,
    showReviews,
    showFooter,
  } = useSelector(selectSettings);

  return (
    <Wrapper color={color} backgroundColor={backgroundColor}>
      {showHeader && <Header data={header} />}
      {showAbout && <About data={about} />}
      {showNovelty && <NoveltyBlock />}
      {showServices && <ServicesBlock />}
      {showReviews && <ReviewsBlock data={review} />}
      {showFooter && <Footer data={footer} />}
    </Wrapper>
  );
};

export default App;
