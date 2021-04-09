import React, { createContext, useCallback, useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { changeLanguage } from '../i18n/translate';
import codeSvg from '../assets/new-hobbies/Icone_codar.svg';
import footballSvg from '../assets/new-hobbies/Icone_bola fut am.svg';
import booksSvg from '../assets/new-hobbies/Icone_livro.svg';
import monitorSvg from '../assets/new-hobbies/Icone_monitor.svg';
import escapeTheBees from '../assets/portfolio/escape-the-bees.png';
import twoSow from '../assets/portfolio/2sow.png';
import easyCooking from '../assets/portfolio/easy-cooking.png';
import portfolio from '../assets/portfolio/portfolio.png';
import imdb from '../assets/portfolio/imdb-clone.png';
import speedTyping from '../assets/portfolio/speed-typing.png';
import pictures from '../assets/portfolio/pictures.png';
import calculator from '../assets/portfolio/calculator.png';
import translate from '../i18n/translate';

interface ContextData {
  toggleTheme(): void;
  theme: {
    title: string;
    colors: {
      backgroundColor: string;
      textColor: string;
      mainColor: string;
      iconBackgroundColor: string;
      buttonColor: string;
      inputColor: string;
      iconColor: string;
      inputBackgroundColor: string;
      inputTextColor: string;
      footerBackgroundColor: string;
      rightNavBackgroundColor: string;
      xIconRightNavColor: string;
      hamburguerIconRightNavColor: string;
      cardsBackgroundColor: string;
      h5TextColor: string;
      inputPlaceholderColor: string;
      buttonHover: string;
      iconHoverColor: string;
    };
  };
  language: string;
  handleSetLanguage: (language: string) => void;
  hobbies: {
    id: number;
    title: string;
    img: string;
    summary: string;
  }[];
  projects: {
    id: number;
    img: string;
    title: string;
    summary: string;
    tech: string[];
    demo: string;
    repo: string;
  }[];
  testimonials: {
    id: number;
    name: string;
    description: string;
  }[];
}

const Context = createContext<ContextData>({} as ContextData);

const ContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(dark);
  const [language, setLanguage] = useState('en');

  const hobbies = [
    {
      id: 1,
      title: translate('hobbies.development'),
      img: codeSvg,
      summary: translate('hobbies.development.summary'),
    },
    {
      id: 2,
      title: translate('hobbies.sports'),
      img: footballSvg,
      summary: translate('hobbies.sports.summary'),
    },
    {
      id: 3,
      title: translate('hobbies.books'),
      img: booksSvg,
      summary: translate('hobbies.books.summary'),
    },
    {
      id: 4,
      title: translate('hobbies.technology'),
      img: monitorSvg,
      summary: translate('hobbies.technology.summary'),
    },
  ];

  const projects = [
    {
      id: 1,
      img: twoSow,
      title: '2Sow System',
      summary: translate('projects.2sow.description'),
      tech: [
        'Typescript',
        'React',
        'NodeJS',
        'MongoDB',
        'Styled Components',
        'Passport',
        'Express',
      ],
      demo: 'https://2sow.vercel.app/',
      repo: 'https://github.com/pedrovsiqueira/2sow',
    },
    {
      id: 2,
      img: easyCooking,
      title: 'Easy Cooking',
      summary: translate('projects.easy.cooking.description'),
      tech: [
        'Javascript',
        'NodeJS',
        'MongoDB',
        'Express',
        'Handlebars',
        'Mongoose',
      ],
      demo: 'https://easy-cooking-app.herokuapp.com/',
      repo: 'https://github.com/pedrovsiqueira/easycooking',
    },
    {
      id: 3,
      img: portfolio,
      title: 'Portfólio - Pedro Siqueira',
      summary: translate('projects.portfolio.description'),
      tech: ['Typescript', 'React', 'HTML5', 'CSS3'],
      demo: 'http://www.pedrosiqueira.com.br',
      repo: 'https://github.com/pedrovsiqueira/portfolio-pedro-siqueira',
    },
    {
      id: 4,
      img: calculator,
      title: 'Calculator - React',
      summary: translate('projects.calculator.description'),
      tech: ['Typescript', 'React', 'HTML5', 'Styled Components'],
      demo: 'https://ps-react-calculator.netlify.app/',
      repo: 'https://github.com/pedrovsiqueira/react-calculator',
    },
    {
      id: 5,
      img: pictures,
      title: 'Photos E-Commerce - React',
      summary: translate('projects.photos.description'),
      tech: ['Javascript', 'React', 'HTML5', 'CSS3'],
      demo: 'https://get-pictures-react.netlify.app/',
      repo: 'https://github.com/pedrovsiqueira/get-pictures-app-react',
    },
    {
      id: 6,
      img: speedTyping,
      title: 'Speed Typing Game',
      summary: translate('projects.speed.description'),
      tech: ['Javascript', 'React', 'HTML5', 'CSS3'],
      demo: 'https://speed-typing-game-react.netlify.app/',
      repo: 'https://github.com/pedrovsiqueira/speed-typing-game-react',
    },
    {
      id: 7,
      img: escapeTheBees,
      title: 'Escape the Bees Game',
      summary: translate('projects.bees.description'),
      tech: ['Javascript', 'HTML5', 'CSS3'],
      demo: 'https://pedrovsiqueira.github.io/javascript-airplane-game/',
      repo: 'https://github.com/pedrovsiqueira/javascript-airplane-game',
    },
    {
      id: 8,
      img: imdb,
      title: 'IMDB - Clone',
      summary: translate('projects.imdb.description'),
      tech: ['HTML5', 'CSS3'],
      demo:
        'https://pedrovsiqueira.github.io/site-estatico-imdb-clone/public/index.html',
      repo: 'https://github.com/pedrovsiqueira/site-estatico-imdb-clone',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ricky Almeida',
      description: translate('testimonial.ricky'),
    },
    {
      id: 2,
      name: 'Bruno Araújo',
      description: translate('testimonial.bruno'),
    },
    {
      id: 3,
      name: 'Thiago Pizzuti',
      description: translate('testimonial.thiago'),
    },
    {
      id: 4,
      name: 'Fabrício Polato',
      description: translate('testimonial.fabricio'),
    },
    {
      id: 5,
      name: 'Gabriela Aguiar',
      description: translate('testimonial.gabriela'),
    },
    {
      id: 6,
      name: 'Autímio Filho',
      description: translate('testimonial.autimio'),
    },
  ];

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const handleSetLanguage = useCallback((language: string) => {
    setLanguage(language);
    changeLanguage(language);
  }, []);

  return (
    <Context.Provider
      value={{
        toggleTheme,
        theme,
        language,
        handleSetLanguage,
        hobbies,
        projects,
        testimonials,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
