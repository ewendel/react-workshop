var React = require('react');
var Flag = require('./Flag');

module.exports = React.createClass({

    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.tweet !== nextProps.tweet;
    },

    render: function() {
        var tweet = this.props.tweet;

        return <div className="tweet">
            <div className="tweet-header">
                <img className="tweet-image" src={ tweet.user.profile_image_url } />
                <div className="tweet-image-offset tweet-name">{ tweet.user.name }</div>
                <div className="tweet-image-offset tweet-screen-name">@{ tweet.user.screen_name }</div>
            </div>

            <div className="tweet-text">{ tweet.text }</div>
            <div className="tweet-stats">
                <span className="tweet-user-followers">
                    <strong>{ tweet.user.followers_count }</strong>
                    <span className="tweet-stats-desc">followers</span>
                </span>
            </div>
            <Flag countryCode={tweet.place.country_code} />
            <span className="tweet-country tweet-stats-desc">{ tweet.place.country }</span>
            <div className="tweet-city tweet-stats-desc">{ tweet.place.name }</div>
        </div>
    }

});
