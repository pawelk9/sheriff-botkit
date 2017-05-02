module.exports = function(controller) {

    const payload = require('./../consts/payload');
    

    controller.on('facebook_postback', function(bot, message) {
        console.log(payload);
        bot.reply(message, 'Payload: ' + message.payload);

    });
};