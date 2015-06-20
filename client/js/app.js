import React from 'react';
import Router from 'react-router';
import {Route} from 'react-router';
import BrowserHistory from 'react-router/lib/History';

import Main from './components/main';

var routes = (
  <Route handler={Main}>
    <Route path="/" component={Main} />
  </Route>
)

Router.run(
  routes,
  Router.HistoryLocation,
  (Handler) => {
    React.render(<Handler />, document.getElementById('app'));
  }
)
