const receiveNotifications = require('./../../messages/receive_notifications');
const payload = require('./../../consts/payloads');
const logger = require('../../utils/logger');
const User = require('./../../persistence/models/user');
const Registration = require('./../../persistence/models/registration');

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

      convo.addMessage({
        text: 'Już masz zarejestowaną tablice. Nie możesz mieć więcej niż jednej :(',
        action: 'stop'
      }, 'already_subscribed');

      convo.addQuestion({
        attachment: receiveNotifications('Chcesz otrzymywać powiadomienia?', 'Tak', 'Nie')
      }, [{
          pattern: payload.RECEIVE_NOTIFICATIONS_YES,
          callback: (response, convo) => {
            User.getCurrentUser(message.user).then(user => {
                return Registration.getUserRegistrationCount(user._id);
              }).then(count => {
                logger.debug('getUserRegistrationCount' + count);
                if (count > 0) {
                  convo.gotoThread('already_subscribed');
                } else {
                  convo.stop();
                  controller.trigger('type_license_plate', [bot, message]);
                }
              })
              .catch(err => {
                logger.error(err);
              });
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

      convo.on('end', convo => {
        logger.debug(`convo status ${convo.status}`);
      });
    });
  });
};