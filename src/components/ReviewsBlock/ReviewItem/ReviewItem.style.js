import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 570px;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 21px 49px 1px rgba(41, 44, 61, 0.15);
  min-height: 300px;
  margin-bottom: 40px;
`;

export const StyledAside = styled.div`
  background-color: ${props => props.backgroundColor || "#000"};
  min-width: 190px;
`;

export const InfoBlock = styled.div`
  padding: 30px 40px 20px 20px;
`;

export const StyledDescription = styled.div`
  margin-bottom: 30px;
`;

export const StyledName = styled.div`
  font-weight: 700;
  color: #ba3f7f;
`;
