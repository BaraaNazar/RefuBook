import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Chat from '../Components/chat/chat';
import { auth } from '../Firebase/firebase';
import LogIn from '../Components/login/index';

function ChatsAll() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);
  return <div>{!user.displayName ? <LogIn /> : <Chat />}</div>;
}
export default ChatsAll;
