import React from 'react';
import { Container, Content, Background } from './styles';
import Navbar from '../Nav/Navbar';

const Header: React.FC = () => (
  <Container>
    <Navbar />
    <Content>
      <Background />
      <div className="background-text">
        <h1>desenvolvedor full stack</h1>
        <p>
          desenvolvimento de sites, apps e sistemas para web personalizados e de
          alta qualidade.
        </p>
      </div>
    </Content>
  </Container>
);

export default Header;
