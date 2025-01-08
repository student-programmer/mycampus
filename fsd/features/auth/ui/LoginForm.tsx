'use client';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import l from './LoginForm.module.scss';
import LogoIcon from './LogoIcon';
import BG from '@/fsd/public/images/login-bg.png'
import style from "@/fsd/widgets/chat/ui/chatDetail.module.scss";
import LeftPageIcon from "@/fsd/widgets/chat/ui/LeftPageIcon";
import StudentIcon from "@/public/student";
import BusinessIcon from "@/public/business";

const LoginForm = () => {
  const router = useRouter();
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);

  const handleLogin = () => {
    router.push('/connects');
  };

  const toggleBusinessAccount = () => {
    setIsBusinessAccount(!isBusinessAccount);
  };

    return (
        <div className={l.login_form}>
            {isBusinessAccount &&
                <div className={l.back_button}>
                    <button className={style.iconGoBack} onClick={toggleBusinessAccount}>
                        <LeftPageIcon/>
                    </button>
                </div>
            }
            <div className={l.business_button}>
                <button
                    onClick={toggleBusinessAccount}
                    className={`${l.account_button} ${isBusinessAccount ? l.active : ""}`}
                >
                    {isBusinessAccount ?
                        < BusinessIcon/> :
                        < StudentIcon/>
                    }
                </button>
            </div>
            <div className={l.background} style={{backgroundImage: `url(${BG.src})`}}></div>
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

            {/* Основная форма входа */ }
            <div className={l.buttons}>
              <button onClick={ handleLogin } className={ l.login_button }>
                Sign in
              </button>

              <button
                onClick={ () => console.log('Sign in via UAE Pass') }
                className={ l.pass_button }
              >
                {/*Sign in via UAE Pass*/}
                UAE Pass
              </button>
            </div>

                        <div className={l.additionally}>
                            <p className={l.password}>Forgot your password?</p>
                        </div>
                    </>
                )}
                {/* Расширяющаяся форма для бизнес-аккаунта */}
                {isBusinessAccount && (
                    <>
                        <h2 className={l.business_title}>Business Account</h2>
                        <p className={l.description}>Sign in 1 minute for free!</p>

                        <div className={l.form_box}>
                            <div>
                                <label htmlFor='company-name' className={l.label}>
                                    Company Name
                                </label>
                                <input
                                    type='text'
                                    id='company-name'
                                    placeholder='   Enter your company name...'
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
                                    placeholder='   Enter your email...'
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
                                    placeholder='   Enter your password...'
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
