import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../Features/signUpSlice';
import signedInUserSlice from '../Features/signedInUserSlice';

export const store = configureStore({
  reducer: {
    signup: signUpSlice,
    signedin: signedInUserSlice,
  },
});
