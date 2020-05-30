import React, { OlHTMLAttributes } from 'react';
import styled from 'styled-components';
import { shade } from 'polished';

import contactSvg from '../../assets/contact.svg';
import detailSvg from '../../assets/detail.svg';

interface OlProps {
  open: boolean;
}

const Ol = styled.ol<OlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    margin-right: 38px;
  }

  .contact {
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  #contact-logo {
    margin-right: 8px;
  }

  a {
    font-weight: 500;
    transition: color 0.6s ease;
    &:hover {
      color: ${shade(0.01, '#33E8F6')};
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

interface NavProps extends OlHTMLAttributes<HTMLOListElement> {
  open: boolean;
}

const RightNav: React.FC<NavProps> = ({ open }) => {
  return (
    <Ol open={open}>
      <li>
        <a href="#about">sobre mim</a>
      </li>
      <li>
        <a href="#projects">portfólio</a>
      </li>
      <li>
        <a href="#testimonials">depoimentos</a>
      </li>
      <li>
        <img id="details-logo" src={detailSvg} alt="Details logo" />
      </li>

      <li>
        <a className="contact" href="#contact">
          <img id="contact-logo" src={contactSvg} alt="Contact logo" />
          <span>entre em contato</span>
        </a>
      </li>
    </Ol>
  );
};

export default RightNav;
