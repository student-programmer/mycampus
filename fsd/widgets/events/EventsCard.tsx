import Image from "next/image";
import style from "./ui/events.module.scss";
import { Event } from "@/fsd/entities/events";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import photo1 from "../../../public/PedroGonzalez.png";
import photo2 from "../../../public/photo2.png";
import CardInfoAndDetail from "./CardInfoAndDetail";
import FullInfoDetail from "./FullInfoDetail";

const EventCard = ({
  event,
  openDetail,
  setOpenDetail,
}: {
  event: Event;
  openDetail: boolean;
  setOpenDetail: (v: boolean) => void;
}) => {
  const router = useRouter();

  const moreInfo = (id: string) => {
    router.push(`/events/${id}`);
  };

  const eventImage = event.photos;

  return (
    <>
      {!openDetail ? (
        <div style={{ paddingTop: "20px", height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            observer={true}
            style={{flex: '1 0 0', width: '100%'}}
            observeParents={true}
            pagination
            modules={[Pagination]}
          >
            {eventImage?.map((i, index) => (
              <SwiperSlide key={index}>
                <div className={style.placeImage}>
                  <Image
                    src={i}
                    alt={event.name}
                    style={{ objectFit: "cover" }}
                    fill
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <CardInfoAndDetail
            event={event}
            openDetail={openDetail}
            setOpenDetail={setOpenDetail}
          />
        </div>
      ) : (
        <FullInfoDetail
          event={event}
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
        />
      )}
    </>
  );
};

export default EventCard;
