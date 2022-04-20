import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 350px;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 21px 49px 1px rgba(41, 44, 61, 0.15);
  min-height: 300px;
  margin-bottom: 40px;
`;

export const StyledAside = styled.div`
  background-color: ${props => props.backgroundColor || "#000"};
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const InfoBlock = styled.div`
  padding: 30px 40px 20px 20px;
`;

export const StyledDescription = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const StyledName = styled.div`
  font-weight: 700;
  color: #ba3f7f;
  font-size: 35px;
  line-height: 40px;
  margin-bottom: 20px;
`;


