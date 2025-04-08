'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import style from './profileInfo.module.scss';
import { useEffect, useState } from 'react';
import { type User } from '@/fsd/entities/profile';
import { Button } from 'antd';
import { LeftPageIcon } from '@/fsd/widgets/chat/ui';
import { generateAvatar } from "@/utils/utils";

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


		const mockUser: User =  {
			id: 1,
			authUserId: 12345,
			firstName: "John",
			lastName: "Doe",
			birthDate: "1990-05-15",
			description: "Software developer passionate about travel and technology.",
			email: "john.doe@example.com",
			photo: "",
			sex: "Male",
			country: {
				id: 1,
				name: "United States",
				photo: ""
			},
			location: "New York, NY",
			isOnline: true,
			languages: [
				{ id: 1, name: "English" },
				{ id: 2, name: "Spanish" }
			],
			interests: [
				{ id: 1, name: "Programming" },
				{ id: 2, name: "Hiking" },
				{ id: 3, name: "Photography" }
			],
			education: {
				university: { id: 1, name: "MIT" },
				studyDirection: { id: 1, name: "Computer Science" }
			}
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
						router.push(`/chat/${user.firstName} ${user.lastName}/${user.id}`)
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
