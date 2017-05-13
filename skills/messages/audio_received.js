module.exports = (controller) => {
    controller.on('audio_received', function (bot, message) {
        bot.reply(message, 'Nice audio');
        // controller.trigger('add_more', [bot, message]);
    });
};