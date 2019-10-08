import { put } from 'redux-saga/effects';
import axios from 'axios';

//gets the current pcn from the when its click on the DOM.
function* getCurrentSkills(action) {
    console.log('getCurrentSkills', action.payload);
    
    try {
        const response = yield axios.get(`/api/skills/current?user=${action.payload.user}&game=${action.payload.addSkill.game}&overall=${action.payload.addSkill.overall}&offensive=${action.payload.addSkill.offensive}&defensive=${action.payload.addSkill.defensive}&aggression=${action.payload.addSkill.aggression}`, action.payload.addSkill);
        yield put({ type: 'SHOW_CURRENT_SKILLS', payload: response.data })
    }
    catch (error) {
        console.log('error GETting current skills', error);
    }
}

export default getCurrentSkills;