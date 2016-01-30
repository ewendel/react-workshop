var React = require('react');

function Flag({ countryCode }) {
    var countryCode = countryCode.toLowerCase();
    return <span className={"tweet-flag flag-icon flag-icon-" + countryCode }></span>;
};

module.exports = Flag;
