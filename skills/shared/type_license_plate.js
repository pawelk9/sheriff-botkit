const platePattern = require('./../../core/validators/license_plate_patterns');
const logger = require('../../utils/logger');

module.exports = (controller) => {
  controller.on('type_license_plate', (bot, message) => {
    bot.createConversation(message, (err, convo) => {

      convo.addQuestion('Podaj swoją tablicę rejestracyjną', [{
          pattern: platePattern.PL,
          callback: (response, convo) => {
            bot.replyWithTyping(message, 'Zapisane! Wyślę do Ciebie wiadomość jak tylko coś dostanę :)');
            convo.next();
          },
        },
        {
          default: true,
          callback: (response, convo) => {
            convo.say('Nie mogę rozponać tablicy. Wpisz w formacie XX XXXXX lub XXX XXXX.');
            convo.repeat();
            convo.next();
          },
        }
      ], {key: 'license_plate'}, 'default');

      convo.activate();

      convo.on('end', convo => {
        if (convo.status === 'completed') {
          const license_plate = convo.extractResponse('license_plate');
          logger.debug(`Extracted response: ${license_plate}`);
        } else {
          logger.info(`License plate conversation failed. ${convo.status}`);
        }
      });
    });
  });
};