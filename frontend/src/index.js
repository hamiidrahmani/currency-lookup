import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import theme from './app/theme';
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
