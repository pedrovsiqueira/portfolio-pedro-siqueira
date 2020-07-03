import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './hooks/context';

import { IntlProvider } from 'react-intl';
import Portuguese from './languages/pt-BR.json';
import English from './languages/en-US.json';

const local = navigator.language;
let lang;
local !== 'pt-BR' ? (lang = English) : (lang = Portuguese);

ReactDOM.render(
  <ContextProvider>
    <IntlProvider locale={local} messages={English}>
      <App />
    </IntlProvider>
  </ContextProvider>,
  document.getElementById('root'),
);
