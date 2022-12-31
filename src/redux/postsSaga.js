import { call, put, takeEvery } from 'redux-saga/effects';
import { getPostsSuccess } from './postsSlice';

function* workGetPostsFetch() {
  const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
  const formattedPosts = yield posts.json();
  yield put(getPostsSuccess(formattedPosts));
}

function* postsSaga() {
  yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
}

export default postsSaga;
