import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ article }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    await navigate('/BlogPage/singleblog');
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex="0"
      role="button"
      className=" max-w-lg mx-auto"
    >
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-1">
        <img src={article.urlToImage} alt="blog" className="rounded-t-lg" />
      </div>
      <div>
        <div className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {article.title}
        </div>
        <div className="font-normal text-gray-700 mb-3">
          {article.content}
        </div>
        <div className="flex  my-3">
          <div className='w-10 h-10'>
          <img
            src="https://play-lh.googleusercontent.com/PE5ARR9hbj1mPknYwCEcdbZTT8R99574PjKUuDYOsH3qaXwPLds4yZCpCcnjJrCS2Q=w240-h480-rw"
            alt="brokenImg"
            className="w-fit rounded-full"
          />
          </div>
         
          <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
            {article.author}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
