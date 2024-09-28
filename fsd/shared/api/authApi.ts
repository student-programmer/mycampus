import axios from 'axios';
export const loginApi = async (credentials: {
	email: string;
	password: string;
}) => {
	const response = await axios.post('/api/login', credentials);
	return response.data.token; // Предположим, что сервер возвращает токен
};
