import React from 'react';
import detailSvg from '../../assets/icons/Divider_Azul.svg';

import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import { Icons } from './styles';

const SocialIcons: React.FC = () => (
  <Icons>
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

    <img id="details-logo" src={detailSvg} alt="Details logo" />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://drive.google.com/uc?id=1av7IxP7QhR3pSnGZtXGdgtwdD1uRLP-4&export=download"
    >
      download CV
    </a>
  </Icons>
);

export default SocialIcons;
