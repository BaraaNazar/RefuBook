import React from 'react';
import homepagepic from './homepic.png';

function HomeBody() {
  return (
    <div className="flex flex-row space-x-0 mx-auto my-10 xl:my-0 md:my-8 px-4 md:px-16 xl:h-screen ">
      <div className=" bodycontainer flex justify-center items-center lg:flex-row flex-col-reverse mx-auto my-10 xl:my-0 md:my-8 px-4 md:px-16    items-start md:text-center space-between w-screen m-10 px-4 pt-4 ">
        <div className="flex flex-col items-center lg:items-start justufy-center md:px-0 ">
          <div className=" w-80 h-24   ">
            <p className="homebody  text-center lg:text-left py-8 text-blue-700 font-bold  w-full font-style: normal hover:underline font-semibold text-5xl  xl:text-6xl ">
              RefuBook
            </p>
          </div>

          <div className=" w-60 h-36  ">
            <p className=" express text-center lg:text-left  py-3 text-orange-400 font-bold  w-full font-style: normal  hover:underline text-5xl  mb-6 lg:w-2/6 leading-none  xl:text-5xl">
              {' '}
              Express Freely
            </p>
          </div>
          <div className="w-96 h-24 ">
            <p className="hover:underline  text-center lg:text-left lg:w-3/5 lg:text-left mb-6  ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.{' '}
            </p>
          </div>
          <div className="button text-left mt-10 ">
            <button
              type="button"
              className=" signUp  justify-center block  mb-3  text-white bg-sky-600 rounded-full hover:underline font-bold py-1 px-4 "
              href="/signUp"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="mx-auto flex justify-center lg:justify-end ">
          <img
            src={homepagepic}
            alt="homepic"
            className="pic w-2/3 lg:w-full xl:w-auto "
          />
        </div>
      </div>
    </div>
  );
}
export default HomeBody;
