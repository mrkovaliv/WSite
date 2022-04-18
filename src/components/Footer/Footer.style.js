import styled from "styled-components";

import footerImg from "../../assets/images/footerbg.png";

export const Wrapper = styled.div`
  min-height: 997px;
  background-image: url(${footerImg});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -30px;
`;

export const StyledFooter = styled.footer`
  padding-top: 370px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.footer`
  font-size: 60px;
  line-height: 50px;
  color: #fff;
  position: relative;
  padding-bottom: 25px;

  &::before {
    content: "";
    width: 105px;
    height: 9px;
    background-color: #dc358d;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 9%;
  }
`;

export const InfoBlock = styled.div`
  color: #fff;

  span {
    opacity: 0.7;
  }
`;

export const FooterForm = styled.form`
  padding-top: 60px;
  max-width: 600px;
  width: 100%;

  input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    margin-bottom: 45px;
    padding-top: 10px;
    padding-bottom: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 20px;

    &::placeholder {
      font-size: 22px;
      line-height: 30px;
    }
  }

  button {
    padding: 15px 45px;
    background-color: #006d9e;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 24px;
    display: flex;
    margin: 0 0 0 auto;
    cursor: pointer;
  }
`;

export const InfoItem = styled.div`
  padding-top: 25px;
  line-height: 28px;
`;

export const FooterFormTitle = styled.div`
  font-size: 60px;
  line-height: 50px;
  color: #fff;
  position: relative;
  padding-bottom: 25px;

  &::before {
    content: "";
    width: 105px;
    height: 9px;
    background-color: #dc358d;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 9%;
  }
`;
