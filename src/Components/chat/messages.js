import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../Firebase/firebase';
import Message from './message';

function Messages() {
  const [messages, setMessages] = useState([]);
  // const scroll = useRef()

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
              return <Message key={message.id} message={message} />;
            })}
      </div>
    </div>
  );
}
export default Messages;
