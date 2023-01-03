import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../RefuBook-Logo.png';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="text-refubook-blue px-2 sm:px-4 py-2.5 rounded m-3">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex justify-between">
          <NavLink to="/home" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              RefuBook
            </span>
          </NavLink>
        </div>

        <div>
          <button
            onClick={() => setNavbar(!navbar)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-refubook-blue"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            </svg>
          </button>
          <div className="hidden md:block md:w-auto">
            <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to="/"
                  className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-refubook-bluemd:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-refubook-bluemd:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-refubook-bluemd:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-4 rounded-full"
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {navbar ? (
        <div className="w-full md:hidden md:w-auto">
          <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <NavLink
                to="/home"
                className="hover:underline block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-refubook-bluemd:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-refubook-bluemd:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-refubook-bluemd:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </NavLink>
            </li>
            <li>
            <NavLink
                  to="/signup"
                  className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-4 rounded-full"
                >
                  Sign Up
                </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
}
export default NavBar;
