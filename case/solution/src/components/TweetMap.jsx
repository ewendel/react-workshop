import React from 'react';

import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

const TweetMap = (props) => {
  const markers = props.tweets
    .map(tweet => {
      const icon = tweet === props.currentTweet ? 
        'http://maps.google.com/mapfiles/ms/icons/green-dot.png' :
        'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

      return (
        <Marker 
          key={tweet.id} 
          onClick={() => props.showTweet(tweet.id)} 
          icon={icon}
          position={{ 
            lat: tweet.geo.coordinates[0], 
            lng: tweet.geo.coordinates[1],
          }}
        />
      )
    });

    return (
      <div className="tweet-map">
        <GoogleMap
          defaultZoom={3}
          defaultCenter={{ lat: 30.675226, lng: -35.051272 }}
        >
          {markers}
        </GoogleMap>
      </div>
    )
}
const DecoratedTweetMap = withScriptjs(withGoogleMap(TweetMap));
export default props => (
  <DecoratedTweetMap 
    {...props} 
    loadingElement={<div>loading</div>}
    containerElement={<div className="tweet-map" />}
    mapElement={<div />}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places"
  />
);
