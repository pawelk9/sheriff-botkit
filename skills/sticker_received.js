module.exports = function (controller) {

    controller.on('sticker_received', function (bot, message) {
        bot.reply(message, 'Nice sticker');
    });

};