import React, { useState } from 'react';
import Employee from './Employee';
import employees from './employess';
import './style.css';

function Team() {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-center items-center text-center bg-cyan-50">
        <div className="flex flex-col justify-center items-center text-center md:w-1/2 sm:w-fit md:space-y-20">
          <h1 className="md:text-5xl font-bold capitalize text-blue-900 text-3xl m-5">
            Our Team
          </h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-16">
            <button
              onClick={handleSelectChange}
              value="All"
              className="bg-amber-500 text-sm md:text-base md:bg-blue-900 text-white py-1.5 px-5 rounded-2xl text-center mx-auto"
              type="button"
            >
              View All
            </button>
            <button
              className="bg-slate-500 text-sm md:text-base text-white py-1.5 px-5 rounded-2xl text-center mx-auto md:bg-cyan-50 md:text-black m-2 md:m-auto"
              onClick={handleSelectChange}
              value="USA"
              type="button"
            >
              USA
            </button>
            <button
              className="bg-slate-500 text-sm md:text-base text-white py-1.5 px-5 rounded-2xl text-center mx-auto md:bg-cyan-50 md:text-black m-2 md:m-auto"
              onClick={handleSelectChange}
              value="Turkey"
              type="button"
            >
              Turkey
            </button>
            <button
              className="bg-slate-500 text-sm md:text-base text-white py-1.5 px-5 rounded-2xl text-center mx-auto md:bg-cyan-50 md:text-black m-2 md:m-auto"
              onClick={handleSelectChange}
              value="Lebanon"
              type="button"
            >
              Lebanon
            </button>
          </div>
          <div className="grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-36 text-blue-900 text-left p-5">
            {employees
              .filter((item) =>
                selectedCountry !== 'All'
                  ? item.country === selectedCountry
                  : true
              )
              .map((employee) => (
                <Employee
                  key={employee.id}
                  name={employee.name}
                  Role={employee.Role}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
