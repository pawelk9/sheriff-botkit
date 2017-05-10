module.exports = function (controller) {

    controller.on('menu_help', function (bot, message) {
        bot.reply(message, 'Pomocy kokocy dupocy!');
    });
};