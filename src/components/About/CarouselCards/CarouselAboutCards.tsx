import React from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import hobbies from '../../../data/hobbies';

const CarouselAboutCards: React.FC = () => (
  <Content>
    <Content>
      <Carousel>
        {hobbies.map((item) => (
          <Carousel.Item key={item.id}>
            <Container>
              <Card>
                <IconContainer>
                  <img src={item.img} alt="Icon img" />
                </IconContainer>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </Card>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Content>
  </Content>
);

export default CarouselAboutCards;
