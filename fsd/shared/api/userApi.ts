import axios from 'axios';

// Функция должна возвращать пользователя асинхронно
export const fetchUserFromApi = async (id: string): Promise<User> => {
	const response = await axios.get(`/api/users/${id}`);
	return response.data;
};

// Интерфейс данных пользователя, которые вы получаете из API
export interface User {
  id: string;
  name: string;
  email: string;
}

// Интерфейс состояния пользователя в Redux
export interface UserState {
  id: string;
  name: string;
  email: string;
  age: number; // Дополнительные поля, которых может не быть в API
  gender: string; // Дополнительные поля
  isLoading: boolean; // Поле, определяющее состояние загрузки
}
