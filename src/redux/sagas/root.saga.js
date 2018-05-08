import {
    takeEvery,
} from 'redux-saga/effects';
import { addRefSaga, getRefSaga, deleteRefSaga, bookmarkRefSaga} from './reflection.saga'
//imports all the sagas, tells them which actions to intercept
export default function* rootSaga() {
    yield takeEvery('ADD_REF', addRefSaga);
    yield takeEvery('GET_REF', getRefSaga);
    yield takeEvery('DELETE_REFLECTION', deleteRefSaga);
    yield takeEvery('BOOKMARK_REFLECTION', bookmarkRefSaga);
}


