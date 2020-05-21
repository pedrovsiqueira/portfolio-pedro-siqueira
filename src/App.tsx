import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

const App: React.FC = () => (
  <>
    <Header />
    <Footer />
    <GlobalStyle />
  </>
);

export default App;
