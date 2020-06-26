import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import Portuguese from './languages/pt-BR.json';
import English from './languages/en-US.json';

const local = navigator.language;
let lang;
local !== 'pt-BR' ? (lang = English) : (lang = Portuguese);

ReactDOM.render(
  <IntlProvider locale={local} messages={lang}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
