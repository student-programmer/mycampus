'use client';
import React from 'react';
import LoginForm from '../features/auth/ui/LoginForm';

const Login = () => {
	return (
		<div className='w-[150px] bg-red-500'>
			<h1>Login</h1>
			<LoginForm />
		</div>
	);
};

export default Login;
