import React, { useContext } from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Context } from '../../../hooks/context';

const CarouselAboutCards: React.FC = () => {
  const { hobbies } = useContext(Context);

  return (
    <Content className="carousel-about-cards">
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
};
export default CarouselAboutCards;
