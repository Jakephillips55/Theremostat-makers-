$(document).ready(function() {
    var thermostat = new Thermostat()
    updateTemp();

$('#getCurrentTemp').text(thermostat.temp);
    thermostat.getCurrentTemp(thermostat.temp);
    updateTemp(); 

$('#raiseTemp').click (function(){
      thermostat.raiseTemp(); 
      updateTemp();
    }); 

$('#dropTemp').click(function(){
    thermostat.dropTemp();
    updateTemp();
});

$('#reset').click(function(){
    thermostat.reset(); 
    updateTemp();
});
$('#pwrSave').click(function(){
    thermostat.pwrSave();
    $('#pwrSave').text('is on')
    updateTemp();
})
$('#ecoOff').click(function(){
    thermostat.ecoOff();
    $('#ecoOff').text('off').click
    updateTemp(); 
})
function updateTemp() {
    $('#getCurrentTemp').text(thermostat.temp); 
    // $('#temp').attr('class', thermostat.queryUsage());
    };

   
$("#font").change(function() {
    //alert($(this).val());
    $('Outside temp').css("font-family", $(this).val());
})
$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})
$('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })

  })
})