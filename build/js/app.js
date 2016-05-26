(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "AIzaSyDEsTxSKXviXi88jcHejKJzXwp7X-VYtaE";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
//

exports.initMap = function() {
        var myMap = document.getElementById('map');
        var map = new google.maps.Map(myMap, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 8
        });
      }

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
//

exports.initMap = function() {
        var myMap = document.getElementById('map');
        var map = new google.maps.Map(myMap, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 8
        });
      }

var myMap = require('../js/google-api.js').initMap;

$(document).ready(function() {
$("#map").append(myMap);
});

},{"../js/google-api.js":2,"./../.env":1}]},{},[3]);
