import React from 'react';
import { Container, Card } from './styles';
import testimonials from '../../../data/testimonials';

const Cards: React.FC = () => (
  <Container>
    {testimonials.map((item) =>
      (
        <Card key={item.id}>
          <p>{item.description}</p>
          <h3>{item.name}</h3>
        </Card>
      )
    )}
  </Container>
);

export default Cards;
