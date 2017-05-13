module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {

        bot.createConversation(message, function (err, convo) {

            convo.sayFirst("Super!");

            convo.addMessage({
                text: "Zapisane! Wyślę do Ciebie wiadomość jak tylko coś dostanę :)",
            }, "valid_license_plate");

            convo.addMessage({
                text: "Nie mogę rozponać tablicy. Wpisz w formacie XX XXXXX lub XXX XXXX.",
                action: "default",
            }, "bad_response");

            convo.ask("Podaj swoją tablicę rejestracyjną", [{
                    pattern: bot.utterances.yes,
                    callback: function (response, convo) {
                        convo.say('Super. Zapisuję...');
                        convo.gotoThread("valid_license_plate");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread("bad_response");
                    },
                }
            ]);
            convo.activate();
        });
    });
};