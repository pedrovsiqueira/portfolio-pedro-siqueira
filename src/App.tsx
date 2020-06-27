import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
