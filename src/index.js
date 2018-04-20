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

const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    yield takeEvery('ADD_REF', addRefSaga);
}

function* addRefSaga(action){
    yield console.log('in addrefsaga')
}


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
