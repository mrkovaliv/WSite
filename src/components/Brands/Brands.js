import React from "react";

import {
  Wrapper,
  HeaderTitle,
  Description,
  StyledImage,
} from "./Brands.style";

import Container from "../Container";

const Brands = ({ data }) => (
  <Wrapper color={data.color} backgroundColor={data.backgroundColor}>
    <Container>
      <HeaderTitle>{data.headerTitle}</HeaderTitle>
      <Description>
        {data?.data?.map((item, idx) => (
          <StyledImage key={idx} src={item.img} />
        ))}
      </Description>
    </Container>
  </Wrapper>
);

export default Brands;
