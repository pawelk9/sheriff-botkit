module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {
        bot.reply(message, "Super! Podaj swoją tablicę rejestracyjną");

        bot.createConversation(message, function (err, convo) {

            convo.addMessage({
                text: "How wonderful.",
            }, "valid_license_plate");

            convo.ask("Super! Podaj swoją tablicę rejestracyjną", [{
                    pattern: bot.utterances.yes,
                    callback: function (response, convo) {
                        convo.gotoThread("valid_license_plate");
                    },
                },
                {
                    pattern: bot.utterances.no,
                    callback: function (response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ]);

            convo.activate();

            convo.say('Hello!');
            convo.say('Have a nice day!');
        });
    });
};