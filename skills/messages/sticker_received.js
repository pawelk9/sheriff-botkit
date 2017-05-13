module.exports = (controller) => {
    controller.on('sticker_received', function (bot, message) {
        bot.reply(message, 'Nice sticker');
        // controller.trigger('add_more', [bot, message]);
    });
};