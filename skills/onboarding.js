const payload = require('./../consts/payloads');

module.exports = function (controller) {

    controller.on('facebook_postback', function (bot, message) {

        if (message.payload === payload.GET_STARTED) {
            bot.reply(message, 'Welcome message');

            var attachment = {
                'type': 'template',
                'payload': {
                    'template_type': 'generic',
                    'elements': [{
                        'title': 'Chocolate Cookie',
                        'image_url': 'http://cookies.com/cookie.png',
                        'subtitle': 'A delicious chocolate cookie',
                        'buttons': [{
                            'type': 'postback',
                            'title': 'Eat Cookie',
                            'payload': 'chocolate'
                        }]
                    }, ]
                }
            };

            bot.reply(message, {
                attachment: attachment,
            });

            controller.on('facebook_postback', function (bot, message) {

                if (message.payload == 'chocolate') {
                    bot.reply(message, 'You ate the chocolate cookie!')
                }

            });
        }

    });
};