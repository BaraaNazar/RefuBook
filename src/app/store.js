import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../Features/signUpSlice';

export const store = configureStore({
  reducer: {
    signup: signUpSlice,
    signIn: signUpSlice,
  },
});
