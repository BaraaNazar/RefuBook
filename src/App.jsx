import React from 'react';
// import {useState} from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css';
import NavBar from './Components/home/navbar';
import Home from './Containers/Home';
// import { Switch, Route } from "react-router-dom";


function App() {
  // const [page,setPage]= useState("/")
  return (
    <div>
      {/* <NavBar onChangePage={setPage}/> */}
      <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
            
    </div>
  );
}

export default App;