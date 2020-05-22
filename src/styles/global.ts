import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    /* outline: 1px solid red; */
  }

  body{
    background: #272727;
    color: #FFF;
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
    color: #FFF;
    letter-spacing: 0px;
    opacity: 1;
  }

  input{
    border: none;
    border-radius: 10px;
  }
  textarea{
    border: none;
    border-radius: 10px;
  }

  h2{
      background: -webkit-linear-gradient(85deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
