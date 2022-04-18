import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configurationStore from './store/configurationStore';
import { useTranslation } from 'react-i18next';
import './i18n';

const store = configurationStore();

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
