module.exports = (controller) => {
    controller.hears(['^[A-Z0-9]{2,3}\s?[A-Z0-9]{3,5}$'], 'text_received', function (bot, message) {
        bot.reply(message, "O, tablica!");
    });
}