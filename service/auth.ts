import axiosInstance from '../plugins/axios';

const authService = {
    login: async (values) => {
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
