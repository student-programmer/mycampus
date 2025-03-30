export interface User {
    id: number;
    authUserId: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    description: string;
    photo: string;
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

