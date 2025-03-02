import axiosInstance from '../plugins/axios';

const authService = {
    login: async () => {
        try {
            const {data} = await axiosInstance.post('/auth/login');
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
