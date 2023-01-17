import React from 'react';

function Employee({ name, Role }) {
  return (
    <div className="w-screen space-x-5">
      <span className="font-bold">{name}</span>
      <span className="text-sm">{Role}</span>
    </div>
  );
}

export default Employee;
