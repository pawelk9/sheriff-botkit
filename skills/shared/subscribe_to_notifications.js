const receiveNotifications = require('./../../messages/receive_notifications');
const payload = require('./../../consts/payloads');
const Registration = require('./../../persistence/models/registration');
const User = require('./../../persistence/models/user');
const logger = require('../../utils/logger');

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
            const currentUser = User.findOne({
              messangerId: message.user
            }, function (err, obj) {
              logger.debug(obj);
            });
            // const registration = new Registration({
            //     license_plate: "GD18009",
            //     users: [{

            //     }]
            // });
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