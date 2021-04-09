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
