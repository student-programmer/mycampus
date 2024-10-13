import Link from "next/link";
import {
  BulbFilled,
  ProfileFilled,
  SnippetsFilled,
  WechatFilled,
} from "@ant-design/icons";
import style from "./ui/NavMenu.module.scss";

export const NavMenu = () => {
  return (
    <div className={style.navWrapper}>
      <ul className={style.navList}>
        <Link className={style.linkNav} href="/profile">
          <ProfileFilled className={style.LinkImg} />
          <li className={style.navItem}>Profile</li>
        </Link>
        <Link className={style.linkNav} href="/chats">
          <WechatFilled className={style.LinkImg} />
          <li className={style.navItem}>Chats</li>
        </Link>
        <Link className={style.linkNav} href="/places">
          <SnippetsFilled className={style.LinkImg} />
          <li className={style.navItem}>Places</li>
        </Link>
        <Link className={style.linkNav} href="/events">
          <BulbFilled className={style.LinkImg} />
          <li className={style.navItem}>Events</li>
        </Link>
      </ul>
    </div>
  );
};
