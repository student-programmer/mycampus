'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './profile.module.scss';
import { type User } from '@/fsd/entities/profile';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useProfilesStore } from '@/fsd/app/stores/profiles/store';
import LeftPageIcon from '@/fsd/widgets/chat/ui/LeftPageIcon';

const ConnectsPage = () => {
    const {profileList, fetchProfiles} = useProfilesStore();
    const pathname = usePathname();

    useEffect(() => {
        fetchProfiles();
    }, []);

    const router = useRouter();
    const toggleBack = () => {
        router.push('/');
    };
    return (
        <div className={ style.profileWrapper }>
            { pathname === '/pre-connects' &&
                <div className={ style.back_button }>
                    <button className={ style.iconGoBack } onClick={ toggleBack }>
                        <LeftPageIcon/>
                    </button>
                </div>
            }
            <Swiper
                direction={ 'vertical' }
                slidesPerView={ 1 }
                pagination={ {clickable: true} }
                navigation={ false }
                centeredSlides
                loop={ true }
                className={ style.swiperContainer }
            >
                { profileList.map((user: User) => (
                    <SwiperSlide key={ user.id } className={ style.slide }>
                        <UserCard user={ user }/>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    );
};

const generateAvatar = (firstName?: string, lastName?: string) => {
    // Если нет имени или фамилии — ставим заглушку "?"
    const initials = `${ firstName?.[0] ?? '?' }${
        lastName?.[0] ?? '?'
    }`.toUpperCase();
    const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // случайный цвет

    return `data:image/svg+xml;base64,${ btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="358" height="374">
            <rect width="358" height="374" fill="${ bgColor }" rx="20"/>
            <text x="50%" y="50%" font-size="100" font-family="Arial" dy=".3em" fill="white" text-anchor="middle">${ initials }</text>
        </svg>
    `) }`;
};

const UserCard = ({user}: { user: User }) => {
    const router = useRouter();
    const pathname = usePathname();
    const toggleBack = () => {
        router.push('/');
    };
    const moreInfo = () => {
        // router.push(`/connects/${user.id}`);
    };
    const goToChat = () => {
        router.push(`/chat/${ user.firstName }${ user.lastName }/${ user.id }`);
    };

    const showBackButton = pathname == '/pre-connects';

    return (
        <div className={ style.profileWrapperMain }>
            { showBackButton && (
                <div className={ style.back_button }>
                    <button className={ style.iconGoBack } onClick={ toggleBack }>
                        <LeftPageIcon/>
                    </button>
                </div>
            ) }
            <div className={ style.photoBack }>
                {/* <Image src='/Mei.png' alt='' width={358} height={374} /> */ }
                <Image
                    src={ generateAvatar(user.firstName, user.lastName) }
                    alt='avatar'
                    width={ 358 }
                    height={ 374 }
                />
                ;
            </div>
            <div className={ style.mainCardInfo }>
                <div className={ style.headerProfile }>
                    <p className={ style.mainParagraphH1 }>
                        { user.firstName } { user.lastName }
                    </p>
                    <div className={ style.countryWrapper }>
                        <p className={ style.textPmain }>China</p> {/* Статичное значение */ }
                        <Image src='/chinaIcon.svg' width={ 20 } height={ 20 } alt=''/>
                    </div>
                </div>
                <div className={ style.languageAndAgeInfo }>
                    <p className={ style.textPmain }>
                        { new Date().getFullYear() - new Date(user.birthDate).getFullYear() }{ ' ' }
                        years
                    </p>
                    <p className={ style.textPmain }>•</p>
                    <p className={ style.textPmain }>English, Chinese</p>{ ' ' }
                    {/* Статичное значение */ }
                </div>
                <div className={ style.universityInfo }>
                    <p className={ style.textPmain }>Interior Design</p>{ ' ' }
                    {/* Статичное значение */ }
                    <p className={ style.textPmain }>-</p>
                    <p className={ style.textPmain }>Canadian University Dubai</p>{ ' ' }
                    {/* Статичное значение */ }
                </div>
                <div className={ style.aboutPeople }>
                    <p className={ style.headerText }>About:</p>
                    <p className={ style.textPmain }>{ user.description }</p>
                </div>
                <div className={ style.interestsPeople }>
                    <p className={ style.headerText }>Interests:</p>
                    <div className={ style.interestsBlock }>
                        <p className={ style.interestsBlocks }>Interior Design</p>
                        <p className={ style.interestsBlocks }>Yoga</p>
                        <p className={ style.interestsBlocks }>Cooking</p>
                        <p className={ style.interestsBlocks }>Books</p>
                        <p className={ style.interestsBlocks }>Cultural Events</p>
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
