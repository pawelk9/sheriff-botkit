const messageDriver = require('./../../messages/message_driver');
module.exports = (controller) => {

    controller.on('text_received', function (bot, message) {
        bot.reply(message, 'Nice text ziomeczku eloszka!');
        // bot.reply(message, {
            // attachment: messageDriver
        // });
    });
};