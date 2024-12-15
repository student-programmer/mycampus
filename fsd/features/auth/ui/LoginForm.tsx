'use client';
import React, {useState} from 'react';
import {Button} from 'antd';
import {useRouter} from 'next/navigation';
import l from './LoginForm.module.scss';
import LogoIcon from './LogoIcon';

const LoginForm = () => {
    const router = useRouter();
    const [isBusinessAccount, setIsBusinessAccount] = useState(false); // Состояние для бизнес-аккаунта

    // Обработчик для кнопки "Sign in"
    const handleLogin = () => {
        router.push('/connects');
    };

    // Обработчик для переключения на бизнес-аккаунт
    const toggleBusinessAccount = () => {
        setIsBusinessAccount(!isBusinessAccount);
    };

    return (
        <div className={l.login_form}>
            <div className={l.background}></div>
            {!isBusinessAccount && (
                <div className={l.logo}>
                    <LogoIcon/>
                    <p className={l.logo_text}>Your UAE Student life</p>
                </div>
            )}

            <div className={!isBusinessAccount ? l.panel : l.panel_busines}>
                {!isBusinessAccount && (
                    <>
                        <h1 className={l.auth}>Sign In</h1>
                        <p className={l.description}>Sign in 1 minute for free!</p>

                        {/* Основная форма входа */}

                        <button onClick={handleLogin} className={l.login_button}>
                            Sign in
                        </button>

                        <button onClick={() => console.log("Sign in via UAE Pass")} className={l.login_button}>
                            Sign in via UAE Pass
                        </button>

                        <div className={l.additionally}>
                            {/* Переключение на бизнес-аккаунт */}
                            <p onClick={toggleBusinessAccount} className={l.create}>
                                Create business account
                            </p>
                            <p className={l.password}>Forgot your password?</p>
                        </div>
                    </>
                )}
                {/* Расширяющаяся форма для бизнес-аккаунта */}
                {isBusinessAccount && (
                    <>
                        <h2 className={l.business_title}>Business Account</h2>
                        <p className={l.description}>Sign in 1 minute for free!</p>
                        <div className={l.inputs}>
                            <div>
                                <label htmlFor='company-name' className={l.label}>
                                    Company Name
                                </label>
                                <input
                                    type='text'
                                    id='company-name'
                                    placeholder='Company Name'
                                    className={l.input_field}
                                />
                            </div>
                            <div>
                                <label htmlFor='business-email' className={l.label}>
                                    Business Email
                                </label>
                                <input
                                    type='email'
                                    id='business-email'
                                    placeholder='Business Email'
                                    className={l.input_field}
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className={l.label}>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Password'
                                    className={l.input_field}
                                />
                            </div>
                        </div>
                        <button className={l.login_button} onClick={handleLogin}>
                            Create account
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
