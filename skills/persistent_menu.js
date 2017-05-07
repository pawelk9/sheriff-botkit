const payload = require('./../consts/payloads');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {

        switch (message.payload) {

            case payload.MENU_SUBSCRIBE_TO_NOTIFICATIONS:
                bot.reply(message, 'SUBSCRIBE_TO_NOTIFICATIONS');
                break;

            case payload.MENU_UNSUBSCRIBE_TO_NOTIFICATIONS:
                bot.reply(message, 'UNSUBSCRIBE_TO_NOTIFICATIONS');
                break;

            case payload.MENU_BLOCK_DRIVER:
                bot.reply(message, 'BLOCK_DRIVER');
                break;

            case payload.MENU_MESSAGE_DRIVER:
                bot.reply(message, 'MESSAGE_DRIVER');
                break;

            case payload.MENU_GET_HELP:
                bot.reply(message, 'GET_HELP');
                break;
        }
    });
};