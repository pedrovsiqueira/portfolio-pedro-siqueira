import React from 'react';
import { Container, Content, Background, BackgroundText } from './styles';
import Navbar from '../Navbar/Navbar';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Navbar />
      <BackgroundText>
        <Background />
        <h1>desenvolvedor full-stack</h1>
      </BackgroundText>
    </Content>
  </Container>
);

export default Header;
