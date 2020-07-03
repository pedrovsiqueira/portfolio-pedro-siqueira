import React, { OlHTMLAttributes, useContext } from 'react';
import { Link } from 'react-scroll';
import { Ol, StyledToggle } from './styles';
import detailSvg from '../../../assets/icons/Divider_Azul.svg';
import SocialIcons from '../../SocialIcons/SocialIcons';
import { IoMdChatbubbles } from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { Context } from '../../../hooks/context';

import { RiContrastLine } from 'react-icons/ri';
import { FormattedMessage } from 'react-intl';

interface NavProps extends OlHTMLAttributes<HTMLOListElement> {
  open: boolean;
}

const RightNav: React.FC<NavProps> = ({ open }) => {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);

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
            <FormattedMessage id="nav.first.li.element" />
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
            <FormattedMessage id="nav.second.li.element" />{' '}
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
            <FormattedMessage id="nav.third.li.element" />{' '}
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
            <IoMdChatbubbles size={24} />
            <span className="contact">
              <FormattedMessage id="nav.fourth.li.element" />
            </span>
          </Link>
        </li>

        <StyledToggle>
          <li>
            <Switch
              onChange={toggleTheme}
              checked={title === 'light'}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={15}
              height={10}
              width={30}
              offColor={'#54A79D'}
              onColor={'#353535'}
            />
          </li>
          <li>
            <RiContrastLine size={20} />
          </li>
        </StyledToggle>
        <li>
          <SocialIcons className="social-icons" />
        </li>
      </Ol>
    </>
  );
};

export default RightNav;
