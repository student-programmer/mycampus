'use client';

import { usePathname, useRouter } from 'next/navigation';
import style from './ui/NavMenu.module.scss';

import {
	FifthIcon,
	FirstIcon,
	FourthIcon,
	SecondIcon,
	ThirdIcon,
} from './ui/icons';

interface NavMenuProps {
	notAuthentication?: boolean;
}

export const NavMenu = ({ notAuthentication }: NavMenuProps) => {
	const router = useRouter();
	const pathname = usePathname();

	const isActive = (path: string) => pathname.includes(path);

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	return (
		<div className={style.navWrapper}>
			{!notAuthentication ? (
				<ul className={style.navListAuth}>
					<li
						className={`${style.linkNav} ${
							isActive('/connects') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/connects')}
					>
						<FirstIcon />
						<span className={style.navItem}>Connects</span>
					</li>
					<li
						className={`${style.linkNav} ${
							isActive('/chats') || isActive('/chat') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/chats')}
					>
						<SecondIcon />
						<span className={style.navItem}>Chats</span>
					</li>
					<li
						className={`${style.linkNav} ${
							isActive('/places') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/places')}
					>
						<ThirdIcon />
						<span className={style.navItem}>Places</span>
					</li>
					<li
						className={`${style.linkNav} ${
							isActive('/events') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/events')}
					>
						<FourthIcon />
						<span className={style.navItem}>Events</span>
					</li>
					<li
						className={`${style.linkNav} ${
							isActive('/profile') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/profile')}
					>
						<FifthIcon />
						<span className={style.navItem}>Profile</span>
					</li>
				</ul>
			) : (
				<ul className={style.navListGuest}>
					<li
						className={`${style.linkNav} ${
							isActive('/pre-connects') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/pre-connects')}
					>
						<FirstIcon />
						<span className={style.navItem}>Connects</span>
					</li>
					<li
						className={`${style.linkNav} ${
							isActive('/places-demo') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/places-demo')}
					>
						<ThirdIcon />
						<span className={style.navItem}>Places</span>
					</li>
					<li
						className={`${style.linkNav} ${
							isActive('/events-demo') ? style.active : ''
						}`}
						onClick={() => handleNavigation('/events-demo')}
					>
						<FourthIcon />
						<span className={style.navItem}>Events</span>
					</li>
				</ul>
			)}
		</div>
	);
};
