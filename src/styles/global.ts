import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    overflow-x: hidden;
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
    font-weight: 600;
  }

  h3{
    font-weight: 600;
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
    h5 {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2.58px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 17px;
  }
`;
