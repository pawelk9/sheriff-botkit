const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_SUBSCRIBE_TO_NOTIFICATIONS], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'MENU_SUBSCRIBE_TO_NOTIFICATIONS');
    });
}