import * as React from 'react';
import {hashHistory, Route, Router} from 'react-router';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={DashboardComponent}/>
  </Router>
);
