// Add console.log to check to see if our code is working.
console.log("working");

/*We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
The mapid will reference the id tag in our <div> element on the index.html file.
The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.*/
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);