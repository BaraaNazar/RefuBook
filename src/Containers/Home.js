import React from 'react';
import Testimonial from '../Components/home/testimonials';
import Partners from '../Components/home/partners';
import About from '../Components/home/about';
import Features from '../Components/home/features';
import LatestStories from '../Components/home/stories';
import HomeBody from '../Components/home/home';
import Footer from '../Components/home/footer';

function Home() {
  return (
    <div>
      <HomeBody />
      <About />
      <Features />
      <Testimonial />
      <Partners />
      <LatestStories />
      <Footer />
    </div>
  );
}
export default Home;
