import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React, { useEffect, useState } from "react";
import { SignUpSchema } from "@/schemas/signIn";
import { useFormik } from "formik";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import { Input } from "antd";
import userActions from "@/actions/user";
import { LockIcon } from "@/public/lockIcon";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { UserRegisterRequest } from "@/fsd/shared/api/userApi";

interface SignUpFormProps {
    setForm: (value: string | null) => void;
}


export const SignUpForm = ({setForm}: SignUpFormProps) => {

    const [disabled, setDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            // fullName: '',
            // university: '',
            // age: '',
            // sex: '',
            // languages: '',
            // interests: '',
            // photo: '',
            // location: '',
            firstName: '',
            lastName: '',
            description: '',
            birthDate: '',
            email: '',
            password: '',
            passwordRepeat: '',
        },
        onSubmit: async (values) => await handleRegister(values),
        validationSchema: SignUpSchema,
        validateOnChange: false,
    })

    const handleRegister = async (values: UserRegisterRequest) => {
        await userActions.register(values).then(r => {
            setForm(null)
        })
    }

    useEffect(() => {
        setDisabled(!!formik.errors.firstName || !!formik.errors.lastName
            || !!formik.errors.description || !!formik.errors.birthDate || !!formik.errors.email
            || !!formik.errors.password || !!formik.errors.passwordRepeat)
    }, [formik.errors])

    const uni = [
        {value: 'Politeh', label: 'Politeh'},
        {value: 'ITMO', label: 'ITMO'},
        {value: 'Bonch', label: 'Bonch'},
    ]

    const interests = [
        {value: 'Yoga'},
        {value: 'Interest Item'},
        {value: 'Cooking'},
        {value: 'Books'},
        {value: 'Cultural Events'},
        {value: 'International Diplomacy'},
        {value: 'History'},
        {value: 'Photography'},
        {value: 'Travel'},
        {value: 'Job'},
    ];

    const language = [
        {value: 'Russian'},
        {value: 'Hindi'},
        {value: 'Chinese'},
        {value: 'English'},
    ]

    const sex = [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'},
    ];

    return (
        <>
            <h2 className={ l.business_title }>Sign Up</h2>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            <div className={ l.form_box }>
                {/*<div>*/ }
                {/*    <label htmlFor='fullName' className={ l.label }>*/ }
                {/*        Full name*/ }
                {/*    </label>*/ }
                {/*    <Input*/ }
                {/*        id={ 'fullName' }*/ }
                {/*        name={ 'fullName' }*/ }
                {/*        className={ l.input_field }*/ }
                {/*        value={ formik.values.fullName }*/ }
                {/*        onChange={ (e) => {*/ }
                {/*            formik.handleChange(e);*/ }
                {/*            formik.setFieldError("fullName", null);*/ }
                {/*        } }*/ }
                {/*        status={ !!formik.errors.fullName ? 'error' : null }*/ }
                {/*        placeholder="Enter your full name..."*/ }
                {/*    />*/ }
                {/*    { formik.errors.fullName && < ErrorComponent message={ formik.errors.fullName }/> }*/ }
                {/*</div>*/ }
                {/*<div>*/ }
                {/*    <label htmlFor='university' className={ l.label }>*/ }
                {/*        University*/ }
                {/*    </label>*/ }
                {/*    <div>*/ }
                {/*        <CustomSelect*/ }
                {/*            id={ 'university' }*/ }
                {/*            name={ 'university' }*/ }
                {/*            placeholder="Enter your university..."*/ }
                {/*            status={ !!formik.errors.fullName ? 'error' : null }*/ }
                {/*            onChange={ (e) => {*/ }
                {/*                formik.setFieldValue("university", e);*/ }
                {/*                formik.setFieldError("university", null);*/ }
                {/*            } }*/ }
                {/*            options={ uni }*/ }
                {/*        />*/ }
                {/*    </div>*/ }
                {/*    { formik.errors.university && < ErrorComponent message={ formik.errors.university }/> }*/ }
                {/*</div>*/ }

                <div>
                    <label htmlFor='firstName' className={ l.label }>
                        First name
                    </label>
                    <Input
                        id={ 'firstName' }
                        name={ 'firstName' }
                        className={ l.input_field }
                        value={ formik.values.firstName }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("firstName", undefined);
                        } }
                        status={ !!formik.errors.firstName ? 'error' : undefined }
                        placeholder="Enter your first name..."
                    />
                    { formik.errors.firstName && < ErrorComponent message={ formik.errors.firstName }/> }
                </div>
                <div>
                    <label htmlFor='lastName' className={ l.label }>
                        Last name
                    </label>
                    <Input
                        id={ 'lastName' }
                        name={ 'lastName' }
                        className={ l.input_field }
                        value={ formik.values.lastName }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("lastName", undefined);
                        } }
                        status={ !!formik.errors.lastName ? 'error' : undefined }
                        placeholder="Enter your last name..."
                    />
                    { formik.errors.lastName && < ErrorComponent message={ formik.errors.lastName }/> }
                </div>

                <div>
                    <label htmlFor='description' className={ l.label }>
                        Description
                    </label>
                    <Input
                        id={ 'description' }
                        name={ 'description' }
                        className={ l.input_field }
                        value={ formik.values.description }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("description", undefined);
                        } }
                        status={ !!formik.errors.description ? 'error' : undefined }
                        placeholder="Enter your description..."
                    />
                    { formik.errors.description && < ErrorComponent message={ formik.errors.description }/> }
                </div>
                <div>
                    <label htmlFor='birthDate' className={ l.label }>
                        Birth date
                    </label>
                    <Input
                        id={ 'birthDate' }
                        name={ 'birthDate' }
                        type={ 'date' }
                        className={ l.input_field }
                        value={ formik.values.birthDate }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("birthDate", undefined);
                        } }
                        status={ !!formik.errors.birthDate ? 'error' : undefined }
                        placeholder="Enter your birth date..."
                    />
                    { formik.errors.birthDate && < ErrorComponent message={ formik.errors.birthDate }/> }
                </div>

                <div>
                    <label htmlFor='email' className={ l.label }>
                        Email
                    </label>
                    <Input
                        id={ 'email' }
                        name={ 'email' }
                        className={ l.input_field }
                        value={ formik.values.email }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("email", undefined);
                        } }
                        status={ !!formik.errors.email ? 'error' : undefined }
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

                <div>
                    <label htmlFor='passwordRepeat' className={ l.label }>
                        Repeat password
                    </label>
                    <Input.Password
                        id={ 'passwordRepeat' }
                        name={ 'passwordRepeat' }
                        className={ l.input_field }
                        value={ formik.values.passwordRepeat }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("passwordRepeat", undefined);
                        } }
                        status={ !!formik.errors.passwordRepeat ? 'error' : undefined }
                        prefix={ <LockIcon
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Repeat password..."
                        iconRender={ (visible) => (visible ?
                            <EyeOutlined
                                style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "gray"} }/> :
                            <EyeInvisibleOutlined
                                style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "gray"} }/>) }
                    />
                    { formik.errors.passwordRepeat && < ErrorComponent message={ formik.errors.passwordRepeat }/> }
                </div>

                {/*<div>*/ }
                {/*    <label htmlFor='sex' className={ l.label }>*/ }
                {/*        Sex*/ }
                {/*    </label>*/ }
                {/*    <CustomSelect*/ }
                {/*        id={ 'sex' }*/ }
                {/*        name={ 'sex' }*/ }
                {/*        placeholder="Enter your sex..."*/ }
                {/*        status={ !!formik.errors.sex ? 'error' : null }*/ }
                {/*        onChange={ (e) => {*/ }
                {/*            formik.setFieldValue('sex', e)*/ }
                {/*            formik.setFieldError("sex", null);*/ }
                {/*        } }*/ }
                {/*        options={ sex }*/ }
                {/*    />*/ }
                {/*    { formik.errors.sex && < ErrorComponent message={ formik.errors.sex }/> }*/ }
                {/*</div>*/ }
                {/*<div>*/ }
                {/*    <label htmlFor='languages' className={ l.label }>*/ }
                {/*        Languages*/ }
                {/*    </label>*/ }

                {/*    <CustomMultipleSelect*/ }
                {/*        id={ 'languages' }*/ }
                {/*        name={ 'languages' }*/ }
                {/*        status={ !!formik.errors.languages ? 'error' : null }*/ }
                {/*        placeholder="Enter your languages..."*/ }
                {/*        onChange={ (e) => {*/ }
                {/*            formik.setFieldValue('languages', e)*/ }
                {/*            formik.setFieldError("languages", null);*/ }
                {/*        } }*/ }
                {/*        option={ language }*/ }
                {/*    />*/ }

                {/*    { formik.errors.languages && < ErrorComponent message={ formik.errors.languages }/> }*/ }
                {/*</div>*/ }

                {/*<div>*/ }
                {/*    <label htmlFor='interests' className={ l.label }>*/ }
                {/*        Interests*/ }
                {/*    </label>*/ }
                {/*    < CustomMultipleSelect*/ }
                {/*        id={ 'interests' }*/ }
                {/*        name={ 'interests' }*/ }
                {/*        status={ !!formik.errors.interests ? 'error' : null }*/ }
                {/*        placeholder="Enter your interests..."*/ }
                {/*        onChange={ (e) => {*/ }
                {/*            formik.setFieldValue('interests', e)*/ }
                {/*            formik.setFieldError("interests", null);*/ }
                {/*        } }*/ }
                {/*        option={ interests }*/ }
                {/*    />*/ }
                {/*    { formik.errors.interests && < ErrorComponent message={ formik.errors.interests }/> }*/ }
                {/*</div>*/ }

                {/*<div>*/ }
                {/*    <label htmlFor='photo' className={ l.label }>*/ }
                {/*        Photo*/ }
                {/*    </label>*/ }
                {/*    <Input*/ }
                {/*        id={ 'photo' }*/ }
                {/*        name={ 'photo' }*/ }
                {/*        className={ l.input_field }*/ }
                {/*        value={ formik.values.photo }*/ }
                {/*        onChange={ (e) => {*/ }
                {/*            formik.handleChange(e);*/ }
                {/*            formik.setFieldError("photo", null);*/ }
                {/*        } }*/ }
                {/*        status={ !!formik.errors.photo ? 'error' : null }*/ }
                {/*        placeholder="Enter your photo..."*/ }
                {/*    />*/ }
                {/*    { formik.errors.photo && < ErrorComponent message={ formik.errors.photo }/> }*/ }
                {/*</div>*/ }
                {/*<div>*/ }
                {/*    <label htmlFor='location' className={ l.label }>*/ }
                {/*        Location*/ }
                {/*    </label>*/ }
                {/*    <Input*/ }
                {/*        id={ 'location' }*/ }
                {/*        name={ 'location' }*/ }
                {/*        className={ l.input_field }*/ }
                {/*        value={ formik.values.location }*/ }
                {/*        onChange={ (e) => {*/ }
                {/*            formik.handleChange(e);*/ }
                {/*            formik.setFieldError("location", null);*/ }
                {/*        } }*/ }
                {/*        status={ !!formik.errors.location ? 'error' : null }*/ }
                {/*        placeholder="Enter your location..."*/ }
                {/*    />*/ }
                {/*    { formik.errors.location && < ErrorComponent message={ formik.errors.location }/> }*/ }
                {/*</div>*/ }
            </div>
            <button disabled={ disabled } className={ disabled ? l.login_button : l.login_button_active }
                    onClick={ async () => await formik.submitForm() }>
                Create account
            </button>

        </>
    )
}