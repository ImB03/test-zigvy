import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import postsSlice from './postsSlice';
import usersSaga from './usersSaga';
import postsSaga from './postsSaga';
import contentBlogSlice from '../pages/ContentBlog/contentBlogSlice';
import searchSlice from '../components/Search/searchSlice';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
    showHideComment: contentBlogSlice,
    setInput: searchSlice,
  },
  middleware: [saga],
});
saga.run(usersSaga);
saga.run(postsSaga);
