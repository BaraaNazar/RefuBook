import React from 'react';

function Story() {
  return (
    <div className="flex justify-center items-center text-center md:m-32 p-10 md:p-auto">
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 sm:w-fit space-y-10">
        <h1 className="md:text-6xl text-3xl font-bold capitalize text-blue-800">
          Our Story
        </h1>
        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
      </div>
    </div>
  );
}
export default Story;
