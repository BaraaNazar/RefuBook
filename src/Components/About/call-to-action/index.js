import React, { useState, useEffect } from 'react';
import { useTranslation  } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase';
import img from '../../../images/Refugee-story.jpg';

function CallToAction() {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);
  const {t}=useTranslation();
  return (
    <div className="flex flex-col justify-center items-center space-y-10 md:m-20 p-10 md:p-auto md:bg-inherit bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center">
        <img className="md:w-52" src={img} alt="Call to action img" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-light text-sky-600">
        {t("about-page.share.title")}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-left md:w-1/2 text-sm text-gray-400">
        <p>
        {t("about-page.share.content")}
        </p>
      </div>
      <div>
        {!user.displayName ? (
          <NavLink to="/login">
            <button
              type="button"
              className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-8 rounded-full shadow-gray-900 shadow-2xl"
              href="/signUp"
            >
             {t("about-page.share.signUp")}
            </button>
          </NavLink>
        ) : (
          <NavLink to="/user-profile">
            <button
              type="button"
              className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-8 rounded-full shadow-gray-900 shadow-2xl"
              href="/user-profile"
            >
               {t("about-page.share.check-profile")}
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default CallToAction;
