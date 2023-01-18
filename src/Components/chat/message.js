import React from 'react';
import { auth } from '../../Firebase/firebase';

function Message({ message, profilePicture, uid }) {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg relative">
      {uid === auth.currentUser.uid ? (
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img
              className="rounded-full"
              src={profilePicture}
              alt="emailPhoto"
            />
          </div>
          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
            <div>{message.text}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end flex-row-reverse">
          <div className="relative ml-3 text-sm bg-indigo-300 py-2 px-4 shadow rounded-xl">
            <div>{message.text}</div>
          </div>
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img
              className="rounded-full"
              src={profilePicture}
              alt="emailPhoto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Message;
