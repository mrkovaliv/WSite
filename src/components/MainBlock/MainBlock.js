import React from "react";

import Container from "../Container";

import { Wrapper, Title, Description, InnerBlock} from "./MainBlock.style";

const MainBlock = ({data}) => (
  <Wrapper color={data.color} backgroundColor={data.backgroundColor} backgroundImage={data.backgroundImage}>
    <Container>
      <InnerBlock>


    <Title>{data.title}</Title>
    <Description>{data.description}</Description>
    </InnerBlock>
    </Container>
  </Wrapper>
);

export default MainBlock;
