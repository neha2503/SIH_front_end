import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './MapHistorical.css';
import xydata from '../geodata.json';
import Popup from 'reactjs-popup';
import ReactDOM from 'react-dom';
import Plot from 'react-plotly.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicGFoYXlpbTQxMCIsImEiOiJjbDZ6MnpiY2QwMGlsM3BxeWhjank1NGIxIn0.tzLhD_QcQc5ezTwJ7wtrjg';
//var ind = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


export default class Maps extends React.PureComponent {
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

    const node = document.createElement("div");
    document.body.appendChild(node);
    const PopupContent = () => {
      return (
        <Popup open={true} className="popup-content">
          <h1>Title</h1>
          <p>Details</p>
          <button>Close</button>
        </Popup >
      );
    };

    map.on('load', () => {
      map.resize();

      const mySource = map.getSource('someimage');
      var hellow = "Wrok in Progress";

      for (const feature of xydata) {
        const el = document.createElement('div');
        el.className = 'marker-historical';
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup() // add popups
            .setHTML(
              "<img src='images/chapala_compressed.gif' class='historical-img'/>"
            )
        )
        .addTo(map);
      }
    });
  }


  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container historical-map" id="map"/>
      </div>
    );
  }

  // <h1>Work in Progress</h1><p>${hellow}</p>
}
