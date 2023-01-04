import React, { useState } from 'react';
import Testimonial from '../../home/testimonials';
import Employee from './Employee';
import employees from './employess';
import './style.css';
// import {useState} from "react"
// import TeamMember from "./TeamMember"

function Team() {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-center items-center text-center bg-cyan-50">
        <div className="flex flex-col justify-center items-center text-center md:w-1/2 sm:w-fit space-y-20 m-32">
          <h1 className="text-5xl font-bold capitalize text-blue-900">
            Our Team
          </h1>
          <div className="flex justify-center items-center space-x-16">
            <button
              onClick={handleSelectChange}
              value="All"
              className="bg-blue-900 text-white py-1.5 px-5 rounded-2xl text-center mx-auto"
              type="button"
            >
              View All
            </button>
            <button onClick={handleSelectChange} value="USA" type="button">
              USA
            </button>
            <button onClick={handleSelectChange} value="Turkey" type="button">
              Turkey
            </button>
            <button onClick={handleSelectChange} value="Lebanon" type="button">
              Lebanon
            </button>
          </div>
          <div className="grid grid-cols-3 gap-36 text-blue-900 text-left">
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
      <div className="bg-sky-600 text-white p-32">
        <Testimonial />
      </div>
    </div>
  );
}
export default Team;
