import React from 'react';
import { Content, Links } from './styles';
import contactSvg from '../../assets/contact.svg';
import detailSvg from '../../assets/detail.svg';
import Burger from '../Nav/Burger';

const Navbar: React.FC = () => (
  <>
    <Content>
      <a className="pedro-siqueira-logo" href="http://pedrosiqueira.com.br">
        pedro siqueira
      </a>

      <Links>
        <a href="#about">sobre mim</a>
        <a href="#projects">portfólio</a>
        <a href="#testimonials">depoimentos</a>
        <img id="details-logo" src={detailSvg} alt="Details logo" />

        <a className="contact" href="#contact">
          <img id="contact-logo" src={contactSvg} alt="Contact logo" />
          <span>entre em contato</span>
        </a>
      </Links>
    </Content>
    <Burger />
  </>
);

export default Navbar;
