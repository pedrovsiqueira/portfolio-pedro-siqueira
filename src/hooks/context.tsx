import React, { createContext, useCallback, useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { changeLanguage } from '../i18n/translate';
import codeSvg from '../assets/new-hobbies/Icone_codar.svg';
import footballSvg from '../assets/new-hobbies/Icone_bola fut am.svg';
import booksSvg from '../assets/new-hobbies/Icone_livro.svg';
import monitorSvg from '../assets/new-hobbies/Icone_monitor.svg';
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

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const handleSetLanguage = useCallback((language: string) => {
    setLanguage(language);
    changeLanguage(language);
  }, []);

  return (
    <Context.Provider
      value={{ toggleTheme, theme, language, handleSetLanguage, hobbies }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
