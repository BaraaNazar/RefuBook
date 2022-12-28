import React from 'react';
import Carousel from 'react-elastic-carousel';
import testimonialImg from '../../../testimonal-img.png';

function Testimonial() {
  return (
    <div className="flex justify-between items-center w-screen m-10">
      <div>
        <img src={testimonialImg} alt="testimonialImg" />
      </div>
      <div className="flex w-1/2">
        <Carousel
          showArrows={false}
          enableAutoPlay
          className="flex justify-center"
        >
          <div className="flex flex-col space-y-2 justify-center items-left text-left">
            <p className="w-1/2">
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-2 justify-center items-left text-left">
            <p className="w-1/2">
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-2 justify-center items-left text-left">
            <p className="w-1/2">
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-2 justify-center items-left text-left">
            <p className="w-1/2">
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="w-1/2">
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Testimonial;
