import React from 'react';
import Carousel from 'react-elastic-carousel';
import img from '../../../images/Join-Us.jpg';

function OurPartners() {
  return (
    <div className="flex flex-col justify-center items-center space-y-16 md:p-16 p-4">
      <h1 className="text-3xl font-bold text-blue-900">Partners</h1>
      <Carousel itemsToShow={4} showArrows={false} enableAutoPlay>
        <div>
          <img className='p-5' src={img} alt="partner img" />
        </div>
        <div>
          <img className='p-5' src={img} alt="partner img" />
        </div>
        <div>
          <img className='p-5' src={img} alt="partner img" />
        </div>
        <div>
          <img className='p-5' src={img} alt="partner img" />
        </div>
        <div>
          <img className='p-5' src={img} alt="partner img" />
        </div>
        <div>
          <img className='p-5' src={img} alt="partner img" />
        </div>
      </Carousel>
    </div>
  );
}
export default OurPartners;
