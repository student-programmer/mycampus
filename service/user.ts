import axiosInstance from '../plugins/axios';
import { User } from "@/fsd/entities/profile";

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


};

export default userService;
