module.exports = function (controller) {

    controller.on('message_received', function(bot, message){
        console.log(message);
        bot.reply(message, 'Nice message');
    });

}