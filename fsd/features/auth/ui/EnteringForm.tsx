import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";

export const EnteringForm = ({toggleSignIn, toggleSignUp}) => {
    return (
        <>
            <h1 className={ l.auth }>Sign In</h1>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            {/* Основная форма входа */ }
            <div className={ l.buttons }>
                <button onClick={ toggleSignIn } className={ l.login_button }>
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
                        {/*Sign in via UAE Pass*/ }
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