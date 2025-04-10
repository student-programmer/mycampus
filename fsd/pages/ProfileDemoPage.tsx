'use client';

import React, { useEffect, useState } from 'react';
import { ProfileLoader } from "@/fsd/features/profile/ui/ProfileLoader";
import { ProfileDemo } from "@/fsd/widgets/profile/ProfileDemo";


const ProfileDemoPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, []);


    if (isLoading) {
        return <ProfileLoader/>;
    }

    return <ProfileDemo/>;
};

export default ProfileDemoPage;
