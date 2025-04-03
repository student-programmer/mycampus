import axiosInstance from '../plugins/axios';
import { LoginRequest, UserRegisterServiceRequest } from "@/fsd/shared/api/authApi";

const authService = {
    login: async (values: LoginRequest) => {
        try {
            const {data} = await axiosInstance.post('/auth/login', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    register: async (values: UserRegisterServiceRequest) => {
        try {
            const {data} = await axiosInstance.post('/auth/register', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },
};

export default authService;
