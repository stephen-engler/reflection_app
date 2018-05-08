import {
    call,
    put
} from 'redux-saga/effects';
import axios from 'axios';
//ADD_REF
//axios call to server to add reflection
export function* addRefSaga(action) {
    try {
        yield call(axios.post, '/reflection', action.payload);
    } catch (error) {
        console.log('an error in add reflection saga');
    }
}
//GET_REF
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
//DELETE_REFLECTION
//deletes reflection, gets reflections from server, dispatches snackbar
//action.payload is the reflections object
export function* deleteRefSaga(action) {
    try {
        yield call(axios.delete, `/reflection/${action.payload.id}`);
        yield put({
            type: 'GET_REF'
        })
        yield put({
            type: 'DELETE_SNACKBAR'
        })

    } catch (error) {
        console.log('an error in delete ref saga ', error);
    }
}
//BOOKMARK_REFLECTION
//updates reflection for bookmark, gets updated reflections, dispatches snackbar
//update is done server side, just sends whole object
export function* bookmarkRefSaga(action){
    try{
        yield call(axios.put, `/reflection`, action.payload);
        yield put({
            type: 'GET_REF'
        })
        yield put({
            type: 'BOOKMARK_SNACKBAR'
        })
    }catch(error){
        console.log('an error in bookmarkSaga ', error);
    }
}