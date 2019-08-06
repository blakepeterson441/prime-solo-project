import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchSkills(){
  try {
    const response = yield axios.get('/skills');
    yield put({
      type: 'SET_SKILLS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error getting skills', error);
  }
}

export default fetchSkills;
