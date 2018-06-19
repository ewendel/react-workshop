import React, { Component } from 'react';
import Flag from './Flag';

class Tweet extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.tweet !== nextProps.tweet;
    }
    render() {
        const { user, text, place } = this.props.tweet;

        return (
            <div className="tweet">
                <div className="tweet-header">
                    <img className="tweet-image" src={ user.profile_image_url } />
                    <div className="tweet-image-offset tweet-name">{ user.name }</div>
                    <div className="tweet-image-offset tweet-screen-name">@{ user.screen_name }</div>
                </div>

                <div className="tweet-text">{ text }</div>
                <div className="tweet-stats">
                    <span className="tweet-user-followers">
                        <strong>{ user.followers_count }</strong>
                        <span className="tweet-stats-desc">followers</span>
                    </span>
                </div>
                <Flag countryCode={place.country_code} />
                <span className="tweet-country tweet-stats-desc">{ place.country }</span>
                <div className="tweet-city tweet-stats-desc">{ place.name }</div>
            </div>
        );
    }
}

export default Tweet;
