'use client';

import React, { useEffect } from 'react';
import { useProfilesStore } from '@/fsd/app/stores/profiles/store';
import Profile from '@/fsd/widgets/profile/Profile';
// import { useRouter } from 'next/navigation';

interface ProfileProps {
	id: number; // Это ожидаемый тип пропса для id
}

const ProfilePage: React.FC<ProfileProps> = ({ id }) => {
	const { currentProfile, fetchProfileById } = useProfilesStore();

	useEffect(() => {
		if (id) {
			fetchProfileById(id); // Загружаем профиль по id
		}
	}, [id]); // Эффект сработает при изменении id

	if (!currentProfile) {
		return <p>Loading...</p>; // Пока грузится профиль
	}

	return <Profile user={currentProfile} />;
};

export default ProfilePage;
