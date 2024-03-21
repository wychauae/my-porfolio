import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/pages/homePage/home";
import AboutMe from "../src/pages/aboutMePage/aboutMe"

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={ <Home/>} />
              <Route path="/aboutme" element={ <AboutMe/>} />
              <Route path="/" element={<Home/> } />
              <Route path="*" element={ <Home/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
