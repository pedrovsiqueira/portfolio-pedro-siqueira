import React from 'react';
import { Container, Content, Background } from './styles';
import Navbar from '../Navbar/Navbar';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Navbar />
      <h1>hello</h1>
      <Background />
      <h1>hello</h1>
    </Content>
  </Container>
);

export default Header;
