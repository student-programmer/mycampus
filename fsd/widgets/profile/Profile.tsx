'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { User } from "@/fsd/entities/profile";
import { useState } from "react";
import { Detail } from "@/fsd/widgets/profile/Detail";
import { Edit } from "@/fsd/widgets/profile/Edit";

const Profile = ({currentProfile}: { currentProfile: User }) => {

    const [status, setStatus] = useState<string>('profile');


    const getFormComponent = () => {
        switch (status) {
            case 'profile':
                return < Detail currentProfile={ currentProfile } setStatus={ setStatus }/>
            case 'edit':
                return < Edit currentProfile={ currentProfile } setStatus={ setStatus }/>
        }
    }

    return (
        <>
            { getFormComponent() }
        </>
    );
};

export default Profile;
