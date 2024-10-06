import Link from "next/link";
import { BulbFilled, ProfileFilled, SnippetsFilled, WechatFilled } from "@ant-design/icons";
import style from "./ui/NavMenu.module.scss";

export const NavMenu = () => {
  return (
    <div className={style.navWrapper}>
      <ul className={style.navList}>
        <Link className={style.linkNav} href="/profile">
          <ProfileFilled />
          <li>Profile</li>
        </Link>
        <Link className={style.linkNav} href="/chats">
          <WechatFilled />
          <li>Chats</li>
        </Link>
        <Link className={style.linkNav} href="/places">
          <SnippetsFilled />
          <li>Places</li>
        </Link>
        <Link className={style.linkNav} href="/events">
          <BulbFilled />
          <li>Events</li>
        </Link>
      </ul>
    </div>
  );
};
