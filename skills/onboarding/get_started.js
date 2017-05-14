const payload = require('./../../consts/payloads');
const User = require('./../../persistence/models/user');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
        bot.startConversation(message, function (err, convo) {
            var user = new User({
                messangerId: message.user
            });
            user.save(function (err) {
                if (err) throw err;
                console.log('User saved successfully!');
            });
            convo.say("Cześć! Jestem Szeryf!");
            controller.trigger('subscribe_to_notifications', [bot, message]);

            
        });
    });
}