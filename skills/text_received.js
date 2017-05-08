const addMore = require('./../messages/add_more');

module.exports = function (controller) {

    controller.on('text_received', function (bot, message) {
        bot.reply(message, 'Nice text dude!');

        bot.reply(message, {
            attachment: addMore
        });
    });
};