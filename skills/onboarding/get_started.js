const payload = require('./../../consts/payloads');
const User = require('./../../persistence/models/user');
const userProfile = require('./../../api/user_profile_api');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
        bot.startConversation(message, function (err, convo) {
            let profile = userProfile(message.user);
            console.log('####',profile);
            var user = new User({
                messangerId: message.user
            });
            user.save(function (err) {
                if (err) {
                    console.log(err);
                };
                console.log('User saved successfully!');
            });
            convo.say("Cześć! Jestem Szeryf!");
            controller.trigger('subscribe_to_notifications', [bot, message]);

            
        });
    });
}