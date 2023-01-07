import React from 'react';
import NavBar from './Navbar';
import Testimonial from '../Components/home/testimonials';
import OurPartners from '../Components/About/partners';
import HeroImage from '../Components/About/hero-image';
import Story from '../Components/About/story';
import Team from '../Components/About/team';
import CallToAction from '../Components/About/call-to-action';

function About() {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <Story />
      <Team />
      <div className="bg-sky-600 text-white">
        <Testimonial />
      </div>
      <OurPartners />
      <CallToAction />
    </div>
  );
}
export default About;
