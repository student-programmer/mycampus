import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";
import { CustomMultipleSelect } from "@/fsd/features/auth/ui/CustomMultipuleSelect";
import { isEmpty } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { useDictStore } from "@/fsd/app/stores/dict/store";
import { EditProfile } from "@/schemas/profile";
import { UserUpdateActionsRequest } from "@/fsd/shared/api/userApi";
import { User } from "@/fsd/entities/profile";
import { useFormik } from "formik";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CustomDatepicker } from "@/fsd/features/auth/CustomDatepicker";
import { sex } from "@/utils/common";

interface DetailProps {
    currentProfile: User;
    setStatus: (status: string) => void;
    setProfile: (profile: User) => void;
}

export const UserDataDemo = ({currentProfile, setStatus, setProfile}: DetailProps) => {

    const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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

    useEffect(() => {
        fetchUniversities();
        fetchInterests();
        fetchLanguages();
        fetchStudyDirections();
        fetchCountries();
    }, [])

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
        onSubmit: async (values) => await handleEdit(values),
        validationSchema: EditProfile,
        validateOnChange: false,
    })

    const handleEdit = async (values: UserUpdateActionsRequest) => {

        const country = CountryList.find(item => item.id === formik.values.countryId) ?? {
            id: 0,
            name: "Unknown",
            photo: ''
        }

        const languagesArray = formik.values.languages.map(langId => {
            const foundLanguage = LanguageList.find(lang => lang.id === langId);
            return foundLanguage || {id: langId, name: "Unknown"};
        });

        const formattedInterests = formik.values.interests.map(interestId => {
            const foundInterest = InterestsList.find(item => item.id === interestId);
            return foundInterest || {id: interestId, name: "Unknown"};
        });

        const university = UniversityList.find(u => u.id === formik.values.university) ?? {id: 0, name: "Unknown"}
        const studyDirection = StudyDirectionsList.find(sd => sd.id === formik.values.studyDirection) ?? {
            id: 0,
            name: "Unknown"
        }

        const editedProfile: User = {
            id: 1,
            authUserId: 1,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            birthDate: values.birthDate,
            description: values.description,
            sex: values.sex,
            photo: values.photo,
            isOnline: false,
            location: values.location,
            country: {
                id: country.id,
                name: country.name,
                photo: country.photo || '',
            },
            languages: languagesArray,
            education: {
                university: university,
                studyDirection: studyDirection,
            },
            interests: formattedInterests
        };
        setProfile(editedProfile)
        setIsLoadingButton(true);
        setIsLoadingButton(false)
        setStatus('profile')
    }

    useEffect(() => {
        formik.setValues({
            firstName: currentProfile.firstName || '',
            lastName: currentProfile.lastName || '',
            description: currentProfile.description || '',
            birthDate: currentProfile.birthDate || '',
            sex: currentProfile.sex || '',
            languages: currentProfile.languages?.map(item => item.id as never) ?? [], // Оставляем как number[]
            interests: currentProfile.interests?.map(item => item.id as never) ?? [], // Оставляем как number[]
            location: currentProfile.location || '',
            university: currentProfile.education?.university?.id ?? 0, // Используем 0 вместо ''
            studyDirection: currentProfile.education?.studyDirection?.id ?? 0, // Используем 0 вместо ''
            countryId: currentProfile.country?.id ?? 0, // Используем 0 вместо ''
            photo: currentProfile.photo || '',
            email: currentProfile.email || '',
        });
        setIsLoading(false);
    }, [currentProfile]);

    if (isLoading) {
        return <div>Loading..</div>
    }


    return (
        <>
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
                <label htmlFor='birthDate' className={ style.editLabel }>
                    Birth date
                </label>
                < CustomDatepicker
                    id={ 'birthDate' }
                    name={ 'birthDate' }
                    defaultValue={ currentProfile.birthDate }
                    value={ formik.values.birthDate }
                    onChange={ (e) => {
                        formik.setFieldValue('birthDate', e === null ? undefined : e.format('YYYY-MM-DD'));
                        formik.setFieldError("birthDate", undefined);
                    } }
                    status={ !!formik.errors.birthDate ? 'error' : undefined }
                    placeholder="Enter your birth date..."
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
                { formik.errors.studyDirection &&
                    < ErrorComponent message={ formik.errors.studyDirection }/> }
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
                        formik.setFieldValue('languages', e);
                        formik.setFieldError('languages', undefined);
                    } }
                    option={ LanguageList.map(item => ({
                        value: item.id, label: item.name
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
                        formik.setFieldValue('interests', e);
                        formik.setFieldError('interests', undefined);
                    } }
                    option={ InterestsList.map(item => ({
                        value: item.id, label: item.name
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

            <Button loading={ isLoadingButton } disabled={ !isEmpty(formik.errors) }
                    className={ style.buttonSendProfile }
                    onClick={ formik.submitForm }>
                Update profile
            </Button>
        </>

    )
}