var _ = require('lodash');
var React = require('react');
var Tweet = require('./Tweet');

function InfluentialTweets({ tweets }) {
    var tweets = _.chain(tweets)
        .sortBy(function(t) {
            return -t.user.followers_count;
        })
        .slice(0, 3)
        .map(function(tweet) {
            return <li key={ tweet.id }>
                <Tweet tweet={ tweet } />
            </li>
        })
        .value();

    return <ul className="tweetlist">
        { tweets }
    </ul>
};

module.exports = InfluentialTweets;