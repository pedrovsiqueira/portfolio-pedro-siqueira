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

  li {
    margin-right: 38px;
    cursor: pointer;

    &:last-child {
      display: none;
    }
  }

  .contact {
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
    background-color: #484848;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      text-align: center;
      color: #fff;
      margin-bottom: 20px;
      font-size: 25px;
      margin-right: 0;

      &:nth-last-child(2) {
        margin-top: -20px;
      }

      &:last-child {
        bottom: 0;
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: center;

        a {
          margin-right: 10px;
        }
      }
    }
    #details-logo {
      display: none;
    }
  }
`;
