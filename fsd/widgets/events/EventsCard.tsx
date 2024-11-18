import Image from "next/image";
import style from "./ui/events.module.scss";
import { Event } from "@/fsd/entities/events";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import photo1 from "../../../public/PedroGonzalez.png";
import photo2 from "../../../public/photo2.png";
import CardInfoAndDetail from "./CardInfoAndDetail";
export interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const router = useRouter();
  const moreInfo = (id: string) => {
    router.push(`/events/${id}`);
  };
  const eventImage = [photo1, photo2];
  return (
    <div>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        observer={true}
        observeParents={true}
        pagination
        modules={[Pagination]}
      >
        {eventImage.map((i, index) => (
          <SwiperSlide key={index}>
            <Image src={i} alt={event.name} className={style.placeImage} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CardInfoAndDetail event={event} />
    </div>
  );
};

export default EventCard;
