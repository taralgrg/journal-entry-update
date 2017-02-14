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
