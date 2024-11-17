import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import style from "./ui/placeCard.module.scss";
import Rest from "../../../public/Rest.jpg";
import Loop from "../../../public/loop.jpg";
import { Place } from "@/fsd/entities/places";
import { PlaceCardDescription } from "./PlaceCardDescription";

const PlaceCard = ({ place }: { place: Place }) => {
  const placesImage = [Rest, Loop];

  return (
    <div className={style.swiperWrapper}>
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
      </Swiper>
      <PlaceCardDescription place={place} />
    </div>
  );
};

export default PlaceCard;
