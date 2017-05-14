const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  messangerId: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  profile_pic: String,
  locale: String,
  timezone: Number,
  gender: String,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;
