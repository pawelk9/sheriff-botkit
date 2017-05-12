module.exports = (controller) => {
    controller.on('location_received', function (bot, message) {
        bot.reply(message, 'Nice location');
        controller.trigger('add_more', [bot, message]);
    });
};