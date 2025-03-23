import axiosInstance from '../plugins/axios';

const userService = {

    getCurrentProfile: async (token: string) => {
        try {
            axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
            const {data} = await axiosInstance.get('user/profile');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default userService;
