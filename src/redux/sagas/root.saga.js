import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';
import { addRefSaga, getRefSaga, deleteRefSaga} from './reflection.saga'

export default function* rootSaga() {
    yield takeEvery('ADD_REF', addRefSaga);
    yield takeEvery('GET_REF', getRefSaga);
    yield takeEvery('DELETE_REFLECTION', deleteRefSaga);
}


