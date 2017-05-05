module.exports = function(controller) {

    controller.on('sticker_received', function(bot, message) {
        bot.reply(message, 'Nice sticker');
    });

    controller.on('image_received', function(bot, message) {
        bot.reply(message, 'Nice image.');
    });

    controller.on('audio_received', function(bot, message) {
        bot.reply(message, 'Nice audio');
    });
};
