var React = require('react');
var _ = require('lodash');

var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;

function TweetMap({ tweets, showTweet, currentTweet }) {
        var markers = tweets.map(function(t) {
            var callback = function() {
                showTweet(t.id);
            }
            var icon = t === currentTweet ?
              'http://maps.google.com/mapfiles/ms/icons/green-dot.png' :
              'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

            return <Marker
                key={ t.id }
                onClick={ callback }
                icon={ icon }
                position={{ lat: t.geo.coordinates[0], lng: t.geo.coordinates[1] }} />
        });

        return <div className="tweet-map">
                <GoogleMapLoader
                    googleMapElement={
                      <GoogleMap
                        defaultZoom={3}
                        defaultCenter={{ lat: 30.675226, lng: -35.051272 }}>
                        { markers }
                      </GoogleMap>
                    }
                  />
                </div>
};

module.exports = TweetMap;
