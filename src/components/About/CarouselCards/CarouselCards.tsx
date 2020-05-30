import React from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import { FiCode } from 'react-icons/fi';
import { FaFootballBall, FaBookReader, FaDesktop } from 'react-icons/fa';

const AboutCards: React.FC = () => (
  <Content>
    <Container>
      <Card>
        <IconContainer>
          <FiCode />
        </IconContainer>
        <h3>desenvolvimento</h3>
        <p>
          Cada dia que passa eu fico encantando com o mundo de desenvolvimento.
          Por esse motivo estou sempre praticando e estudando.
        </p>
      </Card>
    </Container>
    <Container>
      <Card>
        <IconContainer>
          <FaFootballBall />
        </IconContainer>
        <h3>esportes</h3>
        <p>
          Sou fã e praticante de esportes em geral, tais como: futebol, futebol
          americano, musculação, corrida e basquete.
        </p>
      </Card>
    </Container>
    <Container>
      <Card>
        <IconContainer>
          <FaBookReader />
        </IconContainer>
        <h3>livros</h3>
        <p>
          Tenho uma pequena coleção de mais de 200 livros de vários gêneros. Na
          minha opinião ler é viajar sem sair do lugar.
        </p>
      </Card>
    </Container>
    <Container>
      <Card>
        <IconContainer>
          <FaDesktop />
        </IconContainer>
        <h3>novas tecnologias</h3>
        <p>
          Estou sempre em busca de novos conhecimentos e desafios,
          principalmente quando se trata da área de tecnologia.
        </p>
      </Card>
    </Container>
  </Content>
);

export default AboutCards;
