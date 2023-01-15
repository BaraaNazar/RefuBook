import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signup',
  initialState: {
    user: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signUp, signIn } = signUpSlice.actions;
export default signUpSlice.reducer;
