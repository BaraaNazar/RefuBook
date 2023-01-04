import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
// import { Carousel } from 'flowbite-react';
import { MdStars } from 'react-icons/md';
import logo from '../../../images/img1.png';

const FEATURES = [
  {
    title: 'Reliability',
    description:
      'Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.',
  },
  {
    title: 'Motivation',
    description:
      'Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.',
  },
  {
    title: 'Efficiency',
    description:
      'Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.',
  },
  {
    title: 'Creativity',
    description:
      'Certe, inquam,  pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.',
  },
];

function Features() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="bg-[#E5FAFF] ">
      {width <= breakpoint ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}

export default Features;

function MobileComponent() {
  return (
    <div className="sm:flex sm:flex-col text-black my-auto mx-auto ">
      <div className="mx-auto">
        <img className="` mx-auto h-auto w-auto " src={logo} alt="" />
      </div>
      <div className="h-50  xl:h-80 sm:w-[100%] 2xl:h-96   ">
        <Carousel showArrows={false} itemPosition={consts.END} itemsToShow={1}>
          {FEATURES.map((feature) => {
            return (
              <div className=" sm:pt-[80px] pt-[50px] h-full items-center  ">
                <header className="flex flex-col xl:gap-x-2 justify-center items-center text-center ">
                  <MdStars className="text-5xl text-gray-500" />
                  <h1 className="text-gray-500">{feature.title}</h1>
                </header>
                <p className=" text-center mx-auto w-[50%]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

function DesktopComponent() {
  return (
    <div className=" sm:flex sm:flex-row">
      <div className=" grid grid-cols-2 2xl:pt-14 grid-rows-2 md:pl-[75px] lg:pl-[90px] h-56  sm:h-64  md:h-[340px] xl:h-[320px] md:w-[77%]   2xl:h-[325px] lg:w-[44%] sm:mr-[50px]">
        {FEATURES.map((feature) => {
          return (
            <div className="h-full items-center w-[75%] gap-2 ">
              <header className="flex xl:gap-x-2 gap-y-10 pt-10 justify-start  text-center mt-2 sm:pt-2 ">
                <MdStars className="mt-[2px] text-2xl text-zinc-500" />
                <h3 className="font-bold">{feature.title}</h3>
              </header>
              <p className=" text-start text-[12px] w-[100%] pt-1 ">
                {feature.description}
              </p>
            </div>
          );
        })}
        <div className="my-auto mx-auto xl:mr-48  bg-[#E5FAFF] ">
          <Carousel
            showArrows={false}
            itemPosition={consts.END}
            itemsToShow={1}
          >
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
          </Carousel>
        </div>
      </div>
      <div className=" sm:pl-[50px] mx-auto md:pl-[100px] lg:pl-[200px] sm:pt-[20px] pl-[75px]">
        <img className="h-[350px] w-[350px] mx-auto " src={logo} alt="" />
      </div>
    </div>
  );
}
