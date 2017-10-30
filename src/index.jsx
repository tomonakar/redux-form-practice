import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Top from './components/Top/';
import Router from './config/Router';
import store from './store/configureStore';
import Administrator from './components/Administrator/';
import Login from './components/Login/';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
