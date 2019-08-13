import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchPlayers(action){
  console.log('fetchPlayers action.playload', action.payload);
  
  try {
    const response = yield axios.get('/api/players');
    console.log('in fetchPlayers: response.data is:', response.data);
    
    yield put({
      type: 'SET_USERNAME',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error getting players', error);
  }
}

export default fetchPlayers;
