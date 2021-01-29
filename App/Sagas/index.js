import {takeLatest} from 'redux-saga/effects';
import {GET_USER} from '../Actions/Keys';
import {getUserSaga} from './UserSaga';

export default function* rootSaga() {
  yield takeLatest(GET_USER, getUserSaga);
}
