var _ = require('lodash');
var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({

    render: function() {
        var tweets = _.chain(this.props.tweets)
            .sortBy(function(t) {
                return -t.user.followers_count;
            })
            .slice(0, 3)
            .map(function(tweet) {
                return <li>
                    <Tweet tweet={ tweet } />
                </li>
            })
            .value();

        return <ul className="tweetlist">
            { tweets }
        </ul>
    }

});
