// var apiKey = require('./../.env').apiKey;
//

var myMap = require('../js/google-api.js').initMap;

$(document).ready(function() {
$("#map").append(myMap);
});
