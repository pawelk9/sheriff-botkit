var debug = require('debug')('botkit:thread_settings');
const payload = require('./../consts/payloads');


module.exports = function(controller) {

    console.log('Configuring Facebook thread settings...');
    controller.api.messenger_profile.get_started(payload.GET_STARTED);
    controller.api.messenger_profile.greeting("Cześć {{user_first_name}}!") 
}
