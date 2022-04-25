import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const { fetchPosts, createPost } = api;
const memoriesReducer = createSlice({
  name: "memories",
  initialState: [],
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      console.log("fetching data");
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log("fetched data successfully");
      return action.payload;
    },
    [createPost.pending]: (state, action) => {
      console.log("creating data");
    },
    [createPost.fulfilled]: (state, action) => {
      console.log("create data", action, state);
      state.push(action.payload);
    },
  },
});

export const { fetch_memories, create_memory } = memoriesReducer.actions;
export default memoriesReducer.reducer;
