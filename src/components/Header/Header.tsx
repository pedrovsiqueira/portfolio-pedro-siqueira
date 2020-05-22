import React from 'react';
import { Container, Content, Background } from './styles';
import Navbar from '../Navbar/Navbar';

const Header: React.FC = () => (
  <Container>
    <Navbar />
    <Content>
      <Background />
      <div className="background-text">
        <h1>desenvolvedor full-stack</h1>
        <p>
          desvolvimento de sites, app e sistemas para web personalizados e de
          alta qualidade
        </p>
      </div>
    </Content>
  </Container>
);

export default Header;
