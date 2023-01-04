import React from 'react';
import NavBar from './Navbar';
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
      <CallToAction />
    </div>
  );
}
export default About;
