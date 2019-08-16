import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchRequests(action){
  console.log('fetchRequests action.playload', action.payload);
  
  try {
    const response = yield axios.get(`/api/friends/pending`);
    console.log('in fetchFriends: response.data is:', response.data);
    
    yield put({
      type: 'SET_REQUESTS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error getting requests', error);
  }
}

export default fetchRequests;
