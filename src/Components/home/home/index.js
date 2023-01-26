import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase';
import homepagepic from './homepic.png';

function HomeBody() {
  const {t}=useTranslation();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  return (
    <div className="flex flex-row space-x-0 mx-auto my-10 xl:my-0 md:my-8 md:px-16 xl:h-screen ">
      <div className=" bodycontainer flex justify-center items-center lg:flex-row flex-col-reverse mx-auto my-10 xl:my-0 md:my-8 px-4 md:px-16    items-start md:text-center space-between w-screen m-10 px-4 pt-4 ">
        <div className="flex flex-col items-center lg:items-start justufy-center md:px-0 ">
          <div className=" w-80 h-24   ">
            <p className="homebody  text-center lg:text-left py-8 text-blue-700 font-bold  w-full font-style: normal  font-semibold text-5xl  xl:text-6xl ">
            {t('home.hero.title')}
            </p>
          </div>

          <div className=" w-60 h-36  ">
            <p className=" express text-center lg:text-left  py-3 text-orange-400 font-bold  w-full font-style: normal   text-5xl  mb-6 lg:w-2/6 leading-none  xl:text-5xl">
              {' '}
              {t('home.hero.subtitle')}
            </p>
          </div>
          <div className="w-96 h-24 ">
          <p className="  text-center lg:text-left lg:w-3/5  mb-6  ">
          {t('home.hero.content')}
            </p>
          </div>
          <div className="button text-left mt-10 pt-10 ">
            {!user.displayName ? (
              <NavLink to="/login">
                <button
                  type="button"
                  className=" signUp  justify-center block   mb-3  text-white bg-sky-600 rounded-full  hover:bg-sky-700 font-bold py-1 px-4 "
                  href="/signUp"
                >
                  {t('navlinks.signUp')}
                </button>
              </NavLink>
            ) : (
              <NavLink to="/user-profile">
                <button
                  type="button"
                  className=" signUp  justify-center block  mb-3  text-white bg-sky-600 rounded-full  hover:bg-sky-700 font-bold py-1 px-4 "
                  href="/user-profile"
                  to="/user-profile"
                >
                  {t('navlinks.my-profile')}
                </button>
              </NavLink>
            )}
          </div>
        </div>

        <div className="mx-auto flex justify-center lg:justify-end ">
          <img
            src={homepagepic}
            alt="homepic"
            className="pic w-2/3 lg:w-full xl:w-auto "
          />
        </div>
      </div>
    </div>
  );
}
export default HomeBody;
