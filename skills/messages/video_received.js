module.exports = (controller) => {

    controller.on('video_received', function (bot, message) {
        bot.reply(message, 'Nice video dude!');
        controller.trigger('add_more', [bot, message]);
    });
};