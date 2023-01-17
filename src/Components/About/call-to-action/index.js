import React from 'react';
import img from '../../../images/Refugee-story.jpg';

function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 md:m-20 p-10 md:p-auto md:bg-inherit bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center">
        <img className="md:w-52" src={img} alt="Call to action img" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-light text-sky-600">
          A New Beginning: The Story of a Syrian Boy`s Journey to Safety
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-left md:w-1/2 text-sm text-gray-400">
        <p>
          In war-torn Syria, the life of a young boy named Ahmad was turned
          upside down. His home was destroyed, and he was forced to flee with
          his family for his life. After a perilous journey, they finally
          reached a refugee camp in Lebanon. Life in the camp was difficult,
          with limited resources and little hope for the future. But Ahmad never
          gave up hope. He knew that he needed to keep moving forward, to find a
          safe place to rebuild his life. He spent his days in the camp helping
          his family and learning new skills, such as learning English and
          fixing bikes. And, after years of waiting, Ahmad and his family were
          finally granted asylum in the United States. Upon arrival, Ahmad faced
          new challenges, such as learning a new language and navigating a new
          culture. But with the help of local organizations and volunteers, he
          was able to enroll in school and find a job. He quickly made friends,
          and started to feel like he belonged.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-8 rounded-full shadow-gray-900 shadow-2xl"
          href="/signUp"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
export default CallToAction;
