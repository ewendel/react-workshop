import React from 'react';
import _ from 'lodash';

// import countries from '/util/countries';
import Flag from './Flag';

const NO_OF_COUNTRIES = 25;

const CountryList = ({ countries }) => {
    const items = _.chain(countries)
        .map((count, country) => ({ countryCode: country, tweetCount: count }))
        .sortBy(item => -item.tweetCount)
        .slice(0, NO_OF_COUNTRIES)
        .map((item, index) => (
            <li key={item.countryCode}>
                <Flag countryCode={item.countryCode} />
                <span className="country-tweet-count">{ item.tweetCount }</span>
            </li>
        ))
        .value();

    return (
        <ul className="countrylist">
            {items}
        </ul>
    );
};

export default CountryList;
