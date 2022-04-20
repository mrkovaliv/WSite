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

export const Description = styled.div`
  max-width: 960px;
  margin-right: auto;
  font-size: 20px;
  line-height: 24px;
`;

export const StyledItem = styled.div`
margin-bottom: 25px;
`;

export const ItemTitle = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ItemDescr = styled.div`
  opacity: 0.8;
`;






