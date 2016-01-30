var React = require('react');
var _ = require('lodash');

var countries = require('../util/countries');
var Flag = require('./Flag');

var NO_OF_COUNTRIES = 25;

function CountryList({ countries }) {
    var items = _.chain(countries)
        .map(function(count, country) {
            return { countryCode: country, tweetCount: count };
        })
        .sortBy(function(item) {
            return -item.tweetCount;
        })
        .slice(0, NO_OF_COUNTRIES)
        .map(function(item, index) {
            return <li key={item.countryCode}>
                       <Flag countryCode={item.countryCode} />
                       <span className="country-tweet-count">{ item.tweetCount }</span>
                   </li>
        })
        .value();

    return <ul className="countrylist">
        { items }
    </ul>;
};

module.exports = CountryList;
