import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card } from './styles';
import { Context } from '../../../hooks/context';

const ControlledCarousel: React.FC = () => {
  const { testimonials } = useContext(Context);

  return (
    <Container>
      <Card>
        <Carousel>
          {testimonials.map((item) => (
            <Carousel.Item key={item.id} className="carousel-cards">
              <p>{item.description}</p>
              <h3>{item.name}</h3>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    </Container>
  );
};

export default ControlledCarousel;
