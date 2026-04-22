import React from 'react';
import { Container, Content } from './styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import translate from '../../i18n/translate';

const Footer: React.FC = () => (
  <Container>
    <Content>
      <p>
        Copyright 2026 &copy; {translate('footer.text')}
        <em> Pedro Siqueira</em>. {translate('footer.stack')}
      </p>
      <SocialIcons className="social-icons" />
    </Content>
  </Container>
);

export default Footer;
