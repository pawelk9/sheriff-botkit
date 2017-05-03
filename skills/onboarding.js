const payload = require('./../consts/payloads');
const receiveNotifications = require('./../messages/receive_notifications');
const messageDriver = require('./../messages/message_driver');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {
        if (message.payload === payload.GET_STARTED) {
            bot.reply(message, 'Welcome message');
            bot.reply(message, {
                attachment: receiveNotifications
            });

            controller.on('facebook_postback', function (bot, message) {
                switch (message.payload) {
                    case payload.RECEIVE_NOTIFICATIONS_YES:
                        bot.reply(message, 'Store in DB');
                        bot.reply(message, "Yes message");
                        bot.reply(message, {
                            attachment: messageDriver
                        });
                        break;

                    case payload.RECEIVE_NOTIFICATIONS_NO:
                        bot.reply(message, 'No message');
                        bot.reply(message, {
                            attachment: messageDriver
                        });
                        break;
                }
            });
        }

        if (message.payload === payload.MESSAGE_DRIVER_YES) {
            bot.reply(message, "Sending message to driver");
        }
        
    });
};