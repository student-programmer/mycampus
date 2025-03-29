import axiosInstance from '../plugins/axios';
import { LoginRequest } from "@/fsd/shared/api/authApi";
import { UserRegisterServiceRequest } from "@/fsd/shared/api/userApi";

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
