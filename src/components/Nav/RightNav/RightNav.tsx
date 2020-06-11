import React, { OlHTMLAttributes } from 'react';
import { Link } from 'react-scroll';
import { Ol } from './styles';

import contactSvg from '../../../assets/icons/contact.svg';
import detailSvg from '../../../assets/icons/Divider_Azul.svg';
import SocialIcons from '../../SocialIcons/SocialIcons';

interface NavProps extends OlHTMLAttributes<HTMLOListElement> {
  open: boolean;
}

const RightNav: React.FC<NavProps> = ({ open }) => {
  return (
    <>
      <Ol open={open}>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={2000}
          >
            sobre mim
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            portfólio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            depoimentos
          </Link>
        </li>
        <li>
          <img id="details-logo" src={detailSvg} alt="Details logo" />
        </li>

        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <img id="contact-logo" src={contactSvg} alt="Contact logo" />
            <span className="contact">entre em contato</span>
          </Link>
        </li>
        <li>
          <SocialIcons className="social-icons"/>
        </li>
      </Ol>
    </>
  );
};

export default RightNav;
