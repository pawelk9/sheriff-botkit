const payload = require('./../consts/payloads');
const receiveNotification = require('./../messages/receiveNotification');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {
        if (message.payload === payload.GET_STARTED) {
            bot.reply(message, 'Welcome message');
            bot.reply(message, {attachment: receiveNotification,});

            controller.on('facebook_postback', function (bot, message) {
                switch (message.payload) {
                    case payload.RECEIVE_NOTIFICATIONS_YES:
                        bot.reply(message, 'Store in DB');
                        bot.reply(message, "Yes message");
                        break;

                    case payload.RECEIVE_NOTIFICATIONS_NO:
                        bot.reply(message, 'No message');
                        bot.reply(message, 'Test');
                        break;
                }
            });
        }
    });
};