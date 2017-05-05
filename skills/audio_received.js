module.exports = function (controller) {

    controller.on('audio_received', function (bot, message) {
        bot.reply(message, 'Nice audio');
    });
};