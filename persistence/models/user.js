const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getUserProfile = require('./../../api/user_profile_api');
const rp = require('request-promise');
const logger = require('../../utils/logger');

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
      next();
    })
    .catch(err => {
      logger(`Cannot get user profile. ${err}`);
      next();
    });
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
    });
  });
};

userSchema.statics.getCurrentUser = function (userId) {
  return new Promise((resolve, reject) => {
    this.findOne.findOne({
      messangerId: userId
    }).then(user => {
      resolve(user);
    }).catch(err => {
      reject(`User ${userId} does not exist. ${err}`);
    });
  });
};

module.exports = mongoose.model('User', userSchema);