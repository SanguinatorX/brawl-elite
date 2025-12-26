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

const casseurSlice = createSlice({
  name: 'casseurSlice',
  initialState: true,
  reducers: {
    cass: (prevSate, action) => {
      return false;
    },
    ancass: (prevSate, action) => {
      return true;
    }
  },
});

const rotateurSlice = createSlice({
  name: 'rotateurSlice',
  initialState: false,
  reducers: {
    rotate: (prevSate, action) => {
      return true;
    },
    unrotate: (prevSate, action) => {
      return false;
    }
  },
});

const colorSplatshSlice = createSlice({
  name: 'colorSplatshSlice',
  initialState: false,
  reducers: {
    splatsh: (prevState, action) => {
      return true;
    },
    unsplatsh: (prevState, action) => {
      return false;
    },
  },
});

export const { bug, anbug } = buggeurSlice.actions;
export const { cass, ancass } = casseurSlice.actions;
export const { rotate, unrotate } = rotateurSlice.actions;
export const { splatsh, unsplatsh } = colorSplatshSlice.actions;

export const store = configureStore({
  reducer: {
    bugge: buggeurSlice.reducer,
    casse: casseurSlice.reducer,
    rotate: rotateurSlice.reducer,
    splatshing: colorSplatshSlice.reducer,
  },
});
