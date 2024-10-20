'use client';
import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import l from './LoginForm.module.scss';
import LogoIcon from './LogoIcon';

const LoginForm = () => {
	const router = useRouter();

	const handleLogin = () => {
		router.push('/connects');
	};

	return (
		<div className={l.login_form}>
			<div className={l.backgorund}></div>
			<div className={l.logo}>
				<LogoIcon />
				<p className={l.logo_text}>Your UAE Student life</p>
			</div>

			<div className={l.panel}>
				<h1 className={l.auth}>Sign In</h1>
				<p className={l.description}>Sign in 1 minute for free!</p>
				<button onClick={handleLogin} className={l.login_button}>
					Sign in
				</button>
				<div className={l.additionally}>
					<p className={l.create}>Create business account</p>
					<p className={l.password}>Forgot your password?</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
