(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.titleEntry = title;
  this.bodyEntry = body;
}

Entry.prototype.words = function(bodyEntry) {
  return bodyEntry.split(" ").length;
};

Entry.prototype.vowels = function(bodyEntry) {
  bodyEntry = bodyEntry.toLowerCase();
  var vowelsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "a" || bodyEntry.charAt(i) == "e" ||
    bodyEntry.charAt(i) == "i" || bodyEntry.charAt(i) == "o" || bodyEntry.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

Entry.prototype.consonants = function(bodyEntry) {
  bodyEntry = bodyEntry.toLowerCase();
  var consonantsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "b" || bodyEntry.charAt(i) == "c" ||
    bodyEntry.charAt(i) == "d" || bodyEntry.charAt(i) == "f" || bodyEntry.charAt(i) == "g" || bodyEntry.charAt(i) == "h" || bodyEntry.charAt(i) == "j" || bodyEntry.charAt(i) == "k" || bodyEntry.charAt(i) == "l" || bodyEntry.charAt(i) == "m" || bodyEntry.charAt(i) == "n" || bodyEntry.charAt(i) == "p" || bodyEntry.charAt(i) == "q" || bodyEntry.charAt(i) == "r" || bodyEntry.charAt(i) == "s" || bodyEntry.charAt(i) == "t" || bodyEntry.charAt(i) == "v" || bodyEntry.charAt(i) == "w" || bodyEntry.charAt(i) == "x" || bodyEntry.charAt(i) == "y" || bodyEntry.charAt(i) == "z") {
      consonantsCount += 1;
    }
  }
  return consonantsCount;
};

Entry.prototype.firstsentence = function(bodyEntry) {
    var firstSentence = bodyEntry.split('.')[0];
    var eightWords = [];
    var d = firstSentence.split(' ');
    var e=0;
    while (e<8){
      eightWords.push(d[e]);
      e++;
    }

  var finalEight = eightWords.join(' ');
  return finalEight;
};

exports.journalModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var titleEntry = $('#title-entry').val();
    var bodyEntry = $('#body-entry').val();
    var newEntry = new Entry(titleEntry, bodyEntry);
    var words = newEntry.words(bodyEntry);
    var vowels = newEntry.vowels(bodyEntry);
    var consonants = newEntry.consonants(bodyEntry);
    var firstsentence = newEntry.firstsentence(bodyEntry);
    $('#number-words').text(words);
    $('#number-vowels').text(vowels);
    $('#number-consonants').text(consonants);
    $('#get-teaser').text(firstsentence);
    });
  });

$(document).ready(function(){
  console.log("time interface ready");
  $('#time').text(moment());
});

var apiKey = "27e16e634343fb245cd171b26a8a4bf4";


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      //console.log(response.main.humidity);
       $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});

},{"./../js/journal.js":1}]},{},[2]);
