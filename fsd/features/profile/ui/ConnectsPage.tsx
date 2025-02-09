'use client';
import { Button } from 'antd';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './profile.module.scss';
import { type User } from '@/fsd/entities/profile';
import { useRouter } from 'next/navigation';
import CountyIcon from '@/public/chinaIcon.svg';
import { useState } from 'react';
import { useProfilesStore } from "@/fsd/app/stores/profiles/store";

const ConnectsPage = () => {

    const userList = useProfilesStore(store => store.profileList)

    return (
        <div className={ style.profileWrapper }>
            <Swiper
                direction={ 'vertical' }
                slidesPerView={ 1 }
                pagination={ {clickable: true} }
                navigation={ false }
                centeredSlides
                loop={ true }
                className={ style.swiperContainer }
            >
                { userList.map((user: User) => (
                    <SwiperSlide key={ user.id } className={ style.slide }>
                        <UserCard user={ user }/>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    );
};

const UserCard = ({user}: { user: User }) => {
    const router = useRouter();

    const moreInfo = () => {
        // router.push(`/connects/${user.id}`);
    };
    const goToChat = () => {
        router.push(`/chat/${ user.name }/${ user.id }`);
    };

    return (
        <div className={ style.profileWrapperMain }>
            <div className={ style.photoBack }>
                <Image src={ user.profile.photo } alt='' width={ 358 } height={ 374 }/>
            </div>
            <div className={ style.mainCardInfo }>
                <div className={ style.headerProfile }>
                    <p className={ style.mainParagraphH1 }>{ user.name }</p>
                    <div className={ style.countryWrapper }>
                        <p className={ style.textPmain }>{ user.profile.country.name }</p>
                        <Image
                            src={ user.profile.country.icon || CountyIcon }
                            width={ 20 }
                            height={ 20 }
                            alt=''
                        />
                    </div>
                </div>
                <div className={ style.languageAndAgeInfo }>
                    <p className={ style.textPmain }>{ user.age } years</p>
                    <p className={ style.textPmain }>•</p>
                    <p className={ style.textPmain }>
                        { user.profile.languagesSpoken.map((v, index) => {
                            if (index === user.profile.languagesSpoken.length - 1) {
                                return `${ v }.`;
                            } else {
                                return `${ v }, `;
                            }
                        }) }
                    </p>
                </div>
                <div className={ style.universityInfo }>
                    <p className={ style.textPmain }>
                        { user.profile.education.fieldOfStudy }
                    </p>
                    <p className={ style.textPmain }>-</p>
                    <p className={ style.textPmain }>{ user.profile.education.university }</p>
                </div>
                <div className={ style.aboutPeople }>
                    <p className={ style.headerText }>About:</p>
                    <p className={ style.textPmain }>
                        { user.profile.about }
                    </p>
                </div>
                <div className={ style.interestsPeople }>
                    <p className={ style.headerText }>Interest:</p>
                    <div className={ style.interestsBlock }>
                        { user.profile.interests.map((v, index) => (
                            <p className={ style.interestsBlocks } key={ index }>
                                { v }
                            </p>
                        )) }
                    </div>
                    <div className={ style.buttonsContainer }>
                        <Button className={ style.buttonSendProfile } onClick={ goToChat }>
                            Send message
                        </Button>
                        <Button className={ style.buttonViewProfile } onClick={ moreInfo }>
                            View Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectsPage;
