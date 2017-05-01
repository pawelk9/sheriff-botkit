module.exports = function (imageUrl, recipient) {
    request({
        uri: "https://api.openalpr.com/v2/recognize_url",
        qs: {
            secret_key: "sk_eba091d08e0166f7bca7453b",
            image_url: imageUrl,
            recognize_vehicle: 0,
            country: "eu",
            return_image: 0,
            topn: 10
        },
        method: 'POST',
    }, function (error, response, body) {
        console.log(error, body);
        if (!error && response.statusCode == 200) {
            var jsonObject = JSON.parse(body);
            if (jsonObject.results.length > 0) {
                sendTextMessage(recipient, `To mi wygląda na: ${jsonObject.results[0].plate}`);
            } else {
                sendTextMessage(recipient, `Nie rozpoznalem`);
            }
        } else {
            console.error("Unable recognize plate:" + response.error);
        }
    });
}