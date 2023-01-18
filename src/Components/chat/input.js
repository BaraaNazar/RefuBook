import React, { useState } from 'react';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import db, { auth } from '../../Firebase/firebase';

function Input() {
  const [input, setInput] = useState('');
  async function sendMessage() {
    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(db, 'messages'), {
      text: input,
      uid,
      photoURL,
      timestamp: serverTimestamp(),
    });
    setInput('');
  }
  const saveMessage = async (e) => {
    e.preventDefault();
    sendMessage();
  };
  return (
    <form
      onSubmit={saveMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div>
        <button
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
          <button
            type="button"
            className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="ml-4">
        <button
          type="submit"
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white p-2 text-center flex-shrink-0"
        >
          <span className="ml-2">
            <svg
              className="w-5 h-5 transform rotate-45 -mt-px text-center justify-center flex"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
}
export default Input;
