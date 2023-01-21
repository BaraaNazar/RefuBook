import React from 'react';

function Employee({ name, Role, img }) {
  return (
    <div className="m-10">
      <div className="w-36">
        <img className="md:w-fit rounded-full filter grayscale hover:grayscale-0 hover:translate-y-1 hover:rounded-2xl transition" src={img} alt="Baraa-Img" />
        <h1 className="font-bold">{name}</h1>
        <p className="text-sm">{Role}</p>
      </div>
    </div>
  );
}

export default Employee;
