import { createStore } from "@reduxjs/toolkit";
import theamSlice from "./reducers/theam";

const store = createStore(theamSlice.reducer);

export default store;
