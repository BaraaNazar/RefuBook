import React from 'react';
import Testimonial from '../Components/home/testimonials';
import About from '../Components/home/about';
import NavBar from '../Components/home/navbar'
import Features from '../Components/home/features';
import LatestStories from '../Components/home/stories';
 


function Home() {
  return (
    <div>
  <NavBar/>
      <Testimonial />
      <About />
      <Features />
      <LatestStories />
    </div>
  );
}
export default Home;
