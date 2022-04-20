import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

export const Title = styled.div`
  font-size: 56px;
  line-height: 56px;
  margin: 30px 0 40px;
  font-weight: bold;
`;

export const Team = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;