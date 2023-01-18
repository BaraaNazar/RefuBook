import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import UserProfileContent from '../Components/user-profile';
import { auth } from '../Firebase/firebase';
import Login from '../Components/login';

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  return !user.displayName ? <Login /> : <UserProfileContent />;
};

export default UserProfile;
