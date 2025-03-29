'use client';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './ui/profile.module.scss';
import { type User } from '@/fsd/entities/profile';

import CountyIcon from '@/public/chinaIcon.svg';
import { CurrentUser } from "@/fsd/entities/profile/model/users";

// Функция для генерации аватарки
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

const getAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};


const Profile = (user: CurrentUser) => {
    return (
        <div className={ style.profileWrapperMain }>
            <div className={ style.photoBack }>
                <Image
                    src={ generateAvatar(user.firstName, user.lastName) }
                    alt='Profile Photo'
                    width={ 358 }
                    height={ 374 }
                />
            </div>
            <div className={ style.mainCardInfo }>
                <div className={ style.headerProfile }>
                    <p className={ style.mainParagraphH1 }>
                        { user.firstName } { user.lastName }
                    </p>
                    <div className={ style.countryWrapper }>
                        <p className={ style.textPmain }>Country</p>
                        <Image src={ CountyIcon } width={ 20 } height={ 20 } alt='Country Icon'/>
                    </div>
                </div>
                <div className={ style.languageAndAgeInfo }>
                    <p className={ style.textPmain }>{ getAge(user.birthDate) } years</p>
                    <p className={ style.textPmain }>•</p>
                    <p className={ style.textPmain }>{ user.languages.map(item => <a
                        key={ item.language.id }>{ item.language.name }, </a>) }</p>
                </div>
                <div className={ style.universityInfo }>
                    <p className={ style.textPmain }>Field of Study</p>
                    <p className={ style.textPmain }>-</p>
                    <p className={ style.textPmain }>University</p>
                </div>
                <div className={ style.aboutPeople }>
                    <p className={ style.headerText }>About:</p>
                    <p className={ style.textPmain }>{ user.description }</p>
                </div>
                <div className={ style.interestsPeople }>
                    <p className={ style.headerText }>Interests:</p>
                    <div className={ style.interestsBlock }>
                        { user.interests === [] ?
                            <p className={ style.interestsBlocks }>No interests available</p>
                            :
                            <>
                                {
                                    user.interests.map(item => <p className={ style.interestsBlocks }
                                                                  key={ item.interest.id }>{ item.interest.name }</p>)
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
