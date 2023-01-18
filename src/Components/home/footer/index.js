import { NavLink } from 'react-router-dom';
import Logo from '../../../images/RefuBook-Logo.png';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-2 lg:px-16">
      <div className="mx-auto xl:pr-8 mt-5 md:mt-1 mb-5 md:mb-1 flex justify-center items-center flex-shrink-0 text-white justify-center">
        <NavLink
          to="/"
          className="flex  md:block md:w-auto tracking-tight "
        >
          <img src={Logo} className="h-6 mr-3 sm:h-9 " alt="Flowbite Logo" />
        </NavLink>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="flex justify-center">
          <li className="mr-6">
            <NavLink
              to="/"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-white rounded md:bg-transparent text-gray-700 md:p-0 dark:text-white md:hover:text-blue-700"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to="/about"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to="/BlogPage"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blog
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to="/contact"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to="/singleblog"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
             Single Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-10 md:mt-1 px-16 flex lg:justify-center">
        <div>
          <div className="flex justify-between">
            <div className="flex justify-between items-center mr-3 ml-3">
              <ul className="flex  items-center  p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    type="button"
                    className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-6  rounded-full "
                    href="/signUp"
                  >
                    Sign up
                  </button>
                </li>
                <li>
                  <select
                    name="Languages"
                    id="languages"
                    className="dropdown rounded-full hover:bg-gray-200 py-1 px-6 border border-sky-600 "
                  >
                    <option value="english" className="border-sky-600 ">
                      English
                    </option>
                    <option value="arabic" className="border-sky-600 ">
                      Arabic
                    </option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
