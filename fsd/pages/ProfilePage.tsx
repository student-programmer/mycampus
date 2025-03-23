'use client';

import React, { useEffect } from 'react';
import { useProfilesStore } from '@/fsd/app/stores/profiles/store';
import Profile from '@/fsd/widgets/profile/Profile';

interface ProfileProps {
    id: number; // Это ожидаемый тип пропса для id
}

const ProfilePage: React.FC<ProfileProps> = () => {
    const {currentProfile, fetchProfileById} = useProfilesStore();

    useEffect(() => {
        fetchProfileById(1); // Загружаем профиль по id
    }, []); // Эффект сработает при изменении id

    if (!currentProfile) {
        return <p>Loading...</p>; // Пока грузится профиль
    }

    return <Profile user={ currentProfile }/>;
};

export default ProfilePage;
