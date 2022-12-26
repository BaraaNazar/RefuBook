import React from 'react';
import { Carousel } from 'flowbite-react';
import { MdStars } from 'react-icons/md';
import logo from '../../../img1.png';

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
  const breakpoint = 850;

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
    <div className=" sm:flex sm:flex-row text-black">
      <div className=" sm:pl-[200px] sm:pt-[25px] pl-[75px]">
        <img className="` mx-auto h-80 w-80 " src={logo} alt="" />
      </div>
      <div className="h-56 sm:h-64 xl:h-80 sm:w-[44%] 2xl:h-96 sm:mr-[50px]">
        <Carousel rightControl=" " leftControl=" ">
          {FEATURES.map((feature) => {
            return (
              <div className=" sm:pt-[80px] pt-[50px] h-full items-center  ">
                <header className="flex flex-col xl:gap-x-2 justify-center items-center text-center ">
                  <MdStars className="text-5xl text-gray-500" />
                  <h1 className="text-gray-500">{feature.title}</h1>
                </header>
                <p className=" text-center w-full">{feature.description}</p>
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
      <div className=" grid grid-cols-2 2xl:pt-14 grid-rows-2  sm:pl-[90px] h-56  sm:h-64  md:h-[340px] xl:h-[320px]  2xl:h-[325px] sm:w-[44%] sm:mr-[50px]">
        {FEATURES.map((feature) => {
          return (
            <div className="h-full items-center w-[75%] ">
              <header className="flex xl:gap-x-2 justify-start  text-center mt-7 sm:pt-2 ">
                <MdStars className="mt-[2px] text-2xl text-zinc-500" />
                <h3 className="font-bold">{feature.title}</h3>
              </header>
              <p className=" text-start text-[12px] w-[100%] pt-1 ">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" sm:pl-[50px] md:pl-[100px] lg:pl-[200px] sm:pt-[20px] pl-[75px]">
        <img className="h-[350px] w-[350px]" src={logo} alt="" />
      </div>
    </div>
  );
}
