import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Footer from './Components/home/footer';
import Login from './Containers/LogIn';
import Layout from './Containers/Layout';
import SignUp from './Containers/SignUp';
import Contact from './Containers/ContactPage';
import About from './Containers/About'



function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/about" element={<Layout />} >
        <Route index element={<About />} />
        </Route>
      </Routes>

      <Outlet />

    </div>
  );
}

export default App;
