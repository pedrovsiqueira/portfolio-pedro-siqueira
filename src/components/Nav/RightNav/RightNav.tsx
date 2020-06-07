import React, { OlHTMLAttributes } from 'react';
import { Ol } from './styles';

import contactSvg from '../../../assets/contact.svg';
import detailSvg from '../../../assets/Divider_Azul.svg';

interface NavProps extends OlHTMLAttributes<HTMLOListElement> {
  open: boolean;
}

const RightNav: React.FC<NavProps> = ({ open }) => {
  return (
    <Ol open={open}>
      <li>
        <a href="#about">sobre mim</a>
      </li>
      <li>
        <a href="#projects">portfólio</a>
      </li>
      <li>
        <a href="#testimonials">depoimentos</a>
      </li>
      <li>
        <img id="details-logo" src={detailSvg} alt="Details logo" />
      </li>

      <li>
        <a className="contact" href="#contact">
          <img id="contact-logo" src={contactSvg} alt="Contact logo" />
          <span>entre em contato</span>
        </a>
      </li>
    </Ol>
  );
};

export default RightNav;
