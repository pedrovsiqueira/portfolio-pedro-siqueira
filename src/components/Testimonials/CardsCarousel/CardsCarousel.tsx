import React from 'react';
import { Container, Card } from './styles';
import Slider from 'react-slick';

const CardsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: 'slides',
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <h1>Pedro Siqueira</h1>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          </p>
        </div>
        <div>
          <h1>Pedro Siqueira</h1>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          </p>
        </div>
        <div>
          <h1>Pedro Siqueira</h1>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          </p>
        </div>
        <div>
          <h1>Pedro Siqueira</h1>
          <p>
            "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          </p>
        </div>
      </Slider>
      {/* <Card>
        <p>
          "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          foi um exercício muito relevante de comunicação e co-criação. É nítido
          como seu empenho está estampado em todos os seus projetos. Sucesso!"
        </p>
        <h3>Bruno Araújo</h3>
      </Card>
      <Card>
        <p>
          "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          foi um exercício muito relevante de comunicação e co-criação. É nítido
          como seu empenho está estampado em todos os seus projetos. Sucesso!"
        </p>
        <h3>Bruno Araújo</h3>
      </Card>
      <Card>
        <p>
          "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          foi um exercício muito relevante de comunicação e co-criação. É nítido
          como seu empenho está estampado em todos os seus projetos. Sucesso!"
        </p>
        <h3>Bruno Araújo</h3>
      </Card>
      <Card>
        <p>
          "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          foi um exercício muito relevante de comunicação e co-criação. É nítido
          como seu empenho está estampado em todos os seus projetos. Sucesso!"
        </p>
        <h3>Bruno Araújo</h3>
      </Card>
      <Card>
        <p>
          "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          foi um exercício muito relevante de comunicação e co-criação. É nítido
          como seu empenho está estampado em todos os seus projetos. Sucesso!"
        </p>
        <h3>Bruno Araújo</h3>
      </Card>
      <Card>
        <p>
          "Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim
          foi um exercício muito relevante de comunicação e co-criação. É nítido
          como seu empenho está estampado em todos os seus projetos. Sucesso!"
        </p>
        <h3>Bruno Araújo</h3>
      </Card> */}
    </Container>
  );
};

export default CardsCarousel;
