module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {

        bot.createConversation(message, function (err, convo) {
            convo.activate();

            convo.sayFirst("Super!");

            convo.addQuestion("Podaj swoją tablicę rejestracyjną", [{
                    pattern: bot.utterances.yes,
                    callback: function (response, convo) {
                        convo.say("Super. Już zapisuję!");
                        bot.replyWithTyping(message, "Zapisane! Wyślę do Ciebie wiadomość jak tylko coś dostanę :)");
                        convo.next();
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Nie mogę rozponać tablicy. Wpisz w formacie XX XXXXX lub XXX XXXX.");
                        convo.repeat();
                        convo.next();
                    },
                }
            ], {}, "default");

            convo.on('end', function (convo) {
                if (convo.status == 'completed') {
                    var res = convo.extractResponses();
                    console.log(res);

                } else {
                    console.log("Something failed", convo.status)
                }
            });
        });
    });
};