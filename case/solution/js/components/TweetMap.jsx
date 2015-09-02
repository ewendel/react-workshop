var React = require('react');
var _ = require('lodash');

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

var TweetMap = React.createClass({
    displayName: 'TweetMap',

    render: function() {

        var props = this.props;

        var markers = this.props.tweets.map(function(t) {
            var callback = function() {
                props.showTweet(t.id);
            }
            var icon = t === props.currentTweet ?
              'http://maps.google.com/mapfiles/ms/icons/green-dot.png' :
              'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

            return <Marker
                onClick={ callback }
                icon={ icon }
                position={new GoogleMapsAPI.LatLng(t.geo.coordinates[0], t.geo.coordinates[1])} />
        });

        return <div className="tweet-map">
                  <Map 
                      width="100%"
                      height="100%"
                      initialZoom={3}
                      scaleControl={false}
                      streetViewControl={false}
                      panControl={false}
                      zoomControl={false}
                      mapTypeControl={false}
                      initialCenter={new GoogleMapsAPI.LatLng(30.675226, -35.051272)} >

                      { markers }
                  </Map>
                </div>
    }
});

module.exports = TweetMap;
