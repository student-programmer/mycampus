// src/app/events/page.tsx
"use client";

import { Breadcrumb, Button, Switch } from "antd";
import { LeftOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";

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
import { useState, useEffect } from "react";

const EventsPage = () => {
  const [nearToMe, setNearToMe] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    const initializeEvents = () => {
      const events = nearToMe
        ? mockEvents.filter((event) => event.distance < 2)
        : mockEvents;
      setFilteredEvents(events);
    };
    initializeEvents();
  }, [nearToMe]);

  return (
    <div className={style.eventsWrapper}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        navigation={false}
        className={style.swiperContainer}
      >
        {filteredEvents.map((event, index) => (
          <SwiperSlide key={index} className={style.slide}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsPage;
