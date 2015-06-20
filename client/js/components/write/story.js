import React from 'react';
import Radium from 'radium';

export default React.createClass ({  
  render() {
    return <div>
      {this.props.story.map(s => <span>{s}</span>)}
    </div>
  }
})
