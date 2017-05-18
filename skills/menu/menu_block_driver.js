const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_BLOCK_DRIVER], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'Block driver');
    });
};