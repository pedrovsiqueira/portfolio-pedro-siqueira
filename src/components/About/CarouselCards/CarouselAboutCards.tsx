import React, { useContext } from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiLayout, FiServer, FiCpu, FiCloud } from 'react-icons/fi';

import { Context } from '../../../hooks/context';

const iconMap: Record<number, React.ReactElement> = {
  1: <FiLayout size={28} />,
  2: <FiServer size={28} />,
  3: <FiCpu size={28} />,
  4: <FiCloud size={28} />,
};

const CarouselAboutCards: React.FC = () => {
  const { hobbies } = useContext(Context);

  return (
    <Content className="carousel-about-cards">
      <Content>
        <Carousel>
          {hobbies.map((item) => (
            <Carousel.Item key={item.id}>
              <Container>
                <IconContainer>{iconMap[item.id]}</IconContainer>
                <Card>
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
