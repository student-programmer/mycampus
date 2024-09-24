import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUser, setUser, fetchUserFailure } from './userSlice';
import { fetchUserFromApi, User } from '../../../shared/api/userApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './userSlice';

function* fetchUserSaga(action: PayloadAction<string>) {
	try {
		// Получаем данные пользователя из API
		const user: User = yield call(fetchUserFromApi, action.payload);

		// Преобразуем объект User в объект UserState
		const userState: UserState = {
			...user, // Используем поля, полученные из API
			age: 25, // Добавляем недостающие поля
			gender: 'unknown', // По умолчанию (или из других источников данных)
			isLoading: false, // Устанавливаем, что данные загружены
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
