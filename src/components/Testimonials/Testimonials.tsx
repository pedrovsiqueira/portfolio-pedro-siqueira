import React from 'react';
import { Container, Content } from './styles';
import Cards from './Cards/Cards';
import CardsCarousel from './CardsCarousel/CardsCarousel';

const Contact: React.FC = () => (
  <Container>
    <Content>
      <h5>depoimentos</h5>
      <h2>veja qual é a opinião dos clientes</h2>
      <CardsCarousel />
      <Cards />
    </Content>
  </Container>
);

export default Contact;
