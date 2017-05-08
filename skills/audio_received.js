const addMore = require('./../messages/add_more');

module.exports = function (controller) {

    controller.on('audio_received', function (bot, message) {
        bot.reply(message, 'Nice audio');

        bot.reply(message, {
            attachment: addMore
        });
    });
};