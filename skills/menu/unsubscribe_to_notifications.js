module.exports = function (controller) {

    controller.on('unsubscribe_to_notifications', function (bot, message) {
        bot.reply(message, 'unsubscribe_to_notifications');
    });
};