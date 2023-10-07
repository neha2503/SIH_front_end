import React from "react";
import './Buttons.css';

var band = "MIR";

class Buttons extends React.Component {
  handleClick(s) {
    console.log(s);
    band = s;
  };

  render () {
    return (
      <div className="button-col">
      <button className="first-button btn-dark shadow-none" value="TIR1">TIR1</button>
      <button className="second-button btn-dark shadow-none" value="TIR2">TIR2</button>
      <button className="third-button btn-dark shadow-none" value="MIR">MIR</button>
      <button className="fourth-button btn-dark shadow-none" value="SWIR">SWIR</button>
      <button className="fifth-button btn-dark shadow-none" value="VIS">VIS</button>
      <button className="sixth-button btn-dark shadow-none" value="WV">WV</button>
      </div>
    );
  }
}

export { Buttons, band };


// <button className="first-button btn-dark shadow-none" onClick={() => this.handleClick("TIR1")}>TIR1</button>
// <button className="second-button btn-dark shadow-none" onClick={() => this.handleClick("TIR2")}>TIR2</button>
// <button className="third-button btn-dark shadow-none" onClick={() => this.handleClick("MIR")}>MIR</button>
// <button className="fourth-button btn-dark shadow-none" onClick={() => this.handleClick("SWIR")}>SWIR</button>
// <button className="fifth-button btn-dark shadow-none" onClick={() => this.handleClick("VIS")}>VIS</button>
// <button className="sixth-button btn-dark shadow-none" onClick={() => this.handleClick("WV")}>WV</button>
