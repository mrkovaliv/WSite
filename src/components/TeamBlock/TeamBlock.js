import React from "react";

import Container from "../Container";
import TeamItem from "./TeamItem";

import { Wrapper, Title, Team } from "./TeamBlock.style";

const TeamBlock = ({ data }) => (
  <Wrapper color={data.color} backgroundColor={data.backgroundColor}>
    <Container>
      <Title>{data.headerTitle}</Title>
      <Team>
        {data?.data?.map((item, idx) => (
          <TeamItem
            key={idx}
            {...item}
          />
        ))}
      </Team>
    </Container>
  </Wrapper>
);

export default TeamBlock;
