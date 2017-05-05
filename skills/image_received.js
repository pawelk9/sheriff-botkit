module.exports = function (controller) {

    controller.on('image_received', function (bot, message) {
        bot.reply(message, 'Nice image.');
    });

};