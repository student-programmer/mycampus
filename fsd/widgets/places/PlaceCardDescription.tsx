"use client";
import { useState } from "react";
import { Divider } from "antd";
import { Button, Rate } from "antd";
import Image from "next/image";
import { Place } from "@/fsd/entities/places";
import style from "./ui/placeCardDesc.module.scss";
import AdressIcon from "@/public/adressIcon";
import { Contacts } from "@/fsd/shared/ui/Contacts/Contact";
import { Overview } from "@/fsd/shared/ui/Overview/Overview";
import { CampusReviews } from "@/fsd/shared/ui/CampusReviews/CampusReviews";
import closeIcon from "../../../public/iconClose.svg";

export const PlaceCardDescription = ({ place }: { place: Place }) => {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className={style.placeCardWrapper}>
      <div className={style.headerWrapper}>
        <div className={style.headerMainWrapper}>
          <h2 className={style.placeCardHeader}>{place.name}</h2>
          {openDetail && (
            <Image
              src={closeIcon}
              alt={place.name}
              onClick={() => setOpenDetail(false)}
            />
          )}
        </div>
        <div className={style.restStars}>
          <div className={style.rateContainer}>
            <Rate defaultValue={place.rate} allowHalf />
            <p className={style.paragraphRate}>{place.rate}</p>
          </div>
          <div className={style.textContainer}>
            <p className={style.paragraphRate}>•</p>
            <p className={style.paragraphRate}>{place.category}</p>
          </div>
        </div>
      </div>
      <div className={style.adressContainer}>
        <AdressIcon />
        <p className={style.paragraphRate}>{place.address}</p>
      </div>
      <div className={style.keyWrapper}>
        <p className={style.keyHeader}>key:</p>
        <ul className={style.keys}>
          {place.key.map((i, index) => {
            return (
              <li className={style.liKey} key={index}>
                {i}
              </li>
            );
          })}
        </ul>
      </div>
      {openDetail && (
        <div className={style.placeDetail}>
          <div className={style.contactsWrapper}>
            <h2 className={style.contactsH2}>Contacts:</h2>
            <Contacts
              phoneNumber={place.contacts.phone}
              instagram={place.contacts.inst}
              maps={place.contacts.maps}
              website={place.contacts.web}
            />
          </div>
          <div className={style.hoursWrapper}>
            <p className={style.hoursHeaderWrapper}>Opening hours:</p>
            <Divider className={style.divider} />
            <div className={style.hoursWrapperMain}>
              <div className={style.hourWrapper}>
                <p className={style.headerText}>Mon-Fri:</p>
                <div className={style.timeWrapper}>
                  <p className={style.timeText}>12:00 pm</p>
                  <p className={style.timeText}>–</p>
                  <p className={style.timeText}>09:00 pm</p>
                </div>
              </div>
              <Divider className={style.divider} />
              <div className={style.hourWrapper}>
                <p className={style.headerText}>Sat-Sun:</p>
                <div className={style.timeWrapper}>
                  <p className={style.timeText}>01:00 pm</p>
                  <p className={style.timeText}>–</p>
                  <p className={style.timeText}>10:00 pm</p>
                </div>
              </div>
              <Divider className={style.divider} />
            </div>
          </div>
          <Overview text={place.description} />
          <div className={style.campusReviews}>
            <h2 className={style.reviewCampusHeader}>Campus reviews:</h2>
            {place.reviews.map((i, index) => {
              return (
                <CampusReviews
                  key={index}
                  date={i.date}
                  name={i.name}
                  text={i.text}
                />
              );
            })}
          </div>
        </div>
      )}
      {!openDetail && (
        <Button
          type="primary"
          onClick={() => setOpenDetail(true)}
          className={style.buttonPlaceDetail}
        >
          Place details
        </Button>
      )}
    </div>
  );
};
