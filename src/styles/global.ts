import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    overflow-x: hidden;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};
    letter-spacing: 0px;
    opacity: 1;
  }

  input{
    border: none;
  }

  textarea{
    border: none;
    border-radius: 10px;
  }

  h2{
    ${(props) => props.theme.colors.mainColor}
    font-weight: 600;
  }

  h3{
    font-weight: 600;
    ${(props) => props.theme.colors.mainColor}
  }
    h5 {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2.58px;
    color: ${(props) => props.theme.colors.h5TextColor};
    text-transform: uppercase;
    margin-bottom: 17px;
  }

  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    width: 14px !important;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.inputColor} !important;
    border-radius: 16px !important;
    border: 4px solid ${(props) =>
      props.theme.colors.backgroundColor} !important;
  }

  ::-webkit-scrollbar-button {
    display: none !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid ${(props) => props.theme.colors.buttonColor};
    -webkit-text-fill-color: ${(props) => props.theme.colors.textColor};
    box-shadow: 0 0 0px 1000px #${(props) =>
      props.theme.colors.backgroundColor} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
