import { Button, Rate } from "antd";
import Image from "next/image";
import { Place } from "@/fsd/entities/places";
import style from "./ui/placeCardDesc.module.scss";
import AdressIcon from "@/public/adressIcon";
import closeIcon from "../../../public/iconClose.svg";

export const PlaceCardDescription = ({
  place,
  openDetail,
  setOpenDetail,
  needButton
}: {
  place: Place;
  openDetail: boolean;
  setOpenDetail: (v: boolean) => void;
  needButton: boolean;
}) => {
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
      {!openDetail && needButton && (
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
