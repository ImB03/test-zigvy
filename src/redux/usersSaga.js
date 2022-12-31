import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsersSuccess } from './usersSlice';

function* workGetUsersFetch() {
  const users = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'));
  const formattedUsers = yield users.json();
  yield put(getUsersSuccess(formattedUsers));
}

function* usersSaga() {
  yield takeEvery('users/getUsersFetch', workGetUsersFetch);
}

export default usersSaga;
