import React, { useEffect, useState } from 'react';
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
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <div>
        {messages &&
          messages
            .sort((a, b) => a.timestamp - b.timestamp)
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
      </div>
    </div>
  );
}
export default Messages;
