import React from 'react';
import { Container, Content } from './styles';
import SocialIcons from '../SocialIcons/SocialIcons'


const Footer: React.FC = () => (
  <Container>
    <Content>
      <p>
        Copyright 2020 &copy; - Todos os direitos reservados à
        <em> Pedro Siqueira</em>. Design por <em>Diego Tavares</em>.
      </p>
      <SocialIcons/>
    </Content>
  </Container>
);

export default Footer;
