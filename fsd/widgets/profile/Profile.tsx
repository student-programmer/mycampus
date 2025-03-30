'use client';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './ui/profile.module.scss';

import CountyIcon from '@/public/chinaIcon.svg';
import { getAge } from "@/fsd/shared/helpers/getAge";
import { User } from "@/fsd/entities/profile";
import { generateAvatar } from "@/utils/utils";

const Profile = ({currentProfile}: { currentProfile: User }) => {
    return (
        <div className={ style.profileWrapperMain }>
            <div className={ style.photoBack }>
                <Image
                    src={ generateAvatar(currentProfile.firstName, currentProfile.lastName) }
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
                        <p className={ style.textPmain }>Country</p>
                        <Image src={ CountyIcon } width={ 20 } height={ 20 } alt='Country Icon'/>
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
                    <p className={ style.textPmain }>{ currentProfile.description }</p>
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
            </div>
        </div>
    );
};

export default Profile;
