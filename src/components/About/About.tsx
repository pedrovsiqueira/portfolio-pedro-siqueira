import React from 'react';
import { Container, Content, AboutText } from './styles';
import SocialIcons from '../SocialIcons/SocialIcons';

const About: React.FC = () => {
  return (
    <Container>
      <Content>
        <AboutText>
          <h5>sobre mim</h5>
          <h1>
            olá, sou o <span>Pedro Siqueira</span>
          </h1>
          <p>
            Formado em Ciência da Computação, possuo mais de 8 anos de
            experiência trabalhando na área de TI, com conhecimentos em
            implantação e manutenção de sistemas, suporte técnico,
            infraestrutura e implementação de melhorias na área tecnológica.
            Recentemente decidi migrar para área de programação ao perceber que
            meu desejo era trabalhar com desenvolvimento.
          </p>
          <SocialIcons />
        </AboutText>
      </Content>
    </Container>
  );
};

export default About;
