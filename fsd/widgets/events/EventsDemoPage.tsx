"use client";

import type { Swiper as SwiperInstance } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import style from "./ui/events.module.scss";
import EventCard from "./EventsCard";
import { useState, useEffect, useRef, useMemo } from "react";
import { useEventsStore } from "@/fsd/app/stores/events/store";
import { generateAvatar } from "@/utils/utils";

interface CustomSwiperInstance extends SwiperInstance {
    swiper?: {
        allowTouchMove: boolean;
    };
}

const EventsDemoPage = () => {
	const [openDetail, setOpenDetail] = useState(false);
	const swiperRef = useRef(null);

	const events = useEventsStore(store => store.eventsList);

	useEffect(() => {
		if ((swiperRef.current as unknown as { swiper: any })?.swiper) {
			(swiperRef.current as unknown as { swiper: any }).swiper.allowTouchMove =
				!openDetail;
		}
	}, [openDetail]);

	return (
		<div className={style.eventsWrapper}>
			<Swiper
				direction='vertical'
				slidesPerView={1}
				navigation={false}
				className={style.swiperContainer}
				allowTouchMove={!openDetail}
				ref={swiperRef}
			>
				{events.map((event, index) => (
					<SwiperSlide key={index} className={style.slide}>
						<EventCard
							event={event}
							openDetail={openDetail}
							setOpenDetail={setOpenDetail}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default EventsDemoPage;
