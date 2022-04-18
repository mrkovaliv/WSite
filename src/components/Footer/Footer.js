import React from "react";

import Container from "../Container";

import {
  Wrapper,
  StyledFooter,
  Title,
  InfoBlock,
  FooterForm,
  InfoItem,
  FooterFormTitle,
} from "./Footer.style";

const Footer = ({ data }) => (
  <Wrapper>
    <Container>
      <StyledFooter>
        <InfoBlock>
          <Title>Контактна інформація</Title>
          <InfoItem>
          <span>Адреса: </span>{data.address}
          </InfoItem>
          <InfoItem>
          <span>Телефон: </span> {data.phone}
          </InfoItem>
          <InfoItem>
            <span>Працюємо: </span> <span>з</span> {data.from} <span> до</span> {data.to}
          </InfoItem>
          <InfoItem><span>Email: </span>  {data.email} </InfoItem>
        </InfoBlock>

        <div>
        <FooterFormTitle>Зв'язатися</FooterFormTitle>
    
        <FooterForm>
          <input type="text" placeholder="Ім'я:" />
          <input type="text" placeholder="E-mail:" />
          <input type="text" placeholder="Питання:" />
          <button type="submit">
            Відправити
          </button>
        </FooterForm>
        </div>
      </StyledFooter>
    </Container>
  </Wrapper>
);

export default Footer;
