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

export interface UserUpdateActionsRequest {
    firstName: string,
    lastName: string,
    description: string,
    birthDate: string,
    email: string,
    sex: string,
    languages: number[],
    interests: number[],
    location: string,
    university: number,
    studyDirection: number,
    photo: string,
    countryId: number,
}

export interface PasswordUpdateAction {
    password: string,
    passwordRepeat: string,
}

export interface PasswordUpdateService {
    password: string,
}



