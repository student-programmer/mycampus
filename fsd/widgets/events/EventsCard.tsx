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
        router.push(`/events/${ id }`);
    };
    const eventImage = [photo1, photo2];
    return (
        <>
            { !openDetail ? (
                <div style={ {paddingTop: '20px'} }>
                    <Swiper
                        direction="horizontal"
                        slidesPerView={ 1 }
                        observer={ true }
                        observeParents={ true }
                        pagination
                        modules={ [Pagination] }
                    >
                        { eventImage.map((i, index) => (
                            <SwiperSlide key={ index }>
                                <Image src={ i } alt={ event.name } className={ style.placeImage }/>
                            </SwiperSlide>
                        )) }
                    </Swiper>
                    <CardInfoAndDetail
                        event={ event }
                        openDetail={ openDetail }
                        setOpenDetail={ setOpenDetail }
                    />
                </div>
            ) : (
                <FullInfoDetail
                    event={ event }
                    openDetail={ openDetail }
                    setOpenDetail={ setOpenDetail }
                />
            ) }
        </>
    );
};

export default EventCard;
