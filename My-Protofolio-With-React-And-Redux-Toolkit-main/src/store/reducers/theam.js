import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const theamSlice = createSlice({
  name: "theam",
  initialState,
  reducers: {
    toggleTheam: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { toggleTheam } = theamSlice.actions;
export default theamSlice;
