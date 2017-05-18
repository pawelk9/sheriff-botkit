const payload = require('./../../consts/payloads');
const User = require('./../../persistence/models/user');
const logger = require('../../utils/logger');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', (bot, message) => {
        bot.startConversation(message, (err, convo) => {

            User.alreadyRegistered(message.user)
                .then(() => {
                    convo.say('Witaj ponownie!');
                })
                .catch(() => {
                    const user = new User({
                        messangerId: message.user,
                    });
                    user.save()
                        .then(() => {})
                        .catch(err => {
                            logger.error(`Cannot save user. ${err}`);
                        });

                    convo.say('Cześć! Jestem Szeryf!');
                    controller.trigger('subscribe_to_notifications', [bot, message]);
                });
        });
    });
};