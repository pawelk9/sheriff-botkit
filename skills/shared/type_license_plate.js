module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {
        bot.reply(message, "Super! Podaj swoją tablicę rejestracyjną");
    });
};