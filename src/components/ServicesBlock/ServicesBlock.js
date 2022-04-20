import React from "react";

import { Wrapper, HeaderTitle, Description, ItemTitle, StyledItem, ItemDescr } from "./ServicesBlock.style";

import Container from "../Container";

const ServicesBlock = ({ data }) => (
  <Wrapper color={data.color} backgroundColor={data.backgroundColor}>
    <Container>
      <HeaderTitle>Наші послуги</HeaderTitle>
      <Description>
        {data?.data?.map((item, idx) => (
          <StyledItem key={idx}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescr>{item.description}</ItemDescr>
          </StyledItem>
        ))}
      </Description>
    </Container>
  </Wrapper>
);

export default ServicesBlock;
