const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_SUBSCRIBE_TO_NOTIFICATIONS], 'facebook_postback', function (bot, message) {
        controller.trigger('subscribe_to_notifications', [bot, message]);
    });
}