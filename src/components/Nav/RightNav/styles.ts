import styled from 'styled-components';
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

    span {
      margin-left: 5px;
    }

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
      color: ${(props) => props.theme.colors.inputColor};
    }
  }

  @media (max-width: 840px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.colors.rightNavBackgroundColor};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .social-icons {
      display: flex;
      flex-direction: column-reverse;
      height: 90px;
      justify-content: space-between;

      a {
        margin-top: 11px;
      }

      svg {
        width: 30px;
        height: 30px;
      }
    }

    li {
      text-align: center;
      color: ${(props) => props.theme.colors.textColor};
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

export const StyledToggle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;

export const StyledLanguages = styled.div`
  img {
    width: 25px;
    height: 25px;
    opacity: 0.5;
    transition: all 0.5s;
    margin: auto 3px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  img:hover {
    cursor: pointer;
    opacity: 1;
  }

  .active-flag {
    transition: all 0.5s;
    opacity: 1 !important;
  }
`;
