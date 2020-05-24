import React from 'react';
import { Container, Content, Background } from './styles';
import Navbar from '../Navbar/Navbar';

const Header: React.FC = () => (
  <Container>
    <Navbar />
    <Content>
      <Background />
      <div className="background-text">
        <h1>desenvolvedor fullstack</h1>
        <p>
          desvolvimento de sites, apps e sistemas para web personalizados e de
          alta qualidade.
        </p>
      </div>
    </Content>
  </Container>
);

export default Header;
