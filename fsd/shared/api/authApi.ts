import axios from 'axios';

// Пример API вызова для авторизации
export const loginApi = async (credentials: {
	email: string;
	password: string;
}) => {
	const response = await axios.post('/api/login', credentials);
	return response.data.token; // Предположим, что сервер возвращает токен
};
