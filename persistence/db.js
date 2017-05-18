const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise

const dbURI = config.get('db.host');

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});