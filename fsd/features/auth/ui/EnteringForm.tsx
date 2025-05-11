import l from '@/fsd/features/auth/ui/LoginForm.module.scss';
import React from 'react';
import LogoIcon from './LogoIcon';

interface EnteringFormProps {
	toggleSignIn: () => void;
	toggleSignUp: () => void;
	handleLogin: () => void;
}

export const EnteringForm = ({
	toggleSignIn,
	toggleSignUp,
	handleLogin,
}: EnteringFormProps) => {
	return (
		<>
		
				<p className={l.logo_text}>Your UAE Student life</p>
			
			{/* Основная форма входа */}
			<div className={l.buttons}>
				<div>
					<button onClick={toggleSignUp} className={l.pass_button}>
						Sign up
					</button>
					<button onClick={toggleSignIn} className={l.login_button_active}>
						Sign in
					</button>
				</div>
			</div>
			<div className={l.additionally}>
				<button className={l.try_now} onClick={handleLogin}>
					Try Demo now
				</button>
			</div>
			<div className={l.additionally}>
				<p className={l.password}>Forgot your password?</p>
			</div>
		</>
	);
};
