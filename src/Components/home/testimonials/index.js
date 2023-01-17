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
              As a refugee, my life has been filled with uncertainty and
              hardship. But through it all, I have found strength and resilience
              within myself that I never knew existed.
            </p>
            <div>
              <h3 title="Header" className="text-gray-300">
                Omer Ali,
              </h3>
              <h3 className="text-gray-300">Anbar</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center md:text-left">
            <p>
              Despite the challenges I have faced, I am grateful for the
              opportunities and support that have helped me rebuild my life and
              find hope for the future.
            </p>
            <div>
              <h3 title="Header" className="text-gray-300">
                Mohammed Al-ani,
              </h3>
              <h3 className="text-gray-300">Musel</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center md:text-left">
            <p>
              As a refugee, my life has been filled with uncertainty and
              hardship. But through it all, I have found strength and resilience
              within myself that I never knew existed.
            </p>
            <div>
              <h3 title="Header" className="text-gray-300">
                Belal Barkat,
              </h3>
              <h3 className="text-gray-300">Halab</h3>
            </div>
          </div>
          <div className="flex flex-col justify-self-end space-y-4 text-center md:text-left">
            <p>
              As a refugee, my life has been filled with uncertainty and
              hardship. But through it all, I have found strength and resilience
              within myself that I never knew existed.
            </p>
            <div>
              <h3 title="Header" className="text-gray-300">
                Alwaleed khalid,
              </h3>
              <h3 className="text-gray-300">Ghaza</h3>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Testimonial;
