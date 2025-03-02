import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React, { useEffect, useState } from "react";
import { Input } from "antd";

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useFormik } from "formik";
import { SignInSchema } from "@/schemas/signIn";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import { MailIcon } from "@/public/mailIcon";
import { LockIcon } from "@/public/lockIcon";
import authActions from "@/actions/auth";
import { router } from "next/client";


export const SignInForm = () => {

    const [disabled, setDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => await handleLogin(values)
        ,
        validationSchema: SignInSchema,
        validateOnChange: false,
    })

    useEffect(() => {
        setDisabled(!!formik.errors.password || !!formik.errors.email)
    }, [formik.errors.password, formik.errors.email])


    const handleLogin = async (values) => {
        await authActions.login(values).then(r => {
            router.push('/connects')
        })
    }

    return (
        <>
            <h2 className={ l.business_title }>Sign In</h2>
            <p className={ l.description }>Your UAE student life!</p>

            <div className={ l.form_box }>
                <div>
                    <label htmlFor='email' className={ l.label }>
                        Email Address
                    </label>
                    <Input
                        id={ 'email' }
                        name={ 'email' }
                        value={ formik.values.email }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("email", null);
                        } }
                        status={ !!formik.errors.email ? 'error' : null }
                        className={ l.input_field }
                        prefix={ <MailIcon
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Enter your email..."
                    />
                    { formik.errors.email && < ErrorComponent message={ formik.errors.email }/> }
                </div>
                <div>
                    <label htmlFor='password' className={ l.label }>
                        Password
                    </label>
                    <Input.Password
                        id={ 'password' }
                        name={ 'password' }
                        className={ l.input_field }
                        value={ formik.values.password }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("password", null);
                        } }
                        status={ !!formik.errors.password ? 'error' : null }
                        prefix={ <LockIcon
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Input password..."
                        iconRender={ (visible) => (visible ?
                            <EyeOutlined
                                style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "gray"} }/> :
                            <EyeInvisibleOutlined
                                style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "gray"} }/>) }
                    />
                    { formik.errors.password && < ErrorComponent message={ formik.errors.password }/> }
                </div>
            </div>
            <button disabled={ disabled }
                    className={ disabled ? l.login_button : l.login_button_active }
                    onClick={ async () => await formik.submitForm() }>
                Sign in
            </button>
            <div className={ l.additionally }>
                <p className={ l.password }>Forgot your password?</p>
            </div>

        </>
    )
}