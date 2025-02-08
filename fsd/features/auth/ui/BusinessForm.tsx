import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";

export const BusinessForm = ({handleLogin}) => {
    return (
        <>
            <h2 className={ l.business_title }>Business Account</h2>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            <div className={ l.form_box }>
                <div>
                    <label htmlFor='company-name' className={ l.label }>
                        Company Name
                    </label>
                    <input
                        type='text'
                        id='company-name'
                        placeholder='   Enter your company name...'
                        className={ l.input_field }
                    />
                </div>
                <div>
                    <label htmlFor='business-email' className={ l.label }>
                        Business Email
                    </label>
                    <input
                        type='email'
                        id='business-email'
                        placeholder='   Enter your email...'
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
                Create account
            </button>

        </>
    )
}