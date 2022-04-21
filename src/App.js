import React from "react";
import { useSelector } from "react-redux";

import {
  Header,
  Footer,
  About,
  ServicesBlock,
  NoveltyBlock,
  ReviewsBlock,
  TeamBlock,
  MainBlock,
  Brands,
  WorksBlock,
} from "../src/components";

import { selectSettings, selectState } from "../src/redux/state/selectors";

import { Wrapper } from "./App.style";

const App = () => {
  const { header, about, footer, review, team, main, service, brand, work  } =
    useSelector(selectState);

  const {
    color,
    backgroundColor,
    showHeader,
    showAbout,
    showServices,
    showBrands,
    showTeam,
    showMain,
    showReviews,
    showWorks,
    showFooter,
  } = useSelector(selectSettings);

  return (
    <Wrapper color={color} backgroundColor={backgroundColor}>
      {showHeader && <Header data={header} />}
      {showMain && <MainBlock data={main} />}
      {showAbout && <About data={about} />}
      {false && <NoveltyBlock />}
      {showTeam && <TeamBlock data={team} />}
      {showServices && <ServicesBlock data={service} />}
      {showWorks && <WorksBlock data={work} />}
      {showBrands && <Brands data={brand} />}
      {showReviews && <ReviewsBlock data={review} />}
      {showFooter && <Footer data={footer} />}
    </Wrapper>
  );
};

export default App;
