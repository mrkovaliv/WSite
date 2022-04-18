import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 75px;
  align-items: center;
`;

export const Contact = styled.span`
  font-weight: bold;
  margin-right: 30px;
  font-size: 16px;
`;

export const StyledMediaBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;



export const StyledImg = styled.img`
  width: 35px;
  height: 35px;
`;

