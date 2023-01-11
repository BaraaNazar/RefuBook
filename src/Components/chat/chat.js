import React from 'react';
import User from './user';
import ActiveConversations from './active-conversations';
import Messages from './messages';
import Input from './input';
import './style.css';
import Search from './search';



    function Chat(){
        return (
            <div>
                <div>
    <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
            <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">

                {/* svg logo and chat  */}
            <div className="flex flex-row items-center justify-center h-12 w-full">
                <div
                className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
                </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">Chat</div>
            </div>
            {/* user component */}
            <User/>
            <Search/>
            <ActiveConversations/>
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
            <div
            className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
            >
            <Messages/>
            <Input/>
            </div>
        </div>
        </div>
    </div>
        </div>


            </div>
        );
    }

    export default Chat;