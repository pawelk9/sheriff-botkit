const addMore = require('./../messages/add_more');

module.exports = function (controller) {

    controller.on('image_received', function (bot, message) {
        bot.reply(message, 'Nice image.');

        bot.reply(message, {
            attachment: addMore
        });
    });

};