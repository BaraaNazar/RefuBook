import React from 'react';
import ReadMoreReadLess from './ReadMore-ReadLess';

function Story() {
  return (
    <div className="flex justify-center items-center text-center md:m-32 p-10 md:p-auto">
      <div className="flex flex-col justify-center items-center text-center md:w-full tracking-wide sm:w-fit space-y-10">
        <h1 className="md:text-6xl text-3xl font-bold capitalize text-blue-800">
          Our Story
        </h1>
        <div className="text-left">
          <ReadMoreReadLess>
          {`
          In war-torn Syria, the life of a young boy named Ahmad was turned upside down. His home was destroyed, and he was forced to flee with his family for his life. After a perilous journey, they finally reached a refugee camp in Lebanon. Life in the camp was difficult, with limited resources and little hope for the future.

          But Ahmad never gave up hope. He knew that he needed to keep moving forward, to find a safe place to rebuild his life. He spent his days in the camp helping his family and learning new skills, such as learning English and fixing bikes.
          
          And, after years of waiting, Ahmad and his family were finally granted asylum in the United States.
          
          Upon arrival, Ahmad faced new challenges, such as learning a new language and navigating a new culture. But with the help of local organizations and volunteers, he was able to enroll in school and find a job. He quickly made friends, and started to feel like he belonged.
          
          Despite all the hardships he faced, Ahmad never gave up hope. He knew that starting over in a new country would not be easy, but he was determined to make it work. And, with the help of the community, he was able to start a new chapter in his life.
          
          Ahmad's story is just one of the many stories of Syrian refugees who have had to leave their homes in search of safety. They remind us of the resilience and determination of those who have been forced to flee their homes. With your help, we can continue to support Syrian refugees like Ahmad and give them the chance for a new beginning.
          
          Call to Action: Learn more about the Syrian refugee crisis and how you can help. Visit our website and share help to support Syrian refugee families like Ahmad's.
        `}
        </ReadMoreReadLess>
        </div>
      </div>
    </div>
  );
}
export default Story;
