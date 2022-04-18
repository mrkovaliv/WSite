import React from "react";

import fbIcon from "../../assets/images/fb.png";
import tgIcon from "../../assets/images/tg.png";
import instIcon from "../../assets/images/inst.png";

import {
  Wrapper,
  StyledInner,
  Contact,
  StyledImg,
  StyledMediaBlock,
} from "./Header.style";

import Container from "../Container";

const Header = ({ data }) => {
  const {
    backgroundColor,
    color,
    email,
    phone,
    facebook,
    instagram,
    telegram,
  } = data;

  return (
    <Wrapper color={color} backgroundColor={backgroundColor}>
      <Container>
        <StyledInner>
          <div>
            <Contact>{phone}</Contact>
            <Contact>{email}</Contact>
          </div>
          <StyledMediaBlock>
            <a href={facebook}>
              <StyledImg src={fbIcon} alt={facebook} />
            </a>
            <a href={telegram}>
              <StyledImg src={tgIcon} alt={telegram} />
            </a>

            <a href={instagram}>
              <StyledImg src={instIcon} alt={instagram} />
            </a>
          </StyledMediaBlock>
        </StyledInner>
      </Container>
    </Wrapper>
  );
};

export default Header;
