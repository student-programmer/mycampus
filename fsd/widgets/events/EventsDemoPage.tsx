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
import FiltersForEvents from "../FiltersForFeeds/FiltersForEvents";
import { EventsLoader } from "@/fsd/features/profile/ui/EventsLoader";

interface CustomSwiperInstance extends SwiperInstance {
    swiper?: {
        allowTouchMove: boolean;
    };
}

const EventsDemoPage = () => {
	const [openDetail, setOpenDetail] = useState(false);
	const swiperRef = useRef(null);

	const { eventsList, filteredEventsParams, setFilteredEventsParams, fetchAllEvents } = useEventsStore();

	useEffect(() => {
		if (!eventsList.length) {
			fetchAllEvents().catch(error => {
				console.error('Error in places', error)
			});
		}
	}, []);


	const resetFilters = () => {
		setFilteredEventsParams({
			minPrice: "",
			maxPrice: "",
			date: "",
			category: ""
		});
	};

	const filteredEvents = useMemo(() => {
		const allFieldsEmpty = Object.values(filteredEventsParams).every(value =>
			!value || (typeof value === 'string' && value.length === 0)
		);

		if (allFieldsEmpty) {
			return eventsList;
		}

		return eventsList.filter(event => {
			const minPrice = parseInt(filteredEventsParams.minPrice || "0");
			const maxPrice = parseInt(filteredEventsParams.maxPrice || "999999");
			const eventPrice = parseInt(event.price.split(" – ")[0]);

			const matchesPrice = eventPrice >= minPrice && eventPrice <= maxPrice;
			const matchesCategory = !filteredEventsParams.category ||
				event.category.toLowerCase() === filteredEventsParams.category.toLowerCase();
			const matchesDate = !filteredEventsParams.date ||
				event.date === filteredEventsParams.date;

			return matchesPrice && matchesCategory && matchesDate;
		});
	}, [eventsList, filteredEventsParams]);

	useEffect(() => {
		if ((swiperRef.current as unknown as { swiper: any })?.swiper) {
			(swiperRef.current as unknown as { swiper: any }).swiper.allowTouchMove =
				!openDetail;
		}
	}, [openDetail]);

	if (!eventsList) {
		return < EventsLoader/>
	}

	return (
		<div className={style.eventsWrapper}>
			<div className={style.filtersWrapper}>
				<FiltersForEvents resetFilters={resetFilters} />
			</div>
			<Swiper
				direction='vertical'
				slidesPerView={1}
				navigation={false}
				className={style.swiperContainer}
				allowTouchMove={!openDetail}
				ref={swiperRef}
			>
				{filteredEvents.map((event, index) => (
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
