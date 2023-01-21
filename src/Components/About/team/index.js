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
    <div className='p-10 bg-cyan-50'>
      <div className="flex justify-center items-center text-center ">
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
              value="Iraq"
              type="button"
            >
              Iraq
            </button>
            <button
              className="bg-slate-500 text-sm md:text-base text-white py-1.5 px-5 rounded-2xl text-center mx-auto md:bg-cyan-50 md:text-black m-2 md:m-auto"
              onClick={handleSelectChange}
              value="Kurdistan-Iraq"
              type="button"
            >
              Kurdistan-Iraq
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
          <div className="flex flex-wrap md:flex-nowrap md:flex-row flex-col justify-left text-center items-center text-blue-900">
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
                  img={employee.profilePhoto}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
