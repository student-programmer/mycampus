"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Switch } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import PlaceCard from "./PlaceCard";
import { mockPlaces } from "../../entities/places/index";
import { Place } from "../../entities/places/index";
import style from "./ui/places.module.scss";

const Places = () => {
  const [nearToMe, setNearToMe] = useState(false);

  const filteredPlaces: Place[] = nearToMe
    ? mockPlaces.filter((place) => place.distance < 2)
    : mockPlaces;

  return (
    <div className={style.placesWrapper}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        navigation={false}
        className={style.swiperContainer}
      >
        {filteredPlaces.map((place: Place) => (
          <SwiperSlide key={place.id} className={style.slide}>
            <PlaceCard place={place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Places;
