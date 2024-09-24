import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

const initialState: AuthState = {
	token: null,
	isAuthenticated: false,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (
			state,
			action: PayloadAction<{ email: string; password: string }>
		) => {
			state.isLoading = true;
              console.log(
								`Logging in user with email: ${action.payload.email}`
							);
		},
		setAuth: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			state.isAuthenticated = true;
			state.isLoading = false;
		},
		loginFailure: state => {
			state.isLoading = false;
		},
	},
});

export const { login, setAuth, loginFailure } = authSlice.actions;
export default authSlice.reducer;
