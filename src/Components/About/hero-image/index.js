import React from 'react';
import img from '../../../images/Pasted Graphic.jpg';

function HeroImage() {
  return (
    <div className="w-fit flex justify-center items-center">
      <img src={img} alt="HeroImage" />
    </div>
  );
}
export default HeroImage;
