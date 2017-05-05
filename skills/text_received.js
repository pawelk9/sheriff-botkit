module.exports = function (controller) {

    controller.on('text_received', function (bot, message) {
        bot.reply(message, 'Nice text dude!');
    });
};