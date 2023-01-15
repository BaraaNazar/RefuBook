import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';

function Message({ message }) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });
  const profilePicture = user.photoURL;
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg relative">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          <img className="rounded-full" src={profilePicture} alt="emailPhoto" />
        </div>
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{message.text}</div>
        </div>
      </div>
    </div>
  );
}
export default Message;
