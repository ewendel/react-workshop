var _ = require('lodash');
var Twit = require('twit');
var WebSocketServer = require('ws').Server

var LOCATIONS = {
    EUROPE: '-13.380968, 37.810047, 31.443250, 70.709137',
    WORLD: '-180,-90,180,90'
};

var SPEED = {
    VERY_SLOW: 0.01,
    SLOW: 0.1,
    MEDIUM: 0.2,
    FAST: 0.4,
    FASTER: 0.6,
    FASTEST: 1.0
};

var currentSpeed = SPEED.FAST;

module.exports = function(server, twitterConfig) {
    var T = new Twit(twitterConfig);

    var wss = new WebSocketServer({ server: server });

    var stream = T.stream('statuses/filter', {
        locations: LOCATIONS.WORLD,
        language: 'en'
    });

    wss.on('connection', function(ws) {
        var pushTweet = pushTo(ws);
        stream.on('tweet', pushTweet)

        ws.on('close', function() {
            stream.removeListener('tweet', pushTweet);
        });
    });
}

function pushTo(ws) {
    var tweetCount = 0;
    return function (tweet) {
        if (tweetCount > 0 && Math.random() > currentSpeed) return;
        if (tweet.coordinates == null) return;
        if (tweet.place == null) return;

        var tw = _.pick(tweet, 'id', 'text', 'geo', 'place', 'user', 'entities', 'lang');
        ws.send(JSON.stringify(tw), function(err) {
            if (err) console.log(err);
        });
        tweetCount += 1;
    }
};

