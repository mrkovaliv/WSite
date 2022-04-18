import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  padding: 20px 0 50px;
`;

export const HeaderTitle = styled.h2`
  font-size: 56px;
  line-height: 56px;
  margin: 30px 0;
`;

export const Title = styled.div`
  text-align: right;
  font-size: 35px;
  line-height: 45px;
  margin-bottom: 20px;
  font-weight: bold;
  max-width: 500px;
  margin-left: auto;

`;

export const Description = styled.p`
  max-width: 500px;
  margin-left: auto;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  opacity: 0.9;

`;
