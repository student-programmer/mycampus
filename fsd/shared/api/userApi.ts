export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserRegisterActionsRequest {
    firstName: string,
    lastName: string,
    description: string,
    birthDate: string,
    email: string,
    sex: string,
    languages: number[],
    interests: number[],
    location: string,
    university: string,
    studyDirection: string,
    photo: string,
    countryId: number,
    password: string,
    passwordRepeat: string | null,
}

export interface UserRegisterServiceRequest {
    firstName: string,
    lastName: string,
    description: string,
    birthDate: string,
    email: string,
    sex: string,
    languages: number[],
    interests: number[],
    location: string,
    university: string,
    studyDirection: string,
    countryId: number,
    photo: string,
    password: string,
}



