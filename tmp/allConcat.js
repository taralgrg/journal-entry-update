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
