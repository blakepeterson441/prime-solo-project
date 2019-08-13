import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchFriends(action){
  console.log('fetchFriends action.playload', action.payload);
  
  try {
    const response = yield axios.get(`/api/friends`);
    console.log('in fetchFriends: response.data is:', response.data);
    
    yield put({
      type: 'SET_FRIENDS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error getting skills', error);
  }
}

export default fetchFriends;
