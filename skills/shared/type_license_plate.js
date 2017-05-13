module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {
        bot.reply(message, "Super! Podaj swoją tablicę rejestracyjną");

        bot.createConversation(message, function (err, convo) {


            convo.say('Hello!');
            convo.say('Have a nice day!');
        });
    });
};