module.exports = function (controller) {
    controller.on('menu_block_driver', function (bot, message) {
        bot.reply(message, 'Block driver');
    });
};