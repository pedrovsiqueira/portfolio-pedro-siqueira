import React from 'react';
import { Container, Content, Links, Contact } from './styles';
import contactSvg from '../../assets/contact.svg';
import detailSvg from '../../assets/detail.svg';

const Navbar: React.FC = () => (
  <Container>
    <Content>
      <a href="http://pedrosiqueira.com.br">pedro siqueira</a>

      <Links>
        <a href="teste">sobre mim</a>
        <a href="teste">portfólio</a>
        <img src={detailSvg} alt="Details logo" />
        <Contact>
          <img src={contactSvg} alt="Contact logo" />
          <a href="teste">entre em contato</a>
        </Contact>
      </Links>
    </Content>
  </Container>
);

export default Navbar;
