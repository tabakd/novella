import alt from '../';

class NovellaActions {
  submitSentence(sentence) {
    this.dispatch(sentence);
  }
}

export default module.exports = alt.createActions(NovellaActions);
