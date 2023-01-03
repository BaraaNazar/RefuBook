import React from 'react';
// import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Contact from './Containers/ContactPage';
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
    

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
