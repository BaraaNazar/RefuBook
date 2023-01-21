import React from 'react';
import Carousel from 'react-elastic-carousel';

function Partners() {
  return (
    <div className="flex flex-col justify-center items-center space-y-16 md:p-16">
      <h1 className="text-3xl font-bold text-black">Our Partners</h1>
      <Carousel itemsToShow={4} showArrows={false} enableAutoPlay>
        <div>
          <img
            className="p-5"
            src="https://www.re-coded.com/ReCoded-Logo-Black.png.webp"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5"
            src="https://gelbasla.com/uploads/files/tr/643/thumb-816x460-a96173b055640d884d3c1d90e926d860.jpg"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5"
            src="https://scrimba.com/static/art/dark-logo.svg"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5"
            src="https://jobboardhq.blob.core.windows.net/assets/prod/cnne/tm2l/employerLogo.png?v=191120032141"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5"
            src="https://www.instructure.com/sites/default/files/image/2021-12/Canvas_Horizontal_ByInstructure_Color_RGB.png"
            alt="partner img"
          />
        </div>
      </Carousel>
    </div>
  );
}
export default Partners;
