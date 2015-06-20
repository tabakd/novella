import React from 'react';

export default React.createClass ({  
  getInitialState() {
    return { num: this.getRandomNumber() }
  },

  getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },

  render() {
    return <div>
      Your dice rolls!:
      {this.state.num}
    </div>
  }
})
