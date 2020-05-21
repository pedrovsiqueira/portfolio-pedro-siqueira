import React from 'react';
import { Content, Links } from './styles';
import contactSvg from '../../assets/contact.svg';
import detailSvg from '../../assets/detail.svg';

const Navbar: React.FC = () => (
    <Content>
      <a className="pedro-siqueira-logo" href="http://pedrosiqueira.com.br">
        pedro siqueira
      </a>

      <Links>
        <a href="teste">sobre mim</a>
        <a href="teste">portfólio</a>
        <img id="details-logo" src={detailSvg} alt="Details logo" />

        <a className="contact" href="teste">
          <img id="contact-logo" src={contactSvg} alt="Contact logo" />
          <span>entre em contato</span>
        </a>
      </Links>
    </Content>
);

export default Navbar;
