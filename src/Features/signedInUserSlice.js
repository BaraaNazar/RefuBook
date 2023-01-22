import { createSlice } from '@reduxjs/toolkit';

const signedInUserSlice = createSlice({
  name: 'signedin',
  initialState: {
    article: [],
  },
  reducers: {
    signedIn: (state, action) => {
      state.article = action.payload;
    },
  },
});

export const { signedIn } = signedInUserSlice.actions;
export default signedInUserSlice.reducer;
