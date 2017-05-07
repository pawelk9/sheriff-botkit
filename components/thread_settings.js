var debug = require('debug')('botkit:thread_settings');
const payload = require('./../consts/payloads');


module.exports = function (controller) {

    console.log('Configuring Facebook thread settings...');
    controller.api.messenger_profile.get_started(payload.GET_STARTED);
    controller.api.messenger_profile.greeting("Cześć {{user_first_name}}!");
    controller.api.messenger_profile.menu([{
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions": [{
                "title": "Sukooo",
                "type": "nested",
                "call_to_actions": [{
                        "title": "Powiadamiaj mnie",
                        "type": "postback",
                        "payload": "SUBSCRIBE_TO_NOTIFICATIONS"
                    },
                    {
                        "title": "Rezygnuję z powiadomień",
                        "type": "postback",
                        "payload": "UNSUBSCRIBE_TO_NOTIFICATIONS"
                    },
                    {
                        "title": "Zablokuj użytkownika",
                        "type": "postback",
                        "payload": "BLOCK_DRIVER"
                    }
                ]
            },
            {
                "title": "Powiadom kierowce",
                "type": "postback",
                "payload": "MESSAGE_DRIVER"
            },
            {
                "title": "Pomocy!",
                "type": "postback",
                "payload": "GET_HELP"
            }
        ]
    }]);
}