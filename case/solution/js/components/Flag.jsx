var React = require('react');

var Flag = React.createClass({
    displayName: 'Flag',

    render: function () {
        var countryCode = this.props.countryCode.toLowerCase();
        return <span className={"tweet-flag flag-icon flag-icon-" + countryCode }></span>;
    }
});

module.exports = Flag;
