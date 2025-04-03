import axiosInstance from '../plugins/axios';
import { User } from "@/fsd/entities/profile";
import { PasswordUpdateAction, UserUpdateActionsRequest } from "@/fsd/shared/api/userApi";

const userService = {

    getCurrentProfile: async (token: string): Promise<[User | null, any]> => {
        try {
            axiosInstance.defaults.headers.Authorization = `Bearer ${ token }`;
            const {data} = await axiosInstance.get('user/current_profile');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    update: async (token: string, values: UserUpdateActionsRequest): Promise<[User | null, any]> => {
        try {
            axiosInstance.defaults.headers.Authorization = `Bearer ${ token }`;
            const {data} = await axiosInstance.post('user/current_profile', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    updatePassword: async (token: string, values: PasswordUpdateAction): Promise<[User | null, any]> => {
        try {
            axiosInstance.defaults.headers.Authorization = `Bearer ${ token }`;
            const {data} = await axiosInstance.post('user/current_profile', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default userService;
