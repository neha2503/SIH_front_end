import './App.css'
import HistoricalMap from './components/HistoricalMap.js'
import HomeMap from './components/HomeMap.js'
import Navbar from './components/Navbar.js'
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<HomeMap />} />
      <Route path="historical-map" element={<HistoricalMap />} />
    </Routes>
    </div>
  );
}

export default App;
