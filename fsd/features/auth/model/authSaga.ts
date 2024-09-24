import { call, put, takeLatest } from 'redux-saga/effects';
import { login, setAuth, loginFailure } from './authSlice';
import { loginApi } from '../../../shared/api/authApi';
import { PayloadAction } from '@reduxjs/toolkit';

function* loginSaga(
	action: PayloadAction<{ email: string; password: string }>
) {
	try {
		// Указываем тип возвращаемого значения loginApi
		const token: string = yield call(loginApi, action.payload);
		yield put(setAuth(token));
	} catch (e) {
        console.log(e)
		// Типизируем error явно как any (или более детализировано при необходимости)
		yield put(loginFailure());
	}
}

export default function* authSaga() {
	yield takeLatest(login.type, loginSaga);
}
