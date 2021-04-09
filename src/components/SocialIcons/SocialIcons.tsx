import React from 'react';
import detailSvg from '../../assets/icons/Divider_Azul.svg';
import { RouteComponentProps } from '@reach/router';

import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

import { Icons, Location, Social } from './styles';

interface IconsProps extends RouteComponentProps {
  className: string;
}

const SocialIcons: React.FC<IconsProps> = (): any => (
  <Icons className="social-icons">
    <Location>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/Q1nNdPAXLzuty4RU9"
      >
        <GoLocation />
        Goiânia - GO
      </a>
    </Location>

    <img id="details-logo" src={detailSvg} alt="Details logo" />

    <Social>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/pedrovsiqueira"
      >
        <FiGithub />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/pedrovsiqueira/"
      >
        <FiLinkedin />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/pedrovsiqueira/"
      >
        <FiInstagram />
      </a>
    </Social>
  </Icons>
);

export default SocialIcons;
