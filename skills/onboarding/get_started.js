const payload = require('./../../consts/payloads');
const receiveNotifications = require('./../../messages/receive_notifications');

module.exports = function (controller) {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'Wilkommen!');
        bot.reply(message, {
            attachment: receiveNotifications
        });
    });
}