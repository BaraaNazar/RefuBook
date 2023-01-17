import React from 'react';
import img from '../../../images/hope_refugees_safe_blog_header_01.jpg';

function HeroImage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={img} alt="HeroImage" />
    </div>
  );
}
export default HeroImage;
