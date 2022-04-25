import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/posts";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await axios.get(url);
  console.log('response 1',response)
  return response.data;
});

export const createPost = createAsyncThunk("createPost", async (newPost) => {
    const response = await axios.post(url,newPost);
    console.log('response 2 ',response)
    return response.data;
  });