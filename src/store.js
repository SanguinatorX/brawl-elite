import { configureStore, createSlice } from '@reduxjs/toolkit';

const casseurSlice = createSlice({
  name: 'casseurSlice',
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

export const { bug, anbug } = casseurSlice.actions;

export const store = configureStore({
  reducer: {
    bugge: casseurSlice.reducer,
  },
});
