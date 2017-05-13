const payload = require('./../../consts/payloads');
const receiveNotifications = require('./../../messages/receive_notifications');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
        bot.startConversation(message, function (err, convo) {
            convo.say("Cześć! Jestem Szeryf!");
            convo.say('Have a nice day!');
        });
    });
}