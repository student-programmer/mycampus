import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../entities/user/model/userSlice';
import authReducer from '../features/auth/model/authSlice';

export const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
});
