"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import style from "./ui/placeCard.module.scss";
import Rest from "../../../public/Rest.jpg";
import Loop from "../../../public/loop.jpg";
import { Place } from "@/fsd/entities/places";
import { PlaceCardDescription } from "./PlaceCardDescription";
import LikeActive from "@/public/LikeActive.svg";
import LikeNonActive from "@/public/LikeNonActive.svg";

const PlaceCard = ({ place }: { place: Place }) => {
  const placesImage = [Rest, Loop];
  const [fav, setFav] = useState(false);

  return (
    <div className={style.swiperWrapper}>
      {fav ? (
          <Image onClick={() => setFav(false)} src={LikeActive} className={style.likeImage} alt="" />
        ) : (
          <Image onClick={() => setFav(true)} src={LikeNonActive} className={style.likeImage} alt="" />
        )}
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        observer={true}
        observeParents={true}
        pagination
        modules={[Pagination]}
      >
        {placesImage.map((i, index) => (
          <SwiperSlide key={index}>
            <Image src={i} alt={place.name} className={style.placeImage} />
          </SwiperSlide>
        ))}
        <PlaceCardDescription place={place} />
      </Swiper>
    </div>
  );
};

export default PlaceCard;
