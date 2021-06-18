import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lgpd from './Lgpd';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";

ReactDOM.render(
  <React.StrictMode>

<I18nextProvider i18n={i18next}>
    <Lgpd />

</I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
