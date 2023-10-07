mapboxgl.accessToken = 'pk.eyJ1IjoicGFoYXlpbTQxMCIsImEiOiJjbDZ6MnpiY2QwMGlsM3BxeWhjank1NGIxIn0.tzLhD_QcQc5ezTwJ7wtrjg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
center: [74.41, 20.25], // starting position [lng, lat]
zoom: 3 // starting zoom
});

var csvc = [103.6, 52.4, 45.0, -4.7] //maxX, maxY, minX, minY
const base_url = 'https://temp-data-react.s3.ap-south-1.amazonaws.com/'
var band_url = 'images/images/img'
var k = 4;

map.on('load', () => {
  map.resize();
  map.addSource('someimage', {
    url: base_url + band_url + String(k) + '.png',
    coordinates: [
      [csvc[2], csvc[1]],
      [csvc[0], csvc[1]],
      [csvc[0], csvc[3]],
      [csvc[2], csvc[3]],
    ],
    type: 'image'
  });
  map.addLayer({
    "id": "someimage",
    "source": "someimage",
    "type": "raster",
    "paint": {
      "raster-opacity" : 0.5
    }
  });

  const mySource = map.getSource('someimage');
  const pbtn = document.querySelector("#prev");
  pbtn.addEventListener('click', function () {
    if (k===1)
      k = 10;
    else
      k = k - 1;
    mySource.updateImage({
      url: base_url + band_url + String(k) + '.png'
    });
  });
  
  const nbtn = document.querySelector("#next");
  nbtn.addEventListener('click', function () {
    if (k===10)
      k = 1;
    else
      k = k + 1;
    mySource.updateImage({
      url: base_url + band_url + String(k) + '.png'
    });
  });

});
