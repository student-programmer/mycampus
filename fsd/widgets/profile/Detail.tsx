'use client'

import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import { generateAvatar } from "@/utils/utils";
import { getAge } from "@/fsd/shared/helpers/getAge";
import { User } from "@/fsd/entities/profile";

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { useMemo } from "react";

interface DetailProps {
    currentProfile: User;
    setStatus: (status: string) => void;
}

export const Detail = ({currentProfile, setStatus}: DetailProps) => {

    const router = useRouter();

    const handleLogout = async () => {
        localStorage.removeItem('jwtToken');
        router.push('/');
    }

    const handleChangeStatus = () => {
        setStatus('edit')
    }

    const avatarUrl = useMemo(() => {
        if (!currentProfile.photo)
            return generateAvatar(currentProfile.firstName, currentProfile.lastName);
        else return currentProfile.photo
    }, [currentProfile.firstName, currentProfile.lastName]); // Зависимости


    return (
        <div className={ style.profileWrapperMain }>
            <div className={ style.photoBack } style={{height: '35dvh'}}>
                <Image
                    src={ avatarUrl }
                    alt='Profile Photo'
                    width={ 358 }
                    height={ 374 }
                />
            </div>
            <div className={ style.mainCardInfo }>
                <div className={ style.headerProfile }>
                    <p className={ style.mainParagraphH1 }>
                        { currentProfile.firstName } { currentProfile.lastName }
                    </p>
                    <div className={ style.countryWrapper }>
                        <p className={ style.textPmain }>{ currentProfile.country?.name }</p>
                        <Image src={ currentProfile.country?.photo } width={ 20 } height={ 20 } alt=''/>
                    </div>
                </div>
                <div className={ style.languageAndAgeInfo }>
                    <p className={ style.textPmain }>{ getAge(currentProfile.birthDate) } years</p>
                    <p className={ style.textPmain }>•</p>
                    <p className={ style.textPmain }>{ currentProfile.languages.map(item => <a
                        key={ item.id }>{ item.name }, </a>) }</p>
                </div>
                <div className={ style.universityInfo }>
                    <p className={ style.textPmain }>{ currentProfile.education.studyDirection.name }</p>
                    <p className={ style.textPmain }>-</p>
                    <p className={ style.textPmain }>{ currentProfile.education.university.name }</p>
                </div>
                <div className={ style.aboutPeople }>
                    <p className={ style.headerText }>About:</p>
                    <p className={ style.textPmain } dangerouslySetInnerHTML={{__html: currentProfile.description}}/>
                </div>
                <div className={ style.interestsPeople }>
                    <p className={ style.headerText }>Interests:</p>
                    <div className={ style.interestsBlock }>
                        { !currentProfile.interests.length ?
                            <p className={ style.interestsBlocks }>No interests available</p>
                            :
                            <>
                                {
                                    currentProfile.interests.map(item => <p className={ style.interestsBlocks }
                                                                            key={ item.id }>{ item.name }</p>)
                                }
                            </>
                        }
                    </div>
                </div>
                <div className={ style.buttonsContainerProfile }>
                    <Button className={ style.buttonSendProfile } onClick={ handleChangeStatus }>
                        Change data
                    </Button>
                    <Button className={ style.buttonLogOut } onClick={ handleLogout }>
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    )
}
