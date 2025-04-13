"use client";

import { Button } from "antd";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import style from "./profile.module.scss";
import { type User } from "@/fsd/entities/profile";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useProfilesStore } from "@/fsd/app/stores/profiles/store";
import { LeftPageIcon } from "@/fsd/widgets/chat/ui";
import { generateAvatar } from "@/utils/utils";
import useUrlSearchParams from "@/fsd/shared/helpers/urlHelpers/useUrlSearchParams";
import ModalComponent from "@/fsd/shared/ui/Modal/ModalComponent";
import FilterForConnects from "@/fsd/widgets/FiltersForFeeds/FilterForConnects";
import { ConnectsLoader } from "@/fsd/features/profile/ui/ConnectsLoader";

interface PreConnectsPageProps {
    user?: User;
}

const PreConnectsPage = ({user}: PreConnectsPageProps) => {
    const {profileList, fetchProfiles, fetchProfilesByParams} =
        useProfilesStore();

    useEffect(() => {
        fetchProfiles();
    }, []);

    const router = useRouter();
    const toggleBack = () => {
        router.push("/");
    };

    if (!profileList.length) {
        return <div className={ style.profileWrapper }>
            < ConnectsLoader/>
        </div>
    }

    return (
        <div className={ style.profileWrapper }>
            <div className={ style.back_button }>
                <button className={ style.iconGoBack } onClick={ toggleBack }>
                    <LeftPageIcon/>
                </button>
            </div>
            <div className={ style.filter_button }>
                <FilterForConnects/>
            </div>
            <Swiper
                direction={ "vertical" }
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

const UserCard = ({user}: { user: User }) => {
    const router = useRouter();
    const goToChat = () => {
        router.push(`/chat/${ user.firstName }${ user.lastName }/${ user.id }`);
    };

	const avatarUrl = useMemo(() => {
		if (!user.photo)
			return generateAvatar(user.firstName, user.lastName);
		else return user.photo
	}, [user.firstName, user.lastName]); // Зависимости

    return (
        <div className={ style.profileWrapperMain }>
            <div className={ style.photoBack }>
                <Image
                    src={ avatarUrl }
                    alt='avatar'
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
                        {/*<Button className={ style.buttonViewProfile } onClick={ moreInfo }>*/ }
                        {/*    View Profile*/ }
                        {/*</Button>*/ }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreConnectsPage;
