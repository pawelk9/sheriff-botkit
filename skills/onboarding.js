const payload = require('./../consts/payloads');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {
        if (message.payload === payload.GET_STARTED) {
            bot.reply(message, 'Welcome message');

            var receiveNotification = {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": "Receive notifications?",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Yes",
                            "payload": payload.RECEIVE_NOTIFICATIONS_YES
                        },
                        {
                            "type": "postback",
                            "title": "No",
                            "payload": payload.RECEIVE_NOTIFICATIONS_NO
                        }
                    ]
                }
            };

            bot.reply(message, {
                attachment: receiveNotification,
            });

            controller.on('facebook_postback', function (bot, message) {

                switch (message.payload) {
                    case payload.RECEIVE_NOTIFICATIONS_YES:
                        bot.reply(message, 'Store in DB');
                        bot.reply(message, "Yes message");
                        break;

                    case payload.RECEIVE_NOTIFICATIONS_NO:
                        bot.reply(message, 'No message');
                        break;
                }
            });
        }
    });
};