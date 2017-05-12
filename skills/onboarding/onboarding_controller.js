const payload = require('./../../consts/payloads');

const messageDriver = require('./../../messages/message_driver');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {

        switch (message.payload) {

            // case payload.RECEIVE_NOTIFICATIONS_YES:
            //     bot.reply(message, 'Store in DB');
            //     bot.reply(message, "Yes message");
            //     bot.reply(message, {
            //         attachment: messageDriver
            //     });
            //     break;

            // case payload.RECEIVE_NOTIFICATIONS_NO:
            //     bot.reply(message, 'No message');
            //     bot.reply(message, {
            //         attachment: messageDriver
            //     });
            //     break;

            case payload.MESSAGE_DRIVER_YES:
                bot.reply(message, "Alright, send me anything :)");
                break;

            case payload.MESSAGE_DRIVER_NO:
                bot.reply(message, "No? Here are main functionalities");
                break;
        }
    });
};