import React from 'react';

function Story() {
  return (
    <div className="flex justify-center items-center text-center m-32">
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 sm:w-fit space-y-10">
        <h1 className="text-6xl font-bold capitalize text-blue-800">
          Our Story
        </h1>
        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
      </div>
    </div>
  );
}
export default Story;
