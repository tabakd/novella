import React from 'react';

import Story from './story';
import Submit from './submit';
import Vote from './vote';

import NovellaStore from '../../flux/stores/novella'

export default React.createClass ({  
  getInitialState() {
    return NovellaStore.getState();
  },

  componentDidMount() {
    NovellaStore.listen(this.onChange);
  },

  componentWillUnmount() {
    NovellaStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },
  render() {
    return <div>
      <Story story={this.state.story}/>
      <Submit />
      <Vote />
    </div>
  }
})
