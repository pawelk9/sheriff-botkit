const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  license_plate: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

registrationSchema.pre('save', function (next) {
  this.license_plate = this.license_plate.replace(/\s/g, '');
  next();
});

registrationSchema.statics.getUserRegistrationCount = function (userId) {
  return new Promise((resolve, reject) => {
    const registrationCount = this.count({
      owner: userId
    }).exec();

    registrationCount.then(count => {
      resolve(count);
    }).catch(err => {
      reject(`Cannot get registration count. ${err}`);
    });
  });
};

module.exports = mongoose.model('Registration', registrationSchema);