import escapeTheBees from '../assets/portfolio/escape-the-bees.png';
import easyCooking from '../assets/portfolio/easy-cooking.png';
import portfolio from '../assets/portfolio/portfolio.png';
import imdb from '../assets/portfolio/imdb-clone.png';
import speedTyping from '../assets/portfolio/speed-typing.png';

const projects = [
  {
    id: 1,
    img: escapeTheBees,
    title: 'Escape the Bees Game',
    summary:
      'Jogo de sobrevivência desenvolvido com VanillaJS e Canvas onde o objetivo é escapar das abelhas.',
    tech: ['Javascript', 'HTML5', 'CSS3'],
    demo: 'https://pedrovsiqueira.github.io/javascript-airplane-game/',
    repo: 'https://github.com/pedrovsiqueira/javascript-airplane-game',
  },
  {
    id: 2,
    img: easyCooking,
    title: 'Easy Cooking',
    summary:
      'Projeto desenvolvido com a Gabriela Aguiar. O objetivo desse projeto é auxiliar as pessoas na hora de cozinhar. Você digita 3 ingredientes que você possui na sua geladeira, e o nosso site retorna receitas compatíveis com os ingredientes informados.',
    tech: ['Javascript', 'NodeJS', 'MongoDB', 'Express'],
    demo: 'https://easy-cooking-app.herokuapp.com/',
    repo: 'https://github.com/pedrovsiqueira/easycooking',
  },
  {
    id: 3,
    img: portfolio,
    title: 'Portfólio - Pedro Siqueira',
    summary:
      'Portfólio desenvolvido para expor os meus projetos e informações de contato',
    tech: ['Typescript', 'React', 'HTML5', 'CSS3'],
    demo: 'http://www.pedrosiqueira.com.br',
    repo: 'https://github.com/pedrovsiqueira/portfolio-pedro-siqueira',
  },
  {
    id: 4,
    img: imdb,
    title: 'IMDB - Clone',
    summary: 'Front-end desenvolvido no desafio AceleraDev da Codenation. O objetivo do desafio era recriar uma página do site IMDB.',
    tech: ['HTML5', 'CSS3'],
    demo:
      'https://pedrovsiqueira.github.io/site-estatico-imdb-clone/public/index.html',
    repo: 'https://github.com/pedrovsiqueira/site-estatico-imdb-clone',
  },
  {
    id: 5,
    img: speedTyping,
    title: 'Speed Typing Game',
    summary: 'Jogo desenvolvido para testar a sua velocidade e habilidade na hora de digitar.',
    tech: ['Javascript', 'React', 'HTML5', 'CSS3'],
    demo: 'https://speed-typing-game-react.netlify.app/',
    repo: 'https://github.com/pedrovsiqueira/speed-typing-game-react',
  },
];

export default projects;
