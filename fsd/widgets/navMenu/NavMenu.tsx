'use client'; // Указываем, что компонент будет выполняться на клиентской стороне

import { usePathname, useRouter } from 'next/navigation'; // Импортируем необходимые хуки
import style from './ui/NavMenu.module.scss';

import { FifthIcon, FirstIcon, FourthIcon, SecondIcon, ThirdIcon } from './ui/icons';

export const NavMenu = () => {
	const router = useRouter(); // Получаем роутер из next/navigation
	const pathname = usePathname(); // Получаем текущий путь

	// Функция для проверки активного пути
	const isActive = (path: string) => pathname.includes(path);

	// Функция для перехода по ссылке
	const handleNavigation = (path: string) => {
		router.push(path); // Переходим на указанный путь
	};

	return (
		<div className={style.navWrapper}>
			<ul className={style.navList}>
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
		</div>
	);
};
