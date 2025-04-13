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
import { generateAvatar } from "@/utils/utils";
import { ConnectsLoader } from "@/fsd/features/profile/ui/ConnectsLoader";

interface ConnectsPageProps {
  currentUser?: User;
}

const ConnectsPage = ({ currentUser }: ConnectsPageProps) => {
  const { profileList, fetchProfiles } = useProfilesStore();

  useEffect(() => {
    fetchProfiles().catch((r) => {
      console.error("Не удалось подтянуть пользователей!");
    });
  }, []);

  const filteredProfiles = profileList.filter(
    (user: User) => user.id !== currentUser?.id
  );

  if (!profileList.length) {
    return (
      <div className={style.profileWrapper}>
        <ConnectsLoader />
      </div>
    );
  }

  return (
    <div className={style.profileWrapper}>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={false}
        centeredSlides
        loop={true}
        className={style.swiperContainer}
      >
        {filteredProfiles.map((user: User) => (
          <SwiperSlide key={user.id} className={style.slide}>
            <UserCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const UserCard = ({ user }: { user: User }) => {
  const router = useRouter();
  const moreInfo = () => {
    router.push(`/connects/${user.id}`);
  };
  const goToChat = () => {
    router.push(`/chat/${user.firstName} ${user.lastName}/${user.id}`);
  };

  const avatarUrl = useMemo(() => {
    if (!user.photo) return generateAvatar(user.firstName, user.lastName);
    else return user.photo;
  }, [user.firstName, user.lastName]); // Зависимости

  return (
    <div className={style.profileWrapperMain}>
      <div className={style.photoBack}>
        <Image src={avatarUrl} alt="avatar" width={358} height={374} />
      </div>
      <div className={style.mainCardInfo}>
        <div className={style.headerProfile}>
          <p className={style.mainParagraphH1}>
            {user.firstName} {user.lastName}
          </p>
          <div className={style.countryWrapper}>
            <p className={style.textPmain}>{user.country?.name}</p>{" "}
            {/* Статичное значение */}
            <Image src={user.country?.photo} width={20} height={20} alt="" />
          </div>
        </div>
        <div className={style.languageAndAgeInfo}>
          <p className={style.textPmain}>
            {new Date().getFullYear() - new Date(user.birthDate).getFullYear()}{" "}
            years
          </p>
          <p className={style.textPmain}>•</p>
          <p className={style.textPmain}>
            {" "}
            {user.languages?.map((item) => (
              <a key={item.id}>{item.name}, </a>
            ))}
          </p>{" "}
        </div>
        <div className={style.universityInfo}>
          <p className={style.textPmain}>
            {user.education.studyDirection.name}
          </p>
          <p className={style.textPmain}>-</p>
          <p className={style.textPmain}>{user.education.university.name}</p>
        </div>
        <div className={style.aboutPeople}>
          <p className={style.headerText}>About:</p>
          <p className={style.textPmain}>{user.description}</p>
        </div>
        <div className={style.interestsPeople}>
          <p className={style.headerText}>Interests:</p>
          <div className={style.interestsBlock}>
            {!user.interests.length ? (
              <p className={style.interestsBlocks}>No interests available</p>
            ) : (
              <>
                {user.interests.map((item) => (
                  <p className={style.interestsBlocks} key={item.id}>
                    {item.name}
                  </p>
                ))}
              </>
            )}
          </div>
          <div className={style.buttonsContainer}>
            <Button className={style.buttonSendProfile} onClick={goToChat}>
              Send message
            </Button>
            {/*<Button className={ style.buttonViewProfile } onClick={ moreInfo }>*/}
            {/*    View Profile*/}
            {/*</Button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectsPage;
