const payload = require('./../consts/payloads');

module.exports = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "Add more or message driver",
        "buttons": [{
                "type": "postback",
                "title": "More",
                "payload": payload.ADD_MORE
            },
            {
                "type": "postback",
                "title": "Send message",
                "payload": payload.MESSAGE_DRIVER
            }
        ]
    }
}