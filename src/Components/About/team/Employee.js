import React from 'react';

function Employee({ name, Role }) {
  return (
    <div className="w-screen">
      <h1 className="font-bold">{name}</h1>
      <p className="text-sm">{Role}</p>
    </div>
  );
}

export default Employee;
