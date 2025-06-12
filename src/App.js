import "./App.css";
import React ,{useState} from 'react';
import Navbar from './Components/Navbar.js';
import Main from "./Components/Main.js";
import Login from "./Components/Login.js";

import StudioReels from "./Components/StudioReels.js";
// import Mtv from "./Components/Mtv.js";
import WebcamCapture from './Components/WebcamCapture.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  // const [webCam, setWebCam]= useState(false);
  // const fireWebCam=()=>{
  //   setWebCam(true);
  // }

  return (
    

    <div>

      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/login" element={<Login/>}/>   
          <Route exact path="/" element={<Main/>}/>
          <Route exact path='/studio' element={<StudioReels/>}/>
        </Routes>

      </Router>
      {/* <WebcamCapture/> */}
      
    </div>
      
  );
}

export default App;
