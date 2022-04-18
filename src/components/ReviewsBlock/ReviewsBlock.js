import React from "react";

import Container from "../Container";
import ReviewItem from "./ReviewItem";

import { Wrapper, Title, Reviews } from "./ReviewsBlock.style";

const ReviewsBlock = ({ data }) => (
  <Wrapper color={data.color} backgroundColor={data.backgroundColor}>
    <Container>
      <Title>Відгуки <br /> наших клієнтів</Title>
      <Reviews>
        {data?.reviews?.map((review, idx) => (
          <ReviewItem
            key={idx}
            {...review}
          />
        ))}
      </Reviews>
    </Container>
  </Wrapper>
);

export default ReviewsBlock;
