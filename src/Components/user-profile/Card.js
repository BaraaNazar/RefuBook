import React from 'react';

const Card = ({ data, screenWidth, profilePicture }) => {

  return (
    <div
      className="bg-white rounded-3xl shadow-custom-sm p-4"
      data-testid="cards-container"
    >
      <h2 className="font-bold text-base leading-5">{data.Title}</h2>
      <p className="text-base font-normal leading-5 my-4">{data.Paragraph}</p>

      <div
        className="flex items-center gap-x-3"
        data-testid="cards-secondary-container"
      >
        <img
          width={screenWidth > 1280 ? 45 : 30}
          height={screenWidth > 1280 ? 45 : 30}
          src={profilePicture}
          alt="avatar"
        />

        <h4 className="font-normal text-base leading-8 text-[#006eff]">
          {data.Name}
        </h4>
      </div>
    </div>
  );
};

export default Card;
