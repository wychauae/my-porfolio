import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={ <Home/>} />
              <Route path="/" element={<Home/> } />
              <Route path="*" element={ <Home/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
