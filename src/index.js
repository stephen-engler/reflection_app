import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//react-redux
import {
    Provider
} from 'react-redux';
//redux
import {
    createStore,
    applyMiddleware
} from 'redux';
//middleware
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import reducers and sagas 
import reducers from './redux/reducers/reflection.reducer'
import rootSaga from './redux/sagas/root.saga'
//App
import App from "./components/App/App";

//sets up saga middleware
const sagaMiddleware = createSagaMiddleware();

// creates store with middleware
// can only take in one reducer
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);
//wraps the App with the provider so all of app has access
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
