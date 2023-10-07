import React from "react";
import './Navbar.css'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <span className="navbar-brand">
          <img src="images/newlogo_smooth.png" width="200" height="70" alt=""></img>
        </span>
        <ul class="navbar-right">
          <a class="btn navbar-btn" href='/'>Home</a>
          <a class="btn navbar-btn" href='/historical-map'>Historical data</a>
        </ul>
      </nav>
    )
  }
}

export default Navbar


// <nav className="navbar">
//         <span className="navbar-brand">
//           <img src="images/hurricane.png" width="30" height="30" alt=""></img>
//           CYCLONE VISION
//           <ul class="nav navbar-nav navbar-right">
//             <button class="btn btn-danger navbar-btn">Historical data</button>
//           </ul>
//         </span>
//       </nav>


// <nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <span class="navbar-brand" href="#">WebSiteName</a>
//     </div>

//     <ul class="nav navbar-nav navbar-right">

//     <button class="btn btn-danger navbar-btn">Historical data</button>
//     </ul>
//   </div>
// </nav>
