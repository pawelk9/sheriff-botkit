var debug = require('debug')('botkit:thread_settings');



module.exports = function(controller) {

    console.log('Configuring Facebook thread settings...');
    con
    controller.api.thread_settings.greeting('Witaj, jestem Szeryf!');
    controller.api.thread_settings.get_started('sample_get_started_payload');
    controller.api.thread_settings.menu([
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

    console.log(controller.api.messenger_profile.get_greeting());

}
