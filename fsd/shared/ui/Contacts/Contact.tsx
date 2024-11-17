import style from "./ui/contacts.module.scss";
import web from "../../../../public/web.svg";
import inst from "../../../../public/inst.svg";
import googleMaps from "../../../../public/maps.svg";
import phone from "../../../../public/phone.svg";
import Image from "next/image";

type ContactsProps = {
  website: string;
  instagram: string;
  maps: string;
  phoneNumber: string;
};

export const Contacts = ({
  website,
  instagram,
  maps,
  phoneNumber,
}: ContactsProps) => {
  return (
    <div className={style.contactsWrapper}>
      <div className={style.containerContact}>
        <div className={style.constData}>
          <Image src={web} />
          <p className={style.paragraphOpacity}>Website</p>
        </div>
        <p className={style.paragraphNoOpacity}>{website}</p>
      </div>
      <div className={style.containerContact}>
        <div className={style.constData}>
          <Image src={inst} />
          <p className={style.paragraphOpacity}>Instagram</p>
        </div>
        <p className={style.paragraphNoOpacity}>{instagram}</p>
      </div>
      <div className={style.containerContact}>
        <div className={style.constData}>
          <Image src={googleMaps} />
          <p className={style.paragraphOpacity}>Google maps</p>
        </div>
        <p className={style.paragraphNoOpacity}>{maps}</p>
      </div>
      <div className={style.containerContact}>
        <div className={style.constData}>
          <Image src={phone} />
          <p className={style.paragraphOpacity}>Phone</p>
        </div>
        <p className={style.paragraphNoOpacity}>{phoneNumber}</p>
      </div>
    </div>
  );
};
