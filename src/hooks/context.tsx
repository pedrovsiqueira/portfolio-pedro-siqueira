import React, { createContext, useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

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
}

const Context = createContext<ContextData>({} as ContextData);

const ContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <Context.Provider value={{ toggleTheme, theme }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
