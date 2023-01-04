import React from 'react';

function Employee({ name, Role }) {
  return (
    <div className="w-screen">
      <h1 className="font-bold">{name}</h1>
      <h3 className="text-sm">{Role}</h3>
    </div>
  );
}

export default Employee;
