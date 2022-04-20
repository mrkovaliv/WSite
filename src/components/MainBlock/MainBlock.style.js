import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 705px;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

export const InnerBlock = styled.div`
  position: relative;
  z-index: 3;
`;

export const Title = styled.div`
  font-size: 65px;
  line-height: 85px;
  margin-bottom: 20px;
  font-weight: bold;
  max-width: 490px;
  margin-right: auto;
  font-weight: bold;
  padding-top: 50px;
`;

export const Description = styled.p`
  max-width: 450px;
  margin-right: auto;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  opacity: 0.8;
`;
