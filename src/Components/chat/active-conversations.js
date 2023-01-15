import React from 'react';

function ActiveConversations() {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          4
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
        <button
          type="button"
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
            H
          </div>
          <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
        </button>
        <button
          type="button"
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
            M
          </div>
          <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
          <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
            2
          </div>
        </button>
        <button
          type="button"
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
            P
          </div>
          <div className="ml-2 text-sm font-semibold">Philip Tucker</div>
        </button>
        <button
          type="button"
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div className="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
            C
          </div>
          <div className="ml-2 text-sm font-semibold">Christine Reid</div>
        </button>
        <button
          type="button"
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div className="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
            J
          </div>
          <div className="ml-2 text-sm font-semibold">Jerry Guzman</div>
        </button>
      </div>
      <div className="flex flex-row items-center justify-between text-xs mt-6">
        <span className="font-bold">Archivied</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          7
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2">
        <button
          type="button"
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
            H
          </div>
          <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
        </button>
      </div>
    </div>
  );
}
export default ActiveConversations;
