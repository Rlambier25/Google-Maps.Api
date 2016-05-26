var apiKey = require('./../.env').apiKey;
//

exports.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
        var map = new google.maps.Map(myMap, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 8
        });
      }

var myMap = require('../js/google-api.js').initMap;

$(document).ready(function() {
$("#map").append(myMap);
});
