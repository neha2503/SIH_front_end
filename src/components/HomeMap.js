import React from "react"
import { Buttons } from './homemap/Buttons.js'
import Slider from './homemap/Slider.js'
import BtnSlider from './homemap/BtnSlider.js'
import Maps from './homemap/Maps.js'
import Popuptext from './homemap/Popuptext.js'
import Information from './homemap/Information.js'


class HomeMap extends React.Component {
  render() {
    return (
      <div>
        <Buttons/>
        <BtnSlider/>
        <Maps/>
        <Popuptext/>
        <Information/>
      </div>
    );
  }
}

export default HomeMap
