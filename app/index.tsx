import { initializeApp } from './dashboard/dashboard.actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';
import { routes } from './routes';
import { configureStore } from './store/configureStore';

import '../node_modules/weather-icons/css/weather-icons.css';

injectTapEventPlugin();

const store = configureStore.configureStore();
const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(initializeApp());

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
      </div>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
