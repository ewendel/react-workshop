import React from 'react';

const Flag = props => (
    <span className={`tweet-flag flag-icon flag-icon-${props.countryCode.toLowerCase()}`} />
);

export default Flag;
