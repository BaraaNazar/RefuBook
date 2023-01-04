import React from 'react';
// import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Containers/Navbar';
import About from './Containers/About';
import Home from './Containers/Home';
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
