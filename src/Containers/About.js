import React from 'react';
import HeroImage from '../Components/About/hero-image';
import Story from '../Components/About/story';
import Team from '../Components/About/team';
import CallToAction from '../Components/About/call-to-action';
import Footer from '../Components/home/footer';

function About() {
  return (
    <div>
      <HeroImage />
      <Story />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}
export default About;
