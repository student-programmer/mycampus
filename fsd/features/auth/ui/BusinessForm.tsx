import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { BusinessSchema } from "@/schemas/signIn";
import { useFormik } from "formik";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import { MailIcon } from "@/public/mailIcon";
import { LockIcon } from "@/public/lockIcon";
import { UserSquare } from "@/public/userSquare";

export const BusinessForm = ({handleLogin}) => {

    const [disabled, setDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            companyName: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            handleLogin();
        },
        validationSchema: BusinessSchema,
        validateOnChange: false,
    })

    useEffect(() => {
        setDisabled(!!formik.errors.password || !!formik.errors.email || !!formik.errors.companyName)
    }, [formik.errors.password, formik.errors.email, formik.errors.companyName])

    return (
        <>
            <h2 className={ l.business_title }>Business Account</h2>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            <div className={ l.form_box }>
                <div>
                    <label htmlFor='company-name' className={ l.label }>
                        Company Name
                    </label>
                    <Input
                        id={ 'companyName' }
                        name={ 'companyName' }
                        className={ l.input_field }
                        value={ formik.values.companyName }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("companyName", null);
                        } }
                        status={ !!formik.errors.companyName ? 'error' : null }
                        prefix={ <UserSquare
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Enter your company name..."
                    />
                    { formik.errors.companyName && < ErrorComponent message={ formik.errors.companyName }/> }
                </div>
                <div>
                    <label htmlFor='email' className={ l.label }>
                        Email Address
                    </label>
                    <Input
                        id={ 'email' }
                        name={ 'email' }
                        className={ l.input_field }
                        value={ formik.values.email }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("email", null);
                        } }
                        status={ !!formik.errors.email ? 'error' : null }
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
            <button disabled={ disabled } className={ disabled ? l.login_button : l.login_button_active }
                    onClick={ () => formik.submitForm() }>
                Sign in
            </button>

        </>
    )
}