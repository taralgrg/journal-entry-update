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
