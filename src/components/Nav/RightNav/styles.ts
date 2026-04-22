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
      color: #ffffff;
      margin-bottom: 20px;
      font-size: 25px;
      margin-right: 0;

      a {
        color: #ffffff;
      }

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

export const StyledLanguages = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    min-width: 36px;
    height: 28px;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.inputColor};
    background: transparent;
    color: ${(props) => props.theme.colors.textColor};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    opacity: 0.5;
    transition: all 0.5s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
  }

  .active-language {
    transition: all 0.5s;
    opacity: 1 !important;
    background: ${(props) => props.theme.colors.inputColor};
    color: #ffffff;
  }
`;

export const ModeContainer = styled.div`
  color: ${(props) => props.theme.colors.hamburguerIconRightNavColor};

  svg {
    color: ${(props) => props.theme.colors.hamburguerIconRightNavColor};
    :hover {
      cursor: pointer;
    }
  }
`;
