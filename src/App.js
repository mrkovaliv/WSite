import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
import { setValues } from '../src/redux/state/actions';

import { Wrapper } from "./App.style";

const App = () => {
  const dispatch = useDispatch();
  const { header, about, footer, review, team, main, service, brand, work } =
    useSelector(selectState);

  useEffect(() => {
    fetch("http://localhost:6069/api/wsite/data")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setValues(data));
        console.log(data);
      });
  }, []);

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
