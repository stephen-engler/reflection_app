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
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


import reducers from './redux/reducers/reflection.reducer'
import rootSaga from './redux/sagas/root.saga'

//saga stuff
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
