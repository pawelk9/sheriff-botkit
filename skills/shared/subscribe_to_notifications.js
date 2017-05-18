const receiveNotifications = require('./../../messages/receive_notifications');
const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.on('subscribe_to_notifications', (bot, message) => {

        bot.createConversation(message, (err, convo) => {
            convo.addMessage({
                text: 'Spoko. Możesz zapisać się w każdej chwili w menu.',
            }, 'no_thread');

            convo.addMessage({
                text: 'Nie zrozumiałem. Naciśnij tak albo nie :)',
                action: 'default',
            }, 'bad_response');

            convo.addQuestion({
                attachment: receiveNotifications('Chcesz otrzymywać powiadomienia?', 'Tak', 'Nie')
            }, [{
                    pattern: payload.RECEIVE_NOTIFICATIONS_YES,
                    callback: (response, convo) => {
                        convo.stop();
                        controller.trigger('type_license_plate', [bot, message]);
                    },
                },
                {
                    pattern: payload.RECEIVE_NOTIFICATIONS_NO,
                    callback: (response, convo) => {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: (response, convo) => {
                        convo.gotoThread('bad_response');
                    },
                }
            ], {}, 'default');

            convo.activate();
        });
    });
};