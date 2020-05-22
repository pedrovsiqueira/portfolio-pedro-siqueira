import React from 'react';
import { Container, Content } from './styles';
import Cards from './Cards/Cards';

const Projects: React.FC = () => (
  <Container>
    <Content>
      <h3>Portfólio</h3>
      <h1>veja qual é a opinião dos clientes</h1>
      <Cards />
    </Content>
  </Container>
);

export default Projects;
