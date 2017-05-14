module.exports = (messangerId) => {
    request({
        uri: "https://graph.facebook.com/v2.6/" + messangerId,
        qs: {
            fields: "first_name,last_name,profile_pic,locale,timezone,gender",
            access_token: process.env.page_token
        },
        method: 'GET',
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return body;

        } else {
            console.error("Unable to send message:" + response.error);
        }
    });
}