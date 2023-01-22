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
      className=" shadow-xl w-full h-full md:w-full md:h-96"
    >
      <img

        src={articleInfo.image}

        alt="blog"
        className="bg-[#ECF1F8] h-2/3 w-full "
      />

      <div className="text-black font-bold text-lg ml-3 my-2">

        {articleInfo.title}
      </div>
      <div className="text-black ml-3 text-base font-semibold ">
        {articleInfo.body1}
      </div>
      <div className="flex ml-3 my-3 ">
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
  );
}
export default Cards;
