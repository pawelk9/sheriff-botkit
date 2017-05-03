const payload = require('./../consts/payloads');

module.exports = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "Receive notifications?",
        "buttons": [{
                "type": "postback",
                "title": "Yes",
                "payload": payload.RECEIVE_NOTIFICATIONS_YES
            },
            {
                "type": "postback",
                "title": "No",
                "payload": payload.RECEIVE_NOTIFICATIONS_NO
            }
        ]
    }
}