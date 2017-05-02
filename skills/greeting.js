const payload = require('./../consts/payloads');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {
        if (message.payload === payload.GET_STARTED) {
            bot.reply(message, 'Welcome message');
        }
    });
};