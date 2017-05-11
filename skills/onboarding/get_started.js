const payload = require('./../../consts/payloads');

module.exports = function (controller) {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
         bot.reply(message, 'Wilkommen!');
    });
}