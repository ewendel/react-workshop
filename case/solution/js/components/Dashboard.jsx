var _ = require('lodash');
var React = require('react');
var TweetMap = require('./TweetMap');
var AppHeader = require('./AppHeader');
var CountryList = require('./CountryList');
var CurrentTweet = require('./CurrentTweet');
var InfluentialTweets = require('./InfluentialTweets');

var ws = new WebSocket('ws://localhost:9999');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            tweets: [],
            tweetCount: 0,
            currentTweet: null,
            countries: {}
        }
    },

    countCountry: function(countryCode) {
        var countries = _.clone(this.state.countries);
        countries[countryCode] = (countries[countryCode] || 0 ) + 1;
        this.setState({ countries: countries });
    },

    componentDidMount: function () {
        ws.onmessage = function(ms) {
            var newTweet = JSON.parse(ms.data);
            var tweets = this.state.tweets.concat([newTweet]).slice(-100);
            this.setState({ tweets: tweets, tweetCount: this.state.tweetCount + 1 });

            var countryCode = newTweet.place.country_code;
            if (countryCode) this.countCountry(countryCode);
        }.bind(this);
    },

    componentWillUnmount: function() {
        ws.onmessage = null;
    },

    showTweet: function(id) {
        var tweet = _.findWhere(this.state.tweets, { id: id });
        if (!tweet) console.log('Tweet no longer in selection');
        this.setState({ currentTweet: tweet });
    },

    render: function() {
        var tweet = null;
        if (this.state.currentTweet != null) {
            tweet = <CurrentTweet tweet={ this.state.currentTweet } />
        }

        return <div>
            <TweetMap
                tweets={ this.state.tweets }
                currentTweet={ this.state.currentTweet }
                showTweet={ this.showTweet} />
            <InfluentialTweets tweets={ this.state.tweets } />
            <AppHeader tweetCount={this.state.tweetCount}/>
            <CountryList countries={this.state.countries} />
            { tweet }
        </div>;
    }

});

