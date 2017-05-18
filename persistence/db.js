const mongoose = require('mongoose');
const config = require('config');
const logger = require('../utils/logger');

mongoose.Promise = global.Promise;

const dbURI = config.get('db.host');

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    logger.info(`Mongoose default connection open to ${dbURI}`);
});

mongoose.connection.on('error', function (err) {
    logger.error(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', function () {
    logger.warn('Mongoose default connection disconnected');
});