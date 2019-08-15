import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteFriends(action){
  console.log('deleteFriends action.playload', action.payload);
  
  try {
    const response = yield axios.delete(`/api/friends/delete/${action.payload.user1}/${action.payload.user2}`);
    console.log('in fetchFriends: response.data is:', response.data);
    
    yield put({
      type: 'SEARCH_FRIENDS',
      payload: response.data
    });
    yield put({
      type: 'SEARCH_REQUESTS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error deleting friend', error);
  }
}

export default deleteFriends;
