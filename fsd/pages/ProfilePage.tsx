'use client'

import React from 'react';
import { useProfilesStore } from "@/fsd/app/stores/profiles/store";
import Profile from "@/fsd/widgets/profile/Profile";

const ProfilePage = () => {
    const currentUser = useProfilesStore(store => store.currentProfile)

    return <Profile user={ currentUser }/>;
};

export default ProfilePage;
