import React, { Component } from 'react';

import TweetMap from './TweetMap';
import AppHeader from './AppHeader';
import CountryList from './CountryList';
import CurrentTweet from './CurrentTweet';
import InfluentialTweets from './InfluentialTweets';

const ws = new WebSocket('ws://localhost:9999');

class Dashboard extends Component {
    state = {
        tweets: [],
        tweetCount: 0,
        currentTweet: null,
        countries: {}
    };

    countCountry = countryCode => {
        const countries = { ...this.state.countries };
        countries[countryCode] = (countries[countryCode] || 0) + 1;
        this.setState({ countries });
    };

    componentDidMount() {
        ws.onmessage = (ms) => {
            const newTweet = JSON.parse(ms.data);
            const tweets = this.state.tweets.concat([newTweet]).slice(-100);
            this.setState({ 
                tweets, 
                tweetCount: this.state.tweetCount + 1,
            });

            const countryCode = newTweet.place.country_code;
            if (countryCode) {
                this.countCountry(countryCode);
            }
        };
    };

    componentWillUnmount() {
        ws.onmessage = null;
    }

    showTweet = id => {
        const currentTweet = this.state.tweets.find(tweet => tweet.id === id);
        if (!currentTweet) {
            console.log('Tweet no longer in selection');
        }
        this.setState({ currentTweet });
    }

    render() {
        const {
            tweets, 
            currentTweet,
            tweetCount,
            countries,
        } = this.state;
        return (
            <div>
                <TweetMap
                    tweets={tweets}
                    currentTweet={currentTweet}
                    showTweet={this.showTweet} 
                />
                <InfluentialTweets tweets={tweets} />
                <AppHeader tweetCount={tweetCount}/>
                <CountryList countries={countries} />
                {currentTweet && 
                    <CurrentTweet tweet={currentTweet} />
                }
            </div>
        );
    }
}

export default Dashboard;
