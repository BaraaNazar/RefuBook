import React from 'react';
import img from '../../../images/Pasted Graphic 2.png';

function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 md:m-20 p-10 md:p-auto md:bg-inherit bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center">
        <img className="md:w-10" src={img} alt="Call to action img" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-light text-sky-600">
          Share your story, help others and get help from others
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center md:w-1/3 text-sm text-gray-400">
        <p>
          But Brooke Chaffin and Catherine Connors are looking to change that
          with the introduction of Maverick, a social network that connects
          young girls with female mentors to express their creativity in a safe
          space.
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
