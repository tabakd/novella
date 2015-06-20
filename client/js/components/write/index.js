import React from 'react';

import Story from './story';
import Submit from './submit';
import Vote from './vote';


export default React.createClass ({  
  getInitialState() {
    return {}
  },
  render() {
    return <div>
      <Story />
      <Submit />
      <Vote />
    </div>
  }
})
