const payload = require('./../../consts/payloads');

module.exports = {
    method1: function (controller) {
        controller.hears([payload.RECEIVE_NOTIFICATIONS_YES], 'facebook_postback', function (bot, message) {
            bot.reply(message, 'Store in DB');
            bot.reply(message, "Yes message");
        });
    },
    method2: function (controller) {
        controller.hears([payload.RECEIVE_NOTIFICATIONS_NO], 'facebook_postback', function (bot, message) {
            bot.reply(message, 'No message');
        });
    }
}