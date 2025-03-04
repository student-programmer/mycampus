import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";

interface EnteringFormProps {
    toggleSignIn: () => void;
    toggleSignUp: () => void;
}


export const EnteringForm = ({toggleSignIn, toggleSignUp}: EnteringFormProps) => {
    return (
        <>
            <h1 className={ l.auth }>Sign In</h1>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            {/* Основная форма входа */ }
            <div className={ l.buttons }>
                <button onClick={ toggleSignIn } className={ l.login_button_active }>
                    Sign in
                </button>
                <div>

                    <button onClick={ toggleSignUp } className={ l.pass_button }>
                        Sign up
                    </button>

                    <button
                        onClick={ () => console.log('Sign in via UAE Pass') }
                        className={ l.pass_button }
                        disabled
                        style={ {opacity: "50%", pointerEvents: 'none'} }
                    >
                        UAE Pass
                    </button>
                </div>
            </div>

            <div className={ l.additionally }>
                <p className={ l.password }>Forgot your password?</p>
            </div>
        </>
    )
}