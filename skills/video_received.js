module.exports = function (controller) {

    controller.on('video_received', function (bot, message) {
        bot.reply(message, 'Nice video dude!');
    });
};