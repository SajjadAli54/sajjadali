import { createSlice } from "@reduxjs/toolkit";

import { Project } from "@types";

const slice = createSlice({
  name: "data",
  initialState: {
    projects: [],
    blogs: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export default slice.reducer;

export const { setProjects, setBlogs } = slice.actions;

export const selectProjects = (state: { data: { projects: Project[] } }) =>
  state.data.projects;

// export const selectBlogs = (state) => state.data.blogs;
