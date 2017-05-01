var debug = require('debug')('botkit:thread_settings');



module.exports = function(controller) {

    console.log('Configuring Facebook thread settings...');
    controller.api.messenger_profile.get_started('get_started_payload');
}
