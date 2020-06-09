import React from 'react';
import { Container, Content } from './styles';
import Cards from './Cards/Cards';

const Projects: React.FC = () => (
  <Container>
    <Content>
      <h5 id="portfolio">portfólio</h5>
      <h2>conheça o meu trabalho</h2>
      <Cards />
    </Content>
  </Container>
);

export default Projects;
