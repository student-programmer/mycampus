"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlaceCard from "./PlaceCard";
import { mockPlaces } from "@/fsd/entities/places";
import { Place } from "@/fsd/entities/places";
import style from "./ui/places.module.scss";

const Places = () => {
  const [nearToMe, setNearToMe] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const swiperRef = useRef(null);
  const filteredPlaces: Place[] = nearToMe
    ? mockPlaces.filter((place) => place.distance < 2)
    : mockPlaces;

  useEffect(() => {
    if ((swiperRef.current as unknown as { swiper: any })?.swiper) {
      (swiperRef.current as unknown as { swiper: any }).swiper.allowTouchMove =
        !openDetail;
    }
  }, [openDetail]);

  return (
    <div className={style.placesWrapper}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        ref={swiperRef}
        navigation={false}
        className={style.swiperContainer}
        allowTouchMove={!openDetail}
        watchOverflow
      >
        {filteredPlaces.map((place: Place) => (
          <SwiperSlide key={place.id} className={style.slide}>
            <PlaceCard
              place={place}
              openDetail={openDetail}
              setOpenDetail={setOpenDetail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Places;
