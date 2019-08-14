import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteFriends(action){
  console.log('deleteFriends action.playload', action.payload);
  
  try {
    const response = yield axios.delete(`/api/friends/delete`, action.payload);
    console.log('in fetchFriends: response.data is:', response.data);
    
    yield put({
      type: 'DELETE_FRIENDS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error deleting friend', error);
  }
}

export default deleteFriends;
