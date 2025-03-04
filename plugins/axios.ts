import axios from 'axios';


const axiosInstance = axios.create({
    timeout: 10000,
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;
