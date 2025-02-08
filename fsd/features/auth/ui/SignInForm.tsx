import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";

export const SignInForm = ({handleLogin}) => {
    return (
        <>
            <h2 className={ l.business_title }>Sign In</h2>
            <p className={ l.description }>Your UAE student life!</p>

            <div className={ l.form_box }>
                <div>
                    <label htmlFor='business-email' className={ l.label }>
                        Email Address
                    </label>
                    <input
                        type='email'
                        id='business-email'
                        placeholder='Enter your email...'
                        className={ l.input_field }
                    />
                </div>
                <div>
                    <label htmlFor='password' className={ l.label }>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        placeholder='   Enter your password...'
                        className={ l.input_field }
                    />
                </div>
            </div>
            <button className={ l.login_button } onClick={ handleLogin }>
                Sign in
            </button>

        </>
    )
}