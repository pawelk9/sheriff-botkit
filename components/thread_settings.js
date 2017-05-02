var debug = require('debug')('botkit:thread_settings');



module.exports = function(controller) {

    console.log('Configuring Facebook thread settings...');
    controller.api.messenger_profile.get_started('GET_STARTED');
    controller.api.messenger_profile.greeting("Cześć bolcu!") 
}
