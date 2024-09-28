'use client';
import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation'; // импортируем хук useRouter

const LoginForm = () => {
	const router = useRouter(); // создаем инстанс useRouter

	const handleLogin = () => {
		router.push('/profile'); // выполняем редирект на страницу profile
	};

	return (
		<div className='ml-10'>
			<Button type='primary' onClick={handleLogin}>
				login via UNI
			</Button>
		</div>
	);
};

export default LoginForm;
