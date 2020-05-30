import React, { useState } from 'react';
import RightNav from '../RightNav/RightNav';
import {StyledBurger} from './styles'

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
