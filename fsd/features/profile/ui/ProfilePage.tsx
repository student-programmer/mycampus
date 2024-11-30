"use client";
import { Breadcrumb, Button } from "antd";
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

const ProfilePage = () => {
  return (
    <div className={style.profileWrapper}>
      <div className={style.swiperNavigation}>
        {/* Навигационные кнопки сверху */}
        <button className={`swiper-button-up ${style.navigationButton}`}>
          <UpOutlined />
        </button>
      </div>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-down",
          prevEl: ".swiper-button-up",
        }}
        modules={[Navigation]}
        className={style.swiperContainer}
      >
        {users.map((user: User) => (
          <SwiperSlide key={user.id} className={style.slide}>
            <UserCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.swiperNavigation}>
        {/* Навигационные кнопки снизу */}
        <button className={`swiper-button-down ${style.navigationButton}`}>
          <DownOutlined />
        </button>
      </div>
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
      <div className={style.photoProfile}>    
        <Image
          src={photoMen}
          alt={user.name}
          className={style.photoProfileImage}
        />
        <div className={style.iconAndIcon}>
          <LeftOutlined className={style.LeftOutline} />
          <Breadcrumb
            items={[
              {
                title: "Profile",
              },
              {
                title: user.name,
              },
            ]}
          >
            <p className={style.textP}>Profile</p>
          </Breadcrumb>
        </div>
      </div>
      <div className={style.profileInfo}>
        <h2>{user.name}</h2>``
        <p>
          <Image src={usaIcon} alt="Country" width={20} height={20} />{" "}
          {user.profile.country.name}
        </p>
        <p>Age: {user.age}</p>
        <p>Interests: {user.profile.interests.join(", ")}</p>
        <p>{user.profile.about}</p>
        <Button
          className={style.moreInfoButton}
          type="primary"
          onClick={moreInfo}
        >
          More Info
        </Button>
      </div>
      <ContactButton userName={user.name} />{" "}
    </div>
  );
};

export default ProfilePage;
