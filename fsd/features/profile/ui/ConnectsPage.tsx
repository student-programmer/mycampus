"use client";
import { Breadcrumb, Button, ConfigProvider } from "antd";
import { LeftOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import style from "./profile.module.scss";
import { type User } from "../../../entities/profile/index";
import { users } from "../../../entities/profile/index";
import photoMen from "../../../public/MenPng.jpg";
import usaIcon from "../../../public/usaICon.png";
import { useRouter } from "next/navigation";
import ContactButton from "../../../shared/ui/ContactButton/ContactButton";
import { NavMenu } from "@/fsd/widgets/navMenu/NavMenu";
import WomanPhoto from "@/public/ProfileImageWoman.png";
import CountyIcon from "@/public/chinaIcon.svg";

const ConnectsPage = () => {
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
        {users.map((user: User) => (
          <SwiperSlide key={user.id} className={style.slide}>
            <UserCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Компонент карточки пользователя
const UserCard = ({ user }: { user: User }) => {
  const router = useRouter();

  const moreInfo = () => {
    router.push(`/profile/${user.id}`);
  };
  return (
    <div className={style.profileWrapperMain}>
      <div className={style.mainCardInfo}>
        <div className={style.headerProfile}>
          <p className={style.mainParagraphH1}>{user.name}</p>
          <div className={style.countryWrapper}>
            <p className={style.textPmain}>{user.profile.country.name}</p>
            <Image src={CountyIcon} alt="" />
          </div>
        </div>
        <div className={style.languageAndAgeInfo}>
          <p className={style.textPmain}>{user.age} years</p>
          <p className={style.textPmain}>•</p>
          <p className={style.textPmain}>
            {user.profile.languagesSpoken.map((v, index) => {
              if (index === user.profile.languagesSpoken.length - 1) {
                return `${v}.`;
              } else {
                return `${v}, `;
              }
            })}
          </p>
        </div>
        <div className={style.universityInfo}>
          <p className={style.textPmain}>
            {user.profile.education.fieldOfStudy}
          </p>
          <p className={style.textPmain}>-</p>
          <p className={style.textPmain}>{user.profile.education.university}</p>
        </div>
        <div className={style.aboutPeople}>
          <p className={style.headerText}>About:</p>
          <p className={style.textPmain}>{user.profile.about}</p>
        </div>
        <div className={style.interestsPeople}>
          <p className={style.headerText}>Interest:</p>
          <div className={style.interestsBlock}>
            {user.profile.interests.map((v, index) => (
              <p className={style.interestsBlocks} key={index}>
                {v}
              </p>
            ))}
          </div>
          <div className={style.buttonsContainer}>
              <Button className={style.buttonSendProfile}>Send message</Button>
              <Button className={style.buttonViewProfile}>View Profile</Button>
          </div>
        </div>
      </div>
      <Image className={style.photoBack} src={WomanPhoto} alt="" />
    </div>
  );
};

export default ConnectsPage;
