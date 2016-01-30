var React = require('react');

var Tweet = require('./Tweet');

function CurrentTweet(props) {
    return <div className="current-tweet">
            <Tweet { ...props } />
        </div>;
};

module.exports = CurrentTweet;