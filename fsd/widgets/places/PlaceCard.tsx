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
import FullCardDetail from "./FullCardDetail";

const PlaceCard = ({
                     place,
                     openDetail,
                     setOpenDetail,
                   }: {
  place: Place;
  openDetail: boolean;
  setOpenDetail: (v: boolean) => void;
}) => {
  const placesImage = place.photos;
  const [fav, setFav] = useState(false);

  return (
    <div className={ style.swiperWrapper }>
      <div className={ style.favIconWrapper }>
        <div className={ style.favIcon }>
          { !openDetail &&
            ( fav ? (
              <Image
                onClick={ () => setFav(false) }
                src={ LikeActive }
                className={ style.likeImage }
                alt=""
              />
            ) : (
              <Image
                onClick={ () => setFav(true) }
                src={ LikeNonActive }
                className={ style.likeImage }
                alt=""
              />
            ) ) }
        </div>
      </div>
      { !openDetail && (
        <Swiper
          direction="horizontal"
          slidesPerView={ 1 }
          observer={ true }
          observeParents={ true }
          pagination
          modules={ [Pagination] }
        >
          { placesImage?.map((i, index) => (
            <SwiperSlide key={ index }>
              <div className={ style.placeImage }>
                <Image
                  src={ i }
                  alt={ place.name }
                  style={ { objectFit: "cover" } }
                  fill
                />
              </div>
            </SwiperSlide>
          )) }

          <PlaceCardDescription
            needButton
            openDetail={ openDetail }
            setOpenDetail={ setOpenDetail }
            place={ place }
          />
        </Swiper>
      ) }
      <div className={ style.fullDetail }>
        { openDetail && (
          <>
            <div className={ style.shadow }/>

            <FullCardDetail
              openDetail={ openDetail }
              setOpenDetail={ setOpenDetail }
              place={ place }
            />
          </>
        ) }
      </div>
    </div>
  );
};

export default PlaceCard;
