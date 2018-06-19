import React from 'react';

import Tweet from './Tweet';

const TweetList = props => (
    <ul className="tweetlist">
        {props.tweets
            .slice(-3)
            .map((tweet) => (
                <li key={tweet.id}><Tweet tweet={tweet} /></li>)
            )
        }
    </ul>
)
export default TweetList;
