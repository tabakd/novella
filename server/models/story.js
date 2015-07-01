var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sentenceSchema = new Schema({
  author: String,
  sentence: String,
  score: { type: Number, default: 0}
})

var Sentence = mongoose.model('Sentence', sentenceSchema);

var storySchema = new Schema({
  title: String,
  sentences: [sentenceSchema],
  submissions: [sentenceSchema]
})

storySchema.statics.submitSentence = function(story_id, sentence){
  this.findById(story_id, function(err, story){
    story.submissions.push({
      sentence: sentence
    })
    story.save()
  })
}

storySchema.statics.vote = function(story_id, sentence_id, count){
  this.findById(story_id, function(err, story){
    var s = story.submissions.id(sentence_id)
    s.score += count
    story.save()
  })
}

storySchema.statics.endRound = function(id){
  this.findById(id, function(err, story){
    story.sentences.push(_.max(story.submissions, 'score'))
    story.submissions = []
    story.save()
  })
}

module.exports = mongoose.model('Story', storySchema);




