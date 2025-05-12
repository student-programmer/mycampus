import axiosInstance from '../plugins/axios';
import { User } from "@/fsd/entities/profile";
import { PasswordUpdateAction, PasswordUpdateService, UserUpdateActionsRequest } from "@/fsd/shared/api/userApi";

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
            const {data} = await axiosInstance.post('user/update', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    verifyEmail: async (token: string): Promise<any> => {
        try {
            const response = await axiosInstance.post('auth/verify', { token: token });
            return [response, null];
        } catch (error) {
            return [null, error];
        }
    },

    uploadImage: async (token: string, uploadImage: File): Promise<(null | any)[]> => {
        try {
            axiosInstance.defaults.headers.Authorization = `Bearer ${ token }`;
            const formData = new FormData();
            formData.append('file', uploadImage);
            const file = await axiosInstance.post(
                `/user/upload`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return [file, null];
        } catch (error) {
            return [null, error];
        }
    },

    updatePassword: async (token: string, values: PasswordUpdateService) => {
        try {
            axiosInstance.defaults.headers.Authorization = `Bearer ${ token }`;
            const {data} = await axiosInstance.post('user/update_password', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default userService;
