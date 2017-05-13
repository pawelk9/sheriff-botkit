const payload = require('./../../consts/payloads');
const receiveNotifications = require('./../../messages/receive_notifications');

module.exports = (controller) => {
    controller.hears([payload.MENU_SUBSCRIBE_TO_NOTIFICATIONS], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'MENU_SUBSCRIBE_TO_NOTIFICATIONS');

        // bot.reply(message, {
        //     attachment: receiveNotifications
        // });

        bot.createConversation(message, function (err, convo) {

            convo.addMessage({
                text: 'You said yes! How wonderful.',
            }, 'yes_thread');

            convo.addMessage({
                text: 'You said no, that is too bad.',
            }, 'no_thread');

            convo.addMessage({
                text: 'Sorry I did not understand.',
                action: 'default',
            }, 'bad_response');

            // Create a yes/no question in the default thread...
            convo.addQuestion({attachment: receiveNotifications}, [{
                    pattern: payload.RECEIVE_NOTIFICATIONS_YES,
                    callback: function (response, convo) {
                        console.log("###########", response)
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern: payload.RECEIVE_NOTIFICATIONS_NO,
                    callback: function (response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ], {}, 'default');

            convo.activate();
        });

    });
}