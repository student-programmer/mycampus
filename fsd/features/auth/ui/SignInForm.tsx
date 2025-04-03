'use client'

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
import { useRouter } from "next/navigation";
import { LoginRequest } from "@/fsd/shared/api/authApi";


export const SignInForm = () => {

    const [disabled, setDisabled] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => await handleLogin(values),
        validationSchema: SignInSchema,
        validateOnChange: false,
    })

    useEffect(() => {
        setDisabled(!!formik.errors.password || !!formik.errors.email)
    }, [formik.errors])


    const handleLogin = async (values: LoginRequest) => {
        await authActions.login(values).then(r => {
            localStorage.setItem('jwtToken', r.access_token)
            router.push('/connects')
        }).catch(r => {
            if (r?.response?.status === 400) {
                formik.setFieldError(r.response.data.field, r.response.data.message)
            } else {
                console.error('Error caused in login:', r)
            }
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
                            formik.setFieldError("email", undefined);
                        } }
                        status={ !!formik.errors.email ? 'error' : undefined }
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
                            formik.setFieldError("password", undefined);
                        } }
                        status={ !!formik.errors.password ? 'error' : undefined }
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