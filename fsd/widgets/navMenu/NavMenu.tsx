import Link from "next/link";
import {
  BulbFilled,
  ProfileFilled,
  SnippetsFilled,
  WechatFilled,
} from "@ant-design/icons";
import style from "./ui/NavMenu.module.scss";
import FirstIcon from "./firstIcon";
import SecondIcon from "./SecondIcon";
import ThirdIcon from "./ThirdIcon";
import FourthIcon from "./FourthIcon";
import FivethIcon from "./FivethIcon";

export const NavMenu = () => {
  return (
		<div className={style.navWrapper}>
			<ul className={style.navList}>
				<Link className={style.linkNav} href='/profile'>
					{/* <ProfileFilled className={style.LinkImg} /> */}
					<FirstIcon />
					<li className={style.navItem}>Connects</li>
				</Link>
				<Link className={style.linkNav} href='/chats'>
					<SecondIcon />
					<li className={style.navItem}>Chats</li>
				</Link>
				<Link className={style.linkNav} href='/places'>
					<ThirdIcon />
					<li className={style.navItem}>Places</li>
				</Link>
				<Link className={style.linkNav} href='/events'>
					<FourthIcon />
					<li className={style.navItem}>Events</li>
				</Link>
				<Link className={style.linkNav} href='/events'>
					<FivethIcon />
					<li className={style.navItem}>Profile</li>
				</Link>
			</ul>
		</div>
	);
};
