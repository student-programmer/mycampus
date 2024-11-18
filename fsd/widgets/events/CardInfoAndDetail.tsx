"use client";
import AdressIcon from "@/public/adressIcon";
import { EventCardProps } from "./EventsCard";
import style from "./ui/eventDesc.module.scss";
import { Button, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import Image from "next/image";
import closeIcon from "../../../public/iconClose.svg";
import { Overview } from "@/fsd/shared/ui/Overview/Overview";
import { Contacts } from "@/fsd/shared/ui/Contacts/Contact";

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
      {openDetail && (
        <>
          <Overview text={event.description} />
          <div className={style.contactsWrapper}>
            <h2 className={style.contactsH2}>Contacts:</h2>
            <Contacts
              phoneNumber={event.contacts.phone}
              instagram={event.contacts.inst}
              maps={event.contacts.maps}
              website={event.contacts.web}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardInfoAndDetail;
