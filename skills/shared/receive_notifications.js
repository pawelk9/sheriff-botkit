const payload = require('./../../consts/payloads');
const messageDriver = require('./../../messages/message_driver');

module.exports = (controller) => {
    controller.hears([payload.MESSAGE_DRIVER_YES], 'facebook_postback', function (bot, message) {
        bot.reply(message, "Subscribed message");
        bot.reply(message, {
            attachment: messageDriver
        });
    });

    controller.hears([payload.MESSAGE_DRIVER_NO], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'No message');
        bot.reply(message, {
            attachment: messageDriver
        });
    });
}