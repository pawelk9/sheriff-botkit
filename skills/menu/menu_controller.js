const payload = require('./../../consts/payloads');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {
        console.log(message);

        switch (message.payload) {

            case payload.MENU_SUBSCRIBE_TO_NOTIFICATIONS:
                controller.trigger('subscribe_to_notifications', [bot, message]);
                break;

            case payload.MENU_UNSUBSCRIBE_TO_NOTIFICATIONS:
                controller.trigger('unsubscribe_to_notifications', [bot, message]);
                break;

            case payload.MENU_BLOCK_DRIVER:
                controller.trigger('menu_block_driver', [bot, message]);
                break;

            case payload.MENU_MESSAGE_DRIVER:
                controller.trigger('menu_message_driver', [bot, message]);
                break;

            case payload.MENU_GET_HELP:
                controller.trigger('menu_help', [bot, message]);
                break;
        }
    });
};