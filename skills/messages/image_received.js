module.exports = (controller) => {
    controller.on('image_received', function (bot, message) {
        bot.reply(message, 'Nice image.');
        controller.trigger('add_more', [bot, message]);
    });
};