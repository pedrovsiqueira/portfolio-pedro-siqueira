import React, { OlHTMLAttributes, useContext } from 'react';
import { Ol, StyledLanguages, ModeContainer } from './styles';
import detailSvg from '../../../assets/icons/Divider_Azul.svg';
import SocialIcons from '../../SocialIcons/SocialIcons';
import { IoMdChatbubbles } from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import { Context } from '../../../hooks/context';
import { FormattedMessage } from 'react-intl';
import { FiMoon, FiSun } from 'react-icons/fi';

interface NavProps extends OlHTMLAttributes<HTMLOListElement> {
  open: boolean;
}

const RightNav: React.FC<NavProps> = ({ open }) => {
  const { title } = useContext(ThemeContext);
  const { toggleTheme, language, handleSetLanguage } = useContext(Context);

  return (
    <>
      <Ol open={open}>
        <li>
          <a href="#about">
            <FormattedMessage id="nav.first.li.element" />
          </a>
        </li>
        <li>
          <a href="#skills">
            <FormattedMessage id="nav.skills.element" />
          </a>
        </li>
        <li>
          <img
            style={{ cursor: 'auto' }}
            id="details-logo"
            src={detailSvg}
            alt="Details logo"
            width="24"
            height="24"
          />
        </li>

        <li>
          <a href="#contact">
            <IoMdChatbubbles size={24} />
            <span className="contact">
              <FormattedMessage id="nav.fourth.li.element" />
            </span>
          </a>
        </li>

        <li>
          <StyledLanguages id="lang-switch">
            <button
              type="button"
              className={language === 'pt' ? 'active-language' : ''}
              aria-label="Switch language to Portuguese"
              onClick={() => handleSetLanguage('pt')}
            >
              PT
            </button>
            <button
              type="button"
              className={language === 'en' ? 'active-language' : ''}
              aria-label="Switch language to English"
              onClick={() => handleSetLanguage('en')}
            >
              EN
            </button>
          </StyledLanguages>
        </li>

        <li>
          <ModeContainer>
            {title === 'dark' ? (
              <FiMoon onClick={toggleTheme} />
            ) : (
              <FiSun onClick={toggleTheme} />
            )}
          </ModeContainer>
        </li>

        <li>
          <SocialIcons className="social-icons" />
        </li>
      </Ol>
    </>
  );
};

export default RightNav;
