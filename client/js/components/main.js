import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './header';

export default React.createClass ({  
  getInitialState() {
    return {}
  },

  getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },

  render() {
    return <div>
      <Header />
      <RouteHandler />
    </div>
  }
})
