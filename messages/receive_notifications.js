const payload = require('./../consts/payloads');

module.exports = (messageText, yesText, noText) => {
    return {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": messageText,
            "buttons": [{
                    "type": "postback",
                    "title": yesText,
                    "payload": payload.RECEIVE_NOTIFICATIONS_YES
                },
                {
                    "type": "postback",
                    "title": noText,
                    "payload": payload.RECEIVE_NOTIFICATIONS_NO
                }
            ]
        }
    }
}