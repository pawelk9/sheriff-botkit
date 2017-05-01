module.exports = function(controller) {

    const request = require('request');

    // look for sticker, image and audio attachments
    // capture them, and fire special events
    controller.on('message_received', function(bot, message) {

        if (!message.text) {
            if (message.sticker_id) {
                controller.trigger('sticker_received', [bot, message]);
                return false;
            } else if (message.attachments && message.attachments[0]) {
                controller.trigger(message.attachments[0].type + '_received', [bot, message]);
                return false;
            }
        }

    });

    controller.on('sticker_received', function(bot, message) {
        bot.reply(message, 'Gon sie.');
    });

    controller.on('image_received', function(bot, message) {
        bot.reply(message, 'Nice picture.');
        console.log(message);

        request({
        uri: "https://api.openalpr.com/v2/recognize_url",
        qs: {
            secret_key: "sk_eba091d08e0166f7bca7453b",
            image_url: "http://dailydriver.pl/wp-content/uploads/2015/10/tablica-rejestracyjna-720x340.jpg",
            recognize_vehicle: 0,
            country: "eu",
            return_image: 0,
            topn: 10
        },
        method: 'POST',
    }, function (error, response, body) {
        console.log(error, body);
        if (!error && response.statusCode == 200) {
            var jsonObject = JSON.parse(body);
            if (jsonObject.results.length > 0) {
                bot.reply(message, `To mi wygląda na: ${jsonObject.results[0].plate}`);
            } else {
                bot.reply(message, 'Nie rozpoznałem');
            }
        } else {
            console.error("Unable recognize plate:" + response.error);
        }
    });
    });

    controller.on('audio_received', function(bot, message) {
        bot.reply(message, 'I heard that!!');
    });

    controller.on('facebook_postback', function(bot, message) {
        bot.reply(message, 'This is the payload selected: ' + message.payload);
    });
};
