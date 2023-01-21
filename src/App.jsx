import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import About from './Containers/About';
import Login from './Containers/LogIn';
import Layout from './Containers/Layout';
import SignUp from './Containers/SignUp';
import Contact from './Containers/ContactPage';
import ChatsAll from './Containers/ChatsAll';
import UserProfile from './Containers/UserProfile';
import BlogPage from './Containers/BlogPage';
import SingleblogPage from './Components/blog-page/single blog page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ChatsAll" element={<ChatsAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/BlogPage/singleblog" element={<SingleblogPage />} />
      </Routes>
      

      <Outlet />
    </div>
  );
}

export default App;
