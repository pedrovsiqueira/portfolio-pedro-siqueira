import React from 'react';
import { Container, Card } from './styles';
import Slider from 'react-slick';
// import '˜slick-carousel/slick/slick.css';
// import '˜slick-carousel/slick/slick-theme.css';

const CarouselCards: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        {/* <Card>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
            foi um exercício muito relevante de comunicação e co-criação. É
            nítido como seu empenho está estampado em todos os seus projetos.
            Sucesso!"
          </p>
          <h3>Bruno Araújo</h3>
        </Card>
        <Card>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
            foi um exercício muito relevante de comunicação e co-criação. É
            nítido como seu empenho está estampado em todos os seus projetos.
            Sucesso!"
          </p>
          <h3>Bruno Araújo</h3>
        </Card>
        <Card>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
            foi um exercício muito relevante de comunicação e co-criação. É
            nítido como seu empenho está estampado em todos os seus projetos.
            Sucesso!"
          </p>
          <h3>Bruno Araújo</h3>
        </Card>
        <Card>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
            foi um exercício muito relevante de comunicação e co-criação. É
            nítido como seu empenho está estampado em todos os seus projetos.
            Sucesso!"
          </p>
          <h3>Bruno Araújo</h3>
        </Card>
        <Card>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
            foi um exercício muito relevante de comunicação e co-criação. É
            nítido como seu empenho está estampado em todos os seus projetos.
            Sucesso!"
          </p>
          <h3>Bruno Araújo</h3>
        </Card>
        <Card>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
            foi um exercício muito relevante de comunicação e co-criação. É
            nítido como seu empenho está estampado em todos os seus projetos.
            Sucesso!"
          </p>
          <h3>Bruno Araújo</h3>
        </Card> */}
      </Slider>
    </Container>
  );
};

export default CarouselCards;
