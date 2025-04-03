import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import { User } from "@/fsd/entities/profile";
import { Radio } from "antd";
import Image from 'next/image';

import React, { useState } from "react";
import closeIcon from "@/public/iconClose.svg";
import { UserData } from "@/fsd/widgets/profile/UserData";
import { PasswordData } from "@/fsd/widgets/profile/PasswordData";


interface DetailProps {
    currentProfile: User;
    setStatus: (status: string) => void;
}

export const Edit = ({currentProfile, setStatus}: DetailProps) => {
    const [position, setPosition] = useState<'user' | 'password'>('user');

    const getForm = () => {
        switch (position) {
            case 'user':
                return < UserData currentProfile={ currentProfile } setStatus={ setStatus }/>
            case 'password':
                return < PasswordData setPosition={ setPosition }/>
        }
    }


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

            <div className={ style.form_box }>

                <Radio.Group className={ style.groupButtons } value={ position }
                             onChange={ (e) => setPosition(e.target.value) }>
                    <Radio.Button
                        className={ position === "user" ? style.radioButtonLeftActive : style.radioButtonLeft }
                        value="user">User</Radio.Button>
                    <Radio.Button
                        className={ position === "password" ? style.radioButtonRightActive : style.radioButtonRight }
                        value="password">Password</Radio.Button>
                </Radio.Group>

                { getForm() }

            </div>
        </div>
    )
}