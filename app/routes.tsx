import * as React from 'react';
import { hashHistory, Route, Router } from 'react-router';
import DashboardContainer from './dashboard/dashboard.container';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={DashboardContainer} />
  </Router>
);
