import { Divider } from "antd";
import style from "./ui/campusReviews.module.scss";
import avatar from "../../../../public/AVATAR.svg";
import Image from "next/image";
import { formatDate } from "../../helpers/date";

interface ReviewsProps {
  name: string;
  date: string;
  text: string;
}

export const CampusReviews = ({ name, date, text }: ReviewsProps) => {
  const dateFormat = formatDate(date);
  return (
    <div className={style.containerReview}>
      <div className={style.containerMainReview}>
        <div className={style.imgContainer}>
          <Image src={avatar} alt={name} />
        </div>
        <div className={style.mainContainerReview}>
          <div className={style.containerHeader}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.textDate}>{dateFormat}</p>
          </div>
          <div className={style.textWrapper}>
            <p className={style.textReview}>{text}</p>
          </div>
        </div>
      </div>
      <Divider className={style.divider} />
    </div>
  );
};
