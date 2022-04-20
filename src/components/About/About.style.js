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

  font-size: 35px;
  line-height: 45px;
  margin-bottom: 20px;
  font-weight: bold;
  margin-right: auto;
  text-align: center;

`;

export const Description = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  opacity: 0.9;

`;
