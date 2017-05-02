module.exports = function(controller) {

    controller.on('facebook_postback', function(bot, message) {
        bot.reply(message, 'Payload: ' + message.payload);
    });
};