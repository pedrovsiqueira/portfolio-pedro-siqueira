import React, { useContext } from 'react';
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

const App: React.FC = () => {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
