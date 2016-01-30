var React = require('react');
var _ = require('lodash');

var Map = require('google-map-react');

var TweetMap = React.createClass({
    displayName: 'TweetMap',

    render: function() {

        var props = this.props;

        // var markers = this.props.tweets.map(function(t) {
        //     var callback = function() {
        //         props.showTweet(t.id);
        //     }
        //     var icon = t === props.currentTweet ?
        //       'http://maps.google.com/mapfiles/ms/icons/green-dot.png' :
        //       'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

        //     return <Marker
        //         onClick={ callback }
        //         icon={ icon }
        //         position={new GoogleMapsAPI.LatLng(t.geo.coordinates[0], t.geo.coordinates[1])} />
        // });

        return <div className="tweet-map">
                  <Map
                      defaultZoom={3}
                      defaultCenter={{ lat: 30.675226, lng: -35.051272 }}>
                  </Map>
                </div>
    }
});

module.exports = TweetMap;
