const addMore = require('./../messages/add_more');

module.exports = function (controller) {

    controller.on('location_received', function (bot, message) {
        bot.reply(message, 'Nice location');

        bot.reply(message, {
            attachment: addMore
        });
    });
};