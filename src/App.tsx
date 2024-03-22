import React from 'react';
import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "../src/pages/homePage/home";
import AboutMe from "../src/pages/aboutMePage/aboutMe"
import Resume from "./pages/resumePage/resume";
import Portfolio from "./pages/portfolioPage/portfolio"

function App() {
  return (
      //Remark: Deploy on GitHub using browserRouter will lead to routing bug
      //use HashRouter instead
      // <BrowserRouter>
      <HashRouter>
          <Routes>
              <Route path="/home" element={ <Home/>} />
              <Route path="/aboutme" element={ <AboutMe/>} />
              <Route path="/resume" element={ <Resume/>} />
              <Route path="/portfolio" element={ <Portfolio/>} />
              <Route path="/" element={<Home/> } />
              <Route path="*" element={ <Home/>} />
          </Routes>
      </HashRouter>
  );
}

export default App;
