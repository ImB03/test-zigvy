import { createSlice } from '@reduxjs/toolkit';

export const contentBlogSlice = createSlice({
  name: 'showHideComment',
  initialState: {
    showHideComment: true,
  },
  reducers: {
    changeStateComment: (state) => {
      state.showHideComment = !state.showHideComment;
    },
  },
});

export const { changeStateComment } = contentBlogSlice.actions;
export default contentBlogSlice.reducer;
