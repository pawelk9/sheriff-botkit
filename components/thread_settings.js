var debug = require('debug')('botkit:thread_settings');



module.exports = function(controller) {

    console.log('Configuring Facebook thread settings...');
    controller.api.messenger_profile.greeting("Siemandero!")
    controller.api.messenger_profile.get_started('sample_get_started_payload');
    


}
