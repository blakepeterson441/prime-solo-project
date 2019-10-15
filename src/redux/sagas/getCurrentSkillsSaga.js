import { put } from 'redux-saga/effects';
import axios from 'axios';

//gets the current pcn from the when its click on the DOM.
function* getCurrentSkills(action) {
    console.log('getCurrentSkills', action.payload);
    
    try {
        const response = yield axios.get(`/api/skills/current?id=${action.payload}`);
        yield put({ type: 'SHOW_CURRENT_SKILLS', payload: response.data })
    }
    catch (error) {
        console.log('error GETting current skills', error);
    }
}

export default getCurrentSkills;