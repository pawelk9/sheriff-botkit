module.exports = (controller) => {
    controller.on('type_license_plate', function (bot, message) {

        bot.createConversation(message, function (err, convo) {
            convo.addMessage({
                text: "Zapisane! Wyślę do Ciebie wiadomość jak tylko coś dostanę :)",
            }, "valid_license_plate");

            convo.addMessage({
                text: "Nie mogę rozponać tablicy. Wpisz w formacie XX XXXXX lub XXX XXXX.",
                action: "default",
            }, "bad_response");

            convo.ask("Super! Podaj swoją tablicę rejestracyjną", [{
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

            convo.addQuestion('Shall we proceed Say YES, NO or DONE to quit.', [{
                    pattern: 'done',
                    callback: function (response, convo) {
                        convo.say('OK you are done!');
                        convo.next();
                    }
                },
                {
                    pattern: bot.utterances.yes,
                    callback: function (response, convo) {
                        convo.say('Great! I will continue...');
                        // do something else...
                        convo.next();

                    }
                },
                {
                    pattern: bot.utterances.no,
                    callback: function (response, convo) {
                        convo.say('Perhaps later.');
                        // do something else...
                        convo.next();
                    }
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        // just repeat the question
                        convo.repeat();
                        convo.next();
                    }
                }
            ], {}, 'repeat');
        });
    });
};