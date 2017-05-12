const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_GET_HELP], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'Help?');
    });
}