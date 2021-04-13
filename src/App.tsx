import React, { useContext, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { Context } from './hooks/context';
import { IntlProvider } from 'react-intl';
import { messages } from './i18n/translate';
import ReactGa from 'react-ga';

const App: React.FC = () => {
  const { theme, language } = useContext(Context);

  useEffect(() => {
    ReactGa.initialize('UA-169278232-1');
    ReactGa.pageview('/');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={language} messages={messages[language]}>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <GlobalStyle />
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
