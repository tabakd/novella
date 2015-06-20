import alt from '../';


import NovellaActions from '../actions/novella';

class NovellaStore {
  constructor() {
    this.story = ['Hek'];

    this.bindListeners({
      handleSubmitSentence: NovellaActions.SUBMIT_SENTENCE
    });
  }

  handleSubmitSentence(sentence) {
    this.story = this.story.concat(sentence);
  }
}

export default alt.createStore(NovellaStore, 'NovellaStore');