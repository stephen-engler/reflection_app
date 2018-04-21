import { combineReducers } from "redux";


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

const snackBarReducer = (state = {}, action) => {
    switch (action.type) {
        case 'BOOKMARK_SNACKBAR':
            return { bookmarked: true }
        case 'DELETE_SNACKBAR':
            return { deleted: true }
        case 'ADD_SNACKBAR':
            return { added: true }
        case 'CLOSE_SNACKBAR':
            return { bookmarked: false, deleted: false, added: false }
        default:
            return state
    }
}

export default combineReducers({ reflectionList, snackBarReducer});

