export interface User {
    id: number;
    authUserId: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    description: string;
    photo: string;
    sex: string;
    email: string;
    country: Country;
    location: string;
    isOnline: boolean;
    languages: DictItem[];
    interests: DictItem[];
    education: Education
}

interface DictItem {
    id: number,
    name: string,
}

interface Education {
    university: DictItem,
    studyDirection: DictItem,
}

interface Country {
    id: number,
    name: string,
    photo: string,
}

