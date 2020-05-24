import React from 'react';
import { Content, Card } from './styles';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const AboutCards: React.FC = () => (
  <Content>
    <Card>
      <FiUser />
      <h3>desenvolvimento</h3>
      <p>
        Cada dia que passa eu fico encantando com o mundo de desenvolvimento.
        Por esse motivo estou sempre praticando e estudando.
      </p>
    </Card>
    <Card>
      <img src="" alt="" />
      <h3>esportes</h3>
      <p>
        Sou fã e praticante de esportes em geral, tais como: futebol, futebol
        americano, musculação e basquete.
      </p>
    </Card>
    <Card>
      <img src="" alt="" />
      <h3>livros</h3>
      <p>
        Tenho uma coleção de mais de 200 livros de vários gêneros. Na minha
        opinião ler é viajar sem sair do lugar.
      </p>
    </Card>
    <Card>
      <img src="" alt="" />
      <h3>novas tecnologias</h3>
      <p>
        Estou sempre em busca de novos conhecimentos, principalmente quando se
        trata da área de tecnologia.
      </p>
    </Card>
  </Content>
);

export default AboutCards;
