const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String }
}, {
  timestamps: true
});


module.exports = mongoose.model('Post', PostSchema);
