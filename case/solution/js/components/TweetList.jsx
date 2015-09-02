var React = require('react');

var Tweet = require('./Tweet');

module.exports = React.createClass({

    render: function() {
        var tweets = this.props.tweets.slice(-3).map(function(t) {
            return <li><Tweet key={ t.id } tweet={ t } /></li>
        });

        return <ul className="tweetlist">
            { tweets }
        </ul>
    }

});
