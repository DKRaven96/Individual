/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

    // mapbox

    mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZGVyaWtrZTk2IiwiYSI6ImNrZnFraTZ5cDBzNWsycHBmY3BpcmpqdGsifQ.Bdb1bcOa_D5dIGADOoF4qQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/frederikke96/ckfql15750arl1ammr1ly00kh', // stylesheet location
        center: [10.206, 56.159], // starting position [lng, lat]
        zoom: 16 // starting zoom
    });

    // openweather

    const token = "23d906040b1352cbd2acb626b4d3cb5d";
    const aarhus = "http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=" + token + "&units=metric";

    fetch(aarhus).then(response => {
        return response.json();
    }).then(data => {

        console.log(data);
        var sunsetMs = data.sys.sunset * 1000;
        var sunset = new Date(sunsetMs);
        var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();


        $('#result').append(
            '<div class="weatherInfo">' +
            '<h1> ' + data.name + ' </h1>' +
            '<h2>Vejr: ' + data.weather[0].description + '</h2>' +
            '<figure>' +
            '<img src="images/' + data.weather[0].icon + '.png" alt="Vejrsymbol">' +
            '</figure>' +
            '<p> Solnedgang: ' + sunsetTime + '</p>' +
            '</div>');


    }).catch(err => {

        console.log('There was an error ...');
    });


}); // denne line må ikke slettes
