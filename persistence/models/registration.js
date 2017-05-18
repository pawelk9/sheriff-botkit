const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    license_plate: {
        type: String,
        required: true,
        unique: true
    },
    owners: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
});

module.exports = mongoose.model('Registration', registrationSchema);