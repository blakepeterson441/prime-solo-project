import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchPlayers(action){
  console.log('action.payload', action.payload);
  try {
    const response = yield axios.get(`/players?overall=${action.payload.overall}&offensive=${action.payload.offensive}&defensive=${action.payload.defensive}&aggression=${action.payload.aggression}&game=${action.payload.game}`, action.payload);
    yield put({
      type: 'SET_PLAYERS',
      payload: response.data
    });
  } 
  catch (error){
    console.log('Error getting players', error);
  }
}

export default fetchPlayers;
