import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const App: React.FC = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    <GlobalStyle />
  </>
);

export default App;
