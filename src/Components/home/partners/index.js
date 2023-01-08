import React from 'react';
import Carousel from 'react-elastic-carousel';
import img from '../../../images/Pasted Graphic 2.png';

function Partners() {
  return (
    <div className="flex flex-col justify-center items-center space-y-16 md:p-16">
      <h1 className="text-3xl font-bold text-black">Our Partners</h1>
      <Carousel itemsToShow={4} showArrows={false} enableAutoPlay>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
        <div>
          <img src={img} alt="partner img" />
        </div>
      </Carousel>
    </div>
  );
}
export default Partners;
