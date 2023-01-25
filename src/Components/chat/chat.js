import React from 'react';
import User from './user';
import ActiveConversations from './active-conversations';
import Messages from './messages';
import Input from './input';
import './style.css';
import Search from './search';
import RandomQuotes from './randomQuotes';
import Navbar from '../../Containers/Navbar';

function Chat() {
  return (
    <div>
      <Navbar />
      <div className="md:m-5">
        <div className="flex h-fit text-gray-800 justify-between">
          <div className="md:flex md:flex-row md:h-screen md:overflow-x-hidden hidden">
            <div className="flex flex-col  w-64 bg-white flex-shrink-0">
              {/* user component */}
              <User />
              <Search />
              <ActiveConversations />
            </div>
          </div>
          <div className="flex flex-col flex-auto h-full p-6 space-y-2">
            <div className="md:h-1/2 ">
              <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 md:h-96 md:w-full h-[85vh] w-[90vw] p-2">
                <div className="overflow-y-auto">
                  <Messages />
                </div>
                <div>
                  <Input autofocus />
                </div>
              </div>
              <div className="hidden md:block">
                <RandomQuotes />
              </div>
            </div>
            <div className="md:hidden flex flex-col">
              <User />
              <Search />
              <div className="block md:hidden">
                <RandomQuotes />
              </div>
              <ActiveConversations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
