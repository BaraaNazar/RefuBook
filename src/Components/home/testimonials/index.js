import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import testimonialImg from '../../../images/testimonal-img.png';
import './style.css';

function Testimonial() {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly items-center w-full space-y-4 text-center dark:bg-gray-900 dark:text-white p-16">
      <div>
        <img src={testimonialImg} className="w-fit p-4" alt="testimonialImg" />
      </div>
      <div className="w-96">
        <Carousel showArrows={false} itemPosition={consts.END} itemsToShow={1}>
          <div className="flex flex-col justify-self-end space-y-4 text-center md:text-left">
            <p>
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 title="Header" className="text-gray-500">
                Louis Li,
              </h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center">
            <p>
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center">
            <p>
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center">
            <p>
              Two lines of a short testimonial from someone want to say
              something, and can say more to explain.
            </p>
            <div>
              <h3 className="text-gray-500">Louis Li,</h3>
              <h3 className="text-gray-500">Trainer at Recoded</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center">
            <p>
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
