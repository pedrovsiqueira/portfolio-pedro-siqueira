import React from 'react';
import Burger from './Burger/Burger';
import { Nav } from './styles';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">pedro siqueira</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
