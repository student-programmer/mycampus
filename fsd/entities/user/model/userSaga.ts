import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUser, setUser, fetchUserFailure } from './userSlice';
import { fetchUserFromApi, User } from '../../../shared/api/userApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './userSlice';

function* fetchUserSaga(action: PayloadAction<string>) {
	try {
		const user: User = yield call(fetchUserFromApi, action.payload);

				const userState: UserState = {
			...user,
			age: 25,
			gender: 'unknown',
			isLoading: false, 
		};

		yield put(setUser(userState));
	} catch (error) {
		yield put(fetchUserFailure());
        console.log(error)
	}
}

export default function* userSaga() {
	yield takeLatest(fetchUser.type, fetchUserSaga);
}
