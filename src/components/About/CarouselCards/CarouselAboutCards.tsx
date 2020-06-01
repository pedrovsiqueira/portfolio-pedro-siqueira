import React from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import hobbies from '../../../data/hobbies';

const CarouselAboutCards: React.FC = () => (
  <Content>
    {hobbies.map((item) => (
      <Container>
        <Carousel>
          <Carousel.Item key={item.id}>
            <Card>
              <IconContainer>
                <img src={item.img} alt="Icon img" />
              </IconContainer>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>
    ))}
  </Content>
);

export default CarouselAboutCards;
