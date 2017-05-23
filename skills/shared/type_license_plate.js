const platePattern = require('./../../core/validators/license_plate_patterns');
const logger = require('../../utils/logger');

const responseKey = 'license_plate';

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
      ], {
        key: responseKey
      }, 'default');

      convo.activate();

      convo.on('end', convo => {
        if (convo.status === 'completed') {
          const licensePlate = convo.extractResponse(responseKey);
          logger.debug(`Extracted response: ${licensePlate}`);
        } else {
          logger.info(`License plate conversation failed. ${convo.status}`);
        }
      });
    });
  });
};