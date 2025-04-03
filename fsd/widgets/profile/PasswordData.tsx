import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import React, { useState } from "react";
import { EditPassword } from "@/schemas/profile";
import { PasswordUpdateAction } from "@/fsd/shared/api/userApi";
import userActions from "@/actions/user";
import { useFormik } from "formik";
import { Button, Input } from "antd";
import { LockIcon } from "@/public/lockIcon";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { isEmpty } from "@/utils/utils";

interface DetailProps {
    setPosition: (position: "user" | "password") => void;
}

export const PasswordData = ({setPosition}: DetailProps) => {

    const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            password: undefined,
            repeatPassword: undefined,
        },
        onSubmit: async (values) => await handleEditPassword(values),
        validationSchema: EditPassword,
        validateOnChange: false,
    })

    const handleEditPassword = async (values: PasswordUpdateAction) => {
        setIsLoadingButton(true)
        const token = localStorage.getItem('jwtToken');
        await userActions.updatePassword(token, values).then(r => {
            setPosition('user')
            setIsLoadingButton(false)
        }).catch(r => {
            setIsLoadingButton(false)
            console.error('Error caused in edit:', r)
        })
    }

    return (
        <>
            <div>
                <label htmlFor='password' className={ style.editLabel }>
                    Password
                </label>
                <Input.Password
                    id={ 'password' }
                    name={ 'password' }
                    className={ style.input_field }
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
                <label htmlFor='passwordRepeat' className={ style.editLabel }>
                    Repeat password
                </label>
                <Input.Password
                    id={ 'passwordRepeat' }
                    name={ 'passwordRepeat' }
                    className={ style.input_field }
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

            <Button loading={ isLoadingButton } disabled={ !isEmpty(formik.errors) }
                    className={ style.buttonSendProfile }
                    onClick={ formik.submitForm }>
                Update password
            </Button>
        </>
    )
}