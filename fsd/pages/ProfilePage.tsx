'use client';

import React, { useEffect } from 'react';
import { useProfilesStore } from '@/fsd/app/stores/profiles/store';
import Profile from '@/fsd/widgets/profile/Profile';


const ProfilePage = () => {
    const {currentProfile, fetchCurrentProfile} = useProfilesStore();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            fetchCurrentProfile(token).then();
        }
    }, []);


    if (!currentProfile) {
        return <p>Loading...</p>; // Пока грузится профиль
    }

    return <Profile currentProfile={ currentProfile }/>;
};

export default ProfilePage;
