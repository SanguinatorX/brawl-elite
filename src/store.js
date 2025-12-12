import { configureStore, createSlice } from '@reduxjs/toolkit';

const buggeurSlice = createSlice({
  name: 'buggeurSlice',
  initialState: true,
  reducers: {
    bug: (prevSate, action) => {
      return false;
    },
    anbug: (prevSate, action) => {
      return true;
    }
  },
});

export const { bug, anbug } = buggeurSlice.actions;

export const store = configureStore({
  reducer: {
    bugge: buggeurSlice.reducer,
  },
});
