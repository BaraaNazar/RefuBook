import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';
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

  return (
    <div className="h-full w-full bg-[#70CDD6] flex items-center justify-center">
      <div className="min-h-screen xl:h-[90vh] w-11/12 xl:w-[90%] sm:my-11  py-6 px-4 bg-[#E7FAFF] rounded-6xl shadow-custom-xl relative overflow-hidden">
        <NavBar />
        <div className="relative z-10 flex flex-col-reverse md:flex-row md:justify-center md:gap-10">
          <div className="mx-auto w-full md:w-[50%] relative z-10">
            <h1 className=" sm:text-left text-center sm:mx-auto md:pt-16  font-bold text-3xl sm:text-5xl text-[#4699C2]">
              Get in Touch
            </h1>
            <p className=" md:pt-5 text-[#8B8F9C] sm:text-justify text-center md:w-[50%]">
              But Brooke Chaffin and Catherine Connors are looking to change
              that with the introduction.
            </p>
            <form onSubmit={saveDoc} className="flex flex-col">
              <p className="md:text-[10px] text-[#8B8F9C]  md:pt-3">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@gmail.com"
                className="md:w-[450px] h-[50px] sm:h-[50px] rounded-md text-left "
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Your Message"
                aria-label="disabled input"
                className="rounded-md block placeholder-pl-10 min-h-[160px] max-h-[160px] md:min-h-[199px]  md:max-h-[200px] md:w-[450px] mt-3"
              />
              <button
                type="submit"
                className="bg-[#4699C2] mx-auto rounded-[1009px] mt-1 md:ml-3 md:mt-1 text-white w-[125px] h-[40px]"
              >
                Send
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
              className="mx-auto my-auto   w-[300px] h-[190px] sm:w-[300px] sm:h-[100%] lg:w-[550px]  lg:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
