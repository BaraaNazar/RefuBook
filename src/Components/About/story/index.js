import React from 'react';
import { useTranslation } from 'react-i18next';
import ReadMoreReadLess from './ReadMore-ReadLess';

function Story() {
  const {t}=useTranslation();
  return (
    <div className="flex justify-center items-center text-center md:m-32 p-10 md:p-auto">
      <div className="flex flex-col justify-center items-center text-center md:w-full tracking-wide sm:w-fit space-y-10">
        <h1 className="md:text-6xl text-3xl font-bold capitalize text-blue-800">
        {t("about-page.our-story.title")}
        </h1>
        <div className="text-left">
          <ReadMoreReadLess>

          
   {t("about-page.our-story.content")}
        
  </ReadMoreReadLess>
        </div>
      </div>
    </div>
  );
}
export default Story;
