import React from 'react';
import Router from 'react-router';
import {Route} from 'react-router';
import BrowserHistory from 'react-router/lib/History';

import Main from './components/main';
import Write from './components/write';


var routes = (
  <Route handler={Main}>
    <Route path="/" handler={Write} />
  </Route>
)

Router.run(
  routes,
  Router.HistoryLocation,
  (Handler) => {
    React.render(<Handler />, document.getElementById('app'));
  }
)
