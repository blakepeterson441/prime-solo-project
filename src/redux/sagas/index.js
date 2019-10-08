import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import fetchSkills from "./fetchSkillsSaga";
import fetchFriends from './fetchFriendsSaga';
import fetchRequests from './fetchRequestsSaga';
import setSkills from './setSkillsSaga';
import addFriends from './addFriendsSaga';
import deleteFriends from './deleteFriendsSaga';
import userSkills from './userSkillsSaga';
import acceptFriend from './acceptFriendSaga';
import getCurrent from './getCurrentSkillsSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('SEARCH_SKILLS', fetchSkills);
  yield takeEvery('SEARCH_FRIENDS', fetchFriends);
  yield takeEvery('SEARCH_REQUESTS', fetchRequests);
  yield takeEvery('ADD_SKILLS', setSkills);
  yield takeEvery('ADD_FRIEND', addFriends);
  yield takeEvery('REMOVE_FRIEND', deleteFriends);
  yield takeEvery('ACCEPT_REQUEST', acceptFriend);
  yield takeEvery('SHOW_SKILLS', userSkills);
  yield takeEvery('FETCH_CURRENT_SKILLS', getCurrent);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
