function Entry(title, body) {
  this.titleEntry = title;
  this.bodyEntry = body;
}

Entry.prototype.words = function(bodyEntry) {
  return bodyEntry.split(" ").length;
}

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
}

Entry.prototype.consonants = function(bodyEntry) {
  bodyEntry = bodyEntry.toLowerCase();
  var consonantsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "b" || bodyEntry.charAt(i) == "c" ||
    bodyEntry.charAt(i) == "d" || bodyEntry.charAt(i) == "f" || bodyEntry.charAt(i) == "g"
    || bodyEntry.charAt(i) == "h" || bodyEntry.charAt(i) == "j" || bodyEntry.charAt(i) == "k"
    || bodyEntry.charAt(i) == "l" || bodyEntry.charAt(i) == "m" || bodyEntry.charAt(i) == "n"
    || bodyEntry.charAt(i) == "p" || bodyEntry.charAt(i) == "q" || bodyEntry.charAt(i) == "r"
    || bodyEntry.charAt(i) == "s" || bodyEntry.charAt(i) == "t" || bodyEntry.charAt(i) == "v"
    || bodyEntry.charAt(i) == "w" || bodyEntry.charAt(i) == "x" || bodyEntry.charAt(i) == "y"
    || bodyEntry.charAt(i) == "z") {
      consonantsCount += 1;
    }
  }
  return consonantsCount;
}

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
}

exports.journalModule = Entry;
