import React from 'react';
import Tweet from './Tweet';

const CurrentTweet = (props) => (
    <div className="current-tweet">
        <Tweet { ...props } />
    </div>
);

export default CurrentTweet;
