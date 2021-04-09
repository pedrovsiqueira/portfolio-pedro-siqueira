import React, { useContext } from 'react';
import { Container, Card } from './styles';
import { Context } from '../../../hooks/context';

const Cards: React.FC = () => {
  const { testimonials } = useContext(Context);

  return (
    <Container>
      {testimonials.map((item) => (
        <Card data-aos="fade-up" key={item.id}>
          <p>{item.description}</p>
          <h3>{item.name}</h3>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
