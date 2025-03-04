import axios from 'axios';
export const fetchUserFromApi = async (id: string): Promise<User> => {
	const response = await axios.get(`/api/users/${id}`);
	return response.data;
};

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserRegisterRequest{
    firstName: string,
    lastName: string,
    description: string,
    birthDate: string,
    email: string,
    password: string,
    passwordRepeat: string,
}


