import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React, { useEffect, useState } from "react";
import { SignUpSchema } from "@/schemas/signIn";
import { useFormik } from "formik";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import { Input, Select } from "antd";
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";
import { CustomMultipleSelect } from "@/fsd/features/auth/ui/CustomMultipuleSelect";


export const SignUpForm = ({handleLogin}) => {

    const [disabled, setDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            fullName: '',
            university: '',
            age: '',
            sex: '',
            languages: '',
            interests: '',
            photo: '',
            location: '',
        },
        onSubmit: (values) => {
            handleLogin();
        },
        validationSchema: SignUpSchema,
        validateOnChange: false,
    })

    useEffect(() => {
        setDisabled(!!formik.errors.fullName || !!formik.errors.university
            || !!formik.errors.age || !!formik.errors.sex || !!formik.errors.languages
            || !!formik.errors.interests || !!formik.errors.photo || !!formik.errors.location)
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
                <div>
                    <label htmlFor='fullName' className={ l.label }>
                        Full name
                    </label>
                    <Input
                        id={ 'fullName' }
                        name={ 'fullName' }
                        className={ l.input_field }
                        value={ formik.values.fullName }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("fullName", null);
                        } }
                        status={ !!formik.errors.fullName ? 'error' : null }
                        placeholder="Enter your full name..."
                    />
                    { formik.errors.fullName && < ErrorComponent message={ formik.errors.fullName }/> }
                </div>
                <div>
                    <label htmlFor='university' className={ l.label }>
                        University
                    </label>
                    <div>
                        <CustomSelect
                            id={ 'university' }
                            name={ 'university' }
                            placeholder="Enter your university..."
                            status={ !!formik.errors.fullName ? 'error' : null }
                            onChange={ (e) => {
                                formik.setFieldValue("university", e);
                                formik.setFieldError("university", null);
                            } }
                            options={ uni }
                        />
                    </div>
                    { formik.errors.university && < ErrorComponent message={ formik.errors.university }/> }
                </div>

                <div>
                    <label htmlFor='age' className={ l.label }>
                        Age
                    </label>
                    <Input
                        id={ 'age' }
                        name={ 'age' }
                        type={ 'number' }
                        className={ l.input_field }
                        value={ formik.values.age }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("age", null);
                        } }
                        status={ !!formik.errors.age ? 'error' : null }
                        placeholder="Enter your age..."
                    />
                    { formik.errors.age && < ErrorComponent message={ formik.errors.age }/> }
                </div>

                <div>
                    <label htmlFor='sex' className={ l.label }>
                        Sex
                    </label>
                    <CustomSelect
                        id={ 'sex' }
                        name={ 'sex' }
                        placeholder="Enter your sex..."
                        status={ !!formik.errors.sex ? 'error' : null }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("sex", null);
                        } }
                        options={ sex }
                    />
                    { formik.errors.sex && < ErrorComponent message={ formik.errors.sex }/> }
                </div>
                <div>
                    <label htmlFor='languages' className={ l.label }>
                        Languages
                    </label>

                    <CustomMultipleSelect
                        id={ 'languages' }
                        name={ 'languages' }
                        status={ !!formik.errors.languages ? 'error' : null }
                        placeholder="Enter your languages..."
                        onChange={ (e) => {
                            formik.setFieldValue('languages', e)
                            formik.setFieldError("languages", null);
                        } }
                        option={ language }
                    />

                    { formik.errors.languages && < ErrorComponent message={ formik.errors.languages }/> }
                </div>

                <div>
                    <label htmlFor='interests' className={ l.label }>
                        Interests
                    </label>
                    < CustomMultipleSelect
                        id={ 'interests' }
                        name={ 'interests' }
                        status={ !!formik.errors.interests ? 'error' : null }
                        placeholder="Enter your interests..."
                        onChange={ (e) => {
                            formik.setFieldValue('interests', e)
                            formik.setFieldError("interests", null);
                        } }
                        option={ interests }
                    />
                    { formik.errors.interests && < ErrorComponent message={ formik.errors.interests }/> }
                </div>

                <div>
                    <label htmlFor='photo' className={ l.label }>
                        Photo
                    </label>
                    <Input
                        id={ 'photo' }
                        name={ 'photo' }
                        className={ l.input_field }
                        value={ formik.values.photo }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("photo", null);
                        } }
                        status={ !!formik.errors.photo ? 'error' : null }
                        placeholder="Enter your photo..."
                    />
                    { formik.errors.photo && < ErrorComponent message={ formik.errors.photo }/> }
                </div>
                <div>
                    <label htmlFor='location' className={ l.label }>
                        Location
                    </label>
                    <Input
                        id={ 'location' }
                        name={ 'location' }
                        className={ l.input_field }
                        value={ formik.values.location }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("location", null);
                        } }
                        status={ !!formik.errors.location ? 'error' : null }
                        placeholder="Enter your location..."
                    />
                    { formik.errors.location && < ErrorComponent message={ formik.errors.location }/> }
                </div>
            </div>
            <button disabled={ disabled } className={ disabled ? l.login_button : l.login_button_active }
                    onClick={ () => formik.submitForm() }>
                Create account
            </button>

        </>
    )
}