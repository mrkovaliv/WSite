import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  padding: 20px 0 50px;
`;

export const StyledImage = styled.img`
  display: inline-block;
  max-height: 500px;
  max-width: 400px;
  margin-bottom: 50px;
  box-shadow: 0px 21px 49px 1px rgba(41, 44, 61, 0.15);
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 56px;
  line-height: 56px;
  margin: 30px 0;
`;






