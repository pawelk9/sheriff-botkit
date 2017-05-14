const rp = require('request-promise');

var options = {

        uri: "https://graph.facebook.com/v2.6/" + '1465070823516350',
        qs: {
            fields: "first_name,last_name,profile_pic,locale,timezone,gender",
            access_token: process.env.page_token
        },
        json: true
    
};

module.exports = rp(options);