import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Contact from './Containers/ContactPage';
import Home from './Containers/Home';
import Login from './Containers/LogIn';
import Layout from './Containers/Layout';
import SignUp from './Containers/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
