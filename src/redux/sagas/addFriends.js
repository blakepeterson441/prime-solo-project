import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addFriends(action){
  console.log('addFriends action.playload', action.payload);
  
  try {
    const response = yield axios.post(`/api/friends/add`, action.payload);
    console.log('in fetchFriends: response.data is:', response.data);
    
    yield put({
      type: 'SEARCH_FRIENDS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error getting skills', error);
  }
}

export default addFriends;
