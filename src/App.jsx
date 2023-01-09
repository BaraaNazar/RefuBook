import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Footer from './Components/home/footer';
import About from './Containers/About';
import Login from './Containers/LogIn';
import Layout from './Containers/Layout';
import SignUp from './Containers/SignUp';
import Contact from './Containers/ContactPage';
import UserProfile from './Containers/UserProfile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
      <Footer />

      <Outlet />
    </div> 
  );
}

export default App;
