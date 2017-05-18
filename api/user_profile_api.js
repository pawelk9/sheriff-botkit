module.exports = (messangerId) => {
    return {
        uri: 'https://graph.facebook.com/v2.6/' + messangerId,
        qs: {
            fields: 'first_name,last_name,profile_pic,locale,timezone,gender',
            access_token: process.env.page_token
        },
        json: true
    };
};