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


export interface UserState {
  id: string;
  name: string;
  email: string;
  age: number; 
  gender: string; 
  isLoading: boolean;
}
