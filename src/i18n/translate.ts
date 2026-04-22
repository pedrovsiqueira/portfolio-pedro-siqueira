import { createIntl, createIntlCache } from 'react-intl';

export const messages: { [key: string]: any } = {
  en: {
    'header.title': 'senior software engineer',
    'header.message': 'React · Node.js · TypeScript · Next.js · GraphQL · AWS',

    'nav.first.li.element': 'profile',
    'nav.second.li.element': 'portfolio',
    'nav.third.li.element': 'testimonies',
    'nav.fourth.li.element': 'contact',
    'about.title': 'professional profile',
    'about.message': 'Pedro Siqueira, <span>senior software engineer</span>',
    'about.paragraph':
      'Senior Fullstack Software Engineer with a Computer Science degree and over 14 years of IT experience, including 7+ years dedicated to software development. Proven track record building scalable web, mobile and desktop applications in the React and Node.js ecosystems. Focused on high-performance backend APIs, pixel-perfect responsive interfaces, and delivering high-impact products with cross-functional distributed teams. Also an AI-native developer experienced with agentic workflows using Cursor, Claude Code and GitHub Copilot.',
    'portfolio.title': 'portfolio',
    'portfolio.message': 'check out my work',
    'testimony.title': 'testimonies',
    'testimony.message': 'see some testimonies',
    'contact.title': 'contact',
    'contact.message': "let's talk",
    'contact.first.paragraph':
      'If you would like to discuss a role, a product idea or a technical partnership, send me a message and I will get back to you soon.',
    'contact.second.paragraph': 'You can also reach me directly at',
    'contact.placeholder.name': 'Name',
    'contact.placeholder.email': 'E-mail',
    'contact.placeholder.message': 'Message',
    'contact.button': 'send message',
    'hobbies.development': 'frontend engineering',
    'hobbies.development.summary':
      'Building pixel-perfect, responsive UIs with React, Next.js, TypeScript, Tailwind CSS, Redux and component-driven design systems.',
    'hobbies.sports': 'backend & APIs',
    'hobbies.sports.summary':
      'Designing robust REST and GraphQL APIs with Node.js, Express, Nest.js, PostgreSQL, MySQL and MongoDB.',
    'hobbies.books': 'AI-native development',
    'hobbies.books.summary':
      'Accelerating delivery with agentic workflows using Cursor, Claude Code, GitHub Copilot, MCP and LLM-powered tooling.',
    'hobbies.technology': 'cloud & devops',
    'hobbies.technology.summary':
      'Deploying and maintaining applications on AWS (Lambda, S3) with CI/CD pipelines via GitHub Actions and GitLab.',
    demo: 'access demo',
    repository: 'access repository',
    'projects.2sow.description':
      'The challenge was to build a system for user registration. There is a page to list, add, edit, remove and search for users.',
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
    'footer.text': 'Designed and built by',
    'footer.stack': 'Built with React and TypeScript.',
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
    'header.title': 'engenheiro de software sênior',
    'header.message': 'React · Node.js · TypeScript · Next.js · GraphQL · AWS',

    'nav.first.li.element': 'perfil',
    'nav.second.li.element': 'portfólio',
    'nav.third.li.element': 'depoimentos',
    'nav.fourth.li.element': 'contato',
    'about.title': 'perfil profissional',
    'about.message':
      'Pedro Siqueira, <span>engenheiro de software sênior</span>',
    'about.paragraph':
      'Engenheiro de Software Fullstack Sênior com bacharelado em Ciência da Computação e mais de 14 anos de experiência em TI, sendo 7+ anos dedicados ao desenvolvimento de software. Experiência comprovada em arquitetura de aplicações web, mobile e desktop nos ecossistemas React e Node.js. Focado em APIs backend de alta performance, interfaces responsivas pixel-perfect e entrega de produtos de alto impacto em times distribuídos. Também atuo como desenvolvedor AI-native, com experiência em fluxos agênticos com Cursor, Claude Code e GitHub Copilot.',
    'portfolio.title': 'portfólio',
    'portfolio.message': 'conheça o meu trabalho',
    'testimony.title': 'depoimentos',
    'testimony.message': 'veja alguns depoimentos',
    'contact.title': 'contato',
    'contact.message': 'vamos conversar',
    'contact.first.paragraph':
      'Se você quiser conversar sobre uma oportunidade, um produto digital ou uma parceria técnica, envie uma mensagem e eu retorno em breve.',
    'contact.second.paragraph': 'Se preferir, fale comigo diretamente em',
    'contact.placeholder.name': 'Nome',
    'contact.placeholder.email': 'E-mail',
    'contact.placeholder.message': 'Mensagem',
    'contact.button': 'enviar mensagem',
    'hobbies.development': 'engenharia frontend',
    'hobbies.development.summary':
      'Construção de interfaces responsivas e pixel-perfect com React, Next.js, TypeScript, Tailwind CSS, Redux e design systems.',
    'hobbies.sports': 'backend & APIs',
    'hobbies.sports.summary':
      'Criação de APIs REST e GraphQL robustas com Node.js, Express, Nest.js, PostgreSQL, MySQL e MongoDB.',
    'hobbies.books': 'desenvolvimento AI-native',
    'hobbies.books.summary':
      'Acelero entregas com fluxos agênticos usando Cursor, Claude Code, GitHub Copilot, MCP e ferramentas baseadas em LLMs.',
    'hobbies.technology': 'cloud & devops',
    'hobbies.technology.summary':
      'Implantação e manutenção de aplicações na AWS (Lambda, S3) com pipelines CI/CD via GitHub Actions e GitLab.',
    demo: 'acessar demo',
    repository: 'acessar repositório',
    'projects.2sow.description':
      'O desafio era construir um sistema de cadastro de usuários. Existe uma página para listar, adicionar, editar, remover e procurar usuários',
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
    'footer.text': 'Design e desenvolvimento por',
    'footer.stack': 'Construído com React e TypeScript.',
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
