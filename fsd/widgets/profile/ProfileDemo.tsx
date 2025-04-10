'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { User } from "@/fsd/entities/profile";
import { useState } from "react";
import { DetailDemo } from "@/fsd/widgets/profile/DetailDemo";
import { EditDemo } from "@/fsd/widgets/profile/EditDemo";

export const ProfileDemo = () => {

    const [status, setStatus] = useState<string>('profile');

    const currentProfile: User = {
        "id": 1,
        "authUserId": 1,
        "firstName": "Rohan",
        "lastName": "Verma",
        "email": "d@mail.ru",
        "birthDate": "2005-01-20T00:00:00.000Z",
        "description": "International Relations – Zayed University\nPassionate about global affairs...",
        "sex": "Male",
        "photo": "",
        "isOnline": false,
        "country": {
            "id": 23,
            "photo": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
            "name": "India"
        },
        "location": "",
        "languages": [
            {
                "id": 1,
                "name": "English"
            },
            {
                "id": 11,
                "name": "Hindi"
            }
        ],
        "education": {
            "university": {
                "id": 2,
                "name": "Stanford University"
            },
            "studyDirection": {
                "id": 1,
                "name": "Computer Science"
            }
        },
        "interests": [
            {
                "id": 18,
                "name": "International Diplomacy"
            },
            {
                "id": 19,
                "name": "History"
            },
            {
                "id": 3,
                "name": "Cooking"
            },
            {
                "id": 1,
                "name": "Photography"
            },
            {
                "id": 2,
                "name": "Traveling"
            }
        ]
    }

    const [profile, setProfile] = useState<User>(currentProfile);


    const getFormComponent = () => {
        switch (status) {
            case 'profile':
                return < DetailDemo currentProfile={ profile } setStatus={ setStatus }/>
            case 'edit':
                return < EditDemo currentProfile={ profile } setStatus={ setStatus } setProfile={ setProfile }/>
        }
    }

    return (
        <>
            { getFormComponent() }
        </>
    );
};

