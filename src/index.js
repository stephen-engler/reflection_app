import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {
    Provider
} from 'react-redux';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';
import axios from 'axios';
//saga stuff
const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    yield takeEvery('ADD_REF', addRefSaga);
    yield takeEvery('GET_REF', getRefSaga);
    yield takeEvery('DELETE_REFLECTION', deleteRefSaga);
}

function* addRefSaga(action){
    try {
        yield call(axios.post, '/reflection', action.payload);
    } catch (error){
        console.log('an error in add reflection saga');
    }
}
// gets the reflections from the server
//saves in reflection list reducer
function* getRefSaga(action){
    try{
        let refList = yield call(axios.get, '/reflection');
        yield put({
            type: 'SET_REFLECTION',
            payload: refList.data
        })
        
    }catch(error){
        console.log('an error in getref saga ', error);
    }
}
function* deleteRefSaga(action){
    try{
        yield call(axios.delete, `/reflection/${action.payload.id}`);
        yield put({
            type: 'GET_REF'
        })
    }catch(error){
        console.log('an error in delete ref saga ', error);
    }
}


//reducers
//SET_REFLECTIONS
const reflectionList = (state=[], action) =>{
    switch(action.type){
        case 'SET_REFLECTION':
            return action.payload
        default:
            return state
    }
}

const store = createStore(
    combineReducers({reflectionList}),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
