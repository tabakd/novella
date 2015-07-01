import alt from '../';


import NovellaActions from '../actions/novella';

class NovellaStore {
  constructor() {
    this.story = [];
    this.submissions = [];

    this.bindListeners({
      handleSubmitSentence: NovellaActions.SUBMIT_SENTENCE
    });
  }
  handleSubmitSentence(sentence) {
    this.submissions = this.submissions.concat({
      sentence: sentence,
      score: 0
    })
  }
  handleSubmitSentence(sentence) {
    this.submissions = this.submissions.concat({
      sentence: sentence,
      score: 0
    });
  }
}

export default alt.createStore(NovellaStore, 'NovellaStore');