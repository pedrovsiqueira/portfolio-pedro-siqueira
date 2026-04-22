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
        aria-label="Open Pedro Siqueira location in Google Maps"
      >
        <GoLocation aria-hidden="true" focusable="false" />
        Goiânia - GO
      </a>
    </Location>

    <img id="details-logo" src={detailSvg} alt="" aria-hidden="true" />

    <Social>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/pedrovsiqueira"
        aria-label="Open Pedro Siqueira GitHub profile"
      >
        <FiGithub aria-hidden="true" focusable="false" />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/pedrovsiqueira/"
        aria-label="Open Pedro Siqueira LinkedIn profile"
      >
        <FiLinkedin aria-hidden="true" focusable="false" />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/pedrovsiqueira/"
        aria-label="Open Pedro Siqueira Instagram profile"
      >
        <FiInstagram aria-hidden="true" focusable="false" />
      </a>
    </Social>
  </Icons>
);

export default SocialIcons;
