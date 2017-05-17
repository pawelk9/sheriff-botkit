const payload = require('./../../consts/payloads');
const User = require('./../../persistence/models/user');
const getUserProfile = require('./../../api/user_profile_api');
const rp = require('request-promise');

module.exports = (controller) => {
    controller.hears([payload.GET_STARTED], 'facebook_postback', (bot, message) => {
        bot.startConversation(message, (err, convo) => {

            const isUserRegistered = User.alreadyRegistered(message.user);

            if (isUserRegistered) {
                console.log("mamy starego");
            } else {
                console.log("mamy nowego");
            }

            var promise = User.count({
                messangerId: message.user
            }).exec();

            promise.then(count => {
                    if (count > 0) {
                        convo.say("Witaj ponownie!");
                    } else {
                        rp(getUserProfile(message.user)).then((body) => {
                                let user = new User({
                                    messangerId: message.user,
                                    first_name: body.first_name,
                                    last_name: body.last_name,
                                    profile_pic: body.profile_pic,
                                    locale: body.locale,
                                    timezone: body.timezone,
                                    gender: body.gender
                                });

                                user.save((err) => {
                                    if (err) {
                                        console.log(err);
                                        return;
                                    };
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                                let user = new User({
                                    messangerId: message.user
                                });
                                user.save((err) => {
                                    if (err) {
                                        console.log(err);
                                        return;
                                    };
                                });
                            });
                        convo.say("Cześć! Jestem Szeryf!");
                        controller.trigger('subscribe_to_notifications', [bot, message]);
                    }
                })
                .catch();
        });
    });
}