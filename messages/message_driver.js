const payload = require('./../consts/payloads');

module.exports = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "Message driver?",
        "buttons": [{
                "type": "postback",
                "title": "Yes",
                "payload": payload.MESSAGE_DRIVER_YES
            },
            {
                "type": "postback",
                "title": "No",
                "payload": payload.MESSAGE_DRIVER_NO
            }
        ]
    }
}