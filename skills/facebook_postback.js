module.exports = function (controller) {
    controller.on('facebook_postback', function (bot, message) {
        console.log(message);
    });
};