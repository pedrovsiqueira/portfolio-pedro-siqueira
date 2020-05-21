import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => (
  <>
    <Navbar />
    <GlobalStyle />
  </>
);

export default App;
