module.exports = function (controller) {

    controller.on('message_received', function (bot, message) {
        console.log(message);
        if (!message.text) {
            if (message.sticker_id) {
                controller.trigger('sticker_received', [bot, message]);
                return false;
            } else if (message.attachments && message.attachments[0]) {
                controller.trigger(message.attachments[0].type + '_received', [bot, message]);
                return false;
            }
        } else {
            bot.reply(message, 'Nice text');
        }
    });
}