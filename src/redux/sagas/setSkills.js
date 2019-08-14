import axios from 'axios';
import { put } from 'redux-saga/effects';

function* setSkills(action){
  console.log('setSkills action.playload', action.payload);
  
  try {
    const response = yield axios.post(`/api/skills/set?userId=${action.payload.user_id}&gameId=${action.payload.game_id}&overall=${action.payload.overall}&offensive=${action.payload.offensive}&defensive=${action.payload.defensive}&aggression=${action.payload.aggression}`, action.payload);
    console.log('in setSkills: response.data is:', response.data);
    
    yield put({
      type: 'SET_SKILLS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error setting skills', error);
  }
}

export default setSkills;
