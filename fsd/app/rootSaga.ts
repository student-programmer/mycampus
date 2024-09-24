import { all } from 'redux-saga/effects';
import userSaga from '../entities/user/model/userSaga';
import authSaga from '../features/auth/model/authSaga';

export function* rootSaga() {
	yield all([userSaga(), authSaga()]);
}
