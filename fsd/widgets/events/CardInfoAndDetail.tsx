'use client'
import AdressIcon from "@/public/adressIcon";
import { EventCardProps } from "./EventsCard";
import style from "./ui/eventDesc.module.scss";
import { Button, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import Image from "next/image";
import closeIcon from "../../../public/iconClose.svg";


const CardInfoAndDetail = ({ event }: EventCardProps) => {
  const dateInit = dayjs(event.date);
  const timeInit = dayjs().hour(20).minute(0).second(0);
const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className={style.eventsCardWrapper}>
      <div className={style.headerWrapper}>
        <div className={style.headerAndIcon}>
          <h2 className={style.eventsCardHeader}>{event.name}</h2>
          {openDetail && (
            <Image
              src={closeIcon}
              alt={event.name}
              onClick={() => setOpenDetail(false)}
            />
          )}
        </div>
        <p className={style.paragraphRate}>{event.category}</p>
        <div className={style.adressContainer}>
          <AdressIcon />
          <p className={style.paragraphRate}>{event.location}</p>
        </div>
      </div>
      <div className={style.datePickers}>
        <DatePicker format="DD.MM.YYYY" disabled defaultValue={dateInit} />
        <TimePicker
          disabled
          defaultValue={timeInit}
          format="HH:mm"
          hideDisabledOptions={true}
        />
      </div>
      {!openDetail && (
        <Button
          type="primary"
          onClick={() => setOpenDetail(true)}
          className={style.buttonPlaceDetail}
        >
          Details
        </Button>
      )}
    </div>
  );
};

export default CardInfoAndDetail;
