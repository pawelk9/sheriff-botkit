module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {

        bot.createConversation(message, function (err, convo) {

            convo.sayFirst("Super!");

            convo.addQuestion("Podaj swoją tablicę rejestracyjną", [{
                    pattern: bot.utterances.yes,
                    callback: function (response, convo) {
                        convo.say("Super. Zapisuję...");
                        convo.say("Zapisane! Wyślę do Ciebie wiadomość jak tylko coś dostanę :)");
                        convo.next();
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Nie mogę rozponać tablicy. Wpisz w formacie XX XXXXX lub XXX XXXX.");
                        convo.next();
                    },
                }
            ], {}, "default");

            convo.activate();
        });
    });
};