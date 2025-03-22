export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserRegisterRequest {
    firstName: string,
    lastName: string,
    description: string,
    birthDate: string,
    email: string,
    password: string,
    passwordRepeat: string,
}


