import React from 'react';
// import {useState} from 'react'
import './App.css';
import NavBar from './Components/Body components/NavBar';
// import { Switch, Route } from "react-router-dom";


function App() {
  // const [page,setPage]= useState("/")
  return (
    <div>
      {/* <NavBar onChangePage={setPage}/> */}
      <NavBar/>
      {/* <Switch>
                <Route exact path='/home'></Route>
                <Route exact path='/about'></Route>
                <Route exact path='/blog'></Route>
                <Route exact path='/contact'></Route>
                <Route exact path='/signup'></Route>
            </Switch> */}
    </div>
  );
}

export default App;
