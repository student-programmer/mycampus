'use client';
import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation'; // импортируем хук useRouter
import l from './LoginForm.module.scss'

const LoginForm = () => {
	const router = useRouter(); // создаем инстанс useRouter

	const handleLogin = () => {
		router.push('/profile'); // выполняем редирект на страницу profile
	};

	return (
		<div className={l.login_form}>
			<Button type='primary' onClick={handleLogin}>
				login via UNI
			</Button>
		</div>
	);
};

export default LoginForm;
