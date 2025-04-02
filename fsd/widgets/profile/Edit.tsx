import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import { User } from "@/fsd/entities/profile";
import { DatePicker, DatePickerProps, Input } from "antd";
import Image from 'next/image';

import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import React, { useEffect, useState } from "react";
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";
import { CustomMultipleSelect } from "@/fsd/features/auth/ui/CustomMultipuleSelect";
import { useDictStore } from "@/fsd/app/stores/dict/store";
import { SignUpSchema } from "@/schemas/signIn";
import { UserRegisterActionsRequest } from "@/fsd/shared/api/userApi";
import authActions from "@/actions/auth";
import { useFormik } from "formik";
import closeIcon from "@/public/iconClose.svg";
import { formatYearMonthDay } from "@/utils/utils";
import dayjs, { Dayjs } from "dayjs";


interface DetailProps {
    currentProfile: User;
    setStatus: (status: string) => void;
}

export const Edit = ({currentProfile, setStatus}: DetailProps) => {

    const [disabled, setDisabled] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

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
            firstName: '',
            lastName: '',
            description: '',
            birthDate: '',
            sex: '',
            languages: [],
            interests: [],
            location: '',
            university: 0,
            studyDirection: 0,
            countryId: 0,
            photo: '',
            email: '',
        },
        onSubmit: async (values) => await handleRegister(values),
        validationSchema: SignUpSchema,
        validateOnChange: false,
    })

    const handleRegister = async (values: UserRegisterActionsRequest) => {
        await authActions.register(values).then(r => {
            setStatus('Profile')
        }).catch(r => {
            if (r.response.status === 400) {
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

    useEffect(() => {
        formik.setValues(() => ({
            firstName: currentProfile.firstName || '',
            lastName: currentProfile.lastName || '',
            description: currentProfile.description || '',
            birthDate: currentProfile.birthDate || '',
            sex: currentProfile.sex || '',
            languages: currentProfile.languages?.map(item => item.name) || [],
            interests: currentProfile.interests?.map(item => item.name) || [],
            location: currentProfile.location || '',
            university: currentProfile.education?.university?.id || '',
            studyDirection: currentProfile.education?.studyDirection?.id || '',
            countryId: currentProfile.country?.id || '',
            photo: currentProfile.photo || '',
            email: currentProfile.email || '',
        })).then(r => {
            setIsLoading(false)
        });
    }, [currentProfile]);

    useEffect(() => {
        setDisabled(!!formik.errors.firstName || !!formik.errors.lastName
            || !!formik.errors.description || !!formik.errors.birthDate || !!formik.errors.email
            || !!formik.errors.password || !!formik.errors.passwordRepeat)
    }, [formik.errors])

    const sex = [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'},
    ]

    const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
        formik.setFieldValue('birthDate', dateString);
    };

    const safeDayjs = (dateString) => {
        if (!dateString) return undefined;
        const date = dayjs(dateString);
        return date.isValid ? date : undefined;
    };

    return (
        <div className={ style.profileEditMain }>
            <div className={ style.editTitle }>
                <h2 className={ style.editCardHeader }>Edit profile</h2>
                <Image
                    src={ closeIcon }
                    alt={ 'close' }
                    onClick={ () => setStatus('profile') }
                />
            </div>

            { isLoading ?
                <div>Loading</div>
                :
                <div className={ style.form_box }>
                    <div>
                        <label htmlFor='firstName' className={ style.editLabel }>
                            First name
                        </label>
                        <Input
                            id={ 'firstName' }
                            name={ 'firstName' }
                            className={ style.input_field }
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
                        <label htmlFor='lastName' className={ style.editLabel }>
                            Last name
                        </label>
                        <Input
                            id={ 'lastName' }
                            name={ 'lastName' }
                            className={ style.input_field }
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
                        <label htmlFor='description' className={ style.editLabel }>
                            Description
                        </label>
                        <Input
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
                        />
                        { formik.errors.description && < ErrorComponent message={ formik.errors.description }/> }
                    </div>
                    <div>
                        <label htmlFor='birthDate' className={ style.editLabel }>
                            Birth date
                        </label>
                        <DatePicker
                            id={ 'birthDate' }
                            name={ 'birthDate' }
                            className={ style.datepicker_field }
                            defaultValue={ safeDayjs(formatYearMonthDay(currentProfile.birthDate)) }
                            value={ formik.values.birthDate }
                            onChange={ (e) => {
                                onChange(e)
                                formik.setFieldError("birthDate", undefined);
                            } }
                            status={ !!formik.errors.birthDate ? 'error' : undefined }
                            placeholder="Enter your birth date..."
                            format={ {
                                format: 'YYYY-MM-DD',
                                type: 'mask',
                            } }
                        />
                        { formik.errors.birthDate && < ErrorComponent message={ formik.errors.birthDate }/> }
                    </div>
                    <div>
                        <label htmlFor='sex' className={ style.editLabel }>
                            Sex
                        </label>
                        <CustomSelect
                            id={ 'sex' }
                            defaultValue={ currentProfile.sex }
                            placeholder={ "Enter your sex..." }
                            status={ !!formik.errors.sex ? 'error' : undefined }
                            onChange={ (e) => {
                                formik.setFieldValue('sex', e)
                                formik.setFieldError("sex", undefined);
                            } }
                            options={ sex }
                        />
                        { formik.errors.sex && < ErrorComponent message={ formik.errors.sex }/> }
                    </div>
                    <div>
                        <label htmlFor='email' className={ style.editLabel }>
                            Email
                        </label>
                        <Input
                            id={ 'email' }
                            name={ 'email' }
                            className={ style.input_field }
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
                        <label htmlFor='university' className={ style.editLabel }>
                            University
                        </label>
                        <div>
                            <CustomSelect
                                id={ 'university' }
                                placeholder="Enter your university..."
                                status={ !!formik.errors.university ? 'error' : undefined }
                                defaultValue={ currentProfile.education.university.name }
                                onChange={ (e) => {
                                    formik.setFieldValue("university", parseInt(e.toString()));
                                    formik.setFieldError("university", undefined);
                                } }
                                options={ UniversityList.map(item => ({
                                    value: item.id.toString(),
                                    label: item.name,
                                })) }
                            />
                        </div>
                        { formik.errors.university && < ErrorComponent message={ formik.errors.university }/> }
                    </div>

                    <div>
                        <label htmlFor='studyDirection' className={ style.editLabel }>
                            Study directions
                        </label>
                        <div>
                            <CustomSelect
                                id={ 'studyDirection' }
                                placeholder="Enter your study directions..."
                                status={ !!formik.errors.studyDirection ? 'error' : undefined }
                                defaultValue={ currentProfile.education.studyDirection.name }
                                onChange={ (e) => {
                                    formik.setFieldValue("studyDirection", parseInt(e.toString()));
                                    formik.setFieldError("studyDirection", undefined);
                                } }
                                options={ StudyDirectionsList.map(item => ({
                                    value: item.id.toString(),
                                    label: item.name,
                                })) }
                            />
                        </div>
                        { formik.errors.studyDirection && < ErrorComponent message={ formik.errors.studyDirection }/> }
                    </div>

                    <div>
                        <label htmlFor='CountryId' className={ style.editLabel }>
                            Country
                        </label>
                        <div>
                            <CustomSelect
                                id={ 'countryId' }
                                placeholder={ "Enter your country..." }
                                status={ !!formik.errors.countryId ? 'error' : undefined }
                                defaultValue={ currentProfile.country.name }
                                onChange={ (e) => {
                                    formik.setFieldValue("countryId", parseInt(e.toString()));
                                    formik.setFieldError("countryId", undefined);
                                } }
                                options={ CountryList?.map(item => ({
                                    value: item.id.toString(),
                                    label: item.name,
                                })) }
                            />
                        </div>
                        { formik.errors.countryId && < ErrorComponent message={ formik.errors.countryId }/> }
                    </div>

                    <div>
                        <label htmlFor='languages' className={ style.editLabel }>
                            Languages
                        </label>

                        <CustomMultipleSelect
                            id={ 'languages' }
                            status={ !!formik.errors.languages ? 'error' : undefined }
                            placeholder={ "Enter your languages..." }
                            defaultValue={ formik.values.languages }
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
                        />

                        { formik.errors.languages && < ErrorComponent message={ formik.errors.languages }/> }
                    </div>

                    <div>
                        <label htmlFor='interests' className={ style.editLabel }>
                            Interests
                        </label>
                        < CustomMultipleSelect
                            id={ 'interests' }
                            status={ !!formik.errors.interests ? 'error' : undefined }
                            defaultValue={ formik.values.interests }
                            placeholder={ "Enter your interests..." }
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
                        />
                        { formik.errors.interests && < ErrorComponent message={ formik.errors.interests }/> }
                    </div>

                    {/*<div>*/ }
                    {/*    <label htmlFor='photo' className={ style.label }>*/ }
                    {/*        Photo*/ }
                    {/*    </label>*/ }
                    {/*    <Input*/ }
                    {/*        id={ 'photo' }*/ }
                    {/*        name={ 'photo' }*/ }
                    {/*        className={ style.input_field }*/ }
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
                    {/*    <label htmlFor='location' className={ style.label }>*/ }
                    {/*        Location*/ }
                    {/*    </label>*/ }
                    {/*    <Input*/ }
                    {/*        id={ 'location' }*/ }
                    {/*        name={ 'location' }*/ }
                    {/*        className={ style.input_field }*/ }
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
                </div>
            }
        </div>
    )
}