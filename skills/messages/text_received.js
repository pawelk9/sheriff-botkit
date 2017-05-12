module.exports = (controller) => {

    controller.on('text_received', function (bot, message) {
        bot.reply(message, 'Nice text dude!');
        controller.trigger('add_more', [bot, message]);
    });
};