import { createSlice } from '@reduxjs/toolkit';

const signedInUserSlice = createSlice({
  name: 'signedin',
  initialState: {
    loggedInUser: {},
  },
  reducers: {
    signedIn: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { signedIn } = signedInUserSlice.actions;
export default signedInUserSlice.reducer;
