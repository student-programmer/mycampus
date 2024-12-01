// src/app/events/page.tsx
"use client";

import { Breadcrumb, Button, Switch } from "antd";
import { LeftOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import type { Swiper as SwiperInstance } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import style from "./ui/events.module.scss";
import { Event } from "../../entities/events/index";
import { mockEvents } from "../../entities/events/index";
import { useRouter } from "next/navigation";
import EventCard from "./EventsCard";
import { useState, useEffect, useRef } from "react";

interface CustomSwiperInstance extends SwiperInstance {
  swiper?: {
    allowTouchMove: boolean;
  };
}

const EventsPage = () => {
  const [nearToMe, setNearToMe] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [openDetail, setOpenDetail] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const initializeEvents = () => {
      const events = nearToMe
        ? mockEvents.filter((event) => event.distance < 2)
        : mockEvents;
      setFilteredEvents(events);
    };
    initializeEvents();
  }, [nearToMe]);

  useEffect(() => {
    if ((swiperRef.current as unknown as { swiper: any })?.swiper) {
      (swiperRef.current as unknown as { swiper: any }).swiper.allowTouchMove = !openDetail;
    }
  }, [openDetail]);

  return (
    <div className={style.eventsWrapper}>
      <Swiper
        direction="vertical"
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

export default EventsPage;
