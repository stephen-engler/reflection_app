import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';
import axios from 'axios';




export function* addRefSaga(action) {
    try {
        yield call(axios.post, '/reflection', action.payload);
    } catch (error) {
        console.log('an error in add reflection saga');
    }
}
// gets the reflections from the server
//saves in reflection list reducer
export function* getRefSaga(action) {
    try {
        let refList = yield call(axios.get, '/reflection');
        yield put({
            type: 'SET_REFLECTION',
            payload: refList.data
        })

    } catch (error) {
        console.log('an error in getref saga ', error);
    }
}
export function* deleteRefSaga(action) {
    try {
        yield call(axios.delete, `/reflection/${action.payload.id}`);
        yield put({
            type: 'GET_REF'
        })
    } catch (error) {
        console.log('an error in delete ref saga ', error);
    }
}