'use client'

import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React, { useEffect } from "react";
import { SignUpSchema } from "@/schemas/signIn";
import { useFormik } from "formik";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import { Input } from "antd";
import { LockIcon } from "@/public/lockIcon";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";
import { CustomMultipleSelect } from "@/fsd/features/auth/ui/CustomMultipuleSelect";
import { useDictStore } from "@/fsd/app/stores/dict/store";
import authActions from "@/actions/auth";
import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import TextArea from "antd/es/input/TextArea";
import { isEmpty } from "@/utils/utils";
import { UserRegisterActionsRequest } from "@/fsd/shared/api/authApi";
import { sex } from "@/utils/common";
import { CustomDatepicker } from "@/fsd/features/auth/CustomDatepicker";
import dayjs from "dayjs";

interface SignUpFormProps {
    setForm: (value: string | null) => void;
}


export const SignUpForm = ({setForm}: SignUpFormProps) => {

    const {
        LanguageList,
        UniversityList,
        InterestsList,
        StudyDirectionsList,
        CountryList,
        fetchUniversities,
        fetchInterests,
        fetchLanguages,
        fetchStudyDirections,
        fetchCountries
    } = useDictStore();

    const formik = useFormik({
        initialValues: {
            firstName: undefined,
            lastName: undefined,
            description: undefined,
            birthDate: undefined,
            sex: undefined,
            languages: [],
            interests: [],
            location: '',
            university: undefined,
            studyDirection: undefined,
            countryId: undefined,
            photo: '',
            email: undefined,
            password: undefined,
            passwordRepeat: undefined,
        },
        onSubmit: async (values) => await handleRegister(values),
        validationSchema: SignUpSchema,
        validateOnChange: false,
    })

    const handleRegister = async (values: UserRegisterActionsRequest) => {
        await authActions.register(values).then(r => {
            setForm('SignIn')
        }).catch(r => {
            if (r?.response?.status === 400) {
                formik.setFieldError(r.response.data.field, r.response.data.message)
            } else {
                console.error('Error caused in login:', r)
            }
        })
    }

    useEffect(() => {
        fetchUniversities();
        fetchInterests();
        fetchLanguages();
        fetchStudyDirections();
        fetchCountries();
    }, [])

    return (
        <>
            <h2 className={ l.business_title }>Sign Up</h2>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            <div className={ l.form_box }>

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
                    <TextArea
                        id={ 'description' }
                        name={ 'description' }
                        className={ style.input_field }
                        value={ formik.values.description }
                        onChange={ (e) => {
                            formik.handleChange(e);
                            formik.setFieldError("description", undefined);
                        } }
                        status={ !!formik.errors.description ? 'error' : undefined }
                        placeholder="Enter your description..."
                        autoSize={ {minRows: 3, maxRows: 6} }
                    />
                    { formik.errors.description && < ErrorComponent message={ formik.errors.description }/> }
                </div>
                <div>
                    <label htmlFor='birthDate' className={ l.label }>
                        Birth date
                    </label>
                    < CustomDatepicker
                        id={ 'birthDate' }
                        name={ 'birthDate' }
                        className={ style.datepicker_field }
                        value={ dayjs(formik.values.birthDate) }
                        onChange={ (e) => {
                            formik.setFieldValue('birthDate', e?.format('YYYY-MM-DD'));
                            formik.setFieldError("birthDate", undefined);
                        } }
                        status={ !!formik.errors.birthDate ? 'error' : undefined }
                        placeholder="Enter your birth date..."
                    />
                    { formik.errors.birthDate && < ErrorComponent message={ formik.errors.birthDate }/> }
                </div>
                <div>
                    <label htmlFor='sex' className={ l.label }>
                        Sex
                    </label>
                    <CustomSelect
                        id={ 'sex' }
                        placeholder="Enter your sex..."
                        status={ !!formik.errors.sex ? 'error' : undefined }
                        onChange={ (e) => {
                            formik.setFieldValue('sex', e)
                            formik.setFieldError("sex", undefined);
                        } }
                        options={ sex }
                        defaultValue={ undefined }/>
                    { formik.errors.sex && < ErrorComponent message={ formik.errors.sex }/> }
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
                    <label htmlFor='university' className={ l.label }>
                        University
                    </label>
                    <div>
                        <CustomSelect
                            id={ 'university' }
                            placeholder="Enter your university..."
                            status={ !!formik.errors.university ? 'error' : undefined }
                            onChange={ (e) => {
                                formik.setFieldValue("university", parseInt(e.toString()));
                                formik.setFieldError("university", undefined);
                            } }
                            options={ UniversityList.map(item => ({
                                value: item.id.toString(),
                                label: item.name,
                            })) }
                            defaultValue={ undefined }
                        />
                    </div>
                    { formik.errors.university && < ErrorComponent message={ formik.errors.university }/> }
                </div>

                <div>
                    <label htmlFor='studyDirection' className={ l.label }>
                        Study directions
                    </label>
                    <div>
                        <CustomSelect
                            id={ 'studyDirection' }
                            placeholder="Enter your study directions..."
                            status={ !!formik.errors.studyDirection ? 'error' : undefined }
                            onChange={ (e) => {
                                formik.setFieldValue("studyDirection", parseInt(e.toString()));
                                formik.setFieldError("studyDirection", undefined);
                            } }
                            options={ StudyDirectionsList.map(item => ({
                                value: item.id.toString(),
                                label: item.name,
                            })) }
                            defaultValue={ undefined }
                        />
                    </div>
                    { formik.errors.studyDirection && < ErrorComponent message={ formik.errors.studyDirection }/> }
                </div>

                <div>
                    <label htmlFor='CountryId' className={ l.label }>
                        Country
                    </label>
                    <div>
                        <CustomSelect
                            id={ 'countryId' }
                            placeholder="Enter your country..."
                            status={ !!formik.errors.countryId ? 'error' : undefined }
                            onChange={ (e) => {
                                formik.setFieldValue("countryId", parseInt(e.toString()));
                                formik.setFieldError("countryId", undefined);
                            } }
                            options={ CountryList?.map(item => ({
                                value: item.id.toString(),
                                label: item.name,
                            })) }
                            defaultValue={ undefined }
                        />
                    </div>
                    { formik.errors.countryId && < ErrorComponent message={ formik.errors.countryId }/> }
                </div>

                <div>
                    <label htmlFor='languages' className={ l.label }>
                        Languages
                    </label>

                    <CustomMultipleSelect
                        id={ 'languages' }
                        status={ !!formik.errors.languages ? 'error' : undefined }
                        placeholder="Enter your languages..."
                        onChange={ (e) => {
                            const selectedNames = Array.isArray(e) ? e : [e];
                            const selectedIds = selectedNames.map(name => {
                                const selectedItem = LanguageList.find(item => item.name === name);
                                return selectedItem ? selectedItem.id : null;
                            }).filter(id => id !== null);

                            formik.setFieldValue('languages', selectedIds);
                            formik.setFieldError('languages', undefined);
                        } }
                        option={ LanguageList.map(item => ({
                            value: item.name,
                        })) }
                        defaultValue={ undefined }
                    />

                    { formik.errors.languages && < ErrorComponent message={ formik.errors.languages }/> }
                </div>

                <div>
                    <label htmlFor='interests' className={ l.label }>
                        Interests
                    </label>
                    < CustomMultipleSelect
                        id={ 'interests' }
                        status={ !!formik.errors.interests ? 'error' : undefined }
                        placeholder="Enter your interests..."
                        onChange={ (e) => {

                            const selectedNames = Array.isArray(e) ? e : [e];
                            const selectedIds = selectedNames.map(name => {
                                const selectedItem = InterestsList.find(item => item.name === name);
                                return selectedItem ? selectedItem.id : null;
                            }).filter(id => id !== null);

                            formik.setFieldValue('interests', selectedIds);
                            formik.setFieldError('interests', undefined);
                        } }
                        option={ InterestsList.map(item => ({
                            value: item.name,
                        })) }
                        defaultValue={ undefined }
                    />
                    { formik.errors.interests && < ErrorComponent message={ formik.errors.interests }/> }
                </div>

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
                {/*            formik.setFieldError("photo", undefined);*/ }
                {/*        } }*/ }
                {/*        status={ !!formik.errors.photo ? 'error' : undefined }*/ }
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
                {/*            formik.setFieldError("location", undefined);*/ }
                {/*        } }*/ }
                {/*        status={ !!formik.errors.location ? 'error' : undefined }*/ }
                {/*        placeholder="Enter your location..."*/ }
                {/*    />*/ }
                {/*    { formik.errors.location && < ErrorComponent message={ formik.errors.location }/> }*/ }
                {/*</div>*/ }
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
            </div>
            <button disabled={ !isEmpty(formik.errors) }
                    className={ !isEmpty(formik.errors) ? l.login_button : l.login_button_active }
                    onClick={ async () => await formik.submitForm() }>
                Create account
            </button>
        </>
    )
}