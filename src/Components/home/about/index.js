import React from 'react';

const About = () => {
  return (
    <div className="bg-[#E5FAFF]" >
      <div className=" text-[#4699C2] ">
        <h1 className=" pt-6 text-center text-2xl font-bold text-[#4699C2] ">
          About
        </h1>
        <p className="sm:w-[50%] w-[100%] mx-auto mt-6 text-center	 text-black">
          In quo quaerimus, non emolumento aliquo, sed ipsius honestatis decore
          laudandis, id est et quas molestias excepturi sint, obcaecati
          cupiditate non numquam eius modi tempora incidunt, ut earum rerum hic
          tenetur a natura ipsa natura incorrupte atque integre iudicante itaque
          aiunt hanc quasi involuta aperiri.
        </p>

        <div className=" flex justify-center">
          <button
            type="submit"
            className="  bg-sky-500 text-white py-1.5 px-5 rounded-2xl text-center mx-auto mt-6   "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
