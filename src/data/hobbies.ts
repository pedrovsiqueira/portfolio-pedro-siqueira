import { FiCode } from 'react-icons/fi';
import { FaFootballBall, FaBookReader, FaDesktop } from 'react-icons/fa';

const hobbies = [
  {
    id: 1,
    title: 'desenvolvimento',
    icon: { FiCode },
    summary:
      'Cada dia que passa eu fico encantando com o mundo de desenvolvimento. Por esse motivo estou sempre praticando e estudando.',
  },
  {
    id: 2,
    title: 'esportes',
    icon: { FaFootballBall },
    summary:
      'Sou fã e praticante de esportes em geral, tais como: futebol, futebol americano, musculação, corrida e basquete.',
  },
  {
    id: 3,
    title: 'livros',
    icon: { FaBookReader },
    summary:
      'Tenho uma pequena coleção de mais de 200 livros de vários gêneros. Na minha opinião ler é viajar sem sair do lugar.',
  },
  {
    id: 4,
    title: 'novas tecnologias',
    icon: { FaDesktop },
    summary:
      'Estou sempre em busca de novos conhecimentos e desafios, principalmente quando se trata da área de tecnologia.',
  },
];

export default hobbies;
