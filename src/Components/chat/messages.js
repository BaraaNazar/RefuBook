import React, { useEffect, useRef, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import db, { auth } from '../../Firebase/firebase';
import Message from './message';

function Messages() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `messages`), (snapshot) => {
      setMessages(
        snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => a.timestamp - b.timestamp)
      );
    });

    return unsubscribe;
  }, []);

  const lastRef = useRef()

  useEffect(() => {
    if (!lastRef.current) return

    lastRef.current.scrollIntoView()
  }, [messages])

  return (
    <>        {messages &&
          messages
            .map((message) => {
              return (
                <Message
                  uid={message.uid}
                  profilePicture={message.photoURL}
                  key={message.id}
                  message={message}
                  user={user}
                />
              );
            })}
            <div ref={lastRef} />
    </>

  );
}
export default Messages;
