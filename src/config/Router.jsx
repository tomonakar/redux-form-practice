import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from '../components/Top/';
import Login from '../components/Login/';
import Administrator from '../components/Administrator/';

export default() => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/admin" component={Administrator} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Top} />
      </Switch>
    </div>
  </BrowserRouter>
);
