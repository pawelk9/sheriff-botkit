const addMore = require('./../messages/add_more');

module.exports = function (controller) {

    controller.on('add_more', function (bot, message) {
        
        bot.reply(message, {
            attachment: addMore
        });
    });
};