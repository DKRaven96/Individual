# Individuel opgave
## Denne opgave omhandler:

* Oktoberfest og dens oprindelse
* Eksempel på et sted man kan fejre oktoberfest i Danmark
* Et mapbox som viser lokationen på stedet
* Vejrudsigt over Aarhus

![oktoberfest.jpg](oktoberfest.jpg)

[Designbywittig](http://www.designbywittig.dk/eaaa/individual/)


## Eksempel på kode:

~~~
$('#result').append(
'<div class="weatherInfo">' +
'<h1> ' + data.name + ' </h1>' +
'<h2>Vejr: ' + data.weather[0].description + '</h2>' +
'<figure>' +
'<img src="images/' + data.weather[0].icon + '.png" alt="Vejrsymbol">' +
'</figure>' +
'<p> Solnedgang: ' + sunsetTime + '</p>' +
'</div>');
~~~
