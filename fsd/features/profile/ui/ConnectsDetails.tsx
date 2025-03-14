'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import style from './profileInfo.module.scss';
import { useEffect, useState } from 'react';
import { type User } from '@/fsd/entities/profile';
import { Button } from 'antd';
import LeftPageIcon from '@/fsd/widgets/chat/ui/LeftPageIcon';

const generateAvatar = (firstName?: string, lastName?: string) => {
	// Если нет имени или фамилии — ставим заглушку "?"
	const initials = `${firstName?.[0] ?? '?'}${
		lastName?.[0] ?? '?'
	}`.toUpperCase();
	const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // случайный цвет

	return `data:image/svg+xml;base64,${btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="358" height="374">
            <rect width="358" height="374" fill="${bgColor}" rx="20"/>
            <text x="50%" y="50%" font-size="100" font-family="Arial" dy=".3em" fill="white" text-anchor="middle">${initials}</text>
        </svg>
    `)}`;
};

const ConnectsInfo = () => {
	const { id } = useParams(); // Получаем id из параметров URL
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true); // Для отслеживания состояния загрузки

	useEffect(() => {
		// Здесь должен быть запрос к API для получения данных пользователя по id
		// Например:
		// fetch(`/api/users/${id}`)
		//   .then((res) => res.json())
		//   .then((data) => {
		//     setUser(data);
		//     setLoading(false);
		//   })
		//   .catch(() => setLoading(false));

		// Временно используем моковые данные

	
		const mockUser: User = {
			id: 1,
			authUserId: 1,
			firstName: 'John',
			lastName: 'Doe',
			birthDate: '1990-01-01',
			description: 'I am a software developer with 5 years of experience.',
			// Добавьте другие поля, если они есть в вашем интерфейсе User
		};
		setUser(mockUser);
		setLoading(false);
	}, [id]);

	// Если еще не загружено или id нет, показываем сообщение о загрузке
	if (loading) {
		return <div>Loading...</div>;
	}

	// Если пользователь не найден, показываем сообщение об ошибке
	if (!user) {
		return <div>User not found</div>;
	}

	return (
		<div className={style.profileDetailWrapper}>
			<div className={style.profileDetailHeader}>
				<button className={style.iconGoBack} onClick={() => router.back()}>
					<LeftPageIcon />
				</button>
				<Image
					src={generateAvatar(user.firstName, user.lastName)}
					alt='avatar'
					width={358}
					height={374}
					className={style.profileDetailImage}
				/>
				<h1>
					{user.firstName} {user.lastName}
				</h1>
				<p>
					<Image
						src='/chinaIcon.svg' // Статичная иконка страны
						alt='Country'
						width={20}
						height={20}
					/>{' '}
					China {/* Статичное значение */}
				</p>
			</div>
			<div className={style.profileDetailBody}>
				<h2>About</h2>
				<p>{user.description || 'No description provided.'}</p>
				<h3>Age</h3>
				<p>
					{new Date().getFullYear() - new Date(user.birthDate).getFullYear()}{' '}
					years
				</p>
				<h3>Languages Spoken</h3>
				<p>English, Chinese</p> {/* Статичное значение */}
				<h3>Education</h3>
				<p>Canadian University Dubai</p> {/* Статичное значение */}
				<p>Field of Study: Interior Design</p> {/* Статичное значение */}
				<h3>Interests</h3>
				<div className={style.interestsBlock}>
					<p className={style.interestsBlocks}>Interior Design</p>
					<p className={style.interestsBlocks}>Yoga</p>
					<p className={style.interestsBlocks}>Cooking</p>
					<p className={style.interestsBlocks}>Books</p>
					<p className={style.interestsBlocks}>Cultural Events</p>
				</div>
				<Button
					onClick={() =>
						router.push(`/chat/${user.firstName}${user.lastName}/${user.id}`)
					}
					type='primary'
					className={style.buttonSendProfile}
				>
					Send message
				</Button>
			</div>
		</div>
	);
};

export default ConnectsInfo;
