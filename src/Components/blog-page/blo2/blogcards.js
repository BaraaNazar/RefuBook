import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ articleInfo }) {
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
        <img src={articleInfo.image} alt="blog" className="rounded-t-lg" />
      </div>
      <div>
        <div className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {articleInfo.title}
        </div>
        <div className="font-normal text-gray-700 mb-3">
          {articleInfo.body1}
        </div>
        <div className="flex  my-3">
          <img
            src={articleInfo.author.avatar}
            alt="brokenImg"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
            {articleInfo.author.name}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
