import React from "react"
import './Information.css'

class Information extends React.Component {
  render () {
    return (
      <div className="div-for-info">
        <span>Date:</span>
        <p className="date-span"></p>
        <span>Time</span>
        <p className="time-span"></p>
      </div>
    );
  }
}

export default Information
