import axiosInstance from '../plugins/axios';

const userService = {
    register: async (token) => {
        try {
            const {data} = await axiosInstance.post('/user/register');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default userService;
