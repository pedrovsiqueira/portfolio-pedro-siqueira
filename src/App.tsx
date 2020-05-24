import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';


const App: React.FC = () => (
  <>
    <Header />
    <Projects />
    <Testimonials />
    <Contact />
    {/* <Footer /> */}
    <GlobalStyle />
  </>
);

export default App;
