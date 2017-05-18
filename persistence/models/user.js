const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getUserProfile = require('./../../api/user_profile_api');
const rp = require('request-promise');

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
  created_at: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', function (next) {

  rp(getUserProfile(this.messangerId))
    .then(body => {
      this.first_name = body.first_name;
      this.last_name = body.last_name;
      this.profile_pic = body.profile_pic;
      this.locale = body.locale;
      this.timezone = body.timezone;
      this.gender = body.gender;
    })
    .catch(err => {
      console.log(err);
    });
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