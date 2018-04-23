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
    //sets the property to true so snackbars know to open
    switch (action.type) {
        // Shows bookmark snackbar
        case 'BOOKMARK_SNACKBAR':
            return { bookmarked: true }
        //shows delete snackbar
        case 'DELETE_SNACKBAR':
            return { deleted: true }
        //shows add snackbar
        case 'ADD_SNACKBAR':
            return { added: true }
        //closes all snackbars
        case 'CLOSE_SNACKBAR':
            return { bookmarked: false, deleted: false, added: false }
        default:
            return state
    }
}

export default combineReducers({ reflectionList, snackBarReducer});

