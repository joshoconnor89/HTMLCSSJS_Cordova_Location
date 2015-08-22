    $( document ).ready(function() {
     function onSuccess(position) {
        var element = document.getElementById('geolocation');
           element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                         'Altitude: '          + position.coords.altitude          + '<br />' +
                          'Accuracy: '          + position.coords.accuracy          + '<br />' +
                          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br />' +
                             'Heading: '           + position.coords.heading           + '<br />' +
                             'Speed: '             + position.coords.speed             + '<br />' +
                           'Timestamp: '         + position.timestamp                + '<br />' + 
                        '<hr />';
   }

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds.
//

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {timeout: 1000, enableHighAccuracy: true });

      });