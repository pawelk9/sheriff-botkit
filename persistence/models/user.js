const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('promise');

const userSchema = new Schema({
  messangerId: {
    type: String,
    required: true,
    unique: true
  },
  first_name: String,
  last_name: String,
  profile_pic: String,
  locale: String,
  timezone: Number,
  gender: String,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function (next) {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

userSchema.statics.alreadyRegistered = function (userId) {
  return new Promise((resolve, reject) => {
    const countUsers = this.count({
      messangerId: userId
    }).exec();

    countUsers.then(count => {
      if (count > 0) {
        resolve();
      }
      reject();
    })
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;