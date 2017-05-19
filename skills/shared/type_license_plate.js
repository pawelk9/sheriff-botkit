const platePattern = require('./../../core/validators/license_plate_patterns');
const logger = require('../../utils/logger');

module.exports = (controller) => {
  controller.on('type_license_plate', (bot, message) => {
    bot.createConversation(message, (err, convo) => {

      convo.addQuestion('Podaj swoją tablicę rejestracyjną', [{
          pattern: platePattern.PL,
          callback: (response, convo) => {
            logger.debug(response);
            bot.replyWithTyping(message, 'Zapisane! Wyślę do Ciebie wiadomość jak tylko coś dostanę :)');
            convo.next();
          },
        },
        {
          default: true,
          callback: (response, convo) => {
            logger.debug(response);
            convo.say('Nie mogę rozponać tablicy. Wpisz w formacie XX XXXXX lub XXX XXXX.');
            convo.repeat();
            convo.next();
          },
        }
      ], {}, 'default');

      convo.activate();

      convo.on('end', convo => {
        if (convo.status === 'completed') {
          var res = convo.extractResponses();
          logger.debug(`Extracted response: ${res}`);
        } else {
          logger.info(`License plate conversation failed. ${convo.status}`);
        }
      });
    });
  });
};