const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  messangerId: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);
module.exports = User;
