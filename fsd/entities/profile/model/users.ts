// export interface User {
// 	id: string;
// 	name: string;
// 	email: string;
// 	age: number;
// 	gender: 'male' | 'female';
// 	isLoading: boolean;
// 	profile: Profile;
// }


export interface User {
    id: number;
    authUserId: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    description: string;
}

export interface CurrentUser {
    id: number;
    authUserId: number;
    firstName: string;
    email: string;
    lastName: string;
    birthDate: string;
    description: string;
    photo: string;
    languages: Languages[];
    interests: Interest[];
}

// interface Profile {
//     education: Education;
//     country: Country;
//     languagesSpoken: string[];
//     about: string;
//     interests: string[];
//     photo: string;
// }

interface Languages {
    userId: number,
    languageId: number,
    language: DictItem,
}

interface Interest {
    userId: number,
    interestId: number,
    interest: DictItem,
}

interface Interest {
    userId: number,
    interestId: number,
    interest: DictItem,
}

interface DictItem {
    id: number,
    name: string,
}

interface Education {
    fieldOfStudy: string;
    university: string;
}

interface Country {
    name: string;
    icon: string
}
