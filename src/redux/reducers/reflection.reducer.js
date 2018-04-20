import { combineReducers } from "redux";
import {
    Provider
} from 'react-redux';
import {
    createStore,
    applyMiddleware
} from 'redux';

//reducers
//SET_REFLECTIONS
const reflectionList = (state = [], action) => {
    switch (action.type) {
        case 'SET_REFLECTION':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({ reflectionList});

