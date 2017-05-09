module.exports = function (controller) {

    controller.on('menu_message_driver', function (bot, message) {
        bot.reply(message, 'Podaj no byle co!');
    });
};