import Link from "next/link";
import { BulbFilled, ProfileFilled, SnippetsFilled, WechatFilled } from "@ant-design/icons";
import style from "./NavMenu.module.scss";

export const NavMenu = () => {
  return (
    <div className={style.navWrapper}>
      <ul className={style.navList}>
        <Link className={style.linkNav} href="/profile">
          <ProfileFilled />
          <li>profile</li>
        </Link>
        <Link className={style.linkNav} href="/chats">
          <WechatFilled />
          <li>chats</li>
        </Link>
        <Link className={style.linkNav} href="/places">
          <SnippetsFilled />
          <li>places</li>
        </Link>
        <Link className={style.linkNav} href="/events">
          <BulbFilled />
          <li>events</li>
        </Link>
      </ul>
    </div>
  );
};
