const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.MENU_SUBSCRIBE_TO_NOTIFICATIONS], 'facebook_postback', function (bot, message) {
        bot.reply(message, 'MENU_SUBSCRIBE_TO_NOTIFICATIONS');


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
            convo.addQuestion('Chcesz otrzymywać powiadomienia?', [{
                    pattern: 'yes',
                    callback: function (response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern: 'no',
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