import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t}=useTranslation();
  return (
    <div className="bg-[#E5FAFF]">
      <div className=" text-[#4699C2] ">
        <h1 className=" pt-6 text-center text-2xl font-bold text-[#4699C2] ">
        {t('navlinks.about')}
        </h1>
        <p className="sm:w-[50%] w-[100%] mx-auto mt-6 text-center	 text-black">
        {t('home.hero.about.content')}
        </p>

        <div className=" flex justify-center">
          <button
            type="submit"
            className="  bg-sky-500 text-white py-1.5 px-5 rounded-2xl text-center mx-auto mt-6   "
          >
           {t('home.hero.about.learn-more')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
