import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import User from './user';
import ActiveConversations from './active-conversations';
import Messages from './messages';
import Input from './input';
import './style.css';
import Search from './search';
import LogIn from '../../Containers/LogIn';
import { auth } from '../../Firebase/firebase';
import RandomQuotes from './randomQuotes';

function Chat() {
  const [user] = useAuthState(auth);
  return (
    <div className='m-5'>
      {user ? (
        <div>
          <div className="flex h-screen text-gray-800">
            <div className="md:flex md:flex-row md:h-screen md:overflow-x-hidden hidden">
              <div className="flex flex-col  w-64 bg-white flex-shrink-0">
                {/* user component */}
                <User />
                <Search />
                <ActiveConversations />
              </div>
            </div>
            <div className="flex flex-col flex-auto h-fit p-6">
              <div className='md:h-1/2'>
              <div className="flex flex-col justify-between flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-96 p-4">
                <div className="overflow-y-auto">
                  <Messages />
                </div>
                <div>
                  <Input />
                </div>
              </div>
              <div className='hidden md:block'>
              <RandomQuotes/>
              </div>
              </div>
              <div className='md:hidden flex flex-col'>
                <User />
                <Search />
                <div className='block md:hidden'>
              <RandomQuotes/>
              </div>
                <ActiveConversations />

                </div>
            </div>
          </div>
        </div>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

export default Chat;
