import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../Firebase/firebase';
import NavBar from '../../Containers/Navbar';
import contactImage from '../../images/Contact.png';

function Contacts() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function addingcontact() {
    await addDoc(collection(db, 'Contact'), {
      email,
      message,
    });
  }

  const saveDoc = (e) => {
    e.preventDefault();

    addingcontact();
  };
  const {t}=useTranslation();

  return (
    // <div className="h-full w-full bg-[#70CDD6] flex items-center justify-center">
    // <div className="min-h-screen xl:h-[90vh] w-11/12 xl:w-[90%] sm:my-11  py-6 px-4 bg-[#E7FAFF] rounded-6xl shadow-custom-xl relative overflow-hidden">
    <>
      <NavBar />
      <div className="relative z-10 flex flex-col-reverse md:flex-row md:justify-center md:gap-10">
        <div className="mx-auto w-full md:w-[50%] relative z-10">
          <h1 className=" sm:text-left text-center sm:mx-auto md:pt-16  font-bold text-3xl sm:text-5xl  text-[#4699C2]">
          {t("contact-page.get-in-touch")}
          </h1>
          <p className=" md:pt-5 text-[#8B8F9C] text-center mx-5 sm:mx-2 md:mx-1 sm:text-start md:w-[60%]">
          {t("contact-page.subtitle")}
          </p>
          <form onSubmit={saveDoc} className="flex flex-col">
            <p className="md:text-[10px] text-[#8B8F9C]  md:pt-3 mx-5 sm:mx-2 md:mx-1">
            {t("contact-page.email")}
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@gmail.com"
              className="md:w-[450px] h-[50px] sm:h-[50px] rounded-md text-left mx-5 sm:mx-2 md:mx-1 pl-2 "
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Your Message"
              aria-label="disabled input"
              className="rounded-md block placeholder-pl-10 min-h-[160px] max-h-[160px] md:min-h-[199px]  md:max-h-[200px] md:w-[450px] mt-3 mx-5 sm:mx-2 md:mx-1  pl-2"
              required
            />
            <button
              type="submit"
              className="bg-[#4699C2] mx-auto rounded-[1009px] mt-2 md:ml-1 md:mt-2 text-white w-[125px] h-[40px]"
            >
              {t("contact-page.send")}
            </button>
          </form>
          <div className="md:flex flex mt-2 sm:mt-4 sm:ml-3 gap-x-2 sm:mx-auto justify-center md:justify-start">
            <FaInstagram className="text-[#4699C2] text-2xl mb-1 " />
            <ImTwitter className="text-[#4699C2] text-2xl mb-1 " />
            <ImFacebook className="text-[#4699C2] text-2xl mb-1" />
          </div>
        </div>
        <div className=" md:pt-12">
          <img
            src={contactImage}
            className="mx-auto my-auto w-[300px] h-[220px] sm:w-[300px] sm:h-[400px] md:w-[500px] md:h-[475px] lg:w-[550px] lg:h-[450px]"
            alt=""
          />
        </div>
      </div>
    </>
    // </div>
    // </div>
  );
}

export default Contacts;
