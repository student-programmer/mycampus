import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	id: string;
	name: string;
	age: number;
	gender: string;
	isLoading: boolean;
}

const initialState: UserState = {
	id: '',
	name: '',
	age: 0,
	gender: '',
	isLoading: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUser: (state) => {
			state.isLoading = true;
		},
		setUser: (state, action: PayloadAction<UserState>) => {
			state.isLoading = false;
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.age = action.payload.age;
			state.gender = action.payload.gender;
		},
		fetchUserFailure: state => {
			state.isLoading = false;
		},
	},
});

export const { fetchUser, setUser, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
