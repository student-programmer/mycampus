'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import l from './LoginForm.module.scss';
import LogoIcon from './LogoIcon';
import BG from '@/fsd/public/images/login-bg.png';
import style from '@/fsd/widgets/chat/ui/chatDetail.module.scss';
import { BusinessForm } from '@/fsd/features/auth/ui/BusinessForm';
import { SignInForm } from '@/fsd/features/auth/ui/SignInForm';
import { SignUpForm } from '@/fsd/features/auth/ui/SignUpForm';
import { EnteringForm } from '@/fsd/features/auth/ui/EnteringForm';
import { LeftPageIcon } from '@/fsd/widgets/chat/ui';

const LoginForm = () => {
	const router = useRouter();
	const [form, setForm] = useState<string | null>(null);
	const [showPopup, setShowPopup] = useState(true);

	const handleLogin = () => {
		router.push('/connects');
	};
	const handlePreLogin = () => {
		router.push('/connects-demo');
	};

	const toggleBusinessAccount = () => {
		setForm(form === 'Business' ? null : 'Business');
	};

	const toggleSignIn = () => {
		setForm('SignIn');
	};

	const toggleSignUp = () => {
		setForm('SignUp');
	};

	const toggleBack = () => {
		setForm(null);
	};

	const getFormComponent = () => {
		switch (form) {
			case 'Business':
				return <BusinessForm handleLogin={handleLogin} />;
			case 'SignIn':
				return <SignInForm />;
			case 'SignUp':
				return <SignUpForm setForm={setForm} />;
			case null:
				return (
					<EnteringForm
						toggleSignIn={toggleSignIn}
						toggleSignUp={toggleSignUp}
						handleLogin={handlePreLogin}
					/>
				);
		}
	};

	return (
		<div className={l.login_form}>
			{showPopup && (
				<div className={l.add_to_home_popup}>
					<div className={l.popup_content}>
						<button
							className={l.close_button}
							onClick={() => setShowPopup(false)}
						>
							×
						</button>
						<p className={l.popup_save}>Save MYC</p>
						<p>
							You can add MYC to your Home Screen for quick access — just like
							an app
						</p>
						<br />
						<p>
							iPhone (Safari):
							<p>Tap the Share icon → choose “Add to Home Screen”</p>
						</p>
						<br />
						<p>
							Android (Chrome):
							<p>Tap the three dots (⋮) → select “Add to Home screen”</p>
						</p>
						<p className={l.popup_ready}> Ready! Fast access anytime!</p>
					</div>
				</div>
			)}
			{form !== null && (
				<div className={l.back_button}>
					<button className={style.iconGoBack} onClick={toggleBack}>
						<LeftPageIcon />
					</button>
				</div>
			)}
			{/*<div className={ l.business_button }>*/}
			{/*    <button*/}
			{/*        onClick={ toggleBusinessAccount }*/}
			{/*        className={ `${ l.account_button } ${ form === 'Business' ? l.active : "" }` }*/}
			{/*    >*/}
			{/*        { form === 'Business' ?*/}
			{/*            < BusinessIcon/> :*/}
			{/*            < StudentIcon/>*/}
			{/*        }*/}
			{/*    </button>*/}
			{/*</div>*/}
			<div
				className={l.background}
				style={{ backgroundImage: `url(${BG.src})` }}
			></div>
			{form !== 'Business' && form !== 'SignUp' && (
				<div className={l.logo}>
					<LogoIcon />
				</div>
			)}

			<div className={form !== 'Business' ? l.panel : l.panel_busines}>
				{getFormComponent()}
			</div>
		</div>
	);
};

export default LoginForm;
