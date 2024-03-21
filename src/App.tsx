import React from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "../src/pages/homePage/home";
import AboutMe from "../src/pages/aboutMePage/aboutMe"

function App() {
  return (
      //Remark: Deploy on Github using browserRouter will lead to routing bug
      //use HashRouter instead
      // <BrowserRouter>
      <HashRouter>
          <Routes>
              <Route path="/my-portfolio/home" element={ <Home/>} />
              <Route path="/my-portfolio/aboutme" element={ <AboutMe/>} />
              <Route path="/" element={<Home/> } />
              <Route path="*" element={ <Home/>} />
          </Routes>
      </HashRouter>
  );
}

export default App;
