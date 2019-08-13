import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchSkills(action){
  console.log('fetchSkills action.playload', action.payload);
  
  try {
    const response = yield axios.get(`/api/skills?overall=${action.payload.overall}&offensive=${action.payload.offensive}&defensive=${action.payload.defensive}&aggression=${action.payload.aggression}&game=${action.payload.game}`, action.payload);
    console.log('in fetchSkills: response.data is:', response.data);
    
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
