const payload = require('./../../consts/payloads');
const User = require('./../../persistence/models/user');
const getUserProfile = require('./../../api/user_profile_api');
const rp = require('request-promise');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', function (bot, message) {
        bot.startConversation(message, function (err, convo) {

            rp(getUserProfile(message.user)).then(function (body) {
                    console.log('###', body);
                    let user = new User({
                        messangerId: message.user,
                        first_name: body.first_name,
                        last_name: body.last_name,
                        profile_pic: body.profile_pic,
                        locale: body.locale,
                        timezone: body.timezone,
                        gender: body.gender
                    });

                    user.save(function (err) {
                        if (err) {
                            console.log(err);
                        };
                        console.log('User saved successfully!');
                    });
                })
                .catch(function (err) {
                    console.log(err);
                    let user = new User({
                        messangerId: message.user
                    });
                    user.save(function (err) {
                        if (err) {
                            console.log(err);
                        };
                        console.log('User saved successfully!');
                    });
                });

            convo.say("Cześć! Jestem Szeryf!");
            controller.trigger('subscribe_to_notifications', [bot, message]);
        });
    });
}