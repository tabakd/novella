import React from 'react';
import Radium from 'radium';

import NovellaActions from '../../../flux/actions/novella'

export default React.createClass ({  
  getInitialState() {
    return {
      input: ''
    }
  },
  handleChange: function(event) {
    this.setState({input: event.target.value});
  },
  render() {
    var submit = NovellaActions.submitSentence.bind(this, this.state.input)
    return <div>
      <input
      onChange={this.handleChange}
      value={this.state.input} />
      <button onClick={submit}>Submit.</button>
    </div>
  }
})
