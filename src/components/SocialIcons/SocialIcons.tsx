import React from 'react';
import githubIcon from '../../assets/githubIcon.svg';
import linkedinIcon from '../../assets/linkedinIcon.svg';
import instagramIcon from '../../assets/instagramIcon.svg';

import { Icons } from './styles';

const SocialIcons: React.FC = () => (
  <Icons>
    <img src={githubIcon} alt="Github Icon" />
    <img src={linkedinIcon} alt="Linkedin Icon" />
    <img src={instagramIcon} alt="Instagram Icon" />
  </Icons>
);

export default SocialIcons;
