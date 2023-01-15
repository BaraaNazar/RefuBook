
import React, { useState } from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../../Firebase/firebase"
import Toggle from "./toggleBtn"

function User(){
    const [user, setUser]= useState({})

    onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
        }
    })
    const profilePicture = user.photoURL
    const userName = user.displayName
return (
    <div
    className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
    >
    <div className="h-20 w-20 rounded-full border overflow-hidden">
        <img
        src={profilePicture}
        alt="Avatar"
        className="h-full w-full"
        />
    </div>
    <div className="text-sm font-semibold mt-2">{userName}</div>
    <div className="text-xs text-gray-500">Front-end Developer</div>
    <div className="flex flex-row items-center mt-3">
        <Toggle/>
        <div className="leading-none ml-1 font-bold text-xs">Active</div>
    </div>
    </div>
)
}
export default User;