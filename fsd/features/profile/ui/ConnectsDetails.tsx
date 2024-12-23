'use client';

import { useParams, useRouter } from 'next/navigation';
import { users } from '@/fsd/entities/profile'; // импортируем данные пользователей
import Image from 'next/image';
import style from './profileInfo.module.scss';
import photoMen from '../../../public/MenPng.jpg';
import usaIcon from '../../../public/usaICon.png';
import { useEffect, useState } from 'react';
import { type User } from '@/fsd/entities/profile';
import ContactButton from '../../../shared/ui/ContactButton/ContactButton';
import { Button } from 'antd';

const ConnectsInfo = () => {
	const { id } = useParams(); // Получаем id из параметров URL
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true); // Для отслеживания состояния загрузки

	useEffect(() => {
		// Проверяем, что id существует и он доступен
		if (id) {
			const foundUser = users.find(user => user.id === id);
			setUser(foundUser || null);
			setLoading(false); // Завершаем загрузку
		}
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
				<Image
					src={photoMen}
					alt={user.name}
					className={style.profileDetailImage}
				/>
				<h1>{user.name}</h1>
				<p>
					<Image src={usaIcon} alt='Country' width={20} height={20} />{' '}
					{user.profile.country.name}
				</p>
			</div>
			<div className={style.profileDetailBody}>
				<h2>About</h2>
				<p>{user.profile.about}</p>
				<h3>Education</h3>
				<p>{user.profile.education.university}</p>
				<p>Field of Study: {user.profile.education.fieldOfStudy}</p>
				<h3>Languages Spoken</h3>
				<p>{user.profile.languagesSpoken.join(', ')}</p>
				<h3>Interests</h3>
				<p>{user.profile.interests.join(', ')}</p>
				<h3>Contact Information</h3>
				<p>Email: {user.email}</p>
				{/* Кнопка Contact */}
				<ContactButton userName={user.name} />{' '}
				<Button onClick={() => router.back()} type='primary'>
					Back to ProfilesList
				</Button>
			</div>
		</div>
	);
};

export default ConnectsInfo;
