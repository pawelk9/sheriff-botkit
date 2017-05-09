module.exports = function (controller) {

    controller.on('subscribe_to_notifications', function (bot, message) {
        bot.reply(message, 'subscribe_to_notifications');
    });
};