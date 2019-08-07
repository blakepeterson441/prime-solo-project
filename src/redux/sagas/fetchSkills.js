import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchSkills(action){
  try {
    const response = yield axios.get(`/skills?overall=${action.payload.overall}&offensive=${action.payload.offensive}&defensive=${action.payload.defensive}&aggression=${action.payload.aggression}`, action.payload);
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
