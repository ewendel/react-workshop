var React = require('react');

var Timer = require('./Timer');

function AppHeader({ tweetCount }) {
        return <div className="app-header">
            <h1>Twitterizer</h1>
            <div>
                <span className="tweet-stats-desc">seconds running</span>
                <strong><Timer/></strong>
            </div>
            <div>
                <span className="tweet-stats-desc">tweets captured</span>
                <strong>{ tweetCount }</strong>
            </div>
        </div>;
};

module.exports = AppHeader;
