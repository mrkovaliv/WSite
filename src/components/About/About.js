import React from "react";

import { Wrapper, HeaderTitle, Description, Title } from "./About.style";

import Container from "../Container";

const About = ({ data }) => (
  <Wrapper color={data.color} backgroundColor={data.backgroundColor}>
    <Container>
      <HeaderTitle>{data.headerTitle}</HeaderTitle>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </Container>
  </Wrapper>
);

export default About;
