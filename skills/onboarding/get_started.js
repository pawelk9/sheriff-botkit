const payload = require('./../../consts/payloads');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
        bot.startConversation(message, function (err, convo) {
            convo.say("Cześć! Jestem Szeryf!");
            controller.trigger('subscribe_to_notifications', [bot, message]);
        });
    });
}