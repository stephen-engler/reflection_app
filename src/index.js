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
}

function* addRefSaga(action){
    try {
        yield call(axios.post, '/reflection', action.payload);
    } catch (error){
        console.log('an error in add reflection saga');
    }
}

//reducers
const reflectionList = (state=[], action) =>{
    return state;
}

const store = createStore(
    combineReducers({reflectionList}),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
