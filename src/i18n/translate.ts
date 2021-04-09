import { createIntl, createIntlCache } from 'react-intl';

export const messages: { [key: string]: any } = {
  en: {
    'header.title': 'full stack developer',
    'header.message':
      'development of personalized, high quality websites, apps and web systems.',
    'nav.first.li.element': 'about me',
    'nav.second.li.element': 'portfolio',
    'nav.third.li.element': 'testimonies',
    'nav.fourth.li.element': 'contact me',
    'about.title': 'about me',
    'about.message': "hello, i'm <span>Pedro Siqueira</span>",
    'about.paragraph':
      "Bilingual IT professional with a Bachelor's degree in Computer Science. I recently decided to switch fields and head towards programming when I realized that my passion was to work with software development. During my training as a Web Developer at a bootcamp called Ironhack, I had the opportunity to deepen my knowledge in languages and technologies such as: Javascript, HTML, CSS, React, NodeJS, Express, MongoDB, Git and SCRUM.",
    'portfolio.title': 'portfolio',
    'portfolio.message': 'check out my work',
    'testimony.title': 'testimonies',
    'testimony.message': 'see some testimonies',
    'contact.title': 'contact',
    'contact.message': 'want to chat?',
    'contact.first.paragraph':
      "If you are interested in my work, fill out the form and I'll get in touch with you as soon as possible.",
    'contact.second.paragraph': 'If you prefer, you can send me an email',
    'contact.placeholder.name': 'Name',
    'contact.placeholder.email': 'E-mail',
    'contact.placeholder.message': 'Message',
    'contact.button': 'send message',
    'hobbies.development': 'development',
    'hobbies.development.summary':
      'Each day that passes I get more excited with the world of development. For this reason, I am always practicing and studying.',
    'hobbies.sports': 'sports',
    'hobbies.sports.summary':
      'I am a fan and practitioner of sports in general, such as: soccer, American football, weight training, running and basketball.',
    'hobbies.books': 'books',
    'hobbies.books.summary':
      'I have a small collection of more than 200 books of various different genres. Books are a uniquely portable magic.',
    'hobbies.technology': 'technologies',
    'hobbies.technology.summary':
      'I am always in search of new knowledge and challenges, especially when it comes to my field of expertise which is technology.',
    demo: 'access demo',
    repository: 'access repository',
    'projects.easy.cooking.description':
      'Project developed with Gabriela Aguiar. You type 3 ingredients that you have in your refrigerator, and our website returns recipes compatible with the ingredients informed.',
    'projects.portfolio.description':
      'Portfolio developed to expose my projects and contact information.',
    'projects.calculator.description':
      'Application developed to simulate a calculator. Design made based on figma https://gumroad.com/l/VlPokA',
    'projects.photos.description':
      'Application developed to simulate an E-Commerce to purchase photos.',
    'projects.speed.description':
      'Game developed to test your speed and typing skills.',
    'projects.bees.description':
      'Survival game developed with VanillaJS and Canvas where the goal is to escape the bees.',
    'projects.imdb.description':
      "Front-end developed in Codenation's AceleraDev challenge. The goal of the challenge was to recreate an IMDB website page.",
    'footer.text': 'All rights reserved to',
    'footer.design': 'Design by',
    'testimonial.ricky':
      'Pedro Siqueira, what a project! I was able to see your work closely with Gabriela Aguiar, and the way you deal with challenges is undoubtedly your differential and a great inspiration for me. Congratulations my friend!',
    'testimonial.bruno':
      'Pedro, I was very happy to contribute to your project, for me it was a very relevant exercise in communication and co-creation. It is clear how your commitment is stamped on all of your projects. Success!',
    'testimonial.thiago':
      'I had the pleasure of meeting Pedro in a Coding Bootcamp. We had several opportunities to develop activities together. His logical reasoning and ability to solve problems are unquestionable differentials.',
    'testimonial.fabricio':
      'I studied together with Pedro in SP. I was impressed with his learning ability during the course and I believe that his patience and didactics are two very strong characteristics that distinguish him as a professional.',
    'testimonial.gabriela':
      'I had the opportunity to work with you on a project and I was able to see up close the excellent professional you are, always working with a lot of dedication and commitment. I wish you a lot of success!',
    'testimonial.autimio':
      'We studied together at college and worked together in various projects. His organization, dedication and commitment in everything he is involved is something very characteristic of him. I was able to follow his evolution closely.',
  },
  pt: {
    'header.title': 'desenvolvedor full stack',
    'header.message':
      'desenvolvimento de sites, apps e sistemas para web personalizados e de alta qualidade.',
    'nav.first.li.element': 'sobre mim',
    'nav.second.li.element': 'portfólio',
    'nav.third.li.element': 'depoimentos',
    'nav.fourth.li.element': 'entre em contato',
    'about.title': 'sobre mim',
    'about.message': 'olá, sou o <span>Pedro Siqueira</span>',
    'about.paragraph':
      'Profissional de TI bilíngue com bacharelado em Ciência da Computação. Recentemente decidi migrar para área de programação ao perceber que meu desejo era trabalhar com desenvolvimento. Durante minha formação como Desenvolvedor Web em um Bootcamp da Ironhack tive a oportunidade de aprofundar meus conhecimentos em linguagens e tecnologias como: Javascript, HTML, CSS, React, NodeJS, Express, MongoDB, Git e SCRUM.',
    'portfolio.title': 'portfólio',
    'portfolio.message': 'conheça o meu trabalho',
    'testimony.title': 'depoimentos',
    'testimony.message': 'veja alguns depoimentos',
    'contact.title': 'contato',
    'contact.message': 'quer conversar comigo?',
    'contact.first.paragraph':
      'Caso tenha se interessado pelo meu trabalho, preencha o formulário que em breve conversaremos.',
    'contact.second.paragraph': 'Se preferir, pode me enviar um e-mail',
    'contact.placeholder.name': 'Nome',
    'contact.placeholder.email': 'E-mail',
    'contact.placeholder.message': 'Mensagem',
    'contact.button': 'enviar mensagem',
    'hobbies.development': 'desenvolvimento',
    'hobbies.development.summary':
      'Cada dia que passa eu fico encantado com o mundo de desenvolvimento. Por esse motivo estou sempre praticando e estudando.',
    'hobbies.sports': 'esportes',
    'hobbies.sports.summary':
      'Sou fã e praticante de esportes em geral, tais como: futebol, futebol americano, musculação, corrida e basquete.',
    'hobbies.books': 'livros',
    'hobbies.books.summary':
      'Tenho uma pequena coleção de mais de 200 livros de vários gêneros diferentes. Os livros são uma magia portátil única.',
    'hobbies.technology': 'tecnologias',
    'hobbies.technology.summary':
      'Estou sempre em busca de novos conhecimentos e desafios, principalmente quando se trata da área de tecnologia.',
    demo: 'acessar demo',
    repository: 'acessar repositório',
    'projects.easy.cooking.description':
      'Projeto desenvolvido com a Gabriela Aguiar. Você digita 3 ingredientes que você possui na sua geladeira, e o nosso site retorna receitas compatíveis com os ingredientes informados.',
    'projects.portfolio.description':
      'Portfólio desenvolvido para expor os meus projetos e informações de contato.',
    'projects.calculator.description':
      'Aplicativo desenvolvido para simular uma calculadora. Design realizado baseado no figma https://gumroad.com/l/VlPokA',
    'projects.photos.description':
      'Aplicativo desenvolvido para simular um E-Commerce para compra de fotos.',
    'projects.speed.description':
      'Jogo desenvolvido para testar a sua velocidade e habilidade na hora de digitar.',
    'projects.bees.description':
      'Jogo de sobrevivência desenvolvido com VanillaJS e Canvas onde o objetivo é escapar das abelhas.',
    'projects.imdb.description':
      'Front-end desenvolvido no desafio AceleraDev da Codenation. O objetivo do desafio era recriar uma página do site IMDB.',
    'footer.text': 'Todos os direitos reservados à',
    'footer.design': 'Design por',
    'testimonial.ricky':
      'Pedro Siqueira, que projeto! Pude ver de perto o seu trabalho com a Gabriela Aguiar, e a forma que você lida com os desafios é sem dúvidas o seu diferencial e uma grande inspiração pra mim. Parabéns, meu amigo!',
    'testimonial.bruno':
      'Pedro, fiquei muito feliz em contribuir com o seu projeto, pra mim foi um exercício muito relevante de comunicação e co-criação. É nítido como seu empenho está estampado em todos os seus projetos. Sucesso!',
    'testimonial.thiago':
      'Tive o prazer de conhecer o Pedro em um Coding Bootcamp. Tivemos várias oportunidades de desenvolvermos atividades juntos. Seu raciocínio lógico e capacidade de resolver problemas são diferenciais inquestionáveis.',
    'testimonial.fabricio':
      'Estudei junto com o Pedro em SP. Fiquei impressionado com sua facilidade de aprendizado durante o curso e creio que sua paciência e didática sejam duas características muito fortes que o distinguem como profissional.',
    'testimonial.gabriela':
      'Pedro, tive a oportunidade de trabalhar com você em um projeto e pude ver de perto o profissional excelente que você é, sempre trabalhando com muita dedicação e empenho. Agradeço pela parceria e te desejo muito sucesso!',
    'testimonial.autimio':
      'Estudei com o Pedro na universidade, já trabalhamos juntos em várias disciplinas. Sua organização, dedicação e comprometimento em tudo que se envolve é algo muito característico dele. Pude acompanhar sua evolução de perto.',
  },
};

const cache = createIntlCache();

let int = createIntl(
  {
    locale: 'en',
    messages: messages['en'],
  },
  cache,
);

export function changeLanguage(lang: string) {
  const newIntl = createIntl(
    {
      locale: lang,
      messages: messages[lang],
    },
    cache,
  );
  int = newIntl;
}

const translate = (id: string, values?: {}) => {
  return int.formatMessage({ id }, values);
};

export default translate;
