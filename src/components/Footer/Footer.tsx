import React from 'react';
import { Container, Content } from './styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import translate from '../../i18n/translate';

const Footer: React.FC = () => (
  <Container>
    <Content>
      <p>
        Copyright 2021 &copy; - {translate('footer.text')}
        <em> Pedro Siqueira</em>. {translate('footer.design')}
        <em> Diego Tavares</em>.
      </p>
      <SocialIcons className="social-icons" />
    </Content>
  </Container>
);

export default Footer;
