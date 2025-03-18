import axios from 'axios';


const axiosInstance = axios.create({
	timeout: 10000,
	baseURL: 'https://45.9.43.192:3000',
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;
