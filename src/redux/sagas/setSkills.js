import axios from 'axios';
import { put } from 'redux-saga/effects';

function* setSkills(action){
  console.log('setSkills action.playload', action.payload.addSkill);
  
  try {
    const response = yield axios.post(`/api/skills/set?user=${action.payload.user}&game=${action.payload.addSkill.game}&overall=${action.payload.addSkill.overall}&offensive=${action.payload.addSkill.offensive}&defensive=${action.payload.addSkill.defensive}&aggression=${action.payload.addSkill.aggression}`, action.payload.addSkill);
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
