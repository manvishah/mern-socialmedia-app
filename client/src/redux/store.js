import { configureStore } from "@reduxjs/toolkit";
import memoriesReducer from './memoriesSlice'
export default configureStore({
    reducer: {
        post:memoriesReducer
    },
  });