import img1 from '../assets/portfolio/escape-the-bees.png'
import img2 from '../assets/portfolio/easy-cooking.png'
import img3 from '../assets/portfolio/portfolio.png'
import img4 from '../assets/portfolio/imdb-clone.png'

const projects = [
  {
    id: 1,
    img: img1,
    title: 'Escape the Bees Game',
    summary:
      'Jogo de sobrevivência desenvolvido com VanillaJS e Canvas onde o objetivo é escapar das abelhas.',
    tech: ['Javascript', 'HTML5', 'CSS3'],
    demo: 'https://pedrovsiqueira.github.io/javascript-airplane-game/',
    repo: 'https://github.com/pedrovsiqueira/javascript-airplane-game',
  },
  {
    id: 2,
    img: img2,
    title: 'Easy Cooking',
    summary:
      'Projeto desenvolvido com a Gabriela Aguiar. O objetivo desse projeto é auxiliar as pessoas na hora de cozinhar. Você digita 3 ingredientes que você possui na sua geladeira, e o nosso site retorna receitas compatíveis com os ingredientes informados.',
    tech: ['Javascript', 'NodeJS', 'MongoDB', 'Handlebars', 'Express'],
    demo: 'https://easy-cooking-app.herokuapp.com/',
    repo: 'https://github.com/pedrovsiqueira/easycooking',
  },
  {
    id: 3,
    img: img3,
    title: 'Portfólio - Pedro Siqueira',
    summary:
      'Portfólio desenvolvido para expor os meus projetos e informações de contato',
    tech: ['Typescript', 'React', 'HTML5', 'CSS3'],
    demo: 'http://www.pedrosiqueira.com.br',
    repo: 'https://github.com/pedrovsiqueira/portfolio-pedro-siqueira',
  },
  {
    id: 4,
    img: img4,
    title: 'IMDB - Clone',
    summary: 'Front-end desenvolvido no desafio AceleraDev da Codenation.',
    tech: ['HTML5', 'CSS3'],
    demo:
      'https://pedrovsiqueira.github.io/site-estatico-imdb-clone/public/index.html',
    repo: 'https://github.com/pedrovsiqueira/site-estatico-imdb-clone',
  },
];

export default projects;
