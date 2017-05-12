const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.RECEIVE_NOTIFICATIONS_YES], 'facebook_postback', function (bot, message) {
        bot.reply(message, "Alright, send me anything :)");
    });

    controller.hears([payload.RECEIVE_NOTIFICATIONS_NO], 'facebook_postback', function (bot, message) {
        bot.reply(message, "No? Here are main functionalities");
    });
}