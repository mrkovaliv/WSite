import React from "react";

import { Wrapper, StyledAside, InfoBlock, StyledDescription, StyledName } from "./ReviewItem.style";

const ReviewItem = ({name, description, color}) => (
  <Wrapper>
    <StyledAside backgroundColor={color} />
    <InfoBlock>
      <StyledDescription>{description}</StyledDescription>
      <StyledName>{name}</StyledName>
    </InfoBlock>
  </Wrapper>
);

export default ReviewItem;
