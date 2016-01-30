var React = require('react');

var Tweet = require('./Tweet');

function TweetList({ tweets }) {
    var tweets = tweets.slice(-3).map(function(t) {
        return <li><Tweet key={ t.id } tweet={ t } /></li>
    });

    return <ul className="tweetlist">
        { tweets }
    </ul>
};

module.exports = TweetList;