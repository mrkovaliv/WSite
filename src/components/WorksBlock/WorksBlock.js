import React from "react";

import {
  Wrapper,
  HeaderTitle,
  Description,
  StyledImage,
} from "./WorksBlock.style";

import Container from "../Container";

const WorksBlock = ({ data }) => (
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

export default WorksBlock;
