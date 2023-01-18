import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Chat from '../Components/chat/chat';
import NavBar from './Navbar';
import { auth } from '../Firebase/firebase';

function ChatsAll() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);
  return (
    <div>
      {!user.displayName ? null : <NavBar />}
      <Chat />
    </div>
  );
}
export default ChatsAll;
