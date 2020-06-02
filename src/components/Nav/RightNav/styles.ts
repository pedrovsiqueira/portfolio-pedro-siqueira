import styled from 'styled-components';
import { shade } from 'polished';
interface OlProps {
  open: boolean;
}

export const Ol = styled.ol<OlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  /* justify-content: center; */

  li {
    margin-right: 38px;
  }

  a {
    text-decoration: none;
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

  @media (max-width: 840px) {
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
