import React from "react";

import { Wrapper, StyledAside, InfoBlock, StyledDescription, StyledName, StyledImage } from "./TeamItem.style";

const TeamItem = ({name, description, color, img}) => (
  <Wrapper>
    <StyledAside backgroundColor={color}>
      <StyledImage src={img} />
    </StyledAside>
    <InfoBlock>
      <StyledName>{name}</StyledName>
      <StyledDescription>{description}</StyledDescription>
    </InfoBlock>
  </Wrapper>
);

export default TeamItem;
