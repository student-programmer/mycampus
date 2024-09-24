'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../model/authSlice';

const LoginForm = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Login</button>
		</form>
	);
};

export default LoginForm;
