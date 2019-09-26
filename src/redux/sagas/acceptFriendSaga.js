import axios from 'axios';
import { put } from 'redux-saga/effects';

function* acceptFriend(action) {
    console.log('fetchRequests action.playload', action.payload);

    try {
        const response = yield axios.post(`/api/friends/accept`, action.payload);
        console.log('in acceptFriend: response.data is:', response.data);

        yield put({
            type: 'SET_REQUESTS',
            payload: response.data
        });
    }
    catch (error) {
        console.log('Error posting requests', error);
    }
}

export default acceptFriend;
