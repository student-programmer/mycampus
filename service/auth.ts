import axiosInstance from '../plugins/axios';
import { LoginRequest } from "@/fsd/shared/api/authApi";

const authService = {
    login: async (values: LoginRequest) => {
        try {
            const {data} = await axiosInstance.post('/auth/login', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    profile: async () => {
        try {
            const {data} = await axiosInstance.post('/auth/profile');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },
};

export default authService;
