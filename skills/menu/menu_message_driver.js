const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_MESSAGE_DRIVER], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'Podaj no byle co');
    });
}