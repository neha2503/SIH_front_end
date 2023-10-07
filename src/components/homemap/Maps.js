import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Maps.css';
import xydata from '../geodata.json';

mapboxgl.accessToken = 'pk.eyJ1IjoicGFoYXlpbTQxMCIsImEiOiJjbDZ6MnpiY2QwMGlsM3BxeWhjank1NGIxIn0.tzLhD_QcQc5ezTwJ7wtrjg';
var csvc = [105.50, 45.49, 44.49, -9.99] //maxX, maxY, minX, minY
const base_url = 'https://temp-data-react.s3.ap-south-1.amazonaws.com/'
var k = 1
var channel = 'TIR1'
var band_url_one = 'pngcsv/' + channel + '/3DIMG_' + xydata[k-1].properties.date + '_' + xydata[k-1].properties.time
var band_url_two = '_L1C_ASIA_MER_IMG_' + channel + '.png'
//var ind = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

class Maps extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 74.41,
      lat: 20.25,
      zoom: 3
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });

    function callmarker(map) {
      for (const feature of xydata) {
        const el = document.createElement('div');
        el.className = 'marker';
        if (feature.tempno === k) {
          new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
          new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 10 }) // add popups
              .setHTML(
                `<p>${feature.properties.title}</p><h4>${feature.properties.description}</h4>`
              )
          )
          .addTo(map);
          // new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
          // .setPopup(
          //   new mapboxgl.Popup({ offset: 10, anchor: 'bottom'}) // add popups
          //     .setHTML(
          //       `<p>Date: ${feature.properties.date}</p><p>Time: ${feature.properties.time}</p>`
          //     )
          // )
          // .addTo(map).togglePopup();
        }
      }
    }

    function deletemarker() {
      document.querySelector(".marker").remove();
    }

    map.on('load', () => {
      map.resize();

      map.addSource('someimage', {
      // url: 'https://temp-data-react.s3.ap-south-1.amazonaws.com/geotiff/3DIMG_11OCT2014_1600_L1C_ASIA_MER_IMG_MIR.tif',
        url: base_url + band_url_one + band_url_two,
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
          "raster-opacity" : 0.7
        }
      });

      callmarker(map);

      const mySource = map.getSource('someimage');
      document.querySelector(".date-span").textContent = xydata[k-1].properties.date;
      document.querySelector(".time-span").textContent = xydata[k-1].properties.time;

      let arrayOfbuttons = document.querySelectorAll('.btn-dark');
      arrayOfbuttons.forEach(buttn =>
          buttn.addEventListener('click', changeband));
      function changeband(event) {
        const button = event.target;
        // alert(button.value)
        channel = button.value
        // alert("put as value" + channel)
        band_url_one = 'pngcsv/' + channel + '/3DIMG_' + xydata[k-1].properties.date + '_' + xydata[k-1].properties.time
        band_url_two = '_L1C_ASIA_MER_IMG_' + channel + '.png'
        mySource.updateImage({
          url: base_url + band_url_one + band_url_two
        });
        deletemarker();
        callmarker(map);

      }

      const pbtn = document.querySelector("#prev");
      pbtn.addEventListener('click', function () {
        if (k===1)
          {}
        else
          k = k - 1
        band_url_one = 'pngcsv/' + channel + '/3DIMG_' + xydata[k-1].properties.date + '_' + xydata[k-1].properties.time
        band_url_two = '_L1C_ASIA_MER_IMG_' + channel + '.png'

        mySource.updateImage({
          url: base_url + band_url_one + band_url_two
        });
        deletemarker();
        callmarker(map);
        document.querySelector(".date-span").textContent = xydata[k-1].properties.date;
        document.querySelector(".time-span").textContent = xydata[k-1].properties.time;
      });

      const nbtn = document.querySelector("#next");
      nbtn.addEventListener('click', function () {
        if (k===10)
          {}
        else
          k = k + 1
        band_url_one = 'pngcsv/' + channel + '/3DIMG_' + xydata[k-1].properties.date + '_' + xydata[k-1].properties.time
        band_url_two = '_L1C_ASIA_MER_IMG_' + channel + '.png'
        console.log(channel);
        mySource.updateImage({
          url: base_url + band_url_one + band_url_two
        });
        deletemarker();
        callmarker(map);
        document.querySelector(".date-span").textContent = xydata[k-1].properties.date;
        document.querySelector(".time-span").textContent = xydata[k-1].properties.time;
      });

      // for (const feature of xydata) {
      //   // create a HTML element for each feature
      //   const el = document.createElement('div');
      //   el.className = 'marker';
      //   // make a marker for each feature and add to the map
      //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

      //   new mapboxgl.Marker(el)
      //   .setLngLat(feature.geometry.coordinates)
      //   .setPopup(
      //     new mapboxgl.Popup({ offset: 25 }) // add popups
      //       .setHTML(
      //         `<p>${feature.properties.title}</p><h4>${feature.properties.description}</h4>`
      //       )
      //   )
      //   .addTo(map);
      // }

    });
  }
    render() {
      return (
        <div>
          <div ref={this.mapContainer} className="map-container" id="map"/>
        </div>
      );
    }
}

export default Maps
