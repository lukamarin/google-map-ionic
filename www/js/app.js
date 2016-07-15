// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // Getting the map selector in DOM
    var div = document.getElementById("map_canvas");

    // Invoking Map using Google Map SDK v2 by dubcanada
    var map = plugin.google.maps.Map.getMap(div,{
        'camera': {
            'latLng': setPosition(-19.9178713, -43.9603117),
            'zoom': 10
        }
    });

    // Capturing event when Map load are ready.
    map.addEventListener(plugin.google.maps.event.MAP_READY, function(){

        // Defining markers for demo
        var markers = [{
            position: setPosition(-19.9178713, -43.9603117),
            title: "Marker 1"
        }, {
            position: setPosition(-19.8363826, -43.9787167),
            title: "Marker 2"
        }];

        // Bind markers
        for (var i = 0; i < markers.length; i++) {
            map.addMarker({
                'marker': markers[i],
                'position': markers[i].position
            }, function(marker) {

                // Defining event for each marker
                marker.on("click", function() {
                    alert(marker.get('marker').title);
                });

            });
        }
    });

    // Function that return a LatLng Object to Map
    function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
    }
  });
});
