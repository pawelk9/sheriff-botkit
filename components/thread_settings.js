var debug = require('debug')('botkit:thread_settings');



module.exports = function(controller) {

    console.log('Configuring Facebook thread settings...');
    controller.api.messenger_profile.greeting("Siemandero!")
    controller.api.messenger_profile.get_started('sample_get_started_payload');
    controller.api.messenger_profile.menu([
        {
            "type":"postback",
            "title":"Hello",
            "payload":"hello"
        },
        {
            "type":"postback",
            "title":"Help",
            "payload":"help"
        },
        {
          "type":"web_url",
          "title":"Botkit Docs",
          "url":"https://github.com/howdyai/botkit/blob/master/readme-facebook.md"
        },
    ]);

    console.log(controller.api.thread_settings.get_greeting());

}
