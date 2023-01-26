import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import Logo from '../images/RefuBook-Logo.png';

function LoggedInNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { user } = useSelector((state) => state.signup);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };
  const logOut = () => {
    signOut(auth);
  };
  const {t}=useTranslation();

  return (
    <nav className="text-refubook-blue px-2 sm:px-4 py-2.5 rounded mx-3">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex justify-between items-center w-2/3 xl:w-auto">
          <NavLink to="/" className="hidden xl:flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9 " alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
            {t('home.hero.title')}
            </span>
          </NavLink>

          <button className="xl:hidden" type="button" onClick={toggleNavbar}>
            <FiMenu size={36} />
          </button>

          <h3 className="font-bold text-lg leading-5 text-refubook-blue xl:hidden">
          {t('navlinks.my-account')}
          </h3>
        </div>

        <div
          className={`flex xl:w-auto transform xl:transform-none transition-all duration-300 ease-in-out ${
            isNavbarOpen
              ? 'absolute z-50 -left-4 -top-6 flex-col justify-around bg-white shadow-custom-sm-2 rounded-6xl w-11/12 h-[95vh]'
              : 'flex-row -left-full'
          }`}
        >
          <button
            type="button"
            onClick={toggleNavbar}
            className={`xl:hidden absolute left-10 top-10 ${
              isNavbarOpen ? 'block' : 'hidden'
            }`}
          >
            <HiArrowNarrowLeft size={36} />
          </button>

          <div
            className={`relative flex-col items-center xl:hidden ${
              isNavbarOpen ? 'flex' : 'hidden'
            }`}
          >
            <img
              width={130}
              height={130}
              src={user.profilePicture}
              className=" rounded-[50%]"
              alt="Avatar"
            />

            <div className="absolute right-[30%] bottom-8 w-7 h-7 border-4 border-white bg-[#F46363] rounded-full p-1" />

            <h3 className="text-lg leading-6 font-medium text-[#3F3B3B]">
              {user.name}
            </h3>
          </div>

          <ul
            className={`h-2/5 w-2/3 mx-auto xl:w-auto xl:flex flex-col xl:flex-row xl:items-center p-4 mt-4 rounded-lg gap-y-4 xl:gap-x-8 xl:mt-0 xl:text-sm xl:font-medium ${
              isNavbarOpen ? 'flex' : 'hidden'
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl xl:text-lg block py-2 pl-3 pr-4 
                  font-bold no-underline order-3 xl:order-1
                  ${isActive ? 'text-refubook-blue' : 'text-[#BDBDBD]'} 
                  `
              }
            >
                {t('navlinks.home')}
            </NavLink>

            <NavLink
              to="/Write-Post"
              className={({ isActive }) =>
                `text-xl xl:text-lg block py-2 pl-3 pr-4 
                  font-bold no-underline order-1 xl:order-2
                  ${isActive ? 'text-refubook-blue' : 'text-[#BDBDBD]'} 
                  `
              }
            >{t('navlinks.post')}
            </NavLink>

            <NavLink
              to="/user-profile"
              className={({ isActive }) =>
                `text-xl xl:text-lg block py-2 pl-3 pr-4 
                  font-bold no-underline order-2 xl:order-3
                  ${isActive ? 'text-refubook-blue' : 'text-[#BDBDBD]'} 
                  `
              }
            >
            {t('navlinks.my-account')}
            </NavLink>

            <NavLink
              to="/login"
              className="text-[#BDBDBD] text-xl xl:text-lg font-bold py-1 px-4 rounded-full order-4"
              onClick={logOut}
            >
             {t('navlinks.signout')}
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default LoggedInNavbar;
