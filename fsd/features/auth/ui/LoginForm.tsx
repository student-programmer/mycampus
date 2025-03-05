'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import l from './LoginForm.module.scss';
import LogoIcon from './LogoIcon';
import BG from '@/fsd/public/images/login-bg.png'
import style from "@/fsd/widgets/chat/ui/chatDetail.module.scss";
import LeftPageIcon from "@/fsd/widgets/chat/ui/LeftPageIcon";
import StudentIcon from "@/public/student";
import BusinessIcon from "@/public/business";
import { BusinessForm } from "@/fsd/features/auth/ui/BusinessForm";
import { SignInForm } from "@/fsd/features/auth/ui/SignInForm";
import { SignUpForm } from "@/fsd/features/auth/ui/SignUpForm";
import { EnteringForm } from "@/fsd/features/auth/ui/EnteringForm";

const LoginForm = () => {
    const router = useRouter();
    const [form, setForm] = useState<string | null>(null)

    const handleLogin = () => {
        router.push('/connects');
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
                return < BusinessForm handleLogin={ handleLogin }/>
            case 'SignIn':
                return < SignInForm/>
            case 'SignUp':
                return < SignUpForm setForm={ setForm }/>
            case null:
                return < EnteringForm toggleSignIn={ toggleSignIn } toggleSignUp={ toggleSignUp }/>;
        }
    }


    return (
        <div className={ l.login_form }>
            { form !== null &&
                <div className={ l.back_button }>
                    <button className={ style.iconGoBack } onClick={ toggleBack }>
                        <LeftPageIcon/>
                    </button>
                </div>
            }
            <div className={ l.business_button }>
                <button
                    onClick={ toggleBusinessAccount }
                    className={ `${ l.account_button } ${ form === 'Business' ? l.active : "" }` }
                >
                    { form === 'Business' ?
                        < BusinessIcon/> :
                        < StudentIcon/>
                    }
                </button>
            </div>
            <div className={ l.background } style={ {backgroundImage: `url(${ BG.src })`} }></div>
            { (form !== 'Business' && form !== 'SignUp') && (
                <div className={ l.logo }>
                    <LogoIcon/>
                    <p className={ l.logo_text }>Your UAE Student life</p>
                </div>
            ) }

            <div className={ form !== 'Business' ? l.panel : l.panel_busines }>
                { getFormComponent() }
            </div>
        </div>
    );
};

export default LoginForm;
