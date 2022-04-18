import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${props => props.color || "#000"};
  background-color: ${props => props.backgroundColor || "#fff"};
`;

