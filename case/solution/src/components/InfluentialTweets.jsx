import React from 'react';
import _ from 'lodash';
import Tweet from './Tweet';

const InfluentialTweets = (props) => {
    const tweets = _.chain(props.tweets)
        .sortBy((t) => -t.user.followers_count)
        .slice(0, 3)
        .map((tweet) => (
            <li key={ tweet.id }>
                <Tweet tweet={ tweet } />
            </li>
        ))
        .value();

    return (
        <ul className="tweetlist">
            {tweets}
        </ul>
    );
};

export default InfluentialTweets;
