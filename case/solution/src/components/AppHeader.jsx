import React from 'react';
import Timer from './Timer';

const AppHeader = (props) => (
    <div className="app-header">
        <h1>Twitterizer</h1>
        <div>
            <span className="tweet-stats-desc">seconds running</span>
            <strong><Timer/></strong>
        </div>
        <div>
            <span className="tweet-stats-desc">tweets captured</span>
            <strong>{props.tweetCount}</strong>
        </div>
    </div>
);

export default AppHeader;
