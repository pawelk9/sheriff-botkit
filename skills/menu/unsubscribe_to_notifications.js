const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_UNSUBSCRIBE_TO_NOTIFICATIONS], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'MENU_UNSUBSCRIBE_TO_NOTIFICATIONS');
    });
}